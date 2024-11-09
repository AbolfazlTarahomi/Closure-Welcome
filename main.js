// Closures

function  greeting (type) {
    return function (user) {
        console.log(`${type} to outer user ${user}!`);
    }
}