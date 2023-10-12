import React from 'react'
import Table from 'react-bootstrap/Table';
import Menubar from './Menubar';

const Dashboard=( props)=> {
    const {messages } = props;
  
   
  return (
    <div>
      <Menubar title="Dashboard"/>
      <div className="table-wrapper">
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>User</th>
          <th>Query description</th>
          <th>raised at</th>
          <th>status</th>
         
        </tr>
      </thead>
      <tbody>
   
         {
          messages?.map((e,i)=>{
              return <tr key={i}>
                <td>{i+1}</td>
                <td>{e.author}</td>
                <td>{e.messages}</td>
                <td>{e.time}</td>
               <td>UNASSIGNED</td>
              
              </tr>
            })
          }
      </tbody>
    </Table>
      </div>
    </div>
  )
}

export default Dashboard