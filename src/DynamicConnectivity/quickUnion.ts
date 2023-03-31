// 快速连接
export default class QuickUnion {

  public DCArray: number[] = [];
  constructor(n: number) {
    this.init(n);
  }

  // 初始化动态连接数组
  init(n: number) {
    this.DCArray = Array.from(new Array(n), (v, k) => k);
  }

  // 获取对应元素的root
  root(node: number) {
    let r = node;
    while (r !== this.DCArray[r]) {
      r = this.DCArray[r];
    }
    return r;
  }

  // bug
  // 连接两个节点
  union(node: number, target: number) {
    if (this.isConnection(node,target)) return;

    const noder = this.root(node);
    const targetr = this.root(target);

    this.DCArray[noder] = targetr;
  }

  // 两个节点是否连通
  isConnection(node: number, target: number) {
    return this.root(node) === this.root(target);
  }
}