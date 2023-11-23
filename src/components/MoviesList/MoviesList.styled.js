import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MoviesUl = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const MoviesLink = styled(Link)` 
    color: ${p => p.theme.colors.black}; 
    font-size: 18px;
   &:hover,
  :focus {
    color: ${p => p.theme.colors.MediumBlue};     
  }
`;