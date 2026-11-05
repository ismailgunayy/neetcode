class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    // []
    isValid(s: string): boolean {
        const brackets = {
            "}": "{",
            ")": "(",
            "]": "[",
        };

        const stack: string[] = [];

        for (const bracket of s) {
            if (brackets[bracket]) {
                if (stack.length > 0 && stack[stack.length - 1] === brackets[bracket]) {
                    stack.pop();
                } else {
                    return false;
                }
            } else {
                stack.push(bracket);
            }

            console.log(stack)
        }

        return stack.length === 0;
    }
}
