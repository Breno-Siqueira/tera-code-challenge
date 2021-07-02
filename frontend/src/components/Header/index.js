import { Container } from "./styles";
function Header(props) {
  return (
    <Container {...props}>
      <p>Livraria do cowboy</p>
      <p onClick={() => props.changeTheme()}>{props.theme.title} Mode</p>
    </Container>
  )
}

export default Header;