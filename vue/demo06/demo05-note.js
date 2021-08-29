/**
 * 1. 关于这个v-for 中的顺序 v-for="(item,index) in list" 对于数组而言, item就是数组元素 index就是索引
 * v-for="(value,key,index) in obj" 而对于对象而言, value就是对象的值, key就是对象的键, index就是索引
 *
 * 2. vue.$set 确保当值更新的时候能够正确渲染到相关的组件上, 如果没有这个有时可以额渲染有时不能渲染, 它的参数顺序请参看本例
 *
 * 3. v-for当中绑定一个key v-bind:key="item.id", 这样的话具体的操作(例如选中), 就不会随着元素的增加和删除而变化.
 *
 * 4. vue 官方不建议使用v-if 和 v-for在同一个元素中, 因为当v-if 和 v-for使用在同一个元素中时, 会给每个元素都加上v-if这样会造成性能的浪费
 * 建议使用computed 里面处理过的东西, 也就是说当你需要 v-if 和 v-for在同一个元素中使用时, 你可以将这个元素在computed里面定义的方法里处理好
 * 再循环即可.
 *
 *
 *
 * */