import { useState, useEffect } from "react";
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import MyConcerts from './components/MyConcerts';
import AddNewConcert from './components/AddNewConcert';
import MyArtists from './components/MyArtists';
import MyVenues from './components/MyVenues';


function App() {

  return(
    <div>
    <Switch>
      <Route exact path="/">
        <Login/>
      </Route>

      <Route path="/:username/concerts">
        <MyConcerts/>
      </Route>

      <Route path="/:username/concerts/:id/edit">
        <AddNewConcert/>
      </Route>

      <Route path="/:username/artists">
        <MyArtists/>
      </Route>

      <Route path="/:username/venues">
        <MyVenues/>
      </Route>

    </Switch>
  </div>
)
}

export default App;