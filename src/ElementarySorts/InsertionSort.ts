/**
 * 插入排序
 */

import { exchange, less } from "../utils"

export default function insertionSort(nums: number[]) {
  const len = nums.length
  for (let i = 1; i < len; i++) {
    for (let j = i; j > 0; j--) {
      if (!less(nums[j], nums[j - 1])) {
        break
      } 
      exchange(j, j - 1, nums)
    }
  }
}

const nums = [0,3,4,5,22,3,5,7]

insertionSort(nums)
console.log(nums)

