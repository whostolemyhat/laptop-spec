import React from 'react';

import Header from './components/Header';
import Summary from './components/Summary';
import Options from './components/OptionsContainer';

import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className="App">

                <Header />

                <div className="content">
                    <Options />
                    <Summary />
                </div>
            </div>
        );
    }
}

export default App;
