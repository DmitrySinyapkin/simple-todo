import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';
import InputModal from './components/InputModal/InputModal';
import TaskList from './components/TaskList/TaskList';
import { useEffect, useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [newTask, setNewTask] = useState(false);
  const [editTask, setEditTask] = useState(false);
  const [editedText, setEditedText] = useState({text: '', index: 0});

  useEffect(() => {
    setTasks(localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) :[]);
  }, [])

  const handleNewClick = () => {
    setNewTask(true);
  }

  const handleEditClick = (index, text) => {
    setEditedText({index: index, text: text});
    setEditTask(true);
  }

  const closeModal = () => {
    if (newTask) {
      setNewTask(false);
    } else if (editTask) {
      setEditTask(false);
    }
  }

  const addNewTask = (text) => {
    setTasks([...tasks, {text: text, done: false}]);
    localStorage.setItem('tasks', JSON.stringify([...tasks, {text: text, done: false}]));
  }

  const markDone = (index) => {
    const newArr = [...tasks];
    newArr[index].done = true;
    setTasks(newArr);
    localStorage.setItem('tasks', JSON.stringify(newArr));
  }

  const changeText = (text) => {
    const newArr = [...tasks];
    newArr[editedText.index].text = text;
    setTasks(newArr);
    localStorage.setItem('tasks', JSON.stringify(newArr));
  }

  const deleteTask = (index) => {
    const newArr = tasks.filter((item, i) => i !== index);
    setTasks(newArr);
    localStorage.setItem('tasks', JSON.stringify(newArr));
  }

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Menu
          newHandler={handleNewClick}
          active={filter}
          allHandler={() => setFilter('all')}
          activeHandler={() => setFilter('active')}
          doneHandler={() => setFilter('done')}
        />
      </header>
      <main>
        <TaskList
          tasks={tasks}
          filter={filter}
          markDone={markDone}
          handleEditClick={handleEditClick}
          deleteTask={deleteTask}
        />
      </main>
      <footer>
        <Footer />
      </footer>
      {newTask && <InputModal
                    isOpen={newTask}
                    startText=""
                    textHandler={addNewTask}
                    closeHandler={closeModal}
                  />
      }
      {editTask && <InputModal
                    isOpen={editTask}
                    startText={editedText.text}
                    textHandler={changeText}
                    closeHandler={closeModal}
                  />
      }
    </div>
  );
}

export default App;
