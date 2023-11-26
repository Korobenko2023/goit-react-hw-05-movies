import styled from 'styled-components';
export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  max-width: 600px;
  gap: ${p => p.theme.spasing(1)};
  overflow: hidden;
`;
  
export const SearchInput = styled.input`
  padding-bottom: ${p => p.theme.spasing(1)};  
  padding-left: ${p => p.theme.spasing(2)};  
  width: 100%;
  height: 40px;
  font-size: 20px;
  border: 1px solid black;
  border-radius: ${p => p.theme.radii.sm};
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1); 
  &:hover,
  &:focus,
  &:active {
    border-color: ${p => p.theme.colors.MediumBlue}; 
  }
  outline: none; 
  &::placeholder {
    font-size: 16px;
    padding-left: ${p => p.theme.spasing(2)};  
   
  }
`;

export const SearchButton = styled.button`
  padding-bottom: ${p => p.theme.spasing(1)};  
  width: 200px;
  height: 40px;
  border: 1px solid black;
  border-radius: ${p => p.theme.radii.sm};
  outline: none;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1); 
  &:hover,
  &:focus {
    border-color: ${p => p.theme.colors.MediumBlue}; 
  } 
`;