
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount'
import {button} from '@mui/material/Button'
import { dividerClasses, listItemIconClasses } from '@mui/material';
import logo from './logo.svg';
import { pink } from '@mui/material/colors';


function App() {
  function onAdd() {
        
  }
  

  return (
    
    <div>
      <NavBar />
      <ItemListContainer />
      <ItemCount stock='5' initial='1' />
    
    </div>

  );
}

export default App;
