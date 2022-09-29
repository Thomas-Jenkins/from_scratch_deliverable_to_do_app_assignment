import { checkError, client } from '../services/client';

export async function getToDo() {
  const response = await client.from('todos').select();
  return checkError(response);
}

export async function createToDo(description) {
  const response = await client.from('todos').insert({ description });
  console.log('resp:', response.data);
  return checkError(response);
}

export async function checkToDo({ id, complete }) {
  const response = await client .from('todos').update({ complete: !complete }).match({ id }).single();

  return checkError(response);
}