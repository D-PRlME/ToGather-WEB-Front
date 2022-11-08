import axios from "axios";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import SortArrowIcon from "../../assets/icon/SortArrow";
import { BackBtn, BackBtnContainer, Profile } from "../myPage/style";
import * as _ from "./style";

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
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

interface DetailPostResponse {
  post_id: number;
  title: string;
  user: {
    user_id: number;
    user_name: string;
    profile_image_url: string;
  };
  created_at: string;
  tag: [
    {
      name: string;
      image_url: string;
    }
  ];
  content: string;
  is_mine: boolean;
  is_completed: boolean;
  is_liked: number;
  like_count: number;
}

// TODO : customaxios로 바꾸기
// TODO ; 좋아요 기능 구현하다 말음(500 error)
function PostComponent() {
  const navigate = useNavigate();
  const params = useParams();
  const [detailData, setDetailData] = useState<DetailPostResponse>();
  const [isLiked, setIsLiked] = useState(false);
  const token =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqYW5namlzb3VuZ0Bkc20uaHMua3IiLCJ0eXAiOiJhY2Nlc3MiLCJleHAiOjE2Njc5MzA3NDQsImlhdCI6MTY2NzkyNzE0NH0.vrPtz4ZzCaSTPS-w3B6bUt7nU1uBo5H4GPn7e1zZtYY.eyJzdWIiOiJqYW5namlzb3VuZ0Bkc20uaHMua3IiLCJ0eXAiOiJhY2Nlc3MiLCJleHAiOjE2Njc5MjcwNjEsImlhdCI6MTY2NzkyMzQ2MX0.wyOZVxYlzz20m43-owznlEv_PgPCzz7U7eko6FFXgFU";
  useEffect(() => {
    // 상세 페이지 불러오기
    axios(process.env.REACT_APP_BaseUrl + `/posts/${params["*"]}`, {
      method: "get",
      headers: {
        Authorization: token,
      },
    })
      .then((res) => setDetailData(res.data))
      .catch((err) => alert(err.message));
    if (detailData?.is_liked) {
      setIsLiked(detailData?.like_count > 0 ? true : false);
      console.log(isLiked);
    }
  }, []);
  const onValidLike = () => {
    console.log(isLiked);
    if (isLiked) {
      // 좋아요 보내기
      axios(process.env.REACT_APP_BaseUrl + `/posts/like/${params["*"]}`, {
        method: "post",
        headers: {
          Authorization: token,
        },
      })
        .then(() => console.log("좋아요 보냄"))
        .catch(() => alert("좋아요 보내기 실패.."));
    } else {
      // 좋아요 삭제
      axios(process.env.REACT_APP_BaseUrl + `/posts/like/${params["*"]}`, {
        method: "delete",
        headers: {
          Authorization: token,
        },
      })
        .then(() => {})
        .catch(() => alert("좋아요 취소 실패.."));
    }
  };
  const onValidDelete = () => {
    axios
      .get(process.env.REACT_APP_BaseUrl + `/posts/${params["*"]}`, {
        method: "delete",
        headers: {
          Authorization: token,
        },
      })
      .then(() => {
        alert("삭제 성공!");
        navigate("/");
      })
      .catch(() => alert("삭제 실패..."));
  };
  return (
    <_.Container>
      <div>
        <BackBtnContainer
          onClick={() => navigate(-1)}
          style={{ marginLeft: 0 }}
        >
          <SortArrowIcon />
          <BackBtn>돌아가기</BackBtn>
        </BackBtnContainer>
        <_.Text weight={700} size={32} height={38} color="black">
          {detailData?.title}
        </_.Text>
        <_.HeaderContainer>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Profile
              htmlFor="imgFile"
              as="label"
              style={{ width: "40px", height: "40px" }}
            >
              <Profile alt="none" style={{ border: 0 }} />
            </Profile>
            <input type="file" id="imgFile" style={{ display: "none" }} />
            <_.Text weight={500} size={20} height={24}>
              {detailData?.user.user_name}
            </_.Text>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <_.Text weight={500} size={20} color={"#787878"}>
              {detailData?.created_at}
            </_.Text>
            <div
              style={{ position: "relative", display: "flex" }}
              onClick={onValidLike}
            >
              <_.HeartText>{detailData?.like_count}</_.HeartText>
              <Heart />
            </div>
          </div>
        </_.HeaderContainer>
        <div>
          <svg
            width="772"
            height="1"
            viewBox="0 0 772 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              y1="0.5"
              x2="772"
              y2="0.5"
              stroke="#272727"
              strokeOpacity="0.15"
            />
          </svg>
        </div>
        <_.TagContainer
          variants={BoardContainerMotion}
          initial="hidden"
          animate="visible"
        >
          {/* {detailData?.tag.map((tag) => (
            <_.Tag key={tag.name} variants={BoardMotion}>
              {tag.name}
            </_.Tag>
          ))} */}
        </_.TagContainer>
        <_.Contents value={detailData?.content}></_.Contents>
      </div>
      <_.BtnContainer>
        <_.Btn bgColor="#E1AD01" h={45}>
          연락하기
        </_.Btn>
        {detailData?.is_mine && (
          <div style={{ display: "flex" }}>
            <_.Btn bgColor="#F7F7F7" h={45}>
              수정
            </_.Btn>
            <_.Btn bgColor="#FE3D3D" h={45} onClick={onValidDelete}>
              삭제
            </_.Btn>
          </div>
        )}
      </_.BtnContainer>
    </_.Container>
  );
}

function Heart() {
  return (
    <svg
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: "absolute", top: "25%", left: "60%" }}
    >
      <path
        d="M10.9312 5.01982L12.9155 2.9978C12.9155 2.9978 16.2228 -0.372247 19.5301 2.9978C22.8374 6.36784 19.5301 9.73789 19.5301 9.73789L10.9312 18.5L2.62619 9.73789C2.62619 9.73789 -0.828082 6.21806 2.33221 2.9978C5.4925 -0.222467 8.94678 2.9978 8.94678 2.9978L10.9312 5.01982Z"
        stroke="#787878"
        strokeWidth="2"
      />
    </svg>
  );
}
export default PostComponent;
