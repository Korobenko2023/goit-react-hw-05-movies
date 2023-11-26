import styled from 'styled-components';

export const MovieContainer = styled.div`
  max-width: 95%;
  padding-bottom: ${p => p.theme.spasing(4)};
  margin-bottom: ${p => p.theme.spasing(4)};
  display: flex;
  gap: ${p => p.theme.spasing(4)};
  border-bottom: 1px solid ${p => p.theme.colors.MediumBlue}; 
`;

export const Descriprion = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spasing(2)};
`;