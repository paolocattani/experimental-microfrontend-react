import React, { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [log, setLog] = useState<string>('Insert username and password');

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (username && password) {
      sessionStorage.setItem('username', username);
      sessionStorage.setItem('password', password);
      setLog('Login complete');
    } else {
      setLog('Insert username and password');
    }
    setUsername('');
    setPassword('');
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <p>This is the public login page</p>
      </header>
      <body style={{ margin: '1vh' }}>
        <form onSubmit={onSubmit}>
          <input
            type='text'
            placeholder='username'
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            type='text'
            placeholder='password'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button type='submit'>Login</button>
        </form>
        <p>
          {log} : {sessionStorage.getItem('username')} , {sessionStorage.getItem('password')}
        </p>
      </body>
    </div>
  );
}

export default App;
