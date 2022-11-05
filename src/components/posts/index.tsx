import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
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

const BtnContainerMotion = {
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
function PostComponent() {
  const navigate = useNavigate();
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
        <_.Text
          weight={700}
          size={32}
          height={38}
          color="black"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          제목
        </_.Text>
        <_.HeaderContainer>
          <motion.div
            style={{ display: "flex", alignItems: "center" }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0, transition: { delay: 1 } }}
          >
            <Profile
              htmlFor="imgFile"
              as="label"
              style={{ width: "40px", height: "40px" }}
            >
              <Profile alt="none" style={{ border: 0 }} />
            </Profile>
            <input type="file" id="imgFile" style={{ display: "none" }} />
            <_.Text weight={500} size={20} height={24}>
              이름
            </_.Text>
          </motion.div>
          <motion.div
            style={{ display: "flex", alignItems: "center" }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0, transition: { delay: 1.3 } }}
          >
            <_.Text weight={500} size={20} color={"#787878"}>
              2022-08-22 12:12
            </_.Text>
            <div style={{ position: "relative", display: "flex" }}>
              <_.HeartText>21</_.HeartText>
              <Heart />
            </div>
          </motion.div>
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
              stroke-opacity="0.15"
            />
          </svg>
        </div>
        <_.TagContainer
          variants={BoardContainerMotion}
          initial="hidden"
          animate="visible"
        >
          {[1, 2, 3, 4, 5].map((i) => (
            <_.Tag key={i} variants={BoardMotion}>
              TAG
            </_.Tag>
          ))}
        </_.TagContainer>
        <_.Contents readOnly>내용들</_.Contents>
      </div>
      <_.BtnContainer
        variants={BtnContainerMotion}
        initial="hidden"
        animate="visible"
      >
        <_.Btn
          bgColor="#E1AD01"
          h={45}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0, transition: { delay: 1.5 } }}
        >
          연락하기
        </_.Btn>
        <motion.div
          style={{ display: "flex" }}
          initial={{ opacity: 0, x: 20 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { delay: 1.5, staggerChildren: 0.3 },
          }}
        >
          <_.Btn bgColor="#F7F7F7" h={45}>
            수정
          </_.Btn>
          <_.Btn bgColor="#FE3D3D" h={45}>
            삭제
          </_.Btn>
        </motion.div>
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
        stroke-width="2"
      />
    </svg>
  );
}
export default PostComponent;
