class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;
        
        const sLetters = s.split("").sort();
        const tLetters = t.split("").sort();

        for (let i = 0; i < sLetters.length; i++) {
            if (sLetters[i] !== tLetters[i]) return false;
        }

        return true;
    }
}
