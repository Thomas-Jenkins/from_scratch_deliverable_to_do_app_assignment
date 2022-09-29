import { useEffect, useState } from 'react';
import { getToDo } from '../../services/ToDo';

export default function useToDo() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await getToDo();
        setItems(data);
      } catch (e) {
        console.error(e.message);
      }
    };
  }, []);
  return { items, setItems };
}