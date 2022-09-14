export const toDoList = []

class toDoItem {
    constructor(title,description,importance,dueDate,project){
        this.title = title;
        this.description = description
        this.dueDate = dueDate
        this.importance = importance
        this.project = project
    }
    setTitle(title){
        this.title = title
    }
    setProject(project){
        this.project = project
    }
}

export function newToDo(title,description,importance,dueDate,project) {
    toDoList.push(new toDoItem (title,description,importance,dueDate,project))
}

export function deleteTask (title) { 
    toDoList.splice(toDoList.indexOf(toDoList.find(x => x.title == title)))
    document.getElementById(title).remove()
}
