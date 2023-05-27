import { Container, Ul, Li } from "./styled-components"
import { Link } from 'react-router-dom';

const SideBar = () => {

  const styles={
    textDecoration: 'none',
    color: 'inherit',
  }

  return(
    <Container>
      <Ul>
        <Link style={styles} to="Veterinarios"><Li>Veterinarios</Li></Link>
        <Link style={styles} to="Mascotas"><Li>Mascotas</Li></Link>
        <Link style={styles} to="Servicios"><Li>Servicios</Li></Link>
        <Link style={styles} to="Clientes"><Li>Clientes</Li></Link>
        <Link style={styles} to="Precios"><Li>Precios</Li></Link>
        <Link style={styles} to="Razas"><Li>Razas</Li></Link>
        <Link style={styles} to="Citas"><Li>Citas</Li></Link>
      </Ul>
    </Container>
  )
}

export default SideBar