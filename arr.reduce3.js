// Given an array of arrays, flatten them into a single array
function flatten(arr) {
    let fla = arr.reduce((x , y)=>{
      return x.concat(y)
    })
    return fla;
}

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

flatten(arrays) // ["1", "2", "3", true, 4, 5, 6];