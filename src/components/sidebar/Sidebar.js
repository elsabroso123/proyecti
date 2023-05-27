import { Container, Ul, Li } from "./styled-components"

const SideBar = () => {
  return(
    <Container>
      <Ul>
        <Li>Registro cliente</Li>
        <Li>Registro mascota</Li>
        <Li>Shakira</Li>
        <Li>Salven a los dinosaurios</Li>
      </Ul>
    </Container>
  )
}

export default SideBar