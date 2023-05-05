import { compareTo, exchange, less} from '../until'

describe('test public method', () => {
  it('test compareTo function', () => {
    expect(compareTo(1,2)).toEqual(-1)
    expect(compareTo(2,1)).toEqual(1)
    expect(compareTo(1,1)).toEqual(0)
  })

  it('test less function', () => {
    expect(less(1,2)).toBe(true)
    expect(less(2,1)).toBe(false)
    expect(less(1,1)).toBe(false)
  })

  it('test exchange function', () => {
    const nums = [1,2,3,4]

    exchange(1,2, nums)
    expect(nums[1]).toEqual(3)
    expect(nums[2]).toEqual(2)
  })
})