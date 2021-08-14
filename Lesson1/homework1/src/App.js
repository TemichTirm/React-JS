import './App.css';
import Counter from './Counter';
import Message from './Message';

function App() {
  return (
    <div className="App">
      <Message textToShow="Добрый день! Это домашнее задание к уроку №1 по курсу React JS." />
      <Counter />
    </div>
  );
}

export default App;
