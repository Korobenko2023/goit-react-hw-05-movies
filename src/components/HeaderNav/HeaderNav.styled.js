import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
max-width: 1300px;
margin: 0 auto;
margin-bottom: ${p => p.theme.spasing(3)};
padding: ${p => p.theme.spasing(5)};
background-color: ${p => p.theme.colors.DarkSlateBlue};
border-radius: ${p => p.theme.spasing(2)};
`;

export const HeaderNavUl = styled.ul`
  display: flex;
  gap: ${p => p.theme.spasing(5)};
`;

export const HeaderLink = styled(NavLink)` 
  font-size: 24px;
  font-weight: 700;
  color: ${p => p.theme.colors.MediumBlue}; 
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus,
  &.active {
    color: ${p => p.theme.colors.Orange};     
  }
`;