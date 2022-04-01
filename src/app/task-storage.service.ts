import { Injectable } from '@angular/core';
import { Task } from './models/task.model';
let jsonFile = require('../assets/data.json');
let uniqid = require('uniqid'); 


@Injectable({
  providedIn: 'root'
})
export class TaskStorageService {

  deleteTask:Task [] = [];
  tasks: Task [] = [];

  constructor() { }

  initialized: boolean = false;

init() {

if(this.initialized) {
  return; 
} 
for (const task of jsonFile.task_init) {
  this.tasks.push(new Task(task.id, task.title, task.description))
}

this.initialized = true;
};



create(title: string, description: string) {

this.init();
let unicid =uniqid();
this.tasks.push(new Task(unicid, title, description));

}

delete(id: string){

  let remainingTasks: Task [] = [];

  for (const tache of this.tasks) {
    if (tache.id !== id){
      remainingTasks.push(tache);
    }
    else{
      this.deleteTask.push(tache)
    }
  }
  this.tasks = remainingTasks;
  console.log(this.tasks);  
}

getTasks(){
  return this.tasks;

}

  getTask(id:string | null):Task | null{
    
    this.init();
    
    let task:Task|null=null;
    for (let i=0 ;i< this.tasks.length;i++){
      if(id === this.tasks[i].id){
        task=this.tasks[i];
        break;
      }
      else{
        task =  null;
      }
    }
    return task;
  }

update(task:Task | null){

  for(let i=0;i<this.tasks.length;i++){
    if(task && task.id ===this.tasks[i].id ){
      this.tasks[i].title = task.title;
      this.tasks[i].description= task.description;
    }
  }

}
}
