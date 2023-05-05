import shellSort from '../ShellSort'

describe('test shell sort', () => {
  it('', () => {
    const nums = [0, 3, 4, 5, 22, 3, 5, 7]
    shellSort(nums)

    expect(nums).toEqual([0, 3, 3, 4, 5, 5, 7, 22])
  })
})