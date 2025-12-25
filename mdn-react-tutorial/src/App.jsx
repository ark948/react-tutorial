import './App.css'

const subject = "React";
function App() {
  return (
    <>
      <header>
        <h1>Hello, {subject}.</h1>
        {/* Hello, React :)! */}
        <h1>Hello, {`${subject} :)`}!</h1>
        {/* Hello, REACT */}
        <h1>Hello, {subject.toUpperCase()}</h1>
        {/* Hello, 4! */}
        <h1>Hello, {2 + 2}!</h1>
        <button type="button" className="primary">Click me!</button>
      </header>
    </>
  )
}

export default App;
