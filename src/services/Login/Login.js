/**
 * @fileoverview Integração de um Front-End em React com a API do Siga (PHP)
 * @author Bruno Venancio Alves
 * @contact boteistem@gmail.com
 *
 * Copyright (c) 2024 Bruno Venancio Alves
 * 
 * Permission is granted to use, copy, modify, and distribute this software,
 * provided that this notice remains in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND.
 */
import GlobalContainer from "../DI/Container";
class Login{
    constructor(){
        this.session = GlobalContainer.resolve('SessionServices');
        this.storage = GlobalContainer.resolve('Storages');
        this.isLoggedIn = this.isLoggedIn.bind(this);
        this.login = this.login.bind(this);
        this.verifyLogin = this.verifyLogin.bind(this);
    }
    /**
     * Send auth credentials to api and valid the login
     * @param {string} user
     * @param {string} password
     * @returns {boolean}
     */
    async login(user, password){
        const response = await this.session.createSession(user, password);
        const {
            session_id
        } = response;
        const validation =  await this.verifyLogin(session_id);
        if (validation){
            this.storage.set('token', session_id);
            return true;
        }
        return false;
    }
    logout(){
        this.storage.flushAll();
    }
    /**
     * valid token of user by API
     * @param {any} uid
     * @returns {any}
     */
    async verifyLogin(uid){
        return await this.session.validSession(uid);
    }
    /**
     * verify if current user is logged
     * @returns {boolean}
     */
    async isLoggedIn(){
        const token = this.storage.get('token');
        const valid = await this.verifyLogin(token);
        if (token && valid){
            return true;
        }else{
            return false;
        }
    }
}
export default Login;