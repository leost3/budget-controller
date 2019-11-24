import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { SideBarComponent } from "./side-bar/side-bar.component";
import { ExpensesComponent } from "./expenses/expenses.component";
import { IncomeComponent } from "./income/income.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { ExpensesFormComponent } from './expenses/expenses-form/expenses-form.component';
import { ExpensesDetailsComponent } from './expenses/expenses-details/expenses-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    ExpensesComponent,
    IncomeComponent,
    ExpensesFormComponent,
    ExpensesDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
