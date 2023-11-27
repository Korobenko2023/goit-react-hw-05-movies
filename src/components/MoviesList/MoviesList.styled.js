import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MoviesUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${p => p.theme.spasing(5)};
  margin-left: ${p => p.theme.spasing(5)};
  margin-top: ${p => p.theme.spasing(5)};
`;

export const MoviesLi = styled.li`
  max-width: 160px;
`;

export const MoviesLink = styled(NavLink)` 
    color: ${p => p.theme.colors.black}; 
    font-size: 18px;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
   &:hover,
   &:focus {
    color: ${p => p.theme.colors.MediumBlue};     
  }
`;

export const Title = styled.p`  
  margin-top: ${p => p.theme.spasing(3)};
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`;
