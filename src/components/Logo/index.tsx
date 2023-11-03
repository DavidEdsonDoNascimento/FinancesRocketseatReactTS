import man from './../../assets/man.svg'
import { Container } from './styles';

export const Logo = () => {
  return (
    <Container>
      <img src={man} alt="dt money" />
      <h1>FINANÇAS</h1>
    </Container>
  );
}