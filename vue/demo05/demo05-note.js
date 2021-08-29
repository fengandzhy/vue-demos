/**
 * 1. 关于这个v-for 中的顺序 v-for="(item,index) in list" 对于数组而言, item就是数组元素 index就是索引
 * v-for="(value,key,index) in obj" 而对于对象而言, value就是对象的值, key就是对象的键, index就是索引
 *
 * 2. vue.$set 确保当值更新的时候能够正确渲染到相关的组件上, 如果没有这个有时可以额渲染有时不能渲染, 它的参数顺序请参看本例
 *
 * 3. v-for当中绑定一个key v-bind:key="item.id", 这样的话具体的操作(例如选中), 就不会随着元素的增加和删除而变化. 
 *
 *
 *
 * */