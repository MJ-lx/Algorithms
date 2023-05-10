import { partition } from "./QuickSort";

export default function selectionQuickSort(nums: number[], k: number) {
  if (k < 0 || k > nums.length - 1) return;
  let low = 0;
  let hei = nums.length - 1;
  while(true) {
    // 当左右指针交互时，寻找结束
    if (low >= hei) break;
    const j = partition(nums, low, hei);
    if (j < k) {
      low = j + 1;
    } else if (j > k) {
      hei = j - 1;
    } else {
      return nums[j]
    }
  }

  return nums[k]
}

// 测试数据
// const nums = [0, 9, 6, 5, 22, 3, 13, 7]
// const target = selectionQuickSort(nums, 7)
// console.log(target)