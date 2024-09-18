import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardDetailsComponent } from './root/components/card-details/card-details.component';
import { specialGuardGuard } from './guards/special-guard.guard';
import { LoginServiceService } from './services/login-service.service';

const routes: Routes = [

{
    path: 'card-details',
    canActivate: [specialGuardGuard],
    canLoad: [specialGuardGuard],
    component: CardDetailsComponent
},



{
  path: '',

    loadChildren: () => import('./privecy/privecy.module')
      .then(module => module.PrivecyModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[specialGuardGuard]

})
export class AppRoutingModule { }
