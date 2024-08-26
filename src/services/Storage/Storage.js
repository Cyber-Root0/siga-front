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
class Storage{
    prefix(){
        return 'sigafront_';
    }
    set(key, data, expiration = ''){
        if (!key || !data){
            throw new Error('Missing two args on functions');
        }
        localStorage.setItem(this.prefix()+key, data);
    }
    get(key = false){
        if (!key){ 
            throw new Error('missing database key');
        }
        const data = localStorage.getItem(this.prefix()+key);
        if (data){
            return data;
        }
        return ''; 
    }
}
export default Storage;