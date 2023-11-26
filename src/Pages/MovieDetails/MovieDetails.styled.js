import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkBack = styled(Link)`
  margin-bottom: ${p => p.theme.spasing(4)};
  display: flex;
  gap: ${p => p.theme.spasing(1)};
  align-items: center;
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.MediumBlue}; 
  }
`;