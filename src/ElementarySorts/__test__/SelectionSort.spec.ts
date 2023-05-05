import selectionSort from '../SelectionSort'

describe('test selection sort', () => {
  it('', () => {
    const nums = [0, 3, 4, 5, 22, 3, 5, 7]
    selectionSort(nums)

    expect(nums).toEqual([0, 3, 3, 4, 5, 5, 7, 22])
  })
})