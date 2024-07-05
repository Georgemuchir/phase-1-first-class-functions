function receivesAFunction(callback) {
    callback(receivesAFunction);
}
    module.exports={receivesAFunction};

function returnsANamedFunction(){
    return 'function';
}

function namedFunction() {
}
function returnsANamedFunction() {
    return namedFunction;
}
module.exports = { returnsANamedFunction };


function returnsAnAnonymousFunction() {
    return function() {
};
}
module.exports = {returnsAnAnonymousFunction};


