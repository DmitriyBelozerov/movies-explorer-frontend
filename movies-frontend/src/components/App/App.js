import React from 'react';
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
import { TranslationLogIn } from '../../contexts/Context';


import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [movies, setMovies] = React.useState([]);
  const [myMovies, setMyMovies] = React.useState([]);
  const [selectedMovies, setSelectedMovies] = React.useState([]);

  const navigate = useNavigate();

  React.useEffect(() => {
    if (loggedIn) {
      moviesApi.getMovies()
        .then(data => {
          setMovies(data);
        })
        .catch(err => console.log(err))
      mainApi.getMyMovies()
        .then(data => {
          setMyMovies(data.data);
        })
        .catch(err => console.log(err))
    } else {
      return
    }
  }, [loggedIn])

  function handleLogIn(email, password) {
    mainApi.logIn(email, password)
      .then((data) => {
        setLoggedIn(true);
        navigate('/movies');
      })
      .catch(() => {
      })
  }

  function searchMovies(valueSearch) {
    if (valueSearch === '') {
      return
    }
    const arr = movies.filter(item =>
      item.description.includes(valueSearch)
    )
    setSelectedMovies(arr)
  };

  function handleMovieSave(movie) {
    mainApi.saveNewMovie(movie)
      .then((newMovie) => {
        setMyMovies([newMovie.data, ...myMovies]);
      })
      .catch(err => console.log(err))
  }

  function handleDeleteFromSaved(movie) {
    mainApi.deleteSavedMovie(movie._id)
    .then((data) => {
      setMyMovies(myMovies.filter(item => item._id !== movie._id));
    })
    .catch(err => console.log(err))
  }


  return (
    <TranslationLogIn.Provider value={loggedIn}>
      <div className="app">
        <Routes>
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login onSubmit={handleLogIn} />} />
          <Route path="/" element={<Main />} />

          <Route path="/movies" element={
            <ProtectedRoute Component={<Movies movies={selectedMovies} myMovies={myMovies} handleSubmit={searchMovies} handleSave={handleMovieSave} />} />
          } />
          <Route path="/saved-movies" element={
            <ProtectedRoute Component={<SavedMovies myMovies={myMovies} handleDelete={handleDeleteFromSaved}/>} />
          } />
          <Route path="/profile" element={
            <ProtectedRoute Component={<Profile />} />
          } />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </TranslationLogIn.Provider>

  );
}

export default App;
