import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 64px;
  margin:0 auto;
  background-color: #5729ff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: white;
`;

export const MenuItem = styled.div`
margin: 0px 60px;
margin:0 auto;
  cursor: pointer;

  :hover {
    color: orange;
  }
`;
