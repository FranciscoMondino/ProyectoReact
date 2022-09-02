
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemList from './components/ItemList';
import Item from './components/Item';
import {button} from '@mui/material/Button';
import { dividerClasses, listItemIconClasses } from '@mui/material';
import logo from './logo.svg';
import { pink } from '@mui/material/colors';



function App() {

  return (
    
    <div>
      <NavBar />
      <ItemListContainer />
      <ItemList />
      <Item />
      <ItemCount stock='5' initial='1' />

    
    </div>

  );
}

export default App;
