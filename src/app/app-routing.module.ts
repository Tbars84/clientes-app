import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivaComponent } from './clientes-app/pages/directiva/directiva.component';
import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './clientes-app/pages/clientes/clientes.component';
import { FormComponent } from './clientes-app/pages/form/form.component';

const routes: Routes = [
  { path: '', redirectTo: '/clientes', pathMatch: 'full' },
  { path: 'directivas', component: DirectivaComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'clientes/form', component: FormComponent },
  { path: 'clientes/form/:id', component: FormComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
