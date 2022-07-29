import checkComplete from './checkComplete.js';
import deleteIcon from './deleteIcon.js';
import { displayTasks } from './readTasks.js';

export const addTask = (evento) =>{
    evento.preventDefault();

    const list = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const calendar = document.querySelector('[data-form-date]');

    const value = input.value;
    const date = calendar.value;
    const dateFormat = moment(date).format("DD/MM/YYYY");

    if(value ==0 || date==0){
        return
    }
    input.value = '';
    calendar.value= "";


    const complete = false
//lugar de valor
    const taskobj ={
        value,
        dateFormat,
        complete,  //Todos los elementos agregados comienzan en Falso
        id: uuid.v4() //IDENTIFICADOR, es el que nos marca  cual está completado o hay que borrar.
        };

        list.innerHTML = '';
//lugar de clave
    const taskList = JSON.parse(localStorage.getItem("tasks")) || []; //o La constante tasks empezaría con un arreglo vacio
    taskList.push(taskobj); //almacenamos tasks en tasklist
    //taskList.push({value, dateFormat});
    localStorage.setItem("tasks", JSON.stringify(taskList)); //volver a almacenar el arreglo de taskList actualiado en tasks

    displayTasks();
    //const task = createTask(taskobj); //Crea una tarea que recibe como parametro un objeto / 
    //list.appendChild(task); // agregamos la task creada en la const list.
    };
 
export const createTask = ({ value, dateFormat, complete, id}) => {
    const task = document.createElement('li');
    task.classList.add('card');
    
    const taskContent = document.createElement('div');//almacenando datos
    console.log(complete);
    const check = checkComplete(id); // Continua en otra Pestaña
    if(complete){  // SI el elemengo agregado es VERDADERO, aplica los estilos.
        console.log('completada');
        check.classList.toggle('fas');
        check.classList.toggle('completeIcon');
        check.classList.toggle('far');
    };
    const titleTask = document.createElement('span');
        titleTask.classList.add('task');
        titleTask.innerText = value;
        taskContent.appendChild(check);
        taskContent.appendChild(titleTask);
    
    //const dateElement = document.createElement("span");  // fecha junto a la descripción de la tarea
      //  dateElement.innerHTML = dateFormat;   // fecha junto a la descripción de la tarea
        task.appendChild(taskContent);
        //task.appendChild(dateElement); // fecha junto a la descripción de la tarea
        task.appendChild(deleteIcon(id));
    return task;
};