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
class GlobalContainer {
    static dependencies = {};
    static register(name, dependency) {
        this.dependencies[name] = dependency;
    }
    static resolve(name) {
        if (!this.dependencies[name]) {
            throw new Error(`A dependência ${name} não foi registrada.`);
        }
        return this.dependencies[name];
    }
}
export default GlobalContainer;