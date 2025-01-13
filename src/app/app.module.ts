import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MaterialModule } from "./shared/ui-libs/material.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TodoHomeModule } from "./todo-home/todo-home.module";
import { ReusableAddComponent } from './reusable-add/reusable-add.component';
import { PopupEmulatorComponent } from './popup-emulator/popup-emulator.component';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, ReusableAddComponent, PopupEmulatorComponent,],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    TodoHomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
