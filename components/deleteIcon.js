import { displayTasks } from "./readTasks.js";

const deleteIcon = (id) => { //volvemos a recibir el indentificador
  const i = document.createElement('i');
  i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
  i.addEventListener('click', () => deleteTask(id)); //volvemos a modificar la funcion deleteTask
  return i;
};

const deleteTask = (id) => {
  const li = document.querySelector('[data-list]');
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  const index = tasks.findIndex((item) => item.id == id); //rastreando ubicacion del elmento a borrar
  console.log(index);
  tasks.splice(index,1) // elimando un elemento del arreglo
  li.innerHTML = ''; //Elimina todo el contenido de lista. El cual es el Elemento PADRE.
  localStorage.setItem('tasks', JSON.stringify(tasks)); // actualizamos el localStorage
  displayTasks(); // Luego llamamos la función displayTasks. Ubicada en la PESTAÑA readTasks.js
};

export default deleteIcon;
