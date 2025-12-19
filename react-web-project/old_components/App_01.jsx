import { useState } from 'react';
import './App.css'

let isLoggedIn = false;

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img 
        className='avatar'
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button className='btn' onClick={handleClick}>
      Clicked {count} times.
    </button>
  );
}

const MyButton2 = () => {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
        Clicked {count} times.
    </button>
  );
}

const Status = () => {
  let content;
  if (isLoggedIn) {
    content = "User is logged in";
  } else {
    content = "User is not logged in";
  }
  return (
    <div>
      {content}
    </div>
  );
}

const StatusCompact = () => {
  let isLoggedIn = true;
  return (
    <>
      {isLoggedIn ? "Logged in" : "Not logged in"}
    </>
  );
}

function AdminPanel() {
  return (
    <>
      <h4>This is admin panel</h4>
    </>
  );
}

const StatusMoreCompact = () => {
  let isLoggedIn = true;
  return (
    <div>
        {isLoggedIn && <AdminPanel />}
    </div>
  );
}

function MyButton3({ count, onClick }) {
  return (
    <button className='btn' onClick={onClick}>
      Clicked {count} times.
    </button>
  );
}

function App() {
  const [count, setCount] = useState(0);
  // we'll use the array map function to convert a list of products to an array of li items
  const litsItems = products.map(product => 
    <li key={product.id} style={{color: product.isFruit ? 'magenta' : 'darkgreen'}}>
      {product.id}: {product.title}
    </li>
  );

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <>
      <h1>Welcome to my app</h1>
      <Profile />
      <MyButton />
      <Status />
      <StatusCompact />
      <StatusMoreCompact />
      <MyButton2 />
      <MyButton2 />

      <MyButton3 count={count} onClick={handleClick} />
      <MyButton3 count={count} onClick={handleClick} />
      <ul>
        {litsItems}
      </ul>
    </>
  );
}

export default App
