import { compareTo, exchange } from "../utils";

/**
 * 三分区法-优化有大量重复数据的排序
 * @param nums 
 * @param lo 
 * @param he 
 * @returns 目标元素的位置指针和左指针（两者中间为相等区域）
 */
function threeWayPartition(nums: number[], lo: number, he: number) {
  let target = lo;
  let left = lo;
  let right = he;

  // 只做了左边元素的对比，防止边缘情况的遗落，需要包含左右指针相等时的比较
  while (left <= right) {
    const compare = compareTo(nums[left], nums[target]);
    if (compare < 0) {
      exchange(left, target, nums);
      left++;
      target++;
    } else if (compare > 0) {
      exchange(left, right, nums);
      right--;
    } else {
      left++;
    }
  }

  return {
    target,
    left
  }
}


export default function threeWayQickSort(nums: number[], lo: number, he: number) {
  if (lo >= he) return;
  const { target, left } = threeWayPartition(nums, lo, he);
  threeWayQickSort(nums, lo, target - 1);
  threeWayQickSort(nums, left + 1, he);
}

// 测试数据
// const nums = [9, 0, 3, 2, 9, 3, 9, 2, 0, 3, 9, 0]
// threeWayQickSort(nums, 0, 11)
// console.log(nums)