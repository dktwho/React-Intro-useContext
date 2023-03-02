
import './App.css';
import { useState } from 'react';
import { UserContext } from './context/userContext';
import User from './components/User';

function App() {
  const [user, setUser] = useState('Bill')
  return (
    <UserContext.Provider value={user}>
    <div className="App">
      <User  />
    </div>
    </UserContext.Provider>
  );
}

export default App;
