import React from  "react"
import './App.css';
import Sidebar from './Sidebar';
import Header from './Header';
import RecommendedVideos from "./RecommendedVideos"
import {BrowserRouter as Router ,Switch,Route} from "react-router-dom"
import Search from "./Search";
function App() {
  return (
    <div className="app">
      <Router >
        <Header />
          <Switch>
            <Route path="/search/:searchTerm">
              <div className="app__page flex ">
                <Sidebar/>
                <Search/>
              </div>
            </Route>
          
            <Route path="/">
                <div className="app__page flex ">
                <Sidebar/>
                <RecommendedVideos/>
                </div>
            </Route>
          
        </Switch>
       </Router>
    </div>
  );
}

export default App;
