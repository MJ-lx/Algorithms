


/**
 * 排序算法的公共方法
 */
export function compareTo(a: number, b: number) {
  return a - b
}

export function less(a: number, b: number) {
  if (a - b < 0) return true
  return false
}

export function exchange(i: number, j: number, nums: number[]) {
  let temp = nums[i]
  nums[i] = nums[j]
  nums[j] = temp
}