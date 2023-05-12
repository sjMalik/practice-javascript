for (var i = 0; i < 3; i++) {
    setTimeout(function() { console.log(i); }, 1000 + i);
}
/**
 * Output
 * 3
 * 3
 * 3
 * after 1, 1.1 and 1.2 sec
 */

function closureExe(i){
    setTimeout(function() { console.log(i); }, 1000 + i);
}

for (var i = 0; i < 3; i++) {
    closureExe(i);
}
/**
 * Output
 * 0
 * 1
 * 2
 * after 1, 1.1 and 1.2 sec
 */