import * as _ from "./style"
import { Link } from "react-router-dom";
import HeartIcon from "../../assets/icon/Heart";
import { BoardTagWrapper } from "./style";

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

function SearchComponent() {
  return (
    <_.Container>
      <_.Input placeholder="검색" height={24} width={785}/>
      <_.TagWrapper>
        {[1,2,3,4,5].map((i)=><_.Tag bgColor={"#e7e7e7"}>TS</_.Tag>)}
      </_.TagWrapper>
      <_.Btn bgColor={"#E1AD01"}>모든 태그 보기</_.Btn>
      <Line/>
      <_.BoardContainer
        variants={BoardContainerMotion}
        initial="hidden"
        animate="visible"
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <Link to="/posts" state={{id: i}}>
            <_.Board key={i} variants={BoardMotion}>
              <_.BoardTitle>제목</_.BoardTitle>
              <_.BoardTagWrapper>
                <_.BoardTag>Flutter</_.BoardTag>
                <_.Tag>Javscript</_.Tag>
              </_.BoardTagWrapper>
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
export default SearchComponent;
