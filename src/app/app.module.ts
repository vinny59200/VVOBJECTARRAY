import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SanitizeHtmlPipe } from './sanitizehtml.pipe'

@NgModule({
  declarations: [
    SanitizeHtmlPipe,
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SanitizeHtmlPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
