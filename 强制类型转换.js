String
Number
Boolean
null
undefined
Object
前五种是基本数据类型
一共有六种数据类型


强制类型转换
将一个数据类型转换成其他的数据类型
主要是指把其他的数据类型转换为String Number Boolean这样才有意义



将其他的数据类型转换为string
方式一：调用被转换类型的tostring（）方法
不改变原变量，而是输出转换后的数据类型
但是注意，null和undefined没有tostring（）方法，
如果调用他们，会报错

方式二：
调用string（）函数，并将被转换的数据作为参数传递给函数
这种方法对于两种number和boolean实际上就是调用的tostring（）方法
它会将null转换为“null”（字符串）
var a=123;
调用a的tosring方法
a.toString();
console.log(typeof a);
conaole.log(a);





强制类型转换：number
方式一：number（）函数
如果字符串中有非法数字，则转换为nan
如果字符串是空的，或者全是空格，则转换为0。
布尔值true转为1，false转为0
Null转为0
undefined转为NaN
转换方式二：专门对付字符串
parseInt（）把一个字符串转换为一个整数，吧字符串中的有效内容拿出来
parseFloat（）把字符串转换为一个浮点数，把字符串中的有效内容拿出来
从前到后顺道最后一个有效数字
对于非string使用parseInteresting（）或parseFloat（）
它会将其转换为string，然后再操作
a=Number(a);
console.log(typeof a);
console.lpg(a);






强制类型转换boolean
将其他的数据类型转换为boolean（）函数
调用boolean（）函数将a转换为布尔值
a为零时为false
a为infinity或者实数时为true
a为NaN时为false
字符串转boolean除了空串，其余的都是true
null和undefined都是false（这个一定要记住了）
对象也会转换成true
 var a=123;
 console.log(typeof a);
 console.log(a);