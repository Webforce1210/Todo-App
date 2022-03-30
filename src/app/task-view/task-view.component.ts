import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { Task } from '../models/task.model';
import { TaskStorageService } from '../task-storage.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css']
})
export class TaskViewComponent implements OnInit {

  constructor(private router :Router , private route :ActivatedRoute, private storage :TaskStorageService) { 

  }

  task:Task|null=null;

  deleteTask(task:Task | null){
    if(task === null){
      alert('alerte')
    }
    else{
      this.storage.delete(task.id);
      this.router.navigate(['/tasks']);
    }
  }
  ngOnInit(): void {

    this.storage.init();
    this.route.paramMap.subscribe(param=>{
      
      this.task = this.storage.getTask(param.get('id')) as Task;

      
    })  
  }

}
