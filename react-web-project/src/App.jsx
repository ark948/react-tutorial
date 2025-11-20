import './App.css'

let isLoggedIn = false;

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

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
  )
}

function MyButton() {
  return (
    <button className='btn'>I'm a button</button>
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

function App() {
  return (
    <>
      <h1>Welcome to my app</h1>
      <Profile />
      <MyButton />
      <Status />
      <StatusCompact />
      <StatusMoreCompact />
    </>
  );
}

export default App
