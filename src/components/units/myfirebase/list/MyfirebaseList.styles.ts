import styled from "@emotion/styled";

export const Wrapper = styled.div`
  max-width: 800px;
  width: 90%;
  margin: 100px;
`;

export const TableTop = styled.div`
  border-top: 2px solid gray;
  margin-top: 20px;
`;

export const TableBottom = styled.div`
  border-bottom: 2px solid gray;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid gray;
`;
export const ColumnHeaderSmall = styled.div`
  width: 10%;
  text-align: center;
`;
export const ColumnHeaderBasic = styled.div`
  width: 25%;
  text-align: center;
`;
export const ColumnHeaderMiddle = styled.div`
  width: 15%;
  text-align: center;
`;
export const ColumnHeaderTitle = styled.div`
  width: 50%;
  text-align: center;
`;
export const ColumnSmall = styled.div`
  width: 10%;
  text-align: center;
`;
export const ColumnBasic = styled.div`
  width: 25%;
  text-align: center;
`;
export const ColumnMiddle = styled.div`
  width: 15%;
  text-align: center;
`;
export const ColumnTitle = styled.div`
  width: 50%;
  text-align: center;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 50px;
`;

export const PencilIcon = styled.img``;

export const Button = styled.button`
  width: 171px;
  height: 52px;
  margin-top:10px;
  background-color: white;
  border-radius: 15px;
  
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;

  :hover {
    background-color: #f5f2fc;
  }
`;


