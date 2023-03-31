import QuickFind from "../quickFind"

// 测试数据
const unionArray = [[1, 3], [5, 7], [3, 0], [8, 7]]

describe('test DynamicConnectivity-quickFind', () => {

  const Dc = new QuickFind(10)

  test('test union', () => {
    Dc.union(1, 3)
    expect(Dc.DCArray[1]).toEqual(Dc.DCArray[3])
  })

  test('test find', () => {
    expect(Dc.isConnection(1, 3)).toBe(true)
  })

  test('test union complex', () => {
    // 初始化连接数据
    Dc.union(5, 7)
    Dc.union(0, 3)
    Dc.union(8, 7)

    expect(Dc.isConnection(1, 8)).toBe(false)
    // 测试复杂联合
    Dc.union(0, 8)

    expect(Dc.isConnection(1, 8)).toBe(true)
    // 覆盖全代码
    Dc.union(3, 8)
  })

})