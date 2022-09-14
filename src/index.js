import './style.css';
import {toDoList, newToDo,deleteTask} from './toDo.js';
import {selectProject,currentProject} from './selectProject'
import {deleteProject} from './deleteProject.js'
import Icon1 from '../src/icons8-cancel-50.png'
import Icon2 from '../src/icons8-close-50.png'

currentProject


// ADDS PROJECT

let addProjectBTN = document.getElementById("addProject")
addProjectBTN.addEventListener("click",function (){
    let projectName= document.getElementById("projectname").value
    document.getElementById("projectname").value = ""
    const li = document.createElement("li")
    const removeSpaces = projectName.replaceAll(" ","")
    li.setAttribute('id',removeSpaces )
    li.classList.add("projectheaders")
    li.innerHTML=`
    <span onclick="selectProject('${removeSpaces}')" class='projectspanheader'>${projectName}</span> <img class="projecticon" id="icon${removeSpaces}" src='../src/icons8-close-50.png'>
    `
    document.getElementById("projectList").appendChild(li)
    deleteProject(removeSpaces)
})




// ADDS TASK
let addTaskBTN = document.getElementById("addTask")
addTaskBTN.addEventListener("click",function(){
    let title = document.getElementById("taskName").value
    document.getElementById("taskName").value = ""
    let description = document.getElementById("taskDescription").value
    document.getElementById("taskDescription").value = ""
    let importance = document.getElementById("importance").checked
    document.getElementById("importance").checked = ""
    let dueDate = document.getElementById("dueDate").value
    document.getElementById("dueDate").value = ""
    let project = currentProject
    newToDo(title,description,importance,dueDate,project)
    console.log(toDoList)
    taskHTML(title,description,importance,dueDate,project)
})

// WRITES TASK CARD

function taskHTML(title,description,importance,dueDate){
    const taskList = document.getElementById("taskgrid")
    const newTask = document.createElement("div")
    newTask.classList.add("taskcards")
    newTask.setAttribute('id',title.replaceAll(" ",""))
    newTask.innerHTML=`
    <h3>${title}</h3> <img onclick="deleteTask('${title.replaceAll(" ","")}')" id="closebutton" src="../src/icons8-cancel-50.png">
    <p id="dueDate">${dueDate}</p>
    <p id="description">${description}</p>
`   
    if (importance == true){
            newTask.style.boxShadow= "0px 0px 11px 2px #BC3228"
    } else {
        newTask.style.boxShadow= "0px 0px 11px 2px rgba(0,0,0,0.45)"
    }
     taskList.appendChild(newTask)
     taskList.insertBefore(newTask,taskList.children[0])
}



window.deleteTask = deleteTask
window.toDoList =toDoList
window.selectProject =selectProject
window.projectName = projectName
window.changeActiveProject = changeActiveProject
window.currentProject = currentProject
