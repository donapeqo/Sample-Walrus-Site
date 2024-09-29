import './App.css';

function App() {
  return (
    <div className="App" style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#282c34',
      color: 'white',
      fontFamily: 'Arial, sans-serif'
    }}>
      <header className="App-header">
        <h1 style={{ fontSize: '3rem' }}>
          Hello, World!
        </h1>
        <p>
          Welcome to my first React app.
        </p>
      </header>
    </div>
  );
}


export default App;
