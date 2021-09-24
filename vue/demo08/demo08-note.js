/**
 * 1. v-model 是模型绑定 v-model="msg" 就是把元素的值绑定到data()的变量中去
 *
 * 2. 对于{{msg}}来说, 它首先会去找data()里面的msg变量, 如果这里没有, 它会去找computed里面的msg方法的返回值
 *
 * 3. 另外对于{{msg}}来说, 它是可以找到computed里面的msg方法, 但是v-model="msg"却只能绑定到data()里面, 无法绑定到computed
 *  
 * */