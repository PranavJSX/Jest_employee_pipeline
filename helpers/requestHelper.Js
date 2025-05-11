const supertest = require('supertest');


let baseUrl = 'https://dummy.restapiexample.com/';

async function request(method,pathUrl,body,id){

    try
    {
        var res;
        switch(method){

        case 'get'||'delete':
            const get_response = await supertest(baseUrl).get(pathUrl);
            console.log(`Sending request to ${baseUrl+pathUrl}`);
            res = get_response;
            
        case 'post':
            const post_response = await supertest(baseUrl).post(pathUrl,body);
            console.log(`Sending request to ${baseUrl+pathUrl}`);
            res = post_response;

        case 'put':
            const put_respone = await supertest(baseUrl).put(pathUrl,body);
            console.log(`Sending request to ${baseUrl+pathUrl}`);
            res = put_respone;

        }
        return res;
    }
    catch(err){
        console.log(err);
        return err;
    }

}


module.exports = request;