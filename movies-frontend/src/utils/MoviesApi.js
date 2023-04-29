const apiOptions = {
    baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },

}

class MoviesApi {
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

    getMovies() {
        return fetch(`${this._baseUrl}`, {
            headers: this._header,
        })
            .then(this._getJsonOrError)
    }

}

const moviesApi = new MoviesApi(apiOptions);
export default moviesApi;