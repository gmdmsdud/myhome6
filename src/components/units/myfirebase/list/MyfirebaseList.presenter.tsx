import * as S from "./MyfirebaseList.styles";
import { IMyfirebaseListUIProps } from "./MyfirebaseList.types";
import { v4 as uuidv4 } from "uuid";

export default function MyfirebaseListUI(props: IMyfirebaseListUIProps) {
  return (
    <S.Wrapper>
     
      <S.Row>
        <S.ColumnHeaderSmall>번호</S.ColumnHeaderSmall>
        <S.ColumnHeaderBasic>제목</S.ColumnHeaderBasic>
        <S.ColumnHeaderTitle>내용</S.ColumnHeaderTitle>
        <S.ColumnHeaderMiddle>작성자</S.ColumnHeaderMiddle>
        
      </S.Row>
      {props.dataBoards?.map((el: any, index: number) => (
        <S.Row key={uuidv4()}>
          <S.ColumnSmall>{index + 1}</S.ColumnSmall>
          <S.ColumnBasic>{el.title}</S.ColumnBasic>
          <S.ColumnTitle>{el.contents}</S.ColumnTitle>
          <S.ColumnMiddle>{el.writer}</S.ColumnMiddle>
         
        </S.Row>
      ))}
      <S.Button onClick={props.onClickMoveToBoardNew}>
        <S.PencilIcon src="/images/board/list/write.png" />
        게시물 등록하기
      </S.Button>
    </S.Wrapper>
  );
}
