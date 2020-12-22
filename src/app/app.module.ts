import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DeskComponent } from './desk/desk.component';
import { DeskFormComponent } from './desk-form/desk-form.component';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { DeskFilterPipe } from './shared/desk-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DeskComponent,
    DeskFormComponent,
    DeskFilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
