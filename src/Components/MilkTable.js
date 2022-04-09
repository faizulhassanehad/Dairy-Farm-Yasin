import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Form, Row, Table} from 'react-bootstrap'
import { useState } from 'react';

const MilkTable = () => {
    const [checkArr, setCheckArr] = useState([]);
    const [totalMilk, setTotalMilk] = useState(0);

    const cowArr = [
      {id: 'c1', name: 'Australian Charbray'},
      {id: 'c2', name: 'Holstein Friesian cattle'},
      {id: 'c3', name: 'Illawarra Shorthorn'},
      {id: 'c4', name: 'American Brahman'},
      {id: 'c5', name: 'Jersey cattle'},
      {id: 'c6', name: 'Ayrshire cattle'},
      {id: 'c7', name: 'Australian Brangus'},
      {id: 'c8', name: 'Murray Grey cattle'},
    ]
  
    const CheckHandler = (item) => {
      if(checkArr.includes(item))
      {
        const indexs = checkArr.indexOf(item)
        checkArr.splice(indexs, 1)
        setCheckArr([...checkArr])
      }
      
      else{
          setCheckArr([...checkArr, item])
      }
  }

  return (
    <section className='table_section'>
        <div className='container mx-auto table_container'>
        <p className='table_title'>Calculate And List Daily Milk Amount</p>
            <Row className='container mx-auto justify-content-around pt-4'>
            <Col lg={4}>
                <Form.Select aria-label="Default select example">
                    <option>Choose Shift</option>
                    <option value="Morning">Morning</option>
                    <option value="Noon">Noon</option>
                    <option value="Evening">Evening</option>
                </Form.Select>
            </Col>
            <Col lg={4}>
            <input type="date" />
            </Col>
            </Row>

            <Row className='container mx-auto justify-content-center pt-4'>
                <Col lg={8}>
                    <Table className='text-center' striped bordered hover size="sm">
                    <thead>
                    <tr>
                        <th className='table_text'>Select</th>
                        <th className='table_text'>Cow Name</th>
                        <th className='table_text'>Milk Amount</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        cowArr.map(cow =>  <tr>
                        <td><input onClick={() => CheckHandler(cow.id)} type="checkbox" /></td>
                        <td>{cow.name}</td>
                        <td><input disabled={checkArr?.some(item => item === cow.id) ? false  : true } onBlur={(e) => setTotalMilk(totalMilk + Number(e.target.value))} type="text" placeholder='enter milk amount' /></td>
                        </tr>)
                    }
                    </tbody>
                </Table>
                </Col>
                <Col lg={3}>
                <div className='total_div'>
                    <h3 className='total_amount_text'>Total Amount</h3>
                    <h5>{totalMilk}</h5>
                </div>
                </Col>
            </Row>
        </div>
    </section>
  )
}

export default MilkTable
