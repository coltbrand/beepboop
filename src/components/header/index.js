import styled, { createGlobalStyle } from "styled-components";

function Header() {
  return (
    <div>
      <h1>Header</h1>
    </div>
  );
}

const Navbar = {
  Wrapper: styled.nav``,
  Items: styled.ul``,
  Item: styled.li``,
};

export default Header;
