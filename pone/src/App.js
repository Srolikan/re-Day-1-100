import './App.css';
import Body from './components/Body';
import Nav from './components/Nav';
import Sizebar from './components/Sizebar';

function App() {
  return (
    <div classNameNameName="app">
      <Nav />
      <main>
        <Sizebar done="40" />
        <Body />
      </main>
    </div>
  );
}

export default App;