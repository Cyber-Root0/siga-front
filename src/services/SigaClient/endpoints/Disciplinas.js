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
import GlobalContainer from "../../DI/Container";
class DisciplinasService {
    /**
     * DI params
     * @param {object} apiService
     * @returns {void}
     */
    constructor(apiService) {
        this.apiService = apiService;
        this.Storage = GlobalContainer.resolve('Storages');
    }
    /**
     * get all disciplinas of user
     * @param {string} uid
     * @returns {void}
     */
    getAllDisciplinas(uid) {
        if(!uid){
            uid = this.Storage.get('token');
         }
        return this.apiService.get(ENDPOINTS.DISCIPLINAS_ALL, { uid });
    }
}
export default DisciplinasService;