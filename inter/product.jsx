
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import '../css/main.css'


function BasicExample() {
  const Prod1 = 'https://cdn.discordapp.com/attachments/826586755229810688/1103321493447909476/Design_sem_nome__2_-removebg-preview.png'
  return (
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 2 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img width={200} height={400}variant="top" src={Prod1} />
            <Card.Body>
              <Card.Title>Flores</Card.Title>
              <Card.Text>
                Essa é uma flor especial da patagonia e sua mãe vai adorar -''-
              </Card.Text>
            </Card.Body>
            <Button variant="primary">Fale com especialista!</Button>{' '}
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default BasicExample;