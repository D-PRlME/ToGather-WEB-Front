import { useForm } from "react-hook-form";
import QuestionIcon from "../../assets/icon/question";
import * as _ from "./style";
import axios, { AxiosResponse } from "axios";
import { customAxios } from "../../lib/axios";
import { ACCESS_TOKEN_KEY } from "../../constants/token/token.constant";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ISelectTags, TagListResponse } from "../home/HomePostList";
interface IEditFormStates {
  title: string;
  content: string;
  tags: ISelectTags; //TODO: 후의 변경해야함
}

const TagsContainerMotion = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const TagMotion = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { bounce: 0.2 },
  },
};

function EditComponent() {
  const { register, handleSubmit } = useForm<IEditFormStates>();
  // const [onQuestionModal, setOnQuestionModal] = useState(false);
  const [onModal, setOnModal] = useState(false);
  const [tags, setTags] = useState<string[]>([]);
  const [tagData, setTagsData] = useState<TagListResponse>();
  const onValid = (form: IEditFormStates) => {
    // customAxios("/posts", {
    //   method: "post",
    //   headers: {
    //     Authorization: `Bearer ${ACCESS_TOKEN_KEY}`,
    //   },
    //   data: {
    //     title: form.title,
    //     content: form.content,
    //     tags: ["PYTHON"],
    //   },
    // })
    //   .then((response: AxiosResponse) => {
    //     console.log(JSON.stringify(response.data));
    //   })
    //   .catch((error: any) => {
    //     console.log(error);
    //   });
    console.log(form);
  };
  const onChangeTag = (tag: string) => {
    if (tags.includes(tag)) {
      setTags((current) => current.filter((item) => item !== tag));
    } else {
      setTags((current) => [...current, tag]);
    }
  };
  console.log(tags);
  useEffect(() => {
    const token =
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqYW5namlzb3VuZ0Bkc20uaHMua3IiLCJ0eXAiOiJhY2Nlc3MiLCJleHAiOjE2Njc5MTk1NDMsImlhdCI6MTY2NzkxNTk0M30.GzpqXvpdr9nS_-HVG4g28837kMN5964n1iyAzZjH2H8";
    customAxios("posts/tag/list", {
      method: "get",
      headers: {
        Authorization: token,
      },
    }).then((res) => {
      setTagsData(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <_.Container onSubmit={handleSubmit(onValid)}>
      <AnimatePresence>
        {onModal && (
          <_.ModalContainer
            variants={TagsContainerMotion}
            initial="hidden"
            animate="visible"
          >
            <_.ModalBg onClick={() => setOnModal(false)} />
            <_.ModalWrapper>
              <_.Text weight={700} size={40} height={48} color={"black"}>
                모든 태그 보기
              </_.Text>
              <_.Input
                width={430}
                height={24}
                placeholder="검색"
                style={{ marginBottom: "12px", marginTop: "12px" }}
              />
              <_.TagWrapper
                variants={TagsContainerMotion}
                initial="hidden"
                animate="visible"
              >
                {tagData?.tags?.map((tag) => (
                  <_.Tag
                    variants={TagMotion}
                    key={Math.random()}
                    onClick={() => onChangeTag(tag?.name)}
                  >
                    {tags.includes(tag.name) && <CheckIcon />}
                    <motion.img
                      src={tag.image_url}
                      height={40}
                      style={{ borderRadius: "10px" }}
                    />
                    <_.Text
                      weight={500}
                      size={24}
                      height={29}
                      color={"black"}
                      style={{ marginLeft: "12px" }}
                    >
                      {tag.name}
                    </_.Text>
                  </_.Tag>
                ))}
              </_.TagWrapper>
              <_.ModalBtn>
                <_.Text weight={700} size={24} color={"#000000"}>
                  확인
                </_.Text>
              </_.ModalBtn>
            </_.ModalWrapper>
          </_.ModalContainer>
        )}
      </AnimatePresence>
      <_.Input
        placeholder="제목"
        style={{ marginTop: "24px" }}
        {...register("title")}
      />
      {/* <div style={{ display: "flex", position: "relative" }}>
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
      </div> */}
      <_.Input
        placeholder="본문을 입력하세요"
        as="textarea"
        height={754}
        {...register("content")}
      />
      <_.BtnContainer>
        <_.Btn bgColor="#E1AD01">글쓰기</_.Btn>
        <_.Btn bgColor="#F7F7F7" onClick={() => setOnModal(true)} type="button">
          모든 태그 보기
        </_.Btn>
      </_.BtnContainer>
    </_.Container>
  );
}

function CheckIcon() {
  return (
    <div style={{ backgroundColor: "rgba(0,0,0,0.3)", position: "absolute" }}>
      <svg
        width="29"
        height="29"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M5 13.8065L11.1277 20L23 8" stroke="white" stroke-width="3" />
      </svg>
    </div>
  );
}
export default EditComponent;
