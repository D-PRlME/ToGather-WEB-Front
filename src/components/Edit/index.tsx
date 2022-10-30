import { useForm } from "react-hook-form";
import QuestionIcon from "../../assets/icon/question";
import { ACCESS_TOKEN_KEY } from "../../constants/token/token.constant";
import useFetch from "../../hooks/useFetch";
import * as _ from "./style";

interface IEditFormStates {
  title: string;
  mainText: string;
  tags: string; //TODO: 후의 변경해야함
}
function EditComponent() {
  const { register, handleSubmit } = useForm<IEditFormStates>();
  const [fetchHandler, { data, loading, error }] = useFetch("/users/auth");
  const onVaild = (form: IEditFormStates) => {
    fetchHandler({
      method: "get",
      headers: { Authentication: `Bearer ${ACCESS_TOKEN_KEY}` },
    });
  };
  return (
    <_.Container onSubmit={handleSubmit(onVaild)}>
      <_.Input
        placeholder="제목"
        style={{ marginTop: "24px" }}
        {...register("title")}
      />
      <div style={{ display: "flex", position: "relative" }}>
        <_.Input
          placeholder="연락받을 링크"
          disabled
          style={{ background: "#c8c8c8" }}
          {...register("mainText")}
        />
        <QuestionIcon />
      </div>
      <_.Input placeholder="본문을 입력하세요" as="textarea" height={754} />
      <_.BtnContainer>
        <_.Btn bgColor="#E1AD01">글쓰기</_.Btn>
        <_.Btn bgColor="#F7F7F7">모든 태그 보기</_.Btn>
      </_.BtnContainer>
    </_.Container>
  );
}

export default EditComponent;
