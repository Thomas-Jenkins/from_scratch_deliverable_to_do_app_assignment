import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Auth from './Components/Auth/Auth';
import Nav from './Components/Nav/Nav';
// import ToDo from './Components/ToDo/ToDo';
import ToDoInput from './Components/ToDo/ToDoInput';



function App() {
  return (
    <div className="App">
      <Nav />  
      <Switch>
        <Route path="/auth/:type" component={Auth}/>
        <Route path="/todo/todoinput" component={ToDoInput}/>
        <Route path="*">
          <Redirect to="/Auth/Auth" />
        </Route>
        <Route path="/" component={Auth}/>
      </Switch>
          
    </div>
  );
}

export default App;
