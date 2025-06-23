const inputObject = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

const transformKeys = (obj, transformFn) =>{
    const result = {};
    for(const key in obj){
        if(obj.hasOwnProperty(key)){
            const newKey = transformFn(key);
            result[newKey] = obj[key];
        }
    }
    return result;
}
const transformedKeys = (key) =>key.toUpperCase();

const transformed = transformKeys(inputObject,transformedKeys);
console.log(transformed);