
// 快速查找
export default class QuickFind {

  public DCArray: Number[] = [];
  constructor(n: number) {
    this.init(n);
  }

  // 初始化动态连接数组
  init(n: number) {
    this.DCArray = Array.from(new Array(n), (v, k) => k);
  }

  // 两个节点是否连通
  isConnection(p: number, q: number) {
    return this.DCArray[p] === this.DCArray[q];
  }

  // 连接两个节点
  union(p: number, q: number) {
    if (this.isConnection(p,q)) return;

    const root = this.DCArray[q];
    this.DCArray[q] = this.DCArray[p];
    // 将所有与p节点的值相同的节点值更新为q
    for(let i = 0; i < this.DCArray.length; i++) {
      if (this.DCArray[i] === root) {
        this.DCArray[i] = this.DCArray[p];
      }
    }
  }
}