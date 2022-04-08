/**
 * 代码在执行时 碰到var 会把变量声明提到代码执行顺序的最前面
 *  => var uname
 *  => console.log(uname)
 *  => uname = "xz"
 */

console.log(uname) // undefined

var uname = "xz"
