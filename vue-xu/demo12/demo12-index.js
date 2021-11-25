/**
 * 1. 当我们监听的数据为对象或数组时，newValue 和 oldValue 是相等的，因为对象和数组都为引用类型，
 * 这两个的形参指向的也是同一个数据对象（旧值获取不到）。
 *
 * 2. 用vue实例的$watch也可以用来监听对象的改变
 *
 * 3. name:function(newValue,oldValue){
                console.log(newValue,oldValue);
            }, 这个意思是当name变化了调用后面的函数
 *
 * 4. msg: 'updateMsg', 这个意思就是当msg变化了调用函数名为updateMsg的函数, 通常这个函数在method里面
 * */