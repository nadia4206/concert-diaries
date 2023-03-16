import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
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

  let navigate = useNavigate();

  const [ user, setUser ] = useState(null);
  const [ concerts, setConcerts ] = useState([])

  useEffect(() => {
    fetch('/me')
    .then(res => {
      if(res.ok){
        res.json().then(user => {
          setUser(user)
          navigate(`/${user.username}/concerts`)
        })
      } else {
        setUser(null)
      }
    })
  },[])

  useEffect(() => {
    fetch("/shows")
    .then(res => res.json())
    .then(concerts => setConcerts(concerts))
}, [])

  const updateUser = (user) => setUser(user)

  function handleLogout(){
    setUser(null);
  }

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
          element={
            <MyConcerts
              onLogout={handleLogout}
              updateUser={updateUser}
              allConcerts={concerts}
            />
          }
        />

        <Route
          path="/:username/concerts/:id/edit"
          element={
            <AddNewConcert
              onLogout={handleLogout}
            />
          }
        />

        <Route
          path="/:username/artists"
          element={
            <MyArtists
              onLogout={handleLogout}
              updateUser={updateUser}
            />
          }
        />

        <Route
          path="/artist/new/:id"
          element={
            <AddNewArtist
              onLogout={handleLogout}
              updateUser={updateUser}
            />
          }
        />

        <Route
          path="/:username/venues"
          element={
            <MyVenues
              onLogout={handleLogout}
              updateUser={updateUser}
              />
            }
        />

        <Route
          path="/venue/new/:id"
          element={
            <AddNewVenue
              onLogout={handleLogout}
              updateUser={updateUser}
            />
          }
        />

        <Route
          path="/profile/edit/:id"
          element={
            <EditProfile
              onLogout={handleLogout}
              updateUser={updateUser}
            />
          }
        />

      </Routes>
  </div>
)
}

export default App;