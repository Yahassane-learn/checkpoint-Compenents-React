import logo from './logo.svg';
import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import Header from './Header' ;
import ProfilPhoto from './Components/Profile/ProfilPhoto';
import FullName from './Components/Profile/FullName';
import Adress from './Components/Profile/Adress';
function App() {
  return (
    <div className="App">
      <Header />
      < ProfilPhoto />
      <FullName />
      <Adress />

    </div>
  );
}

export default App;
