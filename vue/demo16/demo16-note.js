/**
 * 1. 子组件向父组件传值, 在子组件中调用$emit 例如this.$emit('handle-click','子组件值value1','子组件值value2');
 * handle-click 是事件名称, 后面的参数都是子组件的值, 可以传任意多个值
 *
 * 2. 在父组件中 用这种方式来v-on:handle-click="getVal" 接收子组件的值 getVal这个函数的参数与上面子组件的传值个数相对应
 *
 * 
 * */