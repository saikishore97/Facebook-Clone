import React from 'react';
import './App.css';
import Header from './Header.component';
import SideBar from './SideBar.component';
import Feed from './Feed.component';
import Widgets from './Widgets.component';
import Login from './Login.page';
import {useDataLayerValue} from './DataLayer';


function App() {

  const [{user},dispatch] = useDataLayerValue();

  return (

    <div className="App">

        { !user ? (<Login/>) : 
          (
          <div>
            <Header/>
            <div className="app__body">
            <SideBar/>
            <Feed/>
            <Widgets/>
            </div>
          </div>
          )
        }

    </div>

    );
}

export default App;
