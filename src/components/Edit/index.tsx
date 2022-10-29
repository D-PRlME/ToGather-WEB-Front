import * as _ from "./style";

function EditComponent() {
  return (
    <_.Container>
      <_.Input placeholder="제목" />
      <_.Input
        placeholder="연락받을 링크"
        disabled
        style={{ background: "#c8c8c8" }}
      />
      <_.Input placeholder="본문을 입력하세요" as="textarea" height={754} />
      <_.BtnContainer>
        <_.Btn bgColor="#E1AD01">글쓰기</_.Btn>
        <_.Btn bgColor="#F7F7F7">모든 태그 보기</_.Btn>
      </_.BtnContainer>
    </_.Container>
  );
}

export default EditComponent;
