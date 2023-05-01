const apiOptions = {
    // baseUrl: "http://localhost:3001",
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


    getMyMovies() {
        return fetch(`${this._baseUrl}/movies`, {
            credentials: 'include',
            headers: this._header,
        })
            .then(this._getJsonOrError)
    }

    saveNewMovie({
        country, director, duration, year, description, image, trailerLink, id, nameRU, nameEN
    }) {
        return fetch(`${this._baseUrl}/movies`, {
            method: 'POST',
            credentials: 'include',
            headers: this._header,
            body: JSON.stringify({
                country: `${country}`,
                director: `${director}`,
                duration: `${duration}`,
                year: `${year}`,
                description: `${description}`,
                image: `https://api.nomoreparties.co/${image.url}`,
                trailerLink: `${trailerLink}`,
                thumbnail: `https://api.nomoreparties.co/${image.formats.thumbnail.url}`,
                movieId: `${id}`,
                nameRU: `${nameRU}`,
                nameEN: `${nameEN}`
            }),
        })
            .then(this._getJsonOrError)
    }

    deleteSavedMovie(id) {
        return fetch(`${this._baseUrl}/movies/${id}`, {
            method: 'DELETE',
            credentials: 'include',
            headers: this._header,
        })
            .then(this._getJsonOrError)
    }

}

const mainApi = new MainApi(apiOptions);
export default mainApi;