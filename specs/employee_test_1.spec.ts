
import * as supertest from 'supertest';
let request = require('./../helpers/requestHelper')
let {dummyData,updatePayload} = require('./../helpers/dummyData')



describe('first', () => {

    let employee_id = 0;

    //Test for get request which fetches all the employees
    test.only('TC-1 GET request to fetch all employees',async()=>{
        let pathUrl = "api/v1/employees"
        const response = await request('get',pathUrl);
        console.log(response.status);
        expect(response.status).toEqual(200);
    })

    
    //Test for post request which creates a employee
    test('TC-2 POST request to create one employee data',async()=>{
        //Payload body of the post request
        const body = dummyData();
        console.log('Payload :',body);
        let pathUrl = 'create';
        const response = await request('post',pathUrl,body);
        console.log('Printing response received :',response.body);
        
        //Assertions
        expect(response.status).toEqual(200);
        expect(response.body.status).toEqual('success');
        //Updating the employee ID of the created id
        employee_id = Number(response.body.data.id);
    })


    //Test for get request which fetches for one employee
    test('TC-3 GET request to fetch one Employee data by id',async()=>{
        
        //Fetching the created employee details
        console.log('Fetching the employee with employee id :',employee_id)
        let pathUrl = `api/v1/employee/${employee_id}`;
        const response = await request('get',pathUrl);
        console.log(response.body);
        expect(response.status).toEqual(200);  
    })

    test('TC-4 PUT request to update the details of one employee', async()=>{

        //Fetcing the id of the created employee
        console.log('Fetching the employee with employee id :',employee_id)
        let pathUrl = `update/${employee_id}`;
        const response = await request('put',pathUrl);
        console.log(response.body);
        expect(response.status).toEqual(200);
        expect(response.body.status);
    })

    test('TC-5 DELETE request to delete the details of the created employee', async()=>{
        
        //Fetcthing the id of the created employee
        console.log('Fetching the employee with employee id :',employee_id)
        let pathUrl = `delete/${employee_id}`;
        const response = await request('delete',pathUrl);
        console.log(response.body);
        expect(response.status).toEqual(200);
        const response_message = response.body.message;
        console.log('MESSAGE RECIEVED:',response_message);
        expect(response.body.message).toEqual('successfully! deleted Records');
    })
        
})