import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
margin: auto;
padding: ${p => p.theme.spasing(4)};
margin-bottom: ${p => p.theme.spasing(4)};
box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.12),
    0px 1px 5px 0px rgba(0, 0, 0, 0.12), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
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