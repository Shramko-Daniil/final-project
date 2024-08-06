import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { TimeTableComponent } from './time-table/time-table.component';
import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { LightInfoComponent } from './light-info/light-info.component';

const routes: Routes = [
  {
    component: AppComponent,
    path: '',
    children: [
      {
        component: MainComponent,
        path: '',
      },
      {
        component: TimeTableComponent,
        path: 'time-table',
      },
      {
        component: LightInfoComponent,
        path: 'light-info',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
