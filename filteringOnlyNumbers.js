function filter_list(l) {
    return l.filter(a => typeof a === 'number');

}
console.log(filter_list([1,2,'aasf','1','123',123])); // Output: [1, 2, 123]
