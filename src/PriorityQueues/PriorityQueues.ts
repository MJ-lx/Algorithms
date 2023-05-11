import { exchange, less } from "../utils";

// 第一个元素为最大的元素
export class orderedPriorityQueues {
  private nums: number[];
  private size: number;

  constructor(nums: number[]) {
    this.nums = nums;
    this.size = nums.length;
  }

  // 插入新元素（入队）
  public insert(value: number) {
    this.nums.unshift(value);
    this.size++;
    for (let j = 0; j < this.size - 1; j++) {
      if (less(this.nums[j], this.nums[j + 1])) {
        exchange(j, j + 1, this.nums)
      } else {
        break;
      }
    }
  }

  // 获取元素（出队）
  public removeMax() {
    if (this.isEmpty()) {
      return;
    }
    this.size--;
    return this.nums.shift()
  }

  public getMax() {
    return this.nums[0]
  }

  // 是否为空队列
  public isEmpty() {
    return this.size <= 0;
  }
}

export class unorderedPriorityQueues {
  private nums: number[];
  private size: number;

  constructor(nums: number[]) {
    this.nums = nums;
    this.size = nums.length;
  }

  // 插入新元素（入队）
  public insert(value: number) {
    this.nums.push(value);
    this.size++;
  }

  // 获取元素（出队）
  public removeMax() {
    if (this.isEmpty()) {
      return;
    }
    let max = 0;
    for(let i = 1; i < this.size; i++) {
      if (less(this.nums[max], this.nums[i])) {
        max = i;
      }
    }
    exchange(max, this.size - 1, this.nums);
    return this.nums.pop();
  }

  public getMax() {
    return this.nums[0]
  }

  // 是否为空队列
  public isEmpty() {
    return this.size <= 0;
  }
}