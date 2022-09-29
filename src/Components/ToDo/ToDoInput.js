import { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';


export default function ToDoInput() {
  const user = useContext(UserContext);
  if (!user.user) {
    return <Redirect to="/auth/auth" />;
  }
  return (
    <div className="to-do-input">
      <input type="text" />
      <button>Add to List</button>
    </div>
  );
}