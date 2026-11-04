class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const complementTable = new Map();

        for (let i = 0; i < nums.length; i++) {
            const complement = target - nums[i];
            
            if (complement in complementTable) {
                return [complementTable[complement], i];
            }

            complementTable[nums[i]] = i; 
        }

        return [];
    }
}
