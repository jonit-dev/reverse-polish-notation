export class Stack {
  public items: any[];

  constructor() {
    this.items = [];
  }

  public push(val: any) {
    return this.items.push(val);
  }

  public pop() {
    return this.items.pop();
  }
}
