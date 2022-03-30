import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { Task } from '../models/task.model';
import { TaskStorageService } from '../task-storage.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {

  constructor(private router :Router , private route :ActivatedRoute, private storage :TaskStorageService) {

  }

  task:Task|null=null;

  titleValue = new FormControl ("");

  descriptionValue = new FormControl ("");


  ngOnInit(): void {
// 1) on recupère l'id de notre task
    this.storage.init();
    this.route.paramMap.subscribe(param=>{
      // 2) on recupère le task depuis le service.ts
      this.task = this.storage.getTask(param.get('id')) as Task;

      this.titleValue.setValue(this.task.title);
      this.descriptionValue.setValue(this.task.description);
    })
    
  }

  updateTask(){

  if(this.task){
  this.task.title = this.titleValue.value;
  this.task.description = this.descriptionValue.value;
}else{
  alert('attention pas de tache en cours');
}
  this.storage.update(this.task);
  this.router.navigate(['/tasks']);


  }
}





// 3) on affiche les données de notre task dans notre Template.html et dans nos champs de saisie
// 4) on crée une fonction updateTask(id: string) dans notre component.ts qui appelle une autre fonction update(id: string) dans votre fichier : service.ts

// 5)la méthode update(task: Task ) de notre fichier service.ts doit chercher le bon task dans le tableau tasks et remplacer les valeur par celles du paramètre task
// puis on renvoie l'utilisateur vers la route /tasks
