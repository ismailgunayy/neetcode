class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const numberSet = new Set<number>()

        for (const num of nums) {
            if (numberSet.has(num)) {
                return true
            } else {
                numberSet.add(num)
            }
        }

        return false
    }
}
