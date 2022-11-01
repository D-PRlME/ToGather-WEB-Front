import * as _ from "./style";
import { BackBtn, BackBtnContainer, Profile } from "../style";
import SortArrowIcon from "../../../assets/icon/SortArrow";
import { useNavigate } from "react-router-dom";

function ProfileEditComponent() {
  const navigate = useNavigate();
  return (
    <_.Container>
      <BackBtnContainer onClick={() => navigate(-1)} style={{ marginLeft: 0 }}>
        <SortArrowIcon />
        <BackBtn>돌아가기</BackBtn>
      </BackBtnContainer>
      <Profile alt="none" />
      <_.Btn bgColor="#E1AD01" w={142} h={45}>
        이미지 변경
      </_.Btn>
    </_.Container>
  );
}

export default ProfileEditComponent;
