/**
 * 随机打乱数组
 */

import { exchange } from "../utils"

export default function shuffling(nums: number[]) {
  const len = nums.length
  for(let i = 1; i < len; i++) {
    let r = Math.floor(Math.random() * i)
    if (r !== i) {
      exchange(i, r, nums)
    }
  }
}