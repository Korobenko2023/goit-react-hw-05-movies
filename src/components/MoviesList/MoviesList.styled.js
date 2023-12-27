import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MoviesUl = styled.ul`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: ${p => p.theme.spasing(5)};
  margin-left: ${p => p.theme.spasing(5)};
  margin-top: ${p => p.theme.spasing(5)};
`;

export const FallingStarsWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; 
`;

export const MoviesLi = styled.li`
  position: relative;
  max-width: 160px;
  height: auto;
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

export const MoviesImg = styled.img`
height: 240px;
`;

export const Title = styled.p`  
  margin-top: ${p => p.theme.spasing(3)};
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`;

