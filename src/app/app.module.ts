import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShowComponent } from './show/show.component';
import { EmpService } from './emp.service';


@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    AddComponent,
    HomeComponent,
    NavbarComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [EmpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
