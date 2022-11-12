import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HeartIcon from "../../../assets/icon/Heart";
import SortArrowIcon from "../../../assets/icon/SortArrow";
import { customAxios } from "../../../lib/axios";
import Token from "../../../lib/token";
import { PostsListResponse } from "../../home/HomePostList";
import * as _ from "../style";

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
    transition: {
      bounce: 0.2,
    },
  },
};

function MyPostsComponent() {
  const navigate = useNavigate();
  const [myPostsData, setMyPostsData] = useState<PostsListResponse>();

  useEffect(() => {
    customAxios("posts/my", {
      method: "get",
      headers: {
        Authorization: Token.getToken("token"),
      },
    }).then((res) => {
      setMyPostsData(res.data);
    });
  }, []);
  return (
    <_.Container>
      <_.BackBtnContainer onClick={() => navigate(-1)}>
        <SortArrowIcon />
        <_.BackBtn>돌아가기</_.BackBtn>
      </_.BackBtnContainer>
      <_.BoardContainer
        variants={BoardContainerMotion}
        initial="hidden"
        animate="visible"
      >
        {myPostsData?.post_list.map((post) => (
          <Link to={`/posts/${post.post_id}`} key={post.post_id}>
            <_.Board variants={BoardMotion}>
              <_.BoardTitle>{post.title}</_.BoardTitle>
              <_.TagWrapper>
                {post.tags.map((tag) => (
                  <_.Tag key={tag.name}>{tag.name}</_.Tag>
                ))}
              </_.TagWrapper>
              <Line />
              <_.UnderWrapper>
                <div>
                  <_.Profile alt="none" />
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
      <path d="M1 0L1 7.5L1 15" stroke="#272727" stroke-opacity="0.15" />
    </svg>
  );
}
export default MyPostsComponent;
