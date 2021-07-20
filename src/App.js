import Homepage from './pages/homepage/Homepage';
import './App.css'
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route  path='/hats' component={Homepage}/>

      </Switch>
    </div>
  );
}

export default App;
