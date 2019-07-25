import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ClientesAppModule } from './clientes-app/clientes-app.module';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ClientesAppModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
