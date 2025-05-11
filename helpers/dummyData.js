import { todayMinusX } from './dateHelper';

const random_name = require('node-random-name');

export function dummyData(){
    return {
        "name":random_name(),
        "Salary":Math.random()+Math.random()+Math.random()+Math.random()*100000,
        "age":Math.floor(getrandomAge())
    }
}

export function updatePayload(){
    return{
        "name":"Test Update",
        "Salary":'213',
        "age":25
    }
}

function getrandomAge(){
    return Math.random()*(60-18)+18;
}


module.exports = {dummyData,updatePayload};