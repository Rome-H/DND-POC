import { firebaseConfig } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GenericCanvasComponent } from './generic-canvas/generic-canvas.component';
import { SeatsSectionComponent } from './seats-section/seats-section.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { AngularFireModule } from 'angularfire2';

@NgModule({
  declarations: [
    AppComponent,
    GenericCanvasComponent,
    SeatsSectionComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
