import {MAIN_API, ERROR_SERVER_API, IMG_URL } from "../constants/constants";

const apiOptions = {
    baseUrl: MAIN_API,
    imgUrl: IMG_URL,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },

}


class MainApi {
    constructor(config) {
        this._header = config.headers;
        this._baseUrl = config.baseUrl;
        this._imgUrk = config.imgUrl;
    }

    _getJsonOrError(res) {
        if (res.ok) {
            return res.json();
        }
        throw new Error(ERROR_SERVER_API)
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

    goOut() {
        return fetch(`${this._baseUrl}/signout`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

        })
            .then(this._getJsonOrError)
    }

    //регистрация   
    registration(email, password, name) {
        return fetch(`${this._baseUrl}/signup`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                password: password,
                email: email,
                name: name
            }),
        })
            .then(this._getJsonOrError)
    }

    editProfile(email, name) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            credentials: 'include',
            headers: this._header,
            body: JSON.stringify({
                name: name,
                email: email
            }),
        })
            .then(this._getJsonOrError)
    }

    getСurrentUser() {
        return fetch(`${this._baseUrl}/users/me`, {
            credentials: 'include',
            headers: this._header,
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
                image: `${this._imgUrk}${image.url}`,
                trailerLink: `${trailerLink}`,
                thumbnail: `${this._imgUrk}${image.formats.thumbnail.url}`,
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