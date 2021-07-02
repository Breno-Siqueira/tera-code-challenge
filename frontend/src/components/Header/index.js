import { Container } from "./styles";
function Header(props) {
  console.log('props', props)
  return (
    <Container {...props}>
      <p>Livraria do cowboy</p>
      <p onClick={() => props.changeTheme()}>Theme</p>
    </Container>
  )
}

export default Header;