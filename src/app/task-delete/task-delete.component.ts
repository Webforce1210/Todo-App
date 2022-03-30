import { Component, OnInit } from '@angular/core';
import { TaskStorageService } from '../task-storage.service';
import { Task } from '../models/task.model';


@Component({
  selector: 'app-task-delete',
  templateUrl: './task-delete.component.html',
  styleUrls: ['./task-delete.component.css']
})
export class TaskDeleteComponent implements OnInit {

  deletetache: Task[] = [];

  constructor(private storage: TaskStorageService) { }

  ngOnInit(): void {

    this.deletetache = this.storage.deleteTask

  }


  active:boolean=false;
  activated(){
    this.active = ! this.active
  }
}
