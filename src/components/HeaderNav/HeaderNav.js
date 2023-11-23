import { Header, HeaderLink, HeaderNavUl } from "./HeaderNav.styled";

export const HeaderNav = () => {
 
  return (
    <Header>
      <nav>
        <HeaderNavUl>
          <li>
            <HeaderLink to="/">Home</HeaderLink>
          </li>
          <li>
            <HeaderLink to="/movies">Movies</HeaderLink>
          </li>
        </HeaderNavUl>
      </nav>
    </Header>
  );
};

