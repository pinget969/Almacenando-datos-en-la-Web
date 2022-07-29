import { createTask } from "./addTask.js";
import { uniqueDates, orderDates } from "./services/date.js";
import dateElement from "./dateElement.js";

export const displayTasks = () =>{ //esta función es llamada en cada acción de las tareas(borrar, completar, agregar)
    const list = document.querySelector("[data-list]");
    const tasksList = JSON.parse(localStorage.getItem("tasks")) || [];
    const dates = uniqueDates(tasksList); // dates es la Fecha unica
    orderDates(dates);
    dates.forEach((date) =>{
        const dateMoment = moment(date, "DD/MM/YYYY");
        list.appendChild(dateElement(date));
        tasksList.forEach((task) => {
            const taskDate = moment(task.dateFormat, 'DD/MM/YYYY');
            const diff = dateMoment.diff(taskDate); // si la diferencia entre ambas es =0, significa que es la misma fecha
            if(diff == 0){
                list.appendChild(createTask(task));
            };
        });
    });
//recorriendo forEch guardado
};