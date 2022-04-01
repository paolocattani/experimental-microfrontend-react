import React, { Suspense } from 'react';
import './App.css';
//@ts-expect-error
const RemoteLogin = React.lazy(() => import('mf_login/App'));
//@ts-expect-error
const RemotePrivate = React.lazy(() => import('mf_private/App'));

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>This is the container</p>
      </header>

      <div style={{ border: '1px solid green', margin: '1vh' }}>
        <Suspense fallback={'loading...'}>
          <RemoteLogin />
        </Suspense>
      </div>

      <div style={{ border: '1px solid red', margin: '1vh' }}>
        <Suspense fallback={'loading...'}>
          <RemotePrivate />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
