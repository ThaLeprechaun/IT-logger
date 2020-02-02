import React, {useEffect} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import SearchBar from './Components/Layout/SearchBar';
import './App.css';
import Logs from './Components/Logs/Logs';
import Addbtn from './Components/Layout/Addbtn';
import AddlogModal from './Components/Logs/AddlogModal';
import EditlogModal from './Components/Logs/EditlogModal';
import AddTechModal from './Components/Techs/AddTechModal';
import TechListModal from './Components/Techs/TechListModal';
import {Provider} from 'react-redux';
import store from './store';

function App() {
  useEffect(()=>{
    //Init Materialize JS
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <SearchBar /> 
      <div className="container">
        <Addbtn />
        <AddlogModal />
        <EditlogModal />
        <AddTechModal />
        <TechListModal />
        <Logs />
      </div>
    </Provider>
  );
}

export default App;
