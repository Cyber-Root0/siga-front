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
    async getAllDisciplinas(uid) {
        if (!uid) {
            uid = this.Storage.get('token');
        }
        const inCache = this.Storage.get('disciplinas');
        if (inCache) {
            return inCache;
        }
        const dados = await this.apiService.get(ENDPOINTS.PROFESSORES, { uid });
        this.Storage.set('disciplinas', dados, 21600);
        return dados;
    }
    async getDisciplinaById(id) {
        if (!id) {
            return false;
        }
        const disciplinas = await this.getAllDisciplinas();
        const d = disciplinas.find(obj => obj.ID === id);
        return d ? d.DESCRICAO : 'nothing';
    }
}
export default DisciplinasService;