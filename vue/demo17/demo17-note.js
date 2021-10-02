/**
 * 1. 兄弟之间传值, 首先要 let bus = new Vue();
 *  然后发射信息组件  bus.$emit('handle-click','value1','value2');
 *  接收信息组件  bus.$on('handle-click',(val1,val2)=>{ this.val1 = val1; this.val2 = val2; });
 *
 *
 * 
 * */