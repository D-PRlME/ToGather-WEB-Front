import { Link } from "react-router-dom";
import * as _ from "./myPosts/style";

const TagContainerMotion = {
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
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function MyPageComponent() {
  return (
    <_.Container>
      <_.ProfileContainer>
        <div style={{ display: "flex" }}>
          <_.Profile alt="none" />
          <_.ProfileTextContainer>
            <_.Text weight={700} size={28} height={33}>
              이름
            </_.Text>
            <_.Text weight={500} size={20} height={24}>
              yeemail666@dsm.hs.kr
            </_.Text>
          </_.ProfileTextContainer>
        </div>
        <_.Btn color="#f7f7f7">
          <_.Text weight={500} size={24} height={29} color="black">
            로그아웃
          </_.Text>
        </_.Btn>
      </_.ProfileContainer>
      <_.TagContainer
        variants={TagContainerMotion}
        initial="hidden"
        animate="visible"
      >
        {[1, 2, 3, 4].map(() => (
          <_.Tag variants={TagMotion}>
            <_.Text weight={700} size={18} height={30} color="black">
              TAG
            </_.Text>
          </_.Tag>
        ))}
      </_.TagContainer>
      <_.BtnContainer

      >
        <Link to="/mypage/profileEdit">
          <_.Btn>
            <_.Text weight={500} height={28.8} size={24}>
              계정 정보 수정
            </_.Text>
          </_.Btn>
        </Link>
        <_.Btn>
          <_.Text weight={500} height={28.8} size={24}>
            비밀번호 변경
          </_.Text>
        </_.Btn>
        <Link to="/mypage/posts">
          <_.Btn>
            <_.Text weight={500} height={28.8} size={24}>
              내 게시글 보기
            </_.Text>
          </_.Btn>
        </Link>
        <_.Btn >
          <_.Text weight={500} height={28.8} size={24}>
            개발자들
          </_.Text>
        </_.Btn>
      </_.BtnContainer>
    </_.Container>
  );
}

export default MyPageComponent;
