import { RPN } from "./libs/RPN";

const rpn = new RPN();

const result = rpn.evaluate("3 2 +");

console.log(result);
