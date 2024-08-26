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
class FaltasService {
    constructor(apiService) {
        this.apiService = apiService;
    }

    getAllFaltas(uid) {
        return this.apiService.get(ENDPOINTS.FALTAS_ALL, { uid });
    }
}
export default FaltasService;