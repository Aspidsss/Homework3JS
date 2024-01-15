function printOwnProps(obj) {
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)){
            console.log(prop + ':' + obj[prop])
        }
    }
}

const person = {
    name: 'John',
    age: 30,
    gender: 'male'
}

printOwnProps(person)