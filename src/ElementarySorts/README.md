# 排序算法
## 选择排序 selection sort
### 定义
选择未排序的数组中最小的元素，将其挪到数组的已排序的左边
### 耗时
n + n-1 + n-2 + …… + 2 + 1 -> n^2
## 插入排序 insertion sort
### 定义
将元素插入到数组左边已排序部分合适的位置上
### 耗时
不稳定
最好时为线性n
不好时为n^2
## 希尔排序 shell sort
### 定义
是基于插入算法的一种优化方式，即增量步长的插入排序。先以大的步长进行对比插入排序，逐渐缩小到1个步长来实现排序。步长变更以3n+1为较好的选择

# 其他
## 乱序
打乱顺序，将数据于随机产生的数据进行交换从而达到打乱的目的。
## 凸性图

# 参考
[英文文档](https://d3c33hcgiwev3.cloudfront.net/_f03960834ff947e41e6b16e8431ab227_21ElementarySorts.pdf?Expires=1683417600&Signature=Pfv2BubPT9j2y1O43RRdLXBLEtl8-GLbNMeZhLkZn6gDpOZwfbN9jsEUjWee87jDwu03ssrolt~7c54Y58LHOzHcTgJQ-kXILAiawh96IYw7ziEDBy4cSqLF5rJnd8EvQZGU~9shoSDw-YDW09v440vIU8Je4KcXAGWyaaeskXQ_&Key-Pair-Id=APKAJLTNE6QMUY6HBC5A)
