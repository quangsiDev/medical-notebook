import logo from './logo.svg';
import './App.css';
import HomeTemplate from './Template/HomeTemplate';
import ProfilePage from './Pages/ProfilePage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import FamilyPage from './Pages/FamilyPage';
import RecordBookPage from './Pages/RecordBookPage';
import Login from './Pages/Login';

function App() {
  return (


    <div style={{ background: "rgb(227, 242, 253" }} className="h-full">
      < BrowserRouter >

        <Switch>
          <HomeTemplate path="/" exact Component={Dashboard} />
          <HomeTemplate path="/profile" Component={ProfilePage} />
          <HomeTemplate path="/family" Component={FamilyPage} />
          <HomeTemplate path="/records" Component={RecordBookPage} />
          {/* <routeros path="/login" Component={Login} /> */}
          <Route path="/login" component={Login} />
        </Switch>
      </ BrowserRouter>
    </div >
  );
}

export default App;
