import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { StudentListComponent } from './components/student-list/student-list.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'student/list', component: StudentListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
