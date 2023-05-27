import { Outlet } from "react-router-dom"
import SideBar from "./sidebar/Sidebar"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
`

const Layout = () => {
  return(
    <Container>
      <SideBar />
      <section>
        <Outlet />
      </section>
    </Container>
  )
}

export default Layout
