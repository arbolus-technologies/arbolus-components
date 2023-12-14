import { useState } from 'react';
import './App.css';
import { ArbolusAvatar } from './components/ArbolusAvatarV2/ArbolusAvatarV2';

function App() {
  const [count, setCount] = useState(0);

  const userTest = {
    name: 'John',
    lastName: 'Doe',
    title: 'Software Engineer'
  };

  return (
    <div className='App'>
      <ArbolusAvatar user={userTest}>
        <ArbolusAvatar.Avatar />
        <ArbolusAvatar.Name />
        <ArbolusAvatar.Title />
      </ArbolusAvatar>
    </div>
  );
}

export default App;
