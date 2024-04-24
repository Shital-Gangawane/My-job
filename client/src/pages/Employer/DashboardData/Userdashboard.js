import React from 'react'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { HiOutlineBriefcase    } from "react-icons/hi2";
import { SlNote } from "react-icons/sl";
import { AiOutlineMessage } from "react-icons/ai";
import { IoBookmarkOutline } from "react-icons/io5";

function Userdashboard() {
  return (
    <div className='mt-20 px-14'>
      <h2>Applications Statistics</h2>
      <div>
      <Container>
      <Row>
        <Col>
        <Card className=' flex flex-col '>
          
          <Card.Body className='flex'>
            <HiOutlineBriefcase    size={60} className='bg-blue-100 m-2 text-blue-600 rounded p-2' />
            <Card.Text className=' text-blue-600 '>0</Card.Text>
            <Card.Title className='flex'>Posted Jobs</Card.Title>
           
          </Card.Body>
        </Card>
        </Col>

        <Col>
        <Card className=' flex flex-col '>
          
          <Card.Body className='flex'>
            <SlNote   size={60} className='bg-red-100 m-2 text-red-600 rounded p-2' />
            <Card.Text className=' text-red-600 '>0</Card.Text>
            <Card.Title className='flex'>Application</Card.Title>
           
          </Card.Body>
        </Card>
        </Col>

        <Col>
        <Card className=' flex flex-col '>
          
          <Card.Body className='flex'>
            <AiOutlineMessage    size={60} className='bg-yellow-100 m-2 text-yellow-600 rounded p-2' />
            <Card.Text className=' text-yellow-600 '>0</Card.Text>
            <Card.Title className='flex'>Review</Card.Title>
           
          </Card.Body>
        </Card>
        </Col>

        <Col>
        <Card className=' flex flex-col '>
          
          <Card.Body className='flex'>
            <IoBookmarkOutline size={60} className='bg-green-100 m-2 text-green-600 rounded p-2'/>
            <Card.Text className=' text-green-600'>0</Card.Text>
            <Card.Title className='flex'>Shortlisted</Card.Title>
           
          </Card.Body>
        </Card>
        </Col>
      </Row>
    </Container>

      {/* <Row xs={1} md={4} className="g-4 mt-3">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col >
          <Card className=' flex flex-col '>
          
            <Card.Body className='flex'>
              <HiOutlineBriefcase    size={60} className='bg-blue-200 m-3 text-blue-400 rounded p-2' />
              <Card.Title className='flex'>Card title</Card.Title>
             
            </Card.Body>
          </Card>
        </Col>
      ))}

      
    </Row> */}
      </div>
      </div>
  )
}

export default Userdashboard