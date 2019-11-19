const axios = require('axios');
const baseURL = 'https://mapalertunifapapi.herokuapp.com';

class AxiosRequest {
    
    // DEFAULT GET REQUEST
    static async defaultGet({ path = '' , id = ''} = {} ) {
        try {
            const response = await axios.get((id) ? `${baseURL}${path}${id}/` : `${baseURL}${path}`);
            console.log(response.data);
            return response.data;
        } catch (error) {
            return error;
        }
    }

    // DEFAULT POST REQUEST
    static async defaultPost({ path = '', data = {} } = {}) {
        try {
            const response = await axios.post(`${baseURL}${path}`, data);
            console.log(response.data);
            return response.data;
        } catch (error) {
            return error;
        }
    }

    //
    // AUTH REQUEST
    //
    
    async createUser({username = '', email = '', password = '', re_password = ''} = {}) {
        const data = {
            username: username,
            email: email,
            password: password,
            re_password: re_password
        }
        return await AxiosRequest.defaultPost({ path: '/auth/users/', data: data});
    }

    async login({user = '', passwd = ''} = {}) {
        const data = {
            username: user,
            password: passwd
        }
        const response = await AxiosRequest.defaultPost({ path: '/auth/jwt/create', data: data });
        (response.access) ? axios.defaults.headers.common['Authorization'] = "Bearer ".concat(response.access) : console.error('Erro ao logar');
        return response;
    }

    async tokenVerify({token = ''} = {}) {
        const data = {
            token: token,    
        }
        return await AxiosRequest.defaultPost({ path: '/auth/jwt/verify', data: data});
    }

    async userMe() {
        return await AxiosRequest.defaultGet({ path: '/auth/users/' });
    }

    //
    // TIPO REQUEST
    //

    async postTipo({ nome = '' } = {} ) {

        const data = {
            nome: nome,
        }
        return await AxiosRequest.defaultPost({ path: '/api/tipo/', data: data});

    }

    async getTipo({ id = '' } = {}) {
        return await AxiosRequest.defaultGet({ path: '/api/tipo/' , id: id});
    }

    //
    // ALERT REQUEST
    //
    
    async postAlert({ local = '', tipo = '', descricao = '', longitude = '', latitude = '', status = '' } = {}) {
        const data = {
            local: local,
            tipo: tipo,
            descricao: descricao,
            longitude: longitude,
            latitude: latitude,
            status: status,
        }
        return await AxiosRequest.defaultPost({ path: '/api/alert/', data: data });
    }
    
    async putAlert({ id = '', latitude = '', longitude = '', descricao = '', tipo = '', prazo = null, local = '', status = ''} = {}) {
        try {
            const response = await axios.put(`${baseURL}/api/alert/${id}/`, {
                id: id,
                latitude: latitude,
                longitude: longitude,
                descricao: descricao,
                tipo: tipo,
                prazo: prazo,
                local: local,
                status: status,
            });
            return response.data;
        } catch (error) {
            return error;
        }
    }

    async delAlert({ id = '' } = {}) {
        try {
            const response = await axios.delete(`${baseURL}/api/alert/${id}/`);
            return response.data;
        } catch (error) {
            return error;
        }
    }

    async getAlert({ id = '' } = {}) {
        return await AxiosRequest.defaultGet({ path: '/api/alert/', id: id });
    }
    
    //
    // LOCAL REQUEST
    //

    async postLocal({ nome = ''} = {}) {
        const data = {
            nome: nome,
        }
        return await AxiosRequest.defaultPost({ path: '/api/local/', data: data});
    }

    async getLocal() {
        return await AxiosRequest.defaultGet({ path: '/api/local/' });
    }

} 

module.exports = new AxiosRequest();