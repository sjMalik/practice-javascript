const words = ['Hello', 'NodeJS', 'World']
const animateAll = (animate) => {
    setTimeout(() => {
        console.log(words[0]);
        setTimeout(() => {
            console.log(words[1]);
            setTimeout(() => {
                console.log(words[2]);
            }, 1000)
        }, 1000)
    }, 1000)
}

animateAll();