import styled from "@emotion/styled";
import { ITextTokenProps } from "./BoardList.types";

export const Wrapper = styled.div`
  max-width: 1024px;
  width: 90%;
  margin: 10px auto;

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

  :hover {
    color: blue;
  }
`;

export const ColumnHeaderBasic = styled.div`
  width: 20%;
  text-align: center;
`;

export const ColumnHeaderTitle = styled.div`
  width: 60%;
  text-align: center;
`;

export const ColumnBasic = styled.div`
  width: 19%;
  text-align: center;
`;

export const ColumnTitle = styled.div`
  width: 60%;
  text-align: center;
  cursor: pointer;

  :hover {
    color: blue;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 10px;
`;

export const PencilIcon = styled.img`
@media (max-width: 425px) 
  {
    display: none;
  }
  `;

export const Button = styled.button`
  max-width: 171px;
  width: auto;
  height: 52px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  :hover {
    background-color: #f5f2fc;
  }
`;

export const TextToken = styled.span`
  color: ${(props: ITextTokenProps) => (props.isMatched ? "red" : "black")};
`;


