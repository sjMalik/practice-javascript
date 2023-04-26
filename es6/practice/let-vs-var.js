const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < 10; i++) {
  setTimeout(() => console.log(a[i]), 1000);
}

/** Output
1
2
3
4
5
6
7
8
9
10*/

for (var i = 0; i < 10; i++) {
    setTimeout(() => console.log(a[i]), 1000);
}

/** Output
undefined
undefined
undefined
undefined
undefined
undefined
undefined
undefined
undefined
undefined
 */

// for (var i = 0; i < 10; i++) {
//   getI(a[i]);
// }

// function getI(i){
//     setTimeout(() => console.log(i), 1000);
// }