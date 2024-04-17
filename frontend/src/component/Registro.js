import { Button, Form, Col, Row, Card, CardFooter, CardBody } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Registro(personanombre) {
  function Click(){
    window.location.href = window.location.href;
  }
  return (
    <Form>
      <Card>
        <CardFooter>
          <Form.Label>Registro de Usuario</Form.Label>
        </CardFooter>
        <CardBody>
          <Row>
            <Col>
              <Form.Label>Nombre:</Form.Label>
            </Col>
            <Col>
              <Form.Control type='text'></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Primer Apellido:</Form.Label>
            </Col>
            <Col>
              <Form.Control type='text'></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Segundo Apellido:</Form.Label>
            </Col>
            <Col>
              <Form.Control type='text'></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Nombre de usuario:</Form.Label>
            </Col>
            <Col>
              <Form.Control type='text'></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Contraseña:</Form.Label>
            </Col>
            <Col>
              <Form.Control type='text'></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Confirmar Contraseña:</Form.Label>
            </Col>
            <Col>
              <Form.Control type='text'></Form.Control>
            </Col>
          </Row>
        </CardBody>
        <Button variant="primary" > Guardar </Button>
        <Button onClick = {Click} > Cancelar </Button>
      </Card>
    </Form>
  );
}

export default Registro;