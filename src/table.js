import React from 'react';
import { Table } from 'react-bootstrap';

function Practice(){
    const students=[
        {name:'obito',email:'obito@gmail.com',phone:'5415225'},
        {name:'naruto',email:'naruto@gmail.com',phone:'548785'},
        {name:'kakashi',email:'kakashi@gmail.com',phone:'622255'}
      ]
       return(
        <div style={{marginLeft:50, padding:10}}>
        {
          
          <Table striped bordered hover variant='dark' size='sm'  >
          <tbody>
          <tr>
            <th>id</th>
              <th>phone</th>
              <th>name</th>
              <th>email</th>
              <th>phone</th>
              
            </tr>
          {
            students.map((data,i)=>
            <tr key={i}>
              <td>{i+1}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.phone}</td>
            </tr>
            )
         }
         </tbody>
         </Table>
          }
  
          <br></br>
  
        
      </div>
       )
}

export default Practice;