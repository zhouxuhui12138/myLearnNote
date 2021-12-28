{
    // 类型推论 此时a为number
    let a = 123;
    // 联合类型
    let numberOrString;
    // 类型断言
    function getLength1(val) {
        const str = val;
        if (str) {
            return str.length;
        }
        else {
            const num = val;
            return num.toString().length;
        }
    }
    // 类型守卫
    function getLength2(val) {
        if (typeof val === 'string') {
            return val.length;
        }
        else {
            return val.toString().length;
        }
    }
    console.log(getLength1('123'));
    console.log(getLength2(123));
}
