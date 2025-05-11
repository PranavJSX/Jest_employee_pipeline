
import * as supertest from 'supertest';
let request = require('./../helpers/requestHelper')
let dummyData = require('./../helpers/dummyData')


describe('first', () => {

    let employee_id = 0;

    //Test for get request which fetches all the employees
    test('TC-1 GET request to fetch all employees',async()=>{
        let pathUrl = "api/v1/employees"
        const response = await request('get',pathUrl);
        console.log(response.status);
        expect(response.status).toEqual(200);
    })

    
    //Test for post request which creates a employee
    test.only('TC-2 POST request to create one employee data',async()=>{
        //Payload body of the post request
        const body = dummyData();
        let pathUrl = 'api/v1/create';
        const response = await request('post',pathUrl,body);
        console.log(response.body);
        
        //Assertions
        expect(response.status).toEqual(200);
        expect(response.body.status).toEqual('success');
        //Updating the employee ID of the created id
        employee_id = Number(response.body.data.id);
    })


    //Test for get request which fetches for one employee
    test.only('TC-3 GET request to fetch one Employee data by id',async()=>{
        
        //Fetching the created employee details
        console.log('Fetching the employee with employee id :',employee_id)
        let pathUrl = `api/v1/employee/${employee_id}`;
        const response = await request('get',pathUrl);
        console.log(response);
        expect(response.status).toEqual(200);  
    })
})