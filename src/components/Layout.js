import { Outlet } from "react-router-dom"
import SideBar from "./sidebar/Sidebar"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
`

const Section = styled.section`
  margin: auto;
`

const Layout = () => {
  return(
    <Container>
      <SideBar />
      <Section>
        <Outlet />
      </Section>
    </Container>
  )
}

export default Layout
