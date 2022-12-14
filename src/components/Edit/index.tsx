import { useForm } from "react-hook-form";
import * as _ from "./style";
import { AxiosError, AxiosResponse } from "axios";
import { customAxios } from "../../lib/axios";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import token from "../../lib/token";
import { IEditFormStates, TagListResponse } from "../../LocalTypes";
import useFetch from "../../hooks/useFetch";

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

function CreateComponent() {
  const { register, handleSubmit } = useForm<IEditFormStates>();
  // const [onQuestionModal, setOnQuestionModal] = useState(false);
  const [onModal, setOnModal] = useState(false);
  const [tags, setTags] = useState<string[]>([]);
  const [tagData, setTagsData] = useState<TagListResponse>();

  const [POSTpost] = useFetch("posts");
  const navigate = useNavigate();
  const onValid = (form: IEditFormStates) => {
    POSTpost({
      method: "post",
      data: {
        title: form.title,
        content: form.content,
        tags: tags,
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
        setTagsData(newTags);
      })
      .catch((err: AxiosError) => {
        alert(err.message);
        console.log(err);
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
                ?????? ?????? ??????
              </_.Text>
              <_.Input
                width={430}
                height={24}
                placeholder="??????"
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
        placeholder="??????"
        style={{ marginTop: "24px" }}
        {...register("title")}
      />
      {/* <div style={{ display: "flex", position: "relative" }}>
        <_.Input
          placeholder="???????????? ??????"
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
              ???????????? ???????????? ????????? ????????????. ????????????, ???????????? ??? ?????????
              ????????? ????????? ?????????.
            </_.QuestionModal>
          )}
        </AnimatePresence>
      </div> */}
      <_.Input
        placeholder="????????? ???????????????"
        as="textarea"
        height={754}
        {...register("content")}
      />
      <_.BtnContainer>
        <_.Btn bgColor="#E1AD01" type="submit">
          ?????????
        </_.Btn>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
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
            ?????? ?????? ??????
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
        width="40"
        height="36"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M5 13.8065L11.1277 20L23 8" stroke="white" strokeWidth="3" />
      </svg>
    </div>
  );
}

export default CreateComponent;
