var curry = require('lodash').curry;

// curry
var filter = function(f) {
    return function(ary) {
        const filtered = ary.filter(f);
        return function(i) {
            i = Math.max(i, filtered.length - 1);
            return filtered[i];
        }
    }
}

var fn = (v) => v === 'liuming';

console.log(filter(fn)(['liuming', 'huangyue', 'duanhe'])(0))

// curry辅助函数
var currying = function(fn) {
    var args = [].slice.call(arguments, 1);
    return function () {
        return fn.apply(this, args.concat([].slice.call(arguments)));
    };
}

var curryFilter = currying(function (f, ary, i) {
    const filtered = ary.filter(f);
    i = Math.max(i, filtered.length - 1);
    return filtered[i];
});  

console.log(curryFilter(fn, ['liuming', 'huangyue', 'duanhe'], 0))

var match = curry(function(what, str) {
    return str.match(what);
});

var replace = curry(function(what, replacement, str) {
    return str.replace(what, replacement);
});

var filter = curry(function(f, ary) {
    return ary.filter(f);
});

var map = curry(function(f, ary) {
    return ary.map(f);
});

var reduce = curry(function(f, a, xs) {
    return xs.reduce(f, a);
});

console.log(match(/\s+/g, "hello world"))
console.log(match(/\s+/g)("hello world"))

var hasSpaces = match(/\s+/g);
console.log(hasSpaces("hello world"));
console.log(hasSpaces("nospace"));

var findSpaces = filter(hasSpaces);
console.log(findSpaces(["hello World", "nospace"]));

var noVowels = replace(/[aeiou]/ig,'*');
var replaceVowels = map(noVowels);
console.log(replaceVowels(["hello World", "nospace"]))





