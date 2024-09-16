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
import { ENDPOINTS } from "../Endpoints";
class SessionService {
    /**
     * DI Params
     * @param {object} apiService
     * @returns {void}
     */
    constructor(apiService) {
        this.apiService = apiService;
    }
    /**
     * create a new session
     * @param {string} id
     * @param {string} password
     * @returns {object}
     */
    createSession(id, password) {
        return this.apiService.post(ENDPOINTS.SESSION_CREATE, { id, password });
    }
    /**
     * valid session of user
     * @param {string} uid
     * @returns {boolean}
     */
    async validSession(uid){ 
        const response = await this.apiService.get(ENDPOINTS.ALUNO_INFO, { uid });
        if (response === false || (response.error && response.error === 400) ){
            return false;
        }else{
            return true;
        }

    }
}
export default SessionService;