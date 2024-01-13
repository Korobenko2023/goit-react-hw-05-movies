import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LinkBack = styled(NavLink)`
  color: ${p => p.theme.colors.MediumBlue}; 
  margin-bottom: ${p => p.theme.spasing(2)};
  display: flex;
  gap: ${p => p.theme.spasing(1)};
  align-items: center;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.Orange}; 
  }
`;