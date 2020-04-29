import fetch from 'isomorphic-unfetch'

export function getHeader() {

    // X-Meete-Client-Type: Android|iOS|Web
    let header = {
        //'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Meete-Client-Type': 'Web',
        'X-Meete-Client-Version': 2,
        'Accept-Language': 'vi'
    };

    let accessToken = "";

    if (accessToken && accessToken !== "") {
        header['Authorization'] = 'Bearer ' + accessToken;
    }

    return header;
}

export function MyError(data) {

    if (typeof data === "undefined") {
        this.message = "Lỗi không xác định";
        this.code = 3001;
    } else {
        this.message = (data.message || "Lỗi không xác định");
        this.code = (data.code || data.status);
        this.errors = (data.errors || []);

        if (this.errors.length > 0) {
            this.message = this.errors[0].field + " " + this.errors[0].message
        }
    }
}

MyError.prototype = Error.prototype;

class Api {

    static get(route, params) {
        return this.xhr(route, params, 'GET')
    }

    static put(route, params) {
      return this.xhr(route, params, 'PUT')
    }

    static post(route, params) {
      return this.xhr(route, params, 'POST')
    }

    static refresh(refreshToken, accessToken) {
        return this.xhr("oauth/token", {
            grant_type: "refresh_token",
            refresh_token: refreshToken,
            access_token: accessToken
        }, 'POST')
    }

    static xhr(url, params, verb) {

        let options = { method: verb };
        options["headers"] = getHeader();

        if(verb === 'GET'){
            const queryParams = Object.keys(params).map(key => key + '=' + params[key]).join('&');
            url = url+"?"+queryParams
        }else {
            options["body"] = params ? {...options} : {};
        }

        return fetch(url, {
            ...options,
        }).then(async (response) => {
            let status = response.status;

            if (status >= 200 && status < 300) {
                return await response.json()

            } else {

                //  trường hợp bad gateway sẽ trả về HTML chứ ko phải JSON
                let errorPayload = {};
                if (response.status === 502) {
                    errorPayload = { message: "Bad Gateway", code: 502 }
                } else {
                    errorPayload = await response.json();
                }

                let error = new MyError(errorPayload);
                error.status = response.status;

                throw error
            }
        }).catch(err => {
            let error = new MyError(err);
            error.status = err.status;

            if (err.name === 'AbortError') {
                error.message = "Mạng quá chậm, bạn vui lòng kiểm tra lại đường truyền";
                error.code = 408;
            }

            if (err.message === "Network request failed") {
                error.message = "Kết nối mạng có vấn đề, bạn vui lòng kiểm tra lại wifi hoặc 3G";
                error.code = 3001;
            }
            throw error;
        })
    }
}

export default Api;
