/**
 * 1. v-model 自带一个@input事件和value 属性
 *
 * 2. v-model='currentVal' 就等于把这个input的value 和currentVal绑定, 如果这个input 的value 发生变化会触发 currentVal 的set 方法
 *
 * 3. v-model="text" 就是说把input-component的value和text绑定, 当input-component的value发生变化时text跟着改变
 *
 * 4. input-component 这个组件的value的值是由子组件里 this.$emit('input',val); 触发的, 因为 v-model 本身就包含了一个value属性和 input事件
 *
 *
 *
 *
 * 
 * */