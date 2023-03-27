import './App.css';
import Main from './components/main';
import DataProvider from './context/DataProvider';

function App() {
  return (
    <DataProvider>
      <Main />
    </DataProvider>
  );
}

export default App;
