import { Stack } from "../ds/Stack";

export class RPN {
  public evaluate(expression: string) {
    const elements = expression.split(" ");

    const stack = new Stack();

    for (const elm of elements) {
      if (!this.isOperator(elm)) {
        // lets keep adding them to the stack, if its not an operator
        stack.push(Number(elm));
      } else {
        const operator = elm;
        const x = stack.pop();
        const y = stack.pop();
        const result = Math.floor(this.applyOperator(operator, y, x)!);

        stack.push(result);
      }
    }

    return stack.items[0];
  }

  private applyOperator(operator: string, a: number, b: number) {
    switch (operator) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return a / b;
      case "^":
        return Math.pow(a, b);
    }
  }

  private isOperator(elm: string) {
    return (
      elm === "+" || elm === "-" || elm === "*" || elm === "/" || elm === "^"
    );
  }
}
