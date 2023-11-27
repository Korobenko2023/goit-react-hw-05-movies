import styled from 'styled-components';

export const CastUl = styled.ul`
  margin-top:  ${p => p.theme.spasing(1)};
  display: flex;
  flex-wrap: wrap;
  gap: ${p => p.theme.spasing(4)};
`;

export const CastLi = styled.li`
  min-width: 190px;
  font-size: 14px;
  padding: ${p => p.theme.spasing(2)};
  max-width: min-content;
  background-color: ${p => p.theme.colors.violet}; 
  border-radius: ${p => p.theme.radii.md};
  :not(:last-child) {
    margin-bottom: ${p => p.theme.spasing(2)};
  }

  img {
    max-width: 190px;
    border-radius: ${p => p.theme.radii.md};
  }
  span {
    color: ${p => p.theme.colors.MediumBlue}; 
  }
`;