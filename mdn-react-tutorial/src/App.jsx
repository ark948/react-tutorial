import './App.css'

function App(props) {
  return (
    <>
      <header>
        <h1>Hello, dear {props.subject}.</h1>
        <button type="button" className="primary">Click me!</button>
      </header>
    </>
  )
}

export default App;
