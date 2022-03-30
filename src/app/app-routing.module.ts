import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TodoComponent} from './todo/todo.component'
import {TaskAddComponent} from './task-add/task-add.component';
import {TaskEditComponent} from './task-edit/task-edit.component';
import {TaskViewComponent} from './task-view/task-view.component';

const routes: Routes = [
  {
    path: 'tasks',
    component: TodoComponent
  },
  {
    path: 'tasks/add',
    component: TaskAddComponent
  },
  {
    path: 'tasks/edit/:id',
    component: TaskEditComponent
  },
  {
    path: 'tasks/:id',
    component: TaskViewComponent
  },
  {
    path: '',
    redirectTo: '/tasks',
    pathMatch: 'full'
  },
  {
    path: 'tasks/edit',
    redirectTo: '/tasks',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
