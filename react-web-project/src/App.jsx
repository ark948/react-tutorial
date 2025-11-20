import './App.css'

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
  )
}

function App() {
  return (
    <>
      <h1>Welcome to my app</h1>
      <Profile />
      <MyButton />
    </>
  )
}

export default App
