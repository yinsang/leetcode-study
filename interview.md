# 美团面试

算法 3 选 1
1、有重复项数字的全排列
给出一组可能包含重复项的数字，返回该组数字的所有排列。结果以字典序升序排列。
2、有效括号序列
给出一个仅包含字符'(',')','{','}','['和']',的字符串，判断给出的字符串是否是合法的括号序列
括号必须以正确的顺序关闭，"()"和"()[]{}"都是合法的括号序列，但"(]"和"([)]"不合法。
3、合并区间
给出一组区间，请合并所有重叠的区间。
请保证合并后的区间按区间起点升序排列。

## 事件循环

async function async1() {
console.log('async1 start');
await async2();
console.log('async1 end');
}
async function async2() {
console.log('async2');
}
console.log('script start');
setTimeout(() => {
console.log('setTimeout');
}, 0);
async1();
new Promise((resolve) => {
console.log('promise1');
resolve();
}).then(() => {
console.log('promise2');
});
console.log('script end');

另一个题

// 例子一
function fn1(){
fn1()
}
fn1()

// 例子二
function fn2(){
Promise.resolve().then(()=>{
fn2()
})
}
fn2()

// 例子三
function fn3(){
setTimeout(()=>{
fn3()
},0)
}

# 猿辅导

多个板数组，怎么找装水最多的两个板

# 9:00 CARV

https://www.feishu.cn/calendar/share?token=11cd51efb6e3557fce0132cdf98549ee
日程主题: interview with 魏银鹏
时间: 2023 年 5 月 9 日（周二） 09:00 - 09:30
自我介绍
一体化脚手架包含什么
性能做了什么事

# 11:00 umu

https://meeting.tencent.com/dm/iR3MYYGQ4fDA
自我介绍
重构做了哪些事
怎么治理错误码
一体化脚手架包含什么
怎么保证重构的稳定性
流氏渲染 sdk 做了什么事
性能优化做了什么事
react 怎么保证性能，不重复渲染
ssr plugin 做了什么事
ER 边缘计算都干了些什么

# 14:00 光年之外

北京市 海淀区 搜狐网络大厦 3 层
html css js 常规面试题
两个产品交叉面

# 晚上 19:30 白龙马云行

https://meeting.tencent.com/dm/YcnVlPcqa1Xs（会议号: 951333717）
自我介绍
fiber 是干什么的
react 用的哪版本
hooks 有什么好处
性能优化做了什么
脚手架工程化做了什么
跨端有没有搞过
h5 怎么和客户端通信
如何设计 js-bridge 和客户端通信
公司在设计自研的跨端方案

# 10.8 20:00 PingCap 关系型数据库

https://pingcap.zoom.us/j/99898940856
自我介绍

介绍项目 重构 性能优化 转化率提升

介绍性能优化
vue 和 react 对比，怎么在团队内选型
react hooks 的好处和弊端
fiber 是干什么的？怎么恢复之前未执行完的命令
/\*\*

-
- @param origin { a: { b: { c: 1 } } }
- @returns {'a.b.c':1}
  \*/
  递归做出来了。另想一个思路，没有想到多叉树。
  介绍团队情况。每周 2-3 天去公司，其他时间在家办公，目前北京 3 人+外地 3 人=6 人。还有一个坑。
