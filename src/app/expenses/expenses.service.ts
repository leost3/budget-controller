import { Expense } from "./expenses.model";
import { Injectable, Output } from "@angular/core";
import { EventEmitter } from "events";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ExpensesService {
  expenseChanged = new Subject<Expense[]>();

  expenses: Expense[] = [
    new Expense(new Date(), "category1", "card", "description", 10),
    new Expense(new Date(), "category1", "card", "description", 10)
  ];
  constructor() {}

  getExpenses() {
    return [...this.expenses];
  }

  addExpenses(addedExpenses: Expense) {
    console.log(addedExpenses);
    this.expenses = [...this.expenses, addedExpenses];
    this.expenseChanged.next([...this.expenses]);
  }
}
