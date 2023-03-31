import { HasPath, WeightQuickUnion } from '../actualCombat'

describe('test hasPath', () => {
  // 测试初始数据
  const n = 5;
  // 对应的初始化二维矩阵
  const initArray = [
    [1, 1, 0, 1, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 1, 1],
    [1, 0, 1, 0, 0],
    [1, 1, 0, 1, 1]
  ];

  const hasPathNoInit = new HasPath(n)
  // 无二维矩阵初始化, 测试open功能
  it('no init Array test open', () => {
    // 测试单节点open功能
    hasPathNoInit.openNode(0, 3);
    expect(hasPathNoInit.statusArray[3].isOpen).toBe(true);
    expect(hasPathNoInit.statusArray[3].root).toEqual(3);


    hasPathNoInit.openNode(2, 3);
    expect(hasPathNoInit.statusArray[13].isOpen).toBe(true);

    // 测试open节点涉及与其他已open的节点的连接
    hasPathNoInit.openNode(1, 3);
    expect(hasPathNoInit.statusArray[8].root).toEqual(8)
    expect(hasPathNoInit.statusArray[13].root).toEqual(8)
    expect(WeightQuickUnion.isConnection(8, 13, hasPathNoInit.statusArray)).toBe(true)
    expect(WeightQuickUnion.isConnection(8, 3, hasPathNoInit.statusArray)).toBe(true)
  })

  const hasPath = new HasPath(n, initArray)
  // 测试初始化二维数组的正确性
  it('init array test open', () => {
    expect(WeightQuickUnion.isConnection(13, 3, hasPath.statusArray)).toBe(true)
    expect(WeightQuickUnion.isConnection(3, 14, hasPath.statusArray)).toBe(true)

    expect(WeightQuickUnion.isConnection(13, 23, hasPath.statusArray)).toBe(false)
  })

  // 测试findPath和findPathByNode方法
  it('init array find path', () => {
    expect(hasPath.findPath()).toBe(false)
    expect(hasPath.findPathByNode(3)).toBe(false)
    hasPath.openNode(3, 3)
    expect(hasPath.findPathByNode(3)).toBe(true)

    expect(hasPath.findPath()).toBe(true)
  })
})