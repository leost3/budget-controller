import { Component, OnInit } from "@angular/core";
import { BsDatepickerConfig } from "ngx-bootstrap/datepicker/public_api";
import { Expense } from "../expenses.model";
import { ExpensesService } from "../expenses.service";

@Component({
  selector: "app-expenses-details",
  templateUrl: "./expenses-details.component.html",
  styleUrls: ["./expenses-details.component.scss"]
})
export class ExpensesDetailsComponent implements OnInit {
  datepickerConfig: Partial<BsDatepickerConfig>;
  expenses: Expense[] = [];
  total: number = 0;

  constructor(private expensesService: ExpensesService) {
    this.datepickerConfig = {
      ...this.datepickerConfig,
      containerClass: "theme-dark-blue",
      minDate: new Date(2019, 10, 5),
      maxDate: new Date(2019, 10, 25),
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
    this.getTotal();
  }

  private getTotal() {
    for (let key in this.expenses) {
      console.log(this.expenses[key]);
      this.total += this.expenses[key].value;
    }
  }
}
