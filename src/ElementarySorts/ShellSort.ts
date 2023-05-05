/**
 * 希尔排序
 * 3N + 1
 */

import { exchange, less } from "./until"

export default function shellSort(nums: number[]) {
  const len = nums.length
  let step = 1
  while (step < len / 3) {
    step = 3 * step + 1
  }

  while (step > 0) {
    for (let i = step; i < len; i++) {
      for (let j = i; j >= step; j -= step) {
        if (!less(nums[j], nums[j - step])) {
          break;
        }
        exchange(j, j - step, nums)
      }
    }
    step = Math.floor(step/3)
  }
}

const nums = [0,3,4,5,22,3,5,7]

shellSort(nums)
console.log(nums)