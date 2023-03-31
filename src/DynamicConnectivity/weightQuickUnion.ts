// 权重优化 - 树的结点大小 - 小的连接到大的树上
export default class WeightQuickUnion {

  public DCArray: number[] = [];
  public SizeArray: number[] = [];
  constructor(n: number) {
    this.init(n);
  }

  // 初始化动态连接数组
  init(n: number) {
    this.DCArray = Array.from(new Array(n), (v, k) => k);
    this.SizeArray = new Array(n).fill(1);
  }

  // 获取对应元素的root
  root(node: number) {
    let root = node;
    while (root !== this.DCArray[root]) {
      root = this.DCArray[root];
    }
    return root;
  }

  // 连接两个节点
  union(node: number, target: number) {
    const nodeR = this.root(node);
    const targetR = this.root(target);

    if (nodeR === targetR) return;

    // 判断两个树的大小，将小树连接到大树的根节点上
    if (this.SizeArray[nodeR] <= this.SizeArray[targetR]) {
      this.DCArray[nodeR] = targetR;
      this.SizeArray[targetR] += this.SizeArray[nodeR];
    } else {
      this.DCArray[targetR] = nodeR;
      this.SizeArray[nodeR] += this.SizeArray[targetR];
    }
  }

  // 两个节点是否连通
  isConnection(node: number, target: number) {
    return this.root(node) === this.root(target);
  }
}