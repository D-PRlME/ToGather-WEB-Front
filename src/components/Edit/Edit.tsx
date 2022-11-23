import { useForm } from "react-hook-form";
import * as _ from "./style";
import { AxiosError, AxiosResponse } from "axios";
import { customAxios } from "../../lib/axios";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import token from "../../lib/token";
import Token from "../../lib/token";
import {
  DetailPostResponse,
  ISelectTags,
  TagListResponse,
} from "../../LocalTypes";
import useFetch from "../../hooks/useFetch";

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
  // TODO : localToken으로 변경해야함
  const { register, handleSubmit } = useForm<IEditFormStates>();
  // const [onQuestionModal, setOnQuestionModal] = useState(false);
  const [onModal, setOnModal] = useState(false);
  const [tags, setTags] = useState<string[]>([]);
  const [tagData, setTagsData] = useState<TagListResponse>();
  const [detailData, setDetailData] = useState<DetailPostResponse>();
  const navigate = useNavigate();
  const params = useParams();

  const [PATCHpost] = useFetch(`posts/${params["*"]}`);

  const onValid = (form: IEditFormStates) => {
    PATCHpost({
      method: "patch",
      data: {
        title: form.title,
        content: form.content,
        tag: tags,
      },
      options: {
        newUrl: `posts/${detailData?.post_id}`,
      },
    })
      .then(() => {
        navigate("/");
      })
      .catch((error: AxiosError) => {
        alert(error.message);
        console.log(error);
      });
  };
  const onChangeTag = (tag: string) => {
    if (tags.includes(tag)) {
      setTags((current) => current.filter((item) => item !== tag));
    } else {
      setTags((current) => [...current, tag]);
    }
  };
  useEffect(() => {
    customAxios("posts/tag/list", {
      method: "get",
    })
      .then((res) => {
        const upperTags = res.data.tags.map(
          (tag: { image_url: string; name: string }) => ({
            image_url: tag.image_url,
            name: tag.name.replace(".", "_").toUpperCase(),
          })
        );
        const newTags: TagListResponse = {
          tags: [...upperTags],
        };
        console.log(detailData);
        setTagsData(newTags);
      })
      .catch((err: AxiosError) => {
        alert(err.message);
        console.log(err);
      });

    customAxios(`posts/${params["*"]}`, {
      method: "get",
    })
      .then((res) => {
        const newTag = res.data.tags.map(
          (tag: { image_url: string; name: string }) => tag.name
        );
        setTags([...newTag]);
        setDetailData(res.data);
      })
      .catch((err) => alert(err.message));
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
                {tagData?.tags.map((tag) => (
                  <_.Tag
                    variants={TagMotion}
                    key={tag.name}
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
            </_.ModalWrapper>
          </_.ModalContainer>
        )}
      </AnimatePresence>
      <_.Input
        placeholder="제목"
        style={{ marginTop: "24px" }}
        defaultValue={detailData?.title}
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
        defaultValue={detailData?.content}
        {...register("content")}
      />
      <_.BtnContainer>
        <_.Btn bgColor="#E1AD01" type="submit">
          글쓰기
        </_.Btn>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ display: "flex", gap: "10px" }}>
            {tags.map((tag) => (
              <_.SelectTag key={tag}>{tag}</_.SelectTag>
            ))}
          </div>
          <_.Btn
            bgColor="#F7F7F7"
            onClick={() => setOnModal(true)}
            type="button"
            style={{ width: "200px" }}
          >
            모든 태그 보기
          </_.Btn>
        </div>
      </_.BtnContainer>
    </_.Container>
  );
}

export function CheckIcon() {
  return (
    <div
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        position: "absolute",
        borderRadius: "10px",
      }}
    >
      <svg
        width="29"
        height="29"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M5 13.8065L11.1277 20L23 8" stroke="white" strokeWidth="3" />
      </svg>
    </div>
  );
}

export default EditComponent;
