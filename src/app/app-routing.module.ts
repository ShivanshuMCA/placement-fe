import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CollegesListComponent } from './components/colleges-list/colleges-list.component';
import { AddCollegeFormComponent } from './components/add-college-form/add-college-form.component';
import { CoursesComponent } from './components/courses/courses.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },

  {
    path: 'colleges',
    component: CollegesListComponent,
  },
  {
    path: 'courses',
    component: CoursesComponent,
  },
  { path: 'add-college', component: AddCollegeFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
