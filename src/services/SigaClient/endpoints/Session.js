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
    constructor(apiService) {
        this.apiService = apiService;
    }
    createSession(id, password) {
        return this.apiService.post(ENDPOINTS.SESSION_CREATE, { id, password });
    }
    async validSession(uid){ 
        const response = await this.apiService.get(ENDPOINTS.FALTAS_ALL, { uid });
        if (response === false || (response.error && response.error === 400) ){
            return false;
        }else{
            return true;
        }

    }
}
export default SessionService;