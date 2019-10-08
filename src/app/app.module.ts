import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';

@NgModule({
	imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
	declarations: [AppComponent, OneComponent, TwoComponent, ThreeComponent],
	bootstrap: [AppComponent]
})
export class AppModule {}
