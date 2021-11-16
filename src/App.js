import React from 'react';
import Header from './components/Header';
import './App.css';
import Campaign from './components/Campaign';
import PullToRefresh from 'react-simple-pull-to-refresh';

function App() {

  function handleRefresh() {
    window.location.reload()
  }

  return (
    <PullToRefresh onRefresh={handleRefresh}>
      <div className="App">
        <Header />
        <Campaign />
      </div>
    </PullToRefresh>
  );
}

export default App;

