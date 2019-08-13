import React, { Component } from 'react'
import Card from './Card';
import logo from '../logo.svg';

class App extends Component {


  render() {
    return (
      <div className="App">
        <header className="container App-header">
          <div className="row">
            <div className="col-lg-3 col-md-4">
              <div className="justify-content-center"><img src={logo} className="App-logo" alt="logo" /></div>
            </div>
            <div className="col-lg-9 col-md-8">
                <div className="justify-content-center">
                  <h1 className="App-title">Welcomme to Flickr API task test</h1>
                  <p className="text-right"><i >#Tito</i></p>
                </div>
            </div>
          </div>
        </header>
        <Card />
      </div>

    );
  }

}




export default App;
