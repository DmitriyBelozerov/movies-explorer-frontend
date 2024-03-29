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

import { ERROR_SERVER_MESSAGE, CRITERION_SHORT_FILM, MESSAGE_PROFILE_UPDATE_OK } from '../../constants/constants';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(sessionStorage.getItem('loggedIn'));
  const [currentUser, setCurrentUser] = React.useState({});
  const [movies, setMovies] = React.useState([]);
  const [myMovies, setMyMovies] = React.useState([]);
  const [selectedMovies, setSelectedMovies] = React.useState(JSON.parse(localStorage.getItem('moviesView')));
  const [selectedMyMovies, setSelectedMyMovies] = React.useState([]);
  const [errMessage, setErrMessage] = React.useState('');
  const [valueCheckBox, setValueCheckBox] = React.useState(getValueCheckBox());
  const [valueCheckBoxMyMovie, setValueCheckBoxMyMovie] = React.useState(false);

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
        setLoggedIn(true);
        sessionStorage.setItem('loggedIn', true);
      })
      .catch(err => {
        console.log(err);
        setLoggedIn(false);
      })
  }, [])


  function handleLogIn(email, password) {
    mainApi.logIn(email, password)
      .then((data) => {
        setLoggedIn(true);
        sessionStorage.setItem('loggedIn', true);
        navigate('/movies');
      })
      .catch(err => console.log(err))
  }

  function handleExit() {
    mainApi.goOut()
      .then((data) => {
        setLoggedIn(false);
        sessionStorage.clear();
        localStorage.clear();
        navigate('/');
        setSelectedMovies([]);
        setValueCheckBox(false);
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
        setMessage(MESSAGE_PROFILE_UPDATE_OK);
      })
      .catch((err) => {
        setErrMessage(err.message);
        setMessage('')
      });
  }

  useEffect(() => {
    setMessage('');
  }, [navigate])

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
    } else if (valueCheckBoxMyMovie) {
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
      .then(() => {
        setMyMovies(myMovies.filter(item => item._id !== movie._id));
      })
      .catch(err => console.log(err))
  }

  function handleDeleteFromMomies(movie) {
    myMovies.forEach(item => {
      if (item.movieId === movie.id) {
        mainApi.deleteSavedMovie(item._id)
          .then(() => {
            setMyMovies(myMovies.filter(i => i._id !== item._id));
          })
          .catch(err => console.log(err))
      }
    });
  }

  function handleChangeCheckBox(type) {
    if (!type) {
      localStorage.setItem('valueCheckBox', !valueCheckBox);
      setValueCheckBox(!valueCheckBox);
    } else {
      setValueCheckBoxMyMovie(!valueCheckBoxMyMovie);
    }
  }

  return (
    <TranslationLogIn.Provider value={loggedIn}>
      <TranslationCurrentUser.Provider value={currentUser}>
        <div className="app">
          <Routes>
            {!loggedIn && <Route path="/signup" element={<Register errMessage={errMessage} onSubmit={handleRegistrations} />} />}
            {!loggedIn && <Route path="/signin" element={<Login onSubmit={handleLogIn} />} />}

            <Route path="/" element={<Main />} />

            <Route path="/movies" element={
              <ProtectedRoute Component={<Movies movies={selectedMovies || []} myMovies={myMovies || []} handleSubmit={searchMovies}
                handleSave={handleMovieSave} handleCheckBox={handleChangeCheckBox} handleDelete={handleDeleteFromMomies}
                isOpenPreloader={isOpenPreloader} isOpenMoviesSpan={isOpenMoviesSpan} messageError={messageError}
                valueCheckBox={valueCheckBox} />} />
            } />

            <Route path="/saved-movies" element={
              <ProtectedRoute Component={<SavedMovies myMovies={myMovies} selectedMovies={selectedMyMovies}
                handleSubmit={searchMyMovies} handleCheckBox={handleChangeCheckBox} isOpenMoviesSpan={isOpenMoviesSpan}
                handleDelete={handleDeleteFromSaved} valueCheckBox={valueCheckBoxMyMovie} />} />
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
