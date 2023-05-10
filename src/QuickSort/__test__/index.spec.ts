import quickSort from '../QuickSort'
import selectionQuickSort from '../SelectionQuickSort'
import threeWayQickSort from '../3-wayQuickSort'

describe('test quick sort', () => {
  it('test quick sort by normal', () => {
    const nums = [0, 9, 6, 5, 22, 3, 13, 7]
    quickSort(nums, 0, 7)
    expect(nums).toEqual([0, 3, 5, 6, 7, 9, 13, 22])
  })

  it('test selection quick sort', () => {
    const nums = [0, 9, 6, 5, 22, 3, 13, 7]
    const target = selectionQuickSort(nums, 3)
    expect(target).toBe(6)
  })

  it('test 3-way quick sort', () => {
    const nums = [9, 0, 3, 2, 9, 3, 9, 2, 0, 3, 9, 0]
    threeWayQickSort(nums, 0, 11)
    expect(nums).toEqual([0, 0, 0, 2, 2, 3, 3, 3, 9, 9, 9, 9])
  })
})