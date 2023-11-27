import styled from 'styled-components';

export const ReviewsUl = styled.ul`
  margin-top: 12px;
`;

export const ReviewsLi = styled.li`
  font-size: 14px;
  padding: 6px;
  width: 1250px;
  margin-bottom: 16px;
  border: 1px solid gray;
  border-radius: 4px;
  background-color:  ${p => p.theme.colors.white}; 
`;

export const ReviewsP = styled.p`
  margin-top: 6px;
`;