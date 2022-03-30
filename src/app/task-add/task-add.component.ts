import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TaskStorageService } from '../task-storage.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {

titleValue = new FormControl ("");
descriptionValue = new FormControl ("");




  constructor(private storage: TaskStorageService, private router: Router) { }

  ngOnInit(): void {
  }

add() {
  this.storage.create(this.titleValue.value, this.descriptionValue.value);
  this.router.navigate(["/tasks"]);
}

}
