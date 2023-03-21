import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import MyConcerts from './components/MyConcerts';
import AddNewConcert from './components/AddNewConcert';
import MyArtists from './components/MyArtists';
import MyVenues from './components/MyVenues';
import AddNewArtist from "./components/AddNewArtist";
import AddNewVenue from "./components/AddNewVenue";
import SignUp from "./components/SignUp"
import UpdateConcert from "./components/UpdateConcert"
// import EditProfile from "./components/EditProfile"

function App() {

  let navigate = useNavigate();

  const [ user, setUser ] = useState(null);
  const [ concerts, setConcerts ] = useState([])
  const [ artists, setArtists ] = useState([])
  const [ venues, setVenues ] = useState([])
  const [ users, setUsers ] = useState([])

  //keep current user logged in
  useEffect(() => {
    fetch('/me')
    .then(res => {
      if(res.ok){
        res.json().then(user => {
          setUser(user)
          navigate('/concerts')
        })
      } else {
        setUser(null)
      }
    })
  },[])

  //get all shows
  useEffect(() => {
    fetch("/shows")
    .then(res => res.json())
    .then(concerts => setConcerts(concerts))
}, [])

  //get all artists
  useEffect(() => {
    fetch("/artists")
    .then(res => res.json())
    .then(artists => setArtists(artists))
  }, [])

  //get all venues
  useEffect(() => {
    fetch("/venues")
    .then(res => res.json())
    .then(venues => setVenues(venues))
  }, [])

  //get all users
  useEffect(() => {
    fetch("/users")
    .then(res => res.json())
    .then(users => setUsers(users))
  }, [])


  //set user at login
  const updateUser = (user) => setUser(user)

  //logout user
  function handleLogout(){
    setUser(null);
  }

  //add new artist
  const addNewArtist = (addArtist) => {
    setArtists([addArtist, ...artists])
  }

  //add new venue
  const addNewVenue = (addVenue) => {
    setVenues([addVenue, ...venues])
  }

  //add new concert
  const addNewConcert = (addConcert) => {
    setConcerts([addConcert, ...concerts])
  }

  //update concert
  const editConcert = (editedConcert) => {
    const updatedConcerts = concerts.map((origConcert) => {
      if (origConcert.id === editedConcert.id) {
        return editedConcert;
      } else {
        return origConcert;
      }
    })
      setConcerts(updatedConcerts)
  }

  //update profile

  // const editProfile = (editedProfile) => {
  //   const updatedUsers = users.map((origUser) => {
  //     if (origUser.id === editedProfile.id) {
  //       return editedProfile
  //     } else {
  //       return origUser
  //     }
  //   })
  //     setUsers(updatedUsers)
  // }

  //delete concert
  const archiveConcert = (concertToDelete) => {
    const updatedConcertList = concerts.filter(concert => (
      concert.id !== concertToDelete.id))
        setConcerts(updatedConcertList)
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
          path="/concerts"
          element={
            <MyConcerts
              onLogout={handleLogout}
              updateUser={updateUser}
              allConcerts={concerts}
              onConcertDelete={archiveConcert}
            />
          }
        />

        <Route
          path="/new-concert"
          element={
            <AddNewConcert
              onLogout={handleLogout}
              allArtists={artists}
              allVenues={venues}
              allUsers={users}
              onAddConcert={addNewConcert}
            />
          }
        />

        <Route
          path="/artists"
          element={
            <MyArtists
              onLogout={handleLogout}
              updateUser={updateUser}
              allArtists={artists}
            />
          }
        />

        <Route
          path="/new-artist"
          element={
            <AddNewArtist
              onLogout={handleLogout}
              updateUser={updateUser}
              onAddArtist={addNewArtist}
            />
          }
        />

        <Route
          path="/venues"
          element={
            <MyVenues
              onLogout={handleLogout}
              updateUser={updateUser}
              allVenues={venues}
              />
            }
        />

        <Route
          path="/new-venue"
          element={
            <AddNewVenue
              onLogout={handleLogout}
              updateUser={updateUser}
              onAddVenue={addNewVenue}
            />
          }
        />

        <Route
          path="/concert/:id/edit"
          element={
            <UpdateConcert
              onLogout={handleLogout}
              onUpdatedConcert={editConcert}
            />
          }
        />

        {/* <Route
          path="/profile/:id/edit"
          element={
            <EditProfile
              onLogout={handleLogout}
              onUpdatedProfile={editProfile}
            />
          }
        /> */}

      </Routes>
  </div>
)
}

export default App;