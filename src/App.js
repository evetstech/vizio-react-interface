import React, { Component } from 'react';
import './App.css';
import {Preview, Discover, Apps} from './containers';

const AppList = ["netflix", "amazon", "iheart", "hulu", "vudu", "pandora", "crackle", "spotify", "hbo"];
const DiscoveryList = ['daredevil', 'tick', 'got', 'defenders', 'handmaids', 'stranger'];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="bg-img">
          <Preview/>
          <Discover discoveryList = {DiscoveryList}/>
          <Apps appList = {AppList}/>
        </div>
      </div>
    );
  };
}
export default App;
