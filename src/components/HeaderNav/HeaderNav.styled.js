import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
margin: auto;
padding: ${p => p.theme.spasing(4)};
margin-bottom: ${p => p.theme.spasing(4)};
box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.12),
    0px 1px 5px 0px rgba(0, 0, 0, 0.12), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
`;

export const HeaderNavUl = styled.ul`
  display: flex;
  gap: ${p => p.theme.spasing(3)};
`;

export const HeaderLink = styled(Link)`   
  &:hover,
  &:focus,
  &:active {
    color: ${p => p.theme.colors.Crimson}; 
  }
`;