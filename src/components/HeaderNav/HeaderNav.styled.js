import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
margin: auto;
padding: ${p => p.theme.spasing(4)};
box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
`;

export const HeaderNavUl = styled.ul`
  display: flex;
  gap: ${p => p.theme.spasing(3)};
`;

export const HeaderLink = styled(Link)`   
   &:hover,
  :focus {
    color: ${p => p.theme.colors.Crimson}; 
  }
`;