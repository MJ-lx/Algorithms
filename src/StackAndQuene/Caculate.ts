/**
 * 使用两个栈实现算式运算, 不具有通用性（用括号来标识运算顺序）
 * 1. 一个栈存储数值，一个栈存储操作符
 * 2. 遇到右括号时进行，从栈中取出数值和操作符进行计算
 */
export default function Caculate(expressStr: string[]) {
  const numStack: number[] = []; // 数字栈
  const symbolStack: string[] = []; // 符号栈
  const operatorArray = ['+', '-', '*', '/']; // 有效计算字符

  for (let i = 0; i < expressStr.length; i++) {
    // 如果是数字就推入数字栈中
    if (!isNaN(parseInt(expressStr[i]))) {
      numStack.push(parseInt(expressStr[i]));
      continue;
    }

    if (expressStr[i] === '(') continue;
    // 遇到右括号立即运算
    if (expressStr[i] === ')') {
      if (numStack.length < 2 || symbolStack.length < 1) {
        return false;
      }
      const result = computedResult(numStack.pop() || 0, numStack.pop() || 0, symbolStack.pop()|| '')
      result && numStack.push(result);
    }
    // 如果为有效计算符号则推入符号栈
    if (operatorArray.includes(expressStr[i])) {
      symbolStack.push(expressStr[i]);
    }
  }

  // 读取完毕后进行剩余部分计算
  if (numStack.length > 1) {
    while (numStack.length > 1 || symbolStack.length) {
      const result = computedResult(numStack.pop() || 0, numStack.pop() || 0, symbolStack.pop()|| '')
      result && numStack.push(result);
    }
  }

  return numStack.pop();
}


function computedResult(num1: number, num2: number, symbol: string) {
  switch (symbol) {
    case '+':
      return num2 + num1;
    case '-':
      return num2 - num1;
    case '*':
      return num2 * num1;
    case '/':
      return num2 / num1;
  };
}
