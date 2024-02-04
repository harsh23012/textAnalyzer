import {React} from 'react'
import {Row, Col, Image, Container} from 'react-bootstrap';

export default function About(props) {



  return (
    <>
        <div className="container my-4" style={{color: props.mode==='dark'?"white":"black"}}>
        <h2>About the TextUtils</h2>
        <Container>
      <Row>
        <Col xs={6} md={4} className='container text-center'>
          <Image src={require("D:/textutils/src/pics/Harsh.jpg")} roundedCircle height={200} width={200}/>
            <p><strong>Harsh Kumar</strong></p>     
        </Col>
        <Col xs={6} md={4} className='container text-center'>
          <Image src={require("D:/textutils/src/pics/example.jpeg")} roundedCircle height={200}  width={200}/>
          <p><strong>Randon Trump</strong></p>
        </Col>
        <Col xs={6} md={4} className='container text-center'>
          <Image src={require("D:/textutils/src/pics/example2.jpeg")} roundedCircle height={200}  width={200}/>
          <p><strong>Donald Random</strong></p>
        </Col>
        </Row>
    </Container>
        </div>
    </>
  )
}
