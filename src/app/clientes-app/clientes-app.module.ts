import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteService } from '../services/cliente.service';
import { DirectivaComponent } from './pages/directiva/directiva.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { FormComponent } from './pages/form/form.component';


import { registerLocaleData } from '@angular/common';
import localeES from '@angular/common/locales/es';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
registerLocaleData(localeES, 'es');

@NgModule({
    declarations: [
        DirectivaComponent,
        ClientesComponent,
        FormComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule
    ],
    exports: [
    ],
    providers: [ClienteService, { provide: LOCALE_ID, useValue: 'es' }],
})

export class ClientesAppModule { }