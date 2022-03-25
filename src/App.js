import './App.css';
import Header from './component/header/Header';
import Qus from './component/qus/Qus';
import Shop from './component/shop/Shop';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <Qus></Qus>
    </div>
  );
}

export default App;
