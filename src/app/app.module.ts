import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AppRouting } from './app.routes';
import { MVComponentsModule } from 'mv-core'


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    AppRouting,
    HttpClientModule,
    MVComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
