// let kfc= new Object();
// obj.event='疯狂疯狂星期四';
// obj.order='原味鸡两块9.9';
// console.log(kfc);

// let kfc= {
//     explain:'你说得对，可是肯德基疯狂星期四诶',
//     beg:'V我50'
// }
// console.log(kfc);

// function Kfc(event,action){
//     this.event='但今天真的是疯狂星期四诶';
//     this.action='孩子八辈子没吃肯德基了。帮帮我，肯德基爷爷';
// }
// const www= new Kfc();
// console.log(www);

// let arr = [1,[2,3],[4,5,[6,7,8]],9];
// function flatten(arr) {
//     let result=[];
//     arr.forEach( element => {
//         if(Array.isArray(element))
//         {result=result.concat(flatten(element));}
//         else{
//             result.push(element);
//         }
//     });
//     return result;
// }
// console.log(flatten(arr));

// let arr = [1,[2,3],[4,5,[6,7,8]],9];
// function flatten(arr) {
//     return arr.reduce((result,element) => {
//         if(Array.isArray(element)){
//             result=result.concat(flatten(element));
//         }
//         else{
//             result.push(element);
//         }
//         return result;
//     },[]);
// }
// console.log(flatten(arr));

let arr = [1,[2,3],[4,5,[6,7,8]],9];
function flatten(arr) {
    return arr.toString().split(',').map(element => +element);
}
console.log(flatten(arr));