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
class HorariosService {
    /**
     * DI params
     * @param {object} apiService
     * @returns {void}
     */
    constructor(apiService) {
        this.apiService = apiService;
        this.Storage = GlobalContainer.resolve('Storages');
    }
    parseTime(timeStr) {
        const [startTime] = timeStr.split('-');
        const [hours, minutes] = startTime.split(':').map(Number);
        return hours * 60 + minutes;
    };
    /**
     * get all scchedules of user
     * @param {string} uid
     * @returns {void}
     */
    async getAllSchedule(uid) {
        if (!uid) {
            uid = this.Storage.get('token');
        }
        const inCache = this.Storage.get('horarios');
        if (inCache){
           return inCache;   
        }
        const aulas = await this.apiService.get(ENDPOINTS.HORARIOS_ALL, { uid });
        const maped = Object.keys(aulas).reduce((acc, day) => {
            acc[day] = aulas[day]
                .map((aula) => ({
                    time: aula.HORARIO,
                    subject: aula.DISCIPLINA
                }))
                .sort((a, b) => this.parseTime(a.time) - this.parseTime(b.time));
            return acc;
        }, {});
        this.Storage.set('horarios', maped, 14400 );
        return maped;
    }
}
export default HorariosService;