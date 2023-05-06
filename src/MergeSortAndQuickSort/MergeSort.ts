import { less } from "../utils";


// 合并low到mid和mid+1到hi两个已排序的数组
function merge(nums: number[], low: number, mid: number, hi: number) {
  let left = low;
  let right = mid + 1;

  const temp = [...nums]; // 复制原始已排序的数组

  for (let i = low; i <= hi; i++) {
    if (left > mid) {
      // 当左半部分对比完只剩右边时
      nums[i] = temp[right];
      right++;
    } else if (right > hi) {
      // 当右半段对比完只剩左边时
      nums[i] = temp[left];
      left++;
    } else if (less(temp[right], temp[left])) {
      // 当右半部分当前元素小于左半部分当前元素时
      nums[i] = temp[right];
      right++;
    } else {
      nums[i] = temp[left];
      left++;
    }
  }
}

// 注意边界情况，对比是闭区间
export function mergeSortByRecursion(nums: number[], low = 0, hi: number) {
  if (hi <= low) return;
  const mid = low + Math.floor((hi - low) / 2);
  mergeSortByRecursion(nums, low, mid);
  mergeSortByRecursion(nums, mid + 1, hi);
  merge(nums, low, mid, hi);
}

// 注意hi的取值的边界
// size以两倍的速率进行递增
export function mergeSortByIteration(nums: number[]) {
  let len = nums.length;

  // size 为小半边的长度
  for (let size = 1; size < len; size += size) {
    for (let low = 0; low < len - size; low += size + size) {
      merge(nums, low, low + size - 1, Math.min(low + size + size - 1, len - 1))
    }
  }
}


const nums = [0, 3, 6, 5, 22, 3, 5, 7]

mergeSortByIteration(nums)
// mergeSortByRecursion(nums, 0, nums.length - 1)
console.log(nums)