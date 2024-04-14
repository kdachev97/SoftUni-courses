import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AccessGuard } from './guards/access.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'about',
    canActivate: [AccessGuard],
    component: AboutComponent
  }
];

export const AppRoutingModule = RouterModule.forRoot(routes);