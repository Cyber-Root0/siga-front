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
class NotasService {
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
     * get all exams days of user
     * @param {string} uid
     * @returns {void}
     */
    async getExamsDays(uid) { 
        if (!uid) {
            uid = this.Storage.get('token');
        }
        const exams = await this.apiService.get(ENDPOINTS.NOTAS_ALL, { uid });
        const exam = exams.map(exam => ({
            id: exam.ID,
            descricao: exam.DESCRICAO,
            dates: exam.PROVAS.length > 0 ? exam.PROVAS.map(p => 
            (
                !p.DATA || new Date(p.DATA).toLocaleDateString('pt-BR') == "Invalid Date" ? '' : new Date(p.DATA).toLocaleDateString('pt-BR')
            )) : ['', '', ''],
        }));
        return exam;
    }
    /**
     * get all notas of user
     * @param {string} uid
     * @returns {void}
     */
    async getAllNotas(uid) {
        if (!uid) {
            uid = this.Storage.get('token');
        }
        const notas = await this.apiService.get(ENDPOINTS.NOTAS_ALL, { uid });
        const tratado = notas.map(nota => ({
            id: nota.ID,
            descricao: nota.DESCRICAO,
            notas: nota.PROVAS.map(prova =>
                prova.AVALIACAO.length > 0 && prova.AVALIACAO[0].ACD_PlanoEnsinoAvaliacaoParcialNota != null
                    ? prova.AVALIACAO[0].ACD_PlanoEnsinoAvaliacaoParcialNota
                    : 0
            )
        }));
        return tratado;
    }
}
export default NotasService;