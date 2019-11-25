import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/angular-material.module';
import { NavComponent } from './nav/nav.component';
import { NotesComponent } from './notes/notes.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './shared/search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NotesComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
