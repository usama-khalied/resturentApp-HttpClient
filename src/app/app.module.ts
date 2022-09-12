import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRestoComponent } from './add-resto/add-resto.component';
import { UpdateRestoComponent } from './update-resto/update-resto.component';
import { ListRestoComponent } from './list-resto/list-resto.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FullDetailedComponent } from './full-detailed/full-detailed.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePiComponent } from './date-pi/date-pi.component';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { DirectiveComponent } from './directive/directive.component';
import { PracdirectiveDirective } from './directive/pracdirective.directive';
import { ChildComponent } from './child/child.component';
@NgModule({
  declarations: [
    AppComponent,
    AddRestoComponent,
    UpdateRestoComponent,
    ListRestoComponent,
    LoginComponent,
    RegisterComponent,
    FullDetailedComponent,
    DatePiComponent,
    DirectiveComponent,
    PracdirectiveDirective,
    ChildComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    NgxDaterangepickerMd.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    console.log("Hellow to the constructor ")
  }
}
