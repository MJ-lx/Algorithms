import Caculate from '../Caculate'

describe('test caculate', () => {
  it('simple express', () => {
    expect(Caculate(['1', '+', '2'])).toEqual(3)
    expect(Caculate(['3', '-', '2'])).toEqual(1)
    expect(Caculate(['1', '*', '2'])).toEqual(2)
    expect(Caculate(['1', '/', '2'])).toEqual(1/2)
  })

  it ('complex express', () => {
    expect(Caculate(['(', '(','3', '-', '2', ')', '*', '3', ')', '+', '1'])).toEqual(4)
  })
})