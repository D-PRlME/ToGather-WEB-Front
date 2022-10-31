import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import QuestionIcon from "../../assets/icon/question";
import { ACCESS_TOKEN_KEY } from "../../constants/token/token.constant";
import useFetch from "../../hooks/useFetch";
import * as _ from "./style";
interface IEditFormStates {
  title: string;
  content: string;
  tags: string; //TODO: 후의 변경해야함
}
function EditComponent() {
  const { register, handleSubmit } = useForm<IEditFormStates>();
  const [fetchHandler, { data, loading, error }] = useFetch("/posts");
  const [onQuestionModal, setOnQuestionModal] = useState(false);
  const onVaild = (form: IEditFormStates) => {
    fetchHandler({
      method: "POST",
      headers: {
        Authentication: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJiamNobzE1MDNAZHNtLmhzLmtyIiwidHlwIjoiYWNjZXNzIiwiZXhwIjoxNjY3MjEzMDc2LCJpYXQiOjE2NjcyMDk0NzZ9.lGVF2CCdFzlgSHAMQHcdN5r6qB9XkwdeqEbjp_JJn98`,
      },
      data: {
        title: form.title,
        content: form.content,
        tag: "",
      },
    });
    console.log(data, loading, error);
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
          {...register("content")}
        />
        <div onClick={() => setOnQuestionModal((current) => !current)}>
          <QuestionIcon />
        </div>
        <AnimatePresence>
          {onQuestionModal && (
            <_.QuestionModal
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              프로젝트 지원자가 연락할 주소에요. 오픈채팅, 디스코드 등 메신저
              링크를 작성해 주세요.
            </_.QuestionModal>
          )}
        </AnimatePresence>
      </div>
      <_.Input
        placeholder="본문을 입력하세요"
        as="textarea"
        height={754}
        {...register("content")}
      />
      <_.BtnContainer>
        <_.Btn bgColor="#E1AD01">글쓰기</_.Btn>
        <_.Btn bgColor="#F7F7F7">모든 태그 보기</_.Btn>
      </_.BtnContainer>
    </_.Container>
  );
}

export default EditComponent;
