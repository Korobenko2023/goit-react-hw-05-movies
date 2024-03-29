import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MovieContainer = styled.div`
  max-width: 95%;
  padding-bottom: ${p => p.theme.spasing(4)};
  margin-bottom: ${p => p.theme.spasing(1)};
  display: flex;
  gap: ${p => p.theme.spasing(4)};
  border-bottom: 1px solid ${p => p.theme.colors.MediumBlue}; 
`;

export const Descriprion = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spasing(2)};
`;

export const Additional = styled.div`
   max-width: 1200px;
`;


export const LinkCard = styled(NavLink)`
  color: ${p => p.theme.colors.MediumBlue}; 
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus,
  &.active {
    color: ${p => p.theme.colors.Orange}; 
  }
`;