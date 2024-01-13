import styled from 'styled-components';

export const CastDiv = styled.div`
   max-width: 1300px;
   margin-left: auto;
   margin-right: auto;
`;

export const CastUl = styled.ul`
  margin: auto;
  margin-top:  ${p => p.theme.spasing(1)};
  display: flex;
  flex-wrap: wrap;
  gap: ${p => p.theme.spasing(4)};
`;

export const CastLi = styled.li`
 flex-basis: calc((100% - 80px) / 6);
  min-width: 190px;
  font-size: 14px;
  padding: ${p => p.theme.spasing(2)};
  background-color: ${p => p.theme.colors.violet}; 
  border-radius: ${p => p.theme.radii.md};
  :not(:last-child) {
    margin-bottom: ${p => p.theme.spasing(2)};
  }

  img {
    max-width: 100%;
    border-radius: ${p => p.theme.radii.md};
  }
  span {
    color: ${p => p.theme.colors.Orange}; 
  }
`;