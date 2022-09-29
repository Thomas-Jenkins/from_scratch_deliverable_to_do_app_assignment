import { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
import { createToDo } from '../../services/ToDo';
import useToDo from '../Hooks/UseToDo';



export default function ToDoInput() {
  const [description, setDescription] = useState('');

  const { items, setItems } = useToDo();

  const { user } = useContext(UserContext);
  if (!user) {
    return <Redirect to="/auth/auth" />;
  }

  const handleNewItem = async () => {
    try {
      await createToDo(description);
      setItems((prev) => [...prev, { description }]);
      setDescription('');
    } catch (e) {
        // eslint-disable-next-line no-console
      console.error(e.message); 
    }
  };

  return (
    <div className="to-do-input">
        
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
      <button onClick={handleNewItem}>Add to List</button>
    </div>
  );
}