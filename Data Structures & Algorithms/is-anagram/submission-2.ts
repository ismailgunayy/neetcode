class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length != t.length) return false;
        
        const sMap = new Map();
        const tMap = new Map();

        for (const letter of s) {
            if (sMap.has(letter)) {
                sMap.set(letter, sMap.get(letter) + 1);
            } else {
                sMap.set(letter, 1);
            }
        }

        for (const letter of t) {
            if (tMap.has(letter)) {
                tMap.set(letter, tMap.get(letter) + 1);
            } else {
                tMap.set(letter, 1);
            }
        }
        
        for (const letter of s) {
            if (sMap.get(letter) != tMap.get(letter)) return false;
        }

        return true;
    }
}
