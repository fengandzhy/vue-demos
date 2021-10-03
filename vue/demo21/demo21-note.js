/**
 * 1. component的递归的本质就是在原组件里调用自己
 *
 * 2. 组件之所以能在组件里调用自己是因为 这里的 name:'tree-component',起到了作用. 这里的name后面的东西一定要跟 组件调用自己的地方相同
 * 例如如果这里  name:'tree-component1' 那么原组件里就应该是
 *  <tree-component1 :level="level+1"  :data="item.children" v-if="item.children && item.children.length>0"></tree-component1>
 *
 * */