import React from 'react';
import './App.css';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="App">
      <div className="flex flex-col lg:flex-row min-h-screen">
        <div className="lg:flex-1-3 bg-primary-color overflow-hidden ">
          <SideBar />
        </div>

        <div className="lg:flex-2-3 bg-secondary-color">

        </div>
      </div>
    </div>
  );
}

export default App;
