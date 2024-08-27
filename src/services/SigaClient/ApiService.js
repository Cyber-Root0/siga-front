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
import axios from 'axios';
class ApiService {
    /**
     * set DI params
     * @param {string} baseURL
     * @param {object} authService
     * @returns {void}
     */
    constructor(baseURL, authService) {
        this.httpClient = axios.create({
            baseURL,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        this.authService = authService;
        this.httpClient.interceptors.request.use(config => {
            const token = this.authService.getToken();
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        });
    }
    /**
     * send post request
     * @param {string} path
     * @param {object} data
     * @returns {object}
     */
    async post(path, data) {
        try{
            const dataForm = new FormData();
            Object.entries(data).forEach(([key, value]) => {
                dataForm.append(key, value);
            });
            const response = await this.httpClient.post(path, dataForm);
            if (response.status != 200){
                return Error('Unvailable server or verify the payload');
            }
            return response.data;
        }catch(err){
            throw new Error('Erro ao processar solicitação');
        }
    }
    /**
     * send get request
     * @param {string} path
     * @param {object} params={}
     * @returns {object}
     */
    async get(path, params = {}) {
        try{
           const response = await this.httpClient.get(path, { params });
           if (response.status != 200){
                return false;
           }
           return response.data;
        }catch(error){
            return false
        }
    }
}

export default ApiService;