const map = {
  "]": "[",
  ")": "(",
  "}": "{",
};
export const isValid = (s: string) => {
  let stack = [];
  let i = 0;
  while (i <= s.length - 1) {
    const current = s[i];
    if (current === "[" || current === "{" || current === "(") {
      stack.push(current);
    } else if (stack[stack.length - 1] === map[current]) {
      stack.pop();
    } else {
      return false;
    }

    i += 1;
  }
  return stack.length === 0;
};
