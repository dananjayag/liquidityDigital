import styled from 'styled-components';

const Image = styled.img`
  margin: ${({margin})=> margin};
  height: ${({height})=> height};
  width:  ${({width})=> width};
`;

export default Image;