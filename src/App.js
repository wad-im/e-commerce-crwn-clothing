import React from 'react';
import './App.css'
import {Switch, Route} from 'react-router-dom'

import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/Header';
import SiginInAndSignUpPage from './pages/signin-signup/signin-signup';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { onAuthStateChanged } from "firebase/auth";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubcribeFromAuth = () => {return null}

  componentDidMount(){
    this.unsubsribeFromAuth = onAuthStateChanged(auth, async (userAuth) => {
    if (userAuth) {
      const userDoc = await createUserProfileDocument(userAuth)
      this.setState({
        currentUser: {
          id: userDoc.id,
          ...userDoc.data()
        }
      })
    } else {
      this.setState({currentUser: userAuth})
    }
    
  })}



  componentWillUnmount(){
    this.unsubcribeFromAuth()
  }
 

  render(){
    return(
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route  path='/shop' component={ShopPage}/>
          <Route path='/signin' component={SiginInAndSignUpPage}/>
        </Switch>
      </div>
      )
  }
}

export default App;
