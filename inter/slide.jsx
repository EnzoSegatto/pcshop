import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function IndividualIntervalsExample() {
  const urlImg1 = "https://cdn.discordapp.com/attachments/826586755229810688/1103294175170023424/3.png"
  const urlImg2 = "https://cdn.discordapp.com/attachments/826586755229810688/1103294175711072326/1.png"
  const urlImg3 = "https://cdn.discordapp.com/attachments/826586755229810688/1103294176034029578/2.png"
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
      <img width={1920} height={700} src={urlImg1}/>
        <Carousel.Caption>
          <h3>Feita para você</h3>
          <p>Você precisa adquirir agora</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img width={1920} height={700} src={urlImg2}/>
        <Carousel.Caption>
          <h3>FEita para você</h3>
          <p>Compre agora</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img width={1920} height={700} src={urlImg3}/>
        <Carousel.Caption>
          <h3>Sua flor perfeita</h3>
          <p>
           Compre agora
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;