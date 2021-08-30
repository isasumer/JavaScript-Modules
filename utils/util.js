let counter = 0;

function inc( amount= 1) {
    counter+=amount;
    return counter;
}
function dec( amount= 1) {
    counter-=amount;
    return counter;
}

export {dec, inc}