import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function IndividualIntervalsExample() {
  const urlImg1 = "https://cdn.discordapp.com/attachments/826586755229810688/1171416000940478574/pexels-cottonbro-studio-4709285.jpg?ex=655c992a&is=654a242a&hm=4b444f1dd4f137ef2e7578b4542d36f1cea71125c30f9a121c80cc707a26649d&"
  const urlImg2 = "https://cdn.discordapp.com/attachments/826586755229810688/1171416000940478574/pexels-cottonbro-studio-4709285.jpg?ex=655c992a&is=654a242a&hm=4b444f1dd4f137ef2e7578b4542d36f1cea71125c30f9a121c80cc707a26649d&"
  const urlImg3 = "https://cdn.discordapp.com/attachments/826586755229810688/1171416000940478574/pexels-cottonbro-studio-4709285.jpg?ex=655c992a&is=654a242a&hm=4b444f1dd4f137ef2e7578b4542d36f1cea71125c30f9a121c80cc707a26649d&"
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
          <h3>Feito para você</h3>
          <p>Compre agora</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img width={1920} height={700} src={urlImg3}/>
        <Carousel.Caption>
          <h3>Seu Computador aqui</h3>
          <p>
           Compre agora
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;