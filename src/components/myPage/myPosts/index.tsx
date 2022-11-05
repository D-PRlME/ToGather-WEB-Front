import { Link, useNavigate } from "react-router-dom";
import HeartIcon from "../../../assets/icon/Heart";
import SortArrowIcon from "../../../assets/icon/SortArrow";
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
  },
};

function MyPostsComponent() {
  const navigate = useNavigate();
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
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <Link to="/posts">
            <_.Board key={i} variants={BoardMotion}>
              <_.BoardTitle>제목</_.BoardTitle>
              <_.TagWrapper>
                <_.Tag>Flutter</_.Tag>
                <_.Tag>Javscript</_.Tag>
              </_.TagWrapper>
              <Line />
              <_.UnderWrapper>
                <div>
                  <_.Profile alt="none" />
                  <_.UserName>유저이름</_.UserName>
                </div>
                <_.UnderRightWrapper>
                  <div>
                    <HeartIcon />
                    <_.GrayText style={{ marginLeft: "4px" }}>21</_.GrayText>
                  </div>
                  <SectionLine />
                  <_.GrayText>1시간전</_.GrayText>
                </_.UnderRightWrapper>
              </_.UnderWrapper>
            </_.Board>
          </Link>
        ))}
      </_.BoardContainer>
    </_.Container>
  );
}

// 단일성으로 사용할거 같아 컴포넌트 안에 선언
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
