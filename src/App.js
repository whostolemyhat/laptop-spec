import React from 'react';

import Header from './components/Header';
import PeopleContainer from './components/PeopleContainer'
import Summary from './components/Summary';
import Options from './components/Options';

import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className="App">
            <PeopleContainer />
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
