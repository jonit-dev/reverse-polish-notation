import { RPN } from "./libs/RPN";

const rpn = new RPN();

const result = rpn.evaluate("3 4 + 2 * 1 +");

console.log(result);
