import './App.css';
import User from './User';

function App() {
  return (
    <>
    <div className="ex1">
      <h1>Завдання 1</h1>
      <User fullname="Дмитро 'Code Watermelon' Чапни" phone="(Невідомий польський номер)"
        email="awfulanddisgusting@doom.god" city="Wrocław, Polska" xp={9128492}></User>
    </div>
    </>
  );
}

export default App;
