const checkComplete = (id) => {
  const i = document.createElement('i');
  i.classList.add('far', 'fa-check-square', 'icon');
  i.addEventListener('click', (event) => completeTask(event, id));
  return i;
};
// Immediately invoked function expression IIFE
const completeTask = (event, id) => {
  const element = event.target;
  element.classList.toggle('fas');
  element.classList.toggle('completeIcon');
  element.classList.toggle('far');
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  const index = tasks.findIndex((item) => item.id==id); //findIndex, para buscar la posción de al tarea dentro del arrelgo
  console.log(index);
  tasks[index]['complete'] = !tasks[index]['complete']; //accedemos a la propiedad de 'complete'(que es falsa al principio), Luego lo negamos ! para convertirilo en True, en caso contrario lo conviernte en FALSE.
  localStorage.setItem('tasks', JSON.stringify(tasks)); // Luego de lo almacenamos nuestro arreglo en el localStorage actualizado.
};

export default checkComplete;
