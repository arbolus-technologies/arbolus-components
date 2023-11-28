import React, { useState } from 'react';
import './App.css';
import reactLogo from './theme/assets/react.svg';
import { FeedbackCollector, FeedbackCollectorDirection } from './components';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <div>
        <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
          <img src='/vite.svg' className='logo' alt='Vite logo' />
        </a>
        <a href='https://reactjs.org' target='_blank' rel='noreferrer'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <FeedbackCollector
        cookie=''
        direction={FeedbackCollectorDirection.BOTTOM_RIGHT}
        handleOnClickedStar={console.log}
        onClickClose={console.log}
        onSubmit={console.log}
        question='How likely are you to recommend our company to a friend or colleague?'
      />
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default App;
