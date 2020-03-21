import React from 'react';
import './App.css';
import RomanConverterContainer from './containers/RomanConverterContainer';
import Header from './components/Header';

const App = () => {
  return (
    <div className="App">
      <Header />
      <RomanConverterContainer />
    </div>
  );
}

export default App;
