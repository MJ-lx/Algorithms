# DynamicConnectivity
动态连通性
用于解决判断两点之间的连通性。

定义：给定几个数的集合，两个点由线相连的过程为union。判断两个点直接是否相通的过程为find/connection。

我们假设： `相连（is connected to）`是两个数之间的一种关系，且这种关系满足以下条件：
- 自反性（Reflexive）： p和p是相连的；
- 对称性（Symmetric）： 如果p和q是相连的，那么q和p也是相连的；
- 传递性（Transitive）： 如果p和q相连且q和r相连，那么p和r相连。

当两个数相连时，它们属于同一个等价类（Connected Components）。

等价类，就是所有相连的数的集合，这个集合必须包含所有相连的数。

## 算法：
- [quickFind](./quickFind.ts) 快速查找两个节点的连通性。

  基本思路：

  使用一维数组用下标表示节点，用值表示连接的节点。分组类型，互相连接的节点的值相等。

- [quickUnion](./quickUnion.ts) 快速连接两个节点

  基本思路：

  使用一维表用下标表示节点，用值表示连接的节点。树形结构，将一个节点连接到另一个节点时，节点的值为连接到的目标节点所在树的根节点值。
- [weightQuickUnion](./weightQuickUnion.ts) 优化算法 - 按照权重计算，小树挂载到大树上

  基本思路:

  基于quick-union算法，在union时，判断两棵树的size大小，将小树的根节点连接到大树的根节点上，减少树的深度，提升根节点查找速率
- [pathQuickUnion](./pathQuickUnion.ts) 优化算法 - 减少树的深度

  基本思路：

  在进行每次根节点查找时，将当前节点以及其祖先节点依次连接到根节点，从而平铺树形结构。实际实现中是依次将节点的祖父节点连接到根节点，二者在实际应用中的效率相同

## 算法之间的时间消耗对比

| 算法名            | 初始化 | find | union |
| ------           | ------ | ----- | ----- |
| quickFind        | N      | 1     | N     |
| quickUnion       | N      | N     | N     |
| weightQuickUnion | N      | lg N  | lg N  |
| pathQuickUnion   | N      | -     | -     |

> ？？？疑问：

> weightQuickUnion的find和union的时间消耗理应是 log2 N 吧 (希望有人能解答我的疑惑)

官方推导示例：

什么时候x的深度会增大呢？

当树T2比树T1大，即|T2| >= |T1|时，包含x的树T1成为另一个树T2的子树时，x的深度会加1。由此推出：

- T1和T2合起来的新树，其大小至少是之前T1的2倍。（也就是x所在的树大小增大1倍，x的深度加1）

- 包含x的树最多可以翻倍lg N 次。

## 参考
[英文文档](https://d3c33hcgiwev3.cloudfront.net/_b65e7611894ba175de27bd14793f894a_15UnionFind.pdf?Expires=1680393600&Signature=cm9E2T0EdBs5K~Ii42WkcY8loTuGjIzMlILDh1NTvX5oMBeI7YcOmXZVYKDuhBbbbSHeXKv8t6K4z5xXP60yYp6VWo7yPey9xMlp9e2FRtlPgQUEpblusnI1B3HwARGZV78DiK1MTX0lfNX3cnrVRDVUH5K60NhPC6tkDfbxKrI_&Key-Pair-Id=APKAJLTNE6QMUY6HBC5A)

[简书-中文转述](https://www.jianshu.com/p/44541a3fe8b3)