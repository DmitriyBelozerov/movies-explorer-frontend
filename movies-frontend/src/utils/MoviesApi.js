import { MOVIES_API, ERROR_SERVER_API } from "../constants/constants";

const apiOptions = {
    baseUrl: MOVIES_API,
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
        throw new Error(ERROR_SERVER_API)
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