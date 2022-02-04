import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';
import InputModal from './components/InputModal/InputModal';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState(localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) :[]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [newTask, setNewTask] = useState(false);
  const [editTask, setEditTask] = useState(false);

  const handleNewClick = () => {
    setNewTask(true);
  }

  const closeModal = () => {
    if (newTask) {
      setNewTask(false);
    } else if (editTask) {
      setEditTask(false);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Menu
          newHandler={handleNewClick}
        />
      </header>
      <main>
      </main>
      <footer>
        <Footer />
      </footer>
      {newTask && <InputModal
                    isOpen={newTask}
                    startText=""
                    //textHandler={}
                    closeHandler={closeModal}
                  />
      }
    </div>
  );
}

export default App;
