import { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
import { createToDo, checkToDo, deleteCompletedToDo, getToDo } from '../../services/ToDo';
import useToDo from '../Hooks/UseToDo';



export default function ToDoInput() {
  const [description, setDescription] = useState('');
    
  const { items, setItems } = useToDo();
    
  console.log(items);
  const { user } = useContext(UserContext);
  if (!user) {
    return <Redirect to="/auth/auth" />;
  }

  const handleDelete = async () => {
    try {
      await deleteCompletedToDo(); 
      setItems(await getToDo());
    } catch (e) {
        // eslint-disable-next-line no-console
      console.error(e.message);
    }
  };

  const handleCheck = async (item) => {
    try {
      const updatedItem = await checkToDo(item);
      setItems((prevItems) => prevItems.map((prevItem) => (prevItem.id === item.id ? updatedItem : prevItem))
      );
    } catch (e) {
      console.error(e.message);
    }
  };

  const handleNewItem = async () => {
    try {
      await createToDo(description);
    //   console.log(temp);
      setItems(await getToDo());
    //   setItems((prev) => [...prev, { description }]);
      setDescription('');
    } catch (e) {
        // eslint-disable-next-line no-console
      console.error(e.message); 
    }
  };

  return (
    <>
      <div className="to-do-input">
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
        <button onClick={handleNewItem}>Add to List</button>
      </div>
      <div className="todo-display">
        {items.map((item) => (
          <div key={item.id}>
            {item.description}
            <input type="checkbox" checked={item.complete}
              onChange={() => handleCheck(item)} />
          </div>
        ))}
      </div>
      <div>
        <button onClick={handleDelete}>Delete Completed To Dos</button>
      </div>
    </>  
  );
}