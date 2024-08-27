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
class AuthService {
    constructor(token) {
        this.token = token;
    }
    /**
     * SetToken
     * @param {string} token
     * @returns {void}
     */
    setToken(token) {
        this.token = token;
    }
    /**
     * return current apikey
     * @returns {string}
     */
    getToken() {
        return this.token;
    }
}
export default AuthService;