import { exchange, less } from "../utils";

// 从1开始计数，按照数组的index需要减一
export class BinaryHeaps {
  private nums: number[];
  private size: number;

  constructor(nums: number[]) {
    this.nums = nums;
    this.size = nums.length;
  }

  // 下沉 - 处理父节点小于子节点的情况 （所以的-1都是基于数组的偏移量，为了方便理解未合并计算）
  // 仅在取数组值时修正即可
  public sink(k: number) {
    while (k * 2 <= this.size) {
      let j = k * 2;
      if (j + 1 - 1 < this.size && less(this.nums[j - 1], this.nums[j + 1 - 1])) {
        j++;
      }
      exchange(j, k, this.nums);
      k = j * 2;
    }
  }

  // 上浮 - 处理子节点大于父节点的情况（所以的-1都是基于数组的偏移量，为了方便理解未合并计算）
  // 仅在取数组值时修正即可
  public swim(k: number) {
    while (Math.floor(k / 2) > 0) {
      const j = Math.floor(k / 2);
      if (less(this.nums[j - 1], this.nums[k])) {
        exchange(j - 1, k, this.nums)
      }
      k = j;
    }
  }

  public insert(value: number) {
    this.nums.push(value);
    this.swim(this.size);
    this.size++;
  }

  public removeMax() {
    exchange(0, this.size - 1, this.nums);
    const value = this.nums.pop();
    this.sink(1);
    return value;
  }
}