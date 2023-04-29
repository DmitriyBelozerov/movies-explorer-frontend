const apiOptions = {
    baseUrl: "https://api.belozerov.nomoredomains.monster",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },

}


class MainApi {
    constructor(config) {
        this._header = config.headers;
        this._baseUrl = config.baseUrl;
    }

    _getJsonOrError(res) {
        if (res.ok) {
            return res.json();
        }
        throw new Error('Ошибка при загрузке данных с сервера')
    }

    logIn(emailIn, passwordIn) {
        return fetch(`${this._baseUrl}/signin`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                password: `${passwordIn}`,
                email: `${emailIn}`
            }),
        })
            .then(this._getJsonOrError)
    }

}

const mainApi = new MainApi(apiOptions);
export default mainApi;