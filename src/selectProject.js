import { toDoList } from "./toDo"

export var currentProject = "defaultproject"
export function selectProject(removeSpaces){
    currentProject = removeSpaces
    taskVisibility(removeSpaces)
    console.log("Success")
    changeHeader(removeSpaces)
}

export function changeHeader (removeSpaces){
 const allTasks = document.querySelectorAll(".projectheaders")
 for (var i=0; i<allTasks.length; i++) {
    allTasks[i].style.color="white";
}
    document.getElementById(removeSpaces).style.color="#0f202b"
}

function taskVisibility(currentProject){
    if (currentProject == 'defaultproject'){
    toDoList.forEach(element => {
        const title = element.title
        const noSpaces = title.replaceAll(" ", "")
        const getID = document.getElementById(noSpaces)
        if (getID !== null){
        getID.style.visibility="visible"}
    });
    }
    else
    {const selected = (toDoList.filter(function (x){
        return x.project == currentProject
    }))
    const unselected = (toDoList.filter(function (x){
        return x.project !== currentProject
    }))
    unselected.forEach(element => {
        const title = element.title
        const noSpaces = title.replaceAll(" ", "")
        const projectName= element.project
        const getID = document.getElementById(noSpaces)
        if (getID !== null){
        getID.style.visibility="hidden"}
    });
    selected.forEach(element => {
        const title = element.title
        const noSpaces = title.replaceAll(" ", "")
        const projectName= element.project
        const getID = document.getElementById(noSpaces)
        if (getID !== null){
            const parentNode = document.getElementById("taskgrid")
            parentNode.insertBefore(getID,parentNode.children[0])
            getID.style.visibility="visible"}
    });}
}
