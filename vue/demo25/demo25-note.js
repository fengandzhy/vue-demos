/**
 * 1. 如果在插槽中有属性 <slot name="header" value="Abc" value1="BCd" value3="fcd"></slot> 如何取到它们？
 *  1) #header="slotProps" 这里的slotProps是一个任意定义的变量
 *  2) 用上面任意定义的变量 {{slotProps.value}}{{slotProps.value1}}{{slotProps.value2}} 取值
 *
 * */