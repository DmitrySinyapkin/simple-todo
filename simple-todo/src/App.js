import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Menu />
      </header>
      <main>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
