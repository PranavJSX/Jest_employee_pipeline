const supertest = require('supertest');


let baseUrl = 'https://dummy.restapiexample.com/';

async function request(method,pathUrl,body,id){

    var res;
    switch(method){

    case 'get':
        const get_response = await supertest(baseUrl).get(pathUrl);
        console.log(`Sending request to ${baseUrl+pathUrl}`);
        res = get_response;
        
    case 'post':
        const post_response = await supertest(baseUrl).post(pathUrl,body);
        console.log(`Sending request to ${baseUrl+pathUrl}`);
        res = post_response;

    case 'put':

    case 'delete':

    }
    return res;

}


module.exports = request