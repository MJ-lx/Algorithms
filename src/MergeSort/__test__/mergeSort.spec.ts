import { mergeSortByRecursion, mergeSortByIteration } from '../MergeSort'

describe('test merge sort', () => {

  it('test merge sort by recursion', () => {
    const nums = [0, 3, 6, 5, 22, 3, 5, 7]
    mergeSortByRecursion(nums, 0, 7)
    expect(nums).toEqual([0, 3, 3, 5, 5, 6, 7, 22])
  })

  it('test merge sort by Iteration', () => {
    const nums = [0, 3, 6, 5, 22, 3, 5, 7]
    mergeSortByIteration(nums)
    expect(nums).toEqual([0, 3, 3, 5, 5, 6, 7, 22]) 
  })
})