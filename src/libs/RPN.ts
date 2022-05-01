import { Stack } from "../ds/Stack";

export class RPN {
  public evaluate(expression: string): number | undefined {
    if (expression === "") {
      throw new Error("Empty expression.");
    }

    const elements = expression.split(" ");

    const stack = new Stack();

    for (const elm of elements) {
      if (!this.isOperator(elm)) {
        // lets keep adding them to the stack, if its not an operator

        const n = Number(elm);

        if (isNaN(n)) {
          throw new Error(`Invalid operator used: '${elm}'`);
        }

        stack.push(n);
      } else {
        const operator = elm;
        const x = stack.pop();
        const y = stack.pop();

        if (!x || !y) {
          throw new Error(
            "Invalid expression. Missing operands for operator: " + operator
          );
        }

        const evaluation = this.applyOperator(operator, y, x);

        if (!evaluation) {
          throw new Error("Invalid expression.");
        }

        const result = Math.floor(evaluation);

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
