import { ExpensesService } from "./../expenses.service";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Expense } from "../expenses.model";

@Component({
  selector: "app-expenses-form",
  templateUrl: "./expenses-form.component.html",
  styleUrls: ["./expenses-form.component.scss"]
})
export class ExpensesFormComponent implements OnInit {
  constructor(private expensesService: ExpensesService) {}
  todayDate = new Date().getDate();
  paymentMethods = [];
  categories;

  subcategories = [];

  ngOnInit() {
    this.categories = this.expensesService.getCategories();
    this.getSubcategories();
    this.paymentMethods = this.expensesService.getPaymentMethods();
  }

  private getSubcategories() {
    for (let key in this.categories) {
      this.subcategories = [...this.subcategories, ...this.categories[key]];
    }
  }
  onSubmit(expensesForm: NgForm) {
    const addedExpenses = new Expense(
      expensesForm.value.date.toDateString(),
      expensesForm.value.category,
      expensesForm.value.payment,
      expensesForm.value.description,
      +expensesForm.value.value
    );

    this.expensesService.addExpenses(addedExpenses);
  }
}
