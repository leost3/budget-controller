import { Expense } from "./expenses.model";
import { Injectable, Output } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ExpensesService {
  expenseChanged = new Subject<Expense[]>();

  paymentMethods = ["Debit", "Credit", "Cash"];
  categories = {
    Housing: ["Hydro-Quebec", "Cellphone", "Internet"],
    Transportation: ["Opus-card", "Uber"],
    Enterteinment: [
      "Beers",
      "Bar",
      "Cinema",
      "Party",
      "Travelling",
      "Barbacue",
      "Basketball"
    ],
    Fooding: ["Market", "Eat Out", "Snacks"],
    Education: ["Courses", "books", "magazines"],
    Health: ["medicines"],
    Products: ["Products"],
    Personal: ["Hairdresser"]
  };

  subcategories = [];

  expenses: Expense[] = [
    new Expense(
      new Date().toDateString(),
      "Fun",
      "Credit card",
      "party hard",
      120
    ),
    new Expense(new Date().toDateString(), "beer", "cash", "barzinho", 10)
  ];
  constructor() {}

  getCategories() {
    return { ...this.categories };
  }
  getPaymentMethods() {
    return [...this.paymentMethods];
  }

  getExpenses() {
    return [...this.expenses];
  }

  addExpenses(addedExpenses: Expense) {
    this.expenses = [...this.expenses, addedExpenses];
    this.expenseChanged.next([...this.expenses]);
  }

  removeExpenseItem(index: number) {
    this.expenses.splice(index, 1);
    this.expenseChanged.next([...this.expenses]);
  }
}
