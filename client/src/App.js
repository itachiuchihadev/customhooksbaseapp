import logo from './logo.svg';
import './App.css';
import { useAuthCustomForm } from './hooks/useAuthCustomForm';

function App() {

  let authFormData = useAuthCustomForm();

  return (
    <div className="App">
      <label className='label'>Username : </label>
      <input type="text" id="username" className='input' autoComplete='off' value={authFormData.userName} onChange={({target : { value }}) => authFormData.setUserName(value) } ></input><br/>
      <label className='label'>Password : </label>
      <input type="password" id="password" className='input' autoComplete='off' value={authFormData.password} onChange={({target : { value }}) => authFormData.setPassword(value) } ></input><br/>
      <button type='button' className='btn btn-primary' name="authenticate" onClick={authFormData.authenticate} >Login</button>
    </div>
  );
}

export default App;
