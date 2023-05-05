/**
 * 选择排序
 */

import { exchange, less } from "./until";

export default function selectionSort(nums: number[]) {
  const len = nums.length;
  for(let i = 0; i < len; i ++) {
    let min = i;
    for(let j = i; j < len; j++) {
      if (less(nums[j], nums[min])) {
        min = j;
      }
    }
    exchange(i, min, nums)
  }
}

const nums = [0,3,4,5,22,3,5,7]

selectionSort(nums)
console.log(nums)