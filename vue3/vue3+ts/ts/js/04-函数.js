const add = (x, y, z) => {
    if (z) {
        return x + y + z;
    }
    else {
        return x + y;
    }
};
console.log(add(1, 2, 3));
const sum = add;
console.log(sum(10, 20));
