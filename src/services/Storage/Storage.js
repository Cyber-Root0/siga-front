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
import lscache from "lscache";
class Storage {
    /**
     * prefix of keys
     * @returns {string}
     */
    prefix() {
        return 'sigafront';
    }
    /**
     * set param to be storage on Application
     * @param {string} key
     * @param {any} data
     * @param {string} expiration=''
     * @returns {any}
     */
    set(key, data, expiration = 0) {
        if (!key || !data) {
            throw new Error('Missing two args on functions');
        }
        if (expiration === 0) {
            lscache.set(this.prefix() + key, data);
        } else {
            lscache.set(this.prefix() + key, data, expiration);
        }
    }
    /**
     * get cacched key value from app
     * @param {string} key=false
     * @returns {any}
     */
    get(key = false) {
        if (!key) {
            throw new Error('missing database key');
        }
        const data = lscache.get(this.prefix() + key);
        if (data == null) {
            return false;
        }
        return data;
    }
}
export default Storage;