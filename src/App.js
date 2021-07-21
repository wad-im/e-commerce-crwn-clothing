
import './App.css'
import {Switch, Route} from 'react-router-dom'

import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/Header';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route  path='/shop' component={ShopPage}/>

      </Switch>
    </div>
  );
}

export default App;
