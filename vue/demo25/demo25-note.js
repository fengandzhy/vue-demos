/**
 * 1. 如果在插槽中有属性 <slot name="header" value="Abc" value1="BCd" value3="fcd"></slot> 如何取到它们？
 *  1) #header="slotProps" 这里的slotProps是一个任意定义的变量
 *  2) 用上面任意定义的变量 {{slotProps.value}}{{slotProps.value1}}{{slotProps.value2}} 取值
 *
 * 2. 一般情况下用解构赋值的方法来代替上面的取值方式<slot name="footer"  value="A" value1="B" value2="C"></slot>
 * v-slot:footer="{value,value1,value2:val2}" <h2>我是页脚{{value}},{{value1}},{{val2}}</h2>
 *
 *
 * */