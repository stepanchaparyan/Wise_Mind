import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ButtonStyled = styled(Link)`
  align-items: center;
  padding: 17px 54px;
  margin: auto 40px;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 3px;
  font-size: 12px;
  letter-spacing: 1px;
  border: ${({ bordercolor }) => (bordercolor ? `1px solid ${bordercolor}` : 0)};
  color: ${({ textcolor }) => textcolor};
  background-color: ${({ backgroundcolor }) => backgroundcolor};
  :hover {
    background-color: ${({ backgroundhovercolor }) => backgroundhovercolor};
    transition: background-color 0.5s;
    color: ${({ texthovercolor }) => texthovercolor};
    transition: color 0.5s;
    border: ${({ borderhovercolor }) => borderhovercolor && `1px solid ${borderhovercolor}`};
    transition: border 0.5s;
  }
`;
