import { changeHeader, selectProject } from "./selectProject";
import { toDoList } from "./toDo";

export function deleteProject(projectName){
    const projectCloseIcon = document.getElementById("icon"+projectName)
    projectCloseIcon.addEventListener("click",function(){
        let projectParentName = projectCloseIcon.parentNode.id
        toDoList.forEach(element => {
        if (element.project == projectName){
            document.getElementById(element.title).remove()
            const index = toDoList.indexOf(element)
            toDoList.splice(index,1)
        }
    });
    document.getElementById(projectName).remove()
    changeHeader('defaultproject')
})}

