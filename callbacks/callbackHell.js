// const words = ['Hello', 'World', 'Again']
// const animateAll = (animate) => {
//     setTimeout(() => {
//         console.log(words[0]);
//         setTimeout(() => {
//             console.log(words[1]);
//             setTimeout(() => {
//                 console.log(words[2]);
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }

// animateAll();

const print = async (text)=> {
    setTimeout(()=> {
        console.log(text);
    }, 1000)
}

(async ()=> {
    await print("Hello");
    await print("NodeJs");
    await print("World");
})();