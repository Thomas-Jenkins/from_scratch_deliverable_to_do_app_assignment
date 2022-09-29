import { useContext, useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
import { authUser } from '../../services/Auth';

export default function Auth() {
  const { type } = useParams();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { user, setUser } = useContext(UserContext);

  const submitAuth = async () => {
    
    const userResp = await authUser(email, password, type);
    setUser(userResp);
    setEmail('');
    setPassword('');
  };

  if (user) {
    return <Redirect to="/to-do" />;
  }

  return (
    <div className="auth">
      <label>Email: </label>
      <input 
        type="text" 
        value={email} 
        placeholder='Enter Email' 
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Password: </label>
      <input 
        type="text" 
        value={password} 
        placeholder='Enter Password'
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={submitAuth}>
        Submit
      </button>
    </div>
  );

}