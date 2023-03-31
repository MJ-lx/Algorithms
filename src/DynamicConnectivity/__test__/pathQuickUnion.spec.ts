import PathQuickUnion from "../pathQuickUnion"

// 测试数据
const unionArray = [[1, 3], [3, 0], [8, 7], [0, 8]]

describe('test DynamicConnectivity-quickUnion', () => {

  const Dc = new PathQuickUnion(10)

  test('test union', () => {
    Dc.union(1, 3)
    expect(Dc.DCArray[1]).toEqual(3)
  })

  test('test find', () => {
    expect(Dc.isConnection(1, 3)).toBe(true)
  })

  test('test union complex', () => {
    // 初始化连接数据
    Dc.union(3, 0)
    expect(Dc.DCArray[0]).toEqual(3)

    Dc.union(8, 7)
    expect(Dc.isConnection(1, 8)).toBe(false)
  })
})