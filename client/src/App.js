import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import MyConcerts from './components/MyConcerts';
import AddNewConcert from './components/AddNewConcert';
import MyArtists from './components/MyArtists';
import MyVenues from './components/MyVenues';
import AddNewArtist from "./components/AddNewArtist";
import AddNewVenue from "./components/AddNewVenue";
import EditProfile from "./components/EditProfile"
import SignUp from "./components/SignUp"

function App() {

  const [ user, setUser ] = useState(null);

  useEffect(() => {
    fetch('/me').then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  const updateUser = (user) => setUser(user)

  return(
  <div>
      <Routes>

        <Route
          exact path="/"
          element={<Login updateUser={updateUser}/>}
        />

        <Route
          path="/signup"
          element={<SignUp/>}
        />

        <Route
          path="/:username/concerts"
          element={<MyConcerts/>}
        />

        <Route
          path="/concerts/:id/edit"
          element={<AddNewConcert/>}
        />

        <Route
          path="/concert/new/:id"
          element={<AddNewConcert/>}
        />

        <Route
          path="/:username/artists"
          element={<MyArtists/>}
        />

        <Route
          path="/artist/new/:id"
          element={<AddNewArtist/>}
        />

        <Route
          path="/:username/venues"
          element={<MyVenues/>}
        />

        <Route
          path="/venue/new/:id"
          element={<AddNewVenue/>}
        />

        <Route
          path="/profile/edit/:id"
          element={<EditProfile/>}
        />

      </Routes>
  </div>
)
}

export default App;