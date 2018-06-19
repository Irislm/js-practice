require('./support');

// compose
var compose = function(f,g) {
    return function(x) {
      return f(g(x));
    };
  };

var head = function(x) {
    return x[0];
}

var hasSpace = filter(function(v){ 
    return match(/\s+/g, v); 
});

var toUpperCase = function(x) {
    return x.toUpperCase();
}

var last = compose(toUpperCase, compose(head, hasSpace));

console.log(last(['liuming', 'huang yue', 'duan he']))