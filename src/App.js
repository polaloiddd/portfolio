import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import homepages from "./component/Page/homepages";


class App extends Component {

  render(){
    return (

            <div className ="App">
                <Route exact path ={"/Home"} component = {homepages}/>
            </div>

    );
  }
}

export default App;
