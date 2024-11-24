let height = undefined;
let result = function(height){
    let afterMath = height ?? 'Height is not defined';
    return afterMath;
}

console.log(result(height)); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
