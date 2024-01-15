function hasProperty(str, obj){
    return str in obj
}

const person = {
    name:'John',
    age: 30,
    gender:'male'
}

console.log(hasProperty('name',person))
console.log(hasProperty('height',person))