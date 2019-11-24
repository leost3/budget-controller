export class Expense {
  // public date: {
  //   day: "string";
  //   month: "string";
  //   year: "string";
  // };
  public date: string;
  public category: string;
  public paymentMethod: string;
  public description: string;
  public value: number;

  constructor(
    // date: {
    //   day: "string";
    //   month: "string";
    //   year: "string";
    // },
    date: string,
    category: string,
    paymentMethod: string,
    description: string,
    value: number
  ) {
    this.date = date;
    this.category = category;
    this.paymentMethod = paymentMethod;
    this.description = description;
    this.value = value;
  }
}
