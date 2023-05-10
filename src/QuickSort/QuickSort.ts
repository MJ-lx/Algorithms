import { exchange, less } from "../utils";

/**
 * 分区 - 左边小于目标元素；右边大于目标元素
 * @param nums 待排序数组
 * @param lo 
 * @param he 
 * @returns 目标元素的指针位置
 */
export function partition(nums: number[], lo: number, he: number) {
  const target = nums[lo]; // 目标元素，为了理解方便
  let left = lo;
  let right = he + 1;

  // 当左右指针交互后退出循环
  while (left < right) {
    while (less(nums[++left], target)) {
      if (left === he) break;
    }

    while (less(target, nums[--right])) {
      if (right === lo) break;
    }
    if (left < right) {
      // 交换左右指针元素
      exchange(left, right, nums);
    }

  }
  // 交换右指针与目标元素
  exchange(lo, right, nums);
  return right;
}

export default function quickSort(nums: number[], lo: number, he: number) {
  if (lo >= he) return;
  const j = partition(nums, lo, he);
  quickSort(nums, lo, j - 1);
  quickSort(nums, j + 1, he);
}


// 测试数据
// const nums = [0, 9, 6, 5, 22, 3, 13, 7]
// quickSort(nums, 0, 7)
// console.log(nums)