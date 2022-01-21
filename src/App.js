import React from 'react';
import Principal from './components/Principal';
import Context from './context/Context';

function App() {
 
  return (
    <Context>
        <Principal/>
    </Context>
  );
}

export default App;
