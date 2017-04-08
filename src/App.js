import React from 'react';

import Header from './components/Header';
import Summary from './components/Summary';
import Options from './components/OptionsContainer';

class App extends React.Component {
    render() {
        return (
            <div>
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
