import * as _ from "./style";
import * as s from "../Edit/style";
import { Link } from "react-router-dom";
import HeartIcon from "../../assets/icon/Heart";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CheckIcon } from "../Edit";
import { customAxios } from "../../lib/axios";
import Token from "../../lib/token";
import { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import React from "react";
import { PostsListResponse, TagListResponse } from "../../LocalTypes";

const BoardContainerMotion = {
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

const BoardMotion = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

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
  exit: {
    opacity: 0,
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
  exit: {
    opacity: 0,
  },
};

function SearchComponent() {
  const { register, handleSubmit } = useForm<{ title: string }>();
  const [onModal, setOnModal] = useState(false);
  const [tagData, setTagsData] = useState<TagListResponse>();
  const [tags, setTags] = useState<string>();
  const [searchData, setSearchData] = useState<PostsListResponse>();

  const onChangeTag = (tag: string) => {
    customAxios(`posts?tag=${tag}`, {
      method: "get",
      headers: {
        Authorization: Token.getToken("token"),
      },
    })
      .then((res) => {
        setSearchData(res.data);
      })
      .catch((err) => alert(err));
    setTags(tag);
  };

  const onValidPostSearch = (form: { title: string }) => {
    customAxios(`posts?title=${form.title}`, {
      method: "get",
      headers: {
        Authorization: Token.getToken("token"),
      },
    }).then((res) => {
      setSearchData(res.data);
    });
  };

  useEffect(() => {
    customAxios("posts/tag/list", {
      method: "get",
      headers: {
        Authorization: Token.getToken("token"),
      },
    })
      .then((res) => {
        const upperTags = res.data.tags.map(
          (tag: { image_url: string; name: string }) => ({
            image_url: tag.image_url,
            name: tag.name.replace(".", "_").toUpperCase(),
          })
        );
        const newTags: TagListResponse = {
          tags: upperTags,
        };
        setTagsData(newTags);
      })
      .catch((err: AxiosError) => {
        alert(err.message);
        console.log(err);
      });
  }, [searchData]);
  return (
    <_.Container>
      <AnimatePresence>
        {onModal && (
          <s.ModalContainer
            variants={TagsContainerMotion}
            initial="hidden"
            animate="visible"
            style={{ marginTop: "-25px" }}
          >
            <s.ModalBg onClick={() => setOnModal(false)} />
            <s.ModalWrapper>
              <s.Text weight={700} size={40} height={48} color={"black"}>
                모든 태그 보기
              </s.Text>
              <s.Input
                width={430}
                height={24}
                placeholder="검색"
                style={{ marginBottom: "12px", marginTop: "12px" }}
              />
              <s.TagWrapper
                variants={TagsContainerMotion}
                initial="hidden"
                animate="visible"
              >
                {tagData?.tags.map((tag) => (
                  <s.Tag
                    variants={TagMotion}
                    key={tag.name}
                    onClick={() => onChangeTag(tag?.name)}
                  >
                    {tag.name === tags && <CheckIcon />}
                    <motion.img
                      src={tag.image_url}
                      height={40}
                      style={{ borderRadius: "10px" }}
                    />
                    <s.Text
                      weight={500}
                      size={24}
                      height={29}
                      color={"black"}
                      style={{ marginLeft: "12px" }}
                    >
                      {tag.name}
                    </s.Text>
                  </s.Tag>
                ))}
              </s.TagWrapper>
            </s.ModalWrapper>
          </s.ModalContainer>
        )}
      </AnimatePresence>
      <form onSubmit={handleSubmit(onValidPostSearch)}>
        <_.Input
          placeholder="검색"
          height={24}
          width={785}
          {...register("title")}
        />
      </form>
      <_.TagWrapper>
        {tags && (
          <_.Tag bgColor={"#e7e7e7"} key={tags}>
            {tags}
          </_.Tag>
        )}
      </_.TagWrapper>
      <_.Btn bgColor={"#E1AD01"} onClick={() => setOnModal(true)}>
        모든 태그 보기
      </_.Btn>
      <Line />
      <_.BoardContainer
        variants={BoardContainerMotion}
        initial="hidden"
        animate="visible"
      >
        {searchData?.post_list.map((post) => (
          <Link to="/posts" state={{ id: post.post_id }} key={post.post_id}>
            <_.Board variants={BoardMotion}>
              <_.BoardTitle>{post.title}</_.BoardTitle>
              <_.BoardTagWrapper>
                {post.tags.map((tag) => (
                  <_.BoardTag>{tag.name}</_.BoardTag>
                ))}
              </_.BoardTagWrapper>
              <Line />
              <_.UnderWrapper>
                <div>
                  <_.Profile alt="none" src={post.user.profile_image_url} />
                  <_.UserName>{post.user.user_name}</_.UserName>
                </div>
                <_.UnderRightWrapper>
                  <div>
                    <HeartIcon />
                    <_.GrayText style={{ marginLeft: "4px" }}>
                      {post.like_count}
                    </_.GrayText>
                  </div>
                  <SectionLine />
                  <_.GrayText>{post.created_at}</_.GrayText>
                </_.UnderRightWrapper>
              </_.UnderWrapper>
            </_.Board>
          </Link>
        ))}
      </_.BoardContainer>
    </_.Container>
  );
}

function Line() {
  return (
    <svg
      width="759"
      height="1"
      viewBox="0 0 759 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line y1="0.5" x2="759" y2="0.5" stroke="#272727" strokeOpacity="0.15" />
    </svg>
  );
}
function SectionLine() {
  return (
    <svg
      width="2"
      height="15"
      viewBox="0 0 2 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 0L1 7.5L1 15" stroke="#272727" strokeOpacity="0.15" />
    </svg>
  );
}
export default SearchComponent;
