import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';


const App = (props) => {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      {/* <Profile />         */}
      <div className='app-wrapper-content'>
        {/* <Route path='/dialog' component={Dialogs}/>
        <Route path='/profile' component={Profile}/> */}
        <Route path='/dialog' render= {() => <Dialogs /> } />
        <Route path='/profile' render= {() => <Profile postsData={props.postsData}/> } />
        <Route path='/news'/>
        <Route path='/music'/>
        <Route path='/settings'/>
      </div>
    </div>
    </BrowserRouter>
  )
};




export default App;
