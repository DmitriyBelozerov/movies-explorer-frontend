import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import ProtectedRoute from '../ProtectedRoute';
import { TranslationLogIn, TranslationCurrentUser } from '../../contexts/Context';


import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';

import { ERROR_SERVER_MESSAGE, CRITERION_SHORT_FILM } from '../../constants/constants';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [movies, setMovies] = React.useState([]);
  const [myMovies, setMyMovies] = React.useState([]);
  const [selectedMovies, setSelectedMovies] = React.useState([]);
  const [selectedMyMovies, setSelectedMyMovies] = React.useState([]);
  const [errMessage, setErrMessage] = React.useState('');
  const [valueCheckBox, setValueCheckBox] = React.useState(getValueCheckBox());
  const [isOpenPreloader, setIsOpenPreloader] = React.useState(false);
  const [isOpenMoviesSpan, setIsOpenMoviesSpan] = React.useState(false);
  const [messageError, setMessageError] = React.useState('');
  const [message, setMessage] = React.useState('');
  const navigate = useNavigate();

  function getValueCheckBox() {
    return localStorage.getItem('valueCheckBox') === 'true' ? true : false
  }

  React.useEffect(() => {
    if (loggedIn) {
      moviesApi.getMovies()
        .then(data => {
          setMovies(data);
          setIsOpenMoviesSpan(false);
        })
        .catch(() => {
          setIsOpenMoviesSpan(true)
          setMessageError(ERROR_SERVER_MESSAGE)
        })
        .finally(() => {
          setIsOpenPreloader(false);
        })
      mainApi.getMyMovies()
        .then(data => {
          setMyMovies(data.data);
        })
        .catch(err => console.log(err))
      mainApi.getСurrentUser()
        .then(data => {
          setCurrentUser(data.data);
        })
        .catch(err => console.log(err))
    } else {
      return
    }
  }, [loggedIn])

  React.useEffect(() => {
    mainApi.getСurrentUser()
      .then(() => {
        navigate('/');
        setLoggedIn(true);
      })
      .catch(err => console.log(err))
  }, [])

  function handleLogIn(email, password) {
    mainApi.logIn(email, password)
      .then((data) => {
        setLoggedIn(true);
        navigate('/movies');
      })
      .catch(err => console.log(err))
  }

  function handleExit() {
    mainApi.goOut()
      .then((data) => {
        setLoggedIn(false);
        localStorage.clear();
        navigate('/');
      })
      .catch(err => console.log(err))
  }

  function handleRegistrations(email, password, name) {
    mainApi.registration(email, password, name)
      .then((data) => {
        handleLogIn(email, password);
        setErrMessage('');
      })
      .catch((err) => {
        setErrMessage(err.message);
      })
  }

  function handleEditProfile(email, name) {
    mainApi.editProfile(email, name)
      .then((data) => {
        setCurrentUser(data.data);
        setMessage('Данные профиля успешно обновлены')
      })
      .catch((err) => {
        setErrMessage(err.message);
        setMessage('')
      })
  }

  function searchMovies(valueSearch) {
    if (valueSearch === '') {
      return
    } else if (valueCheckBox) {
      const arrMovies = movies.filter(item => {
        const movieNameRu = item.nameRU.toLowerCase();
        return movieNameRu.includes(valueSearch.toLowerCase()) && item.duration < CRITERION_SHORT_FILM
      });
      setSelectedMovies(arrMovies)
      localStorage.setItem('moviesView', JSON.stringify(arrMovies));
      !arrMovies.length ? setIsOpenMoviesSpan(true) : setIsOpenMoviesSpan(false)
    } else {
      const arrMovies = movies.filter(item => {
        const movieNameRu = item.nameRU.toLowerCase();
        return movieNameRu.includes(valueSearch.toLowerCase())
      });
      setSelectedMovies(arrMovies);
      localStorage.setItem('moviesView', JSON.stringify(arrMovies));
      !arrMovies.length ? setIsOpenMoviesSpan(true) : setIsOpenMoviesSpan(false)
    }
  }



  function searchMyMovies(valueSearch) {
    if (valueSearch === '') {
      setSelectedMyMovies(myMovies)
    } else if (valueCheckBox) {
      const arrMovies = myMovies.filter(item => {
        const movieNameRu = item.nameRU.toLowerCase();
        return movieNameRu.includes(valueSearch.toLowerCase()) && item.duration < CRITERION_SHORT_FILM
      })
      setSelectedMyMovies(arrMovies)
      !arrMovies.length ? setIsOpenMoviesSpan(true) : setIsOpenMoviesSpan(false)
    } else {
      const arrMovies = myMovies.filter(item => {
        const movieNameRu = item.nameRU.toLowerCase();
        return movieNameRu.includes(valueSearch.toLowerCase())
      })
      setSelectedMyMovies(arrMovies)
      !arrMovies.length ? setIsOpenMoviesSpan(true) : setIsOpenMoviesSpan(false)
    }
  };


  function handleMovieSave(movie) {
    mainApi.saveNewMovie(movie)
      .then((newMovie) => {
        setMyMovies([newMovie.data, ...myMovies]);
        setIsOpenMoviesSpan(false)
      })
      .catch(() => {
        setIsOpenMoviesSpan(true)
        setMessageError(ERROR_SERVER_MESSAGE)
      })
  }

  function handleDeleteFromSaved(movie) {
    mainApi.deleteSavedMovie(movie._id)
      .then((data) => {
        setMyMovies(myMovies.filter(item => item._id !== movie._id));
      })
      .catch(err => console.log(err))
  }

  function handleChangeCheckBox() {
    setValueCheckBox(!valueCheckBox);
    localStorage.setItem('valueCheckBox', !valueCheckBox);
  }

  return (
    <TranslationLogIn.Provider value={loggedIn}>
      <TranslationCurrentUser.Provider value={currentUser}>
        <div className="app">
          <Routes>
            <Route path="/signup" element={<Register errMessage={errMessage} onSubmit={handleRegistrations} />} />
            <Route path="/signin" element={<Login onSubmit={handleLogIn} />} />
            <Route path="/" element={<Main />} />

            <Route path="/movies" element={
              <ProtectedRoute Component={<Movies movies={selectedMovies} myMovies={myMovies} handleSubmit={searchMovies}
                handleSave={handleMovieSave} handleCheckBox={handleChangeCheckBox} isOpenPreloader={isOpenPreloader}
                isOpenMoviesSpan={isOpenMoviesSpan} messageError={messageError} valueCheckBox={valueCheckBox} />} />
            } />

            <Route path="/saved-movies" element={
              <ProtectedRoute Component={<SavedMovies myMovies={myMovies} selectedMovies={selectedMyMovies}
                handleSubmit={searchMyMovies} handleCheckBox={handleChangeCheckBox} isOpenMoviesSpan={isOpenMoviesSpan}
                handleDelete={handleDeleteFromSaved} valueCheckBox={valueCheckBox} />} />
            } />
            <Route path="/profile" element={
              <ProtectedRoute Component={<Profile onGoOut={handleExit} onSubmit={handleEditProfile} message={message} />} />
            } />

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </TranslationCurrentUser.Provider>
    </TranslationLogIn.Provider>

  );
}

export default App;
