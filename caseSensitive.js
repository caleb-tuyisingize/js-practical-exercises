function hello(name) {
    if(name){
    const named = name[0].toString().toUpperCase()+name.toString().slice(1).toLowerCase();
     return `Hello, ${named}!`;
}else if(!name){
        return `Hello, World!`;

    }

}
console.log(hello());