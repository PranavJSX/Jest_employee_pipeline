const random_name = require('node-random-name');

export function dummyData(){
    return {
        "name":random_name(),
        "Salary":Math.random()+Math.random()+Math.random()+Math.random()*100000,
        "age":getrandomAge()
    }
}


function getrandomAge(){
    return Math.random()*(60-18)+18;
}


module.exports = dummyData;