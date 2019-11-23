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
export class ExpensesComponent implements OnInit {
  datepickerConfig: Partial<BsDatepickerConfig>;
  expenses: Expense[] = [];
  constructor(private expensesService: ExpensesService) {
    this.datepickerConfig = {
      ...this.datepickerConfig,
      containerClass: "theme-dark-blue",
      // minDate: new Date(2019, 10, 5),
      // maxDate: new Date(2019, 10, 25),
      dateInputFormat: "DD/MM/YYYY",
      isAnimated: true,
      customTodayClass: "custom-today-class",
      selectFromOtherMonth: false
    };
  }

  ngOnInit() {
    this.expenses = this.expensesService.getExpenses();
    this.expensesService.expenseChanged.subscribe((expenses: Expense[]) => {
      this.expenses = expenses;
    });
  }

  onSubmit(e: NgForm) {
    console.log(e.value);
    const ex = new Expense(
      e.value.date,
      e.value.category,
      e.value.payment,
      e.value.description,
      e.value.value
    );
    this.expensesService.addExpenses(ex);
  }
}
