//Styles
//import logo from './logo.svg';
import './App.css';
//Pages
import Welcome from "./pages/welcome";
import PlanLayout from "./pages/layouts/planLayout";
import PhoneConfirmation from './pages/phoneConf';
import CodeConfirm from './pages/codeConfirm';
import AllowNotifications from './pages/allowNotifications';
import { BrowserRouter, Route, Switch } from "react-router-dom";
//Layouts
import AppLayout from './pages/layouts/appLayout';
import Home from './pages/Home';

//planned layout

function App() {

  return (
  <BrowserRouter>
  <Route exact path={[
    '/', '/invite','/get_username','/code_confirm','/allow_notification',
  ]}
  >
   <PlanLayout>
     <Switch>
     <Route exact path='/'component={Welcome}/>
     <Route exact path='/invite' component={PhoneConfirmation}/>
     <Route exact path='/code_confirm' component={CodeConfirm}/>
     <Route exact path='/allow_notification' component={AllowNotifications}/>

     </Switch>
     
  </PlanLayout>
  
  </Route>
  <Route exact path={['/home']}>
    <AppLayout>
      <Switch>
        <Route exact path='/home' component= {() => <Home />}/>
      </Switch>
    </AppLayout>
  </Route>
  </BrowserRouter>
 
  
  );

  
}

export default App;
