// Closures

function outer () {
    return function iner() {
        console.log("hi im batman");
    }
}

const sayyhi = outer();
sayyhi();