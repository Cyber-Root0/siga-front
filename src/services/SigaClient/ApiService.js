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
    constructor(baseURL, authService) {
        this.httpClient = axios.create({
            baseURL,
            headers: {
                'Content-Type': 'application/json',
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
    post(path, data) {
        return this.httpClient.post(path, data);
    }
    get(path, params = {}) {
        return this.httpClient.get(path, { params });
    }
}

export default ApiService;