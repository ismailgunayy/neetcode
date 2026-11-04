const LOWERCASE_A = 'a'.charCodeAt(0);

class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

    groupAnagrams(strs: string[]): string[][] {
        const countMaps = new Map<string, string[]>();

        for (const str of strs) {
            const frequencyArray = new Array(26).fill(0);
            
            for (const letter of str) {
                frequencyArray[letter.charCodeAt(0) - LOWERCASE_A]++;
            }

            const key = frequencyArray.join(',')

            const anagrams = countMaps.get(key) ?? [];
            anagrams.push(str);
            countMaps.set(key, anagrams);
        }

        return [...countMaps.values()];
    }
}
