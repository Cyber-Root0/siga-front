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
    /**
     * register a new directive
     * @param {string} name
     * @param {object} dependency
     * @returns {string | object}
     */
    static register(name, dependency) {
        this.dependencies[name] = dependency;
    }
    /**
     * return depency the same key
     * @param {string} name
     * @returns {any}
     */
    static resolve(name) {
        if (!this.dependencies[name]) {
            throw new Error(`A dependência ${name} não foi registrada.`);
        }
        const dependency = this.dependencies[name];
        if (typeof dependency === 'function'){
            return dependency();
        }
        return dependency;
    }
}
export default GlobalContainer;