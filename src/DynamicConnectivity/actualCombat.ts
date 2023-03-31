/**
 * 使用动态连通 解决 是否有路径从n*n的面板中open的节点中有路径从头部通往底部
 * 头部: 二维数组的第一行
 * 底部: 二维数组的最后一行
*/

interface IStatus {
  isOpen: boolean,
  root: number
}

export class HasPath {
  public statusArray: IStatus[];
  public n: number;


  constructor(n: number, initArray?: number[][]) {
    this.statusArray = Array.from(new Array(n * n), (v, i) => { return ({ isOpen: false, root: i }) });
    this.n = n;
    WeightQuickUnion.init(n * n);
    if (initArray) {
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          if (initArray[i][j]) {
            this.openNode(i, j);
          }
        }
      }
    }
  }

  // 寻找出路
  findPath() {
    // 寻找头部节点和底部节点是否有一对是连通的
    for (let i = 0; i < this.n; i++) {
      const isConnection = this.findPathByNode(i);
      if (isConnection) return true;
    }
    return false;
  }

  // 寻找特定头部节点为入口的方法
  findPathByNode(start: number) {
    // 从某个头部节点出发，判断其与底部节点的连通性，存在一个底部节点与头部节点相连则存在路径
    for (let i = 0; i < this.n; i++) {
      const isConnection = WeightQuickUnion.isConnection(start, this.n * (this.n - 1) + i, this.statusArray);
      if (isConnection) return true;
    }
    return false;
  }

  // 开启某个节点
  openNode(row: number, column: number) {
    this.statusArray[row * this.n + column].isOpen = true;
    const target = row * this.n + column
    let node = 0
    // 开启某个节点时，需要判断该节点的四周节点是否为open状态，是则进行连接操作
    // 注意边界情况
    if (row - 1 >= 0 && this.statusArray[(row - 1) * this.n + column].isOpen) {
      node = (row - 1) * this.n + column
      WeightQuickUnion.union(node, target, this.statusArray)
    }

    if (column - 1 >= 0 && this.statusArray[row * this.n + column - 1].isOpen) {
      node = row * this.n + column - 1
      WeightQuickUnion.union(node, target, this.statusArray)
    }

    if (column + 1 < this.n && this.statusArray[row * this.n + column + 1].isOpen) {
      node = row * this.n + column + 1
      WeightQuickUnion.union(node, target, this.statusArray)
    }

    if (row + 1 < this.n && this.statusArray[(row + 1) * this.n + column].isOpen) {
      node = (row + 1) * this.n + column
      WeightQuickUnion.union(node, target, this.statusArray)
    }
  }
}

// 权重优化 - 树的结点大小 - 小的连接到大的树上
export class WeightQuickUnion {
  static SizeArray: number[] = []
  // 初始化动态连接数组
  static init(n: number) {
    this.SizeArray = new Array(n).fill(1);
  }

  // 获取对应元素的root
  static root(node: number, array: IStatus[]) {
    let root = node;
    while (root !== array[root].root) {
      root = array[root].root;
    }
    return root;
  }

  // 连接两个节点
  static union(node: number, target: number, array: IStatus[]) {
    const nodeR = this.root(node, array);
    const targetR = this.root(target, array);

    if (nodeR === targetR) return;

    // 判断两个树的大小，将小树连接到大树的根节点上
    if (this.SizeArray[nodeR] <= this.SizeArray[targetR]) {
      array[nodeR].root = targetR;
      this.SizeArray[targetR] += this.SizeArray[nodeR];
    } else {
      array[targetR].root = nodeR;
      this.SizeArray[nodeR] += this.SizeArray[targetR];
    }
  }

  // 两个节点是否连通
  static isConnection(node: number, target: number, array: IStatus[]) {
    return this.root(node, array) === this.root(target, array);
  }
}