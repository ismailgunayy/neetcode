const OPENING_BRACKETS = ['[', '(', '{'];

const brackets = {
    "}": "{",
    ")": "(",
    "]": "[",
};

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    // []
    isValid(s: string): boolean {
        const stack: string[] = [];

        for (const bracket of s) {
            if (OPENING_BRACKETS.includes(bracket)) {
                stack.push(bracket);
            } else if (stack[stack.length - 1] === brackets[bracket]) {
                stack.pop();
            } else {
                return false;
            }
        }

        return stack.length === 0;
    }
}
