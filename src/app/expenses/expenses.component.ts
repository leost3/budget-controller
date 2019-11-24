import { BsDatepickerConfig } from "ngx-bootstrap/datepicker";
import { ExpensesService } from "./expenses.service";
import { Component, OnInit } from "@angular/core";
import { Expense } from "./expenses.model";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-expenses",
  templateUrl: "./expenses.component.html",
  styleUrls: ["./expenses.component.scss"]
})
export class ExpensesComponent {}
