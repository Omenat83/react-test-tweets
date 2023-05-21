import styled from "styled-components";

export const UserListUl = styled.ul`
 max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 30px;
  justify-items: center;
  margin: 0 auto;
  margin-bottom: 30px;
`