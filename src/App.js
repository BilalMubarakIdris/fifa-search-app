import React from 'react'
import SearchInput from './components/SearchInput'
import playersData from './playersData'
import { Switch, Route } from "react-router-dom";
import PlayersDetails from './components/PlayersDetails'
import Home from './components/Home';
import Header from './components/Header';
import Help from './components/Help';

function App(){
    return(
        <div className="app">
          <Header />
        <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/help">
          <Help />
        </Route>
        <Route exact path="/playersDetails">
          <SearchInput data={playersData}/>
        </Route>
        <Route path="/playersDetails/:serviceId">
          <PlayersDetails  />
        </Route>
      </Switch>
    </div>
    )
}
export default App