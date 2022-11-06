import { useForm } from "react-hook-form";
import QuestionIcon from "../../assets/icon/question";
import * as _ from "./style";
import axios, { AxiosResponse } from "axios";
import { customAxios } from "../../lib/axios";
import { ACCESS_TOKEN_KEY } from "../../constants/token/token.constant";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
interface IEditFormStates {
  title: string;
  content: string;
  tags: string; //TODO: 후의 변경해야함
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
    transition: { type: "spring", bounce: 0.2 },
  },
};

function EditComponent() {
  const { register, handleSubmit } = useForm<IEditFormStates>();
  // const [onQuestionModal, setOnQuestionModal] = useState(false);
  const [onModal, setOnModal] = useState(false);
  const [tags, setTags] = useState([]);
  const onValid = (form: IEditFormStates) => {
    customAxios("/posts", {
      method: "post",
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN_KEY}`,
      },
      data: {
        title: "aaa",
        content: "aaa",
        tags: ["PYTHON"],
      },
    })
      .then((response: AxiosResponse) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error: any) => {
        console.log(error);
      });
  };
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
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                  <_.Tag variants={TagMotion} key={Math.random()}>
                    <motion.div>
                      <svg
                        width="45"
                        height="45"
                        viewBox="0 0 45 45"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <rect
                          width="45"
                          height="45"
                          rx="15"
                          fill="url(#pattern0)"
                        />
                        <rect
                          x="0.5"
                          y="0.5"
                          width="44"
                          height="44"
                          rx="14.5"
                          stroke="#272727"
                          strokeOpacity="0.15"
                        />
                        <defs>
                          <pattern
                            id="pattern0"
                            patternContentUnits="objectBoundingBox"
                            width="1"
                            height="1"
                          >
                            <use
                              xlinkHref="#image0_556_374"
                              transform="scale(0.0025)"
                            />
                          </pattern>
                          <image
                            id="image0_556_374"
                            width="400"
                            height="400"
                            xlinkHref="data:image/png;base64,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"
                          />
                        </defs>
                      </svg>
                    </motion.div>
                    <_.Text
                      weight={500}
                      size={24}
                      height={29}
                      color={"black"}
                      style={{ marginLeft: "12px" }}
                    >
                      Flutter
                    </_.Text>
                  </_.Tag>
                ))}
              </_.TagWrapper>
              <_.ModalBtn>
                <_.Text weight={700} size={24} color={"#000000"}>확인</_.Text>
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
        <_.Btn bgColor="#F7F7F7" onClick={() => setOnModal(true)}>
          모든 태그 보기
        </_.Btn>
      </_.BtnContainer>
    </_.Container>
  );
}

function CheckIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 13.8065L11.1277 20L23 8" stroke="white" stroke-width="3" />
    </svg>
  );
}
export default EditComponent;
