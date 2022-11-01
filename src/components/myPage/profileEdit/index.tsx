import * as _ from "./style";
import { BackBtn, BackBtnContainer, Profile } from "../style";
import SortArrowIcon from "../../../assets/icon/SortArrow";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

interface IFormStates {
  name: string;
  email: string;
  tag: string;
  introduce: string;
}
function ProfileEditComponent() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<IFormStates>();

  const onVaild = (form: IFormStates) => {
    console.log(form);
  };
  return (
    <_.Container onSubmit={handleSubmit(onVaild)}>
      <_.Container style={{ padding: 0 }}>
        <BackBtnContainer
          onClick={() => navigate(-1)}
          style={{ marginLeft: 0 }}
        >
          <SortArrowIcon />
          <BackBtn>돌아가기</BackBtn>
        </BackBtnContainer>
        <Profile
          htmlFor="imgFile"
          as="label"
          style={{ width: "100px", height: "100px" }}
        >
          <Profile alt="none" style={{ border: 0 }} />
        </Profile>
        <input type="file" id="imgFile" style={{ display: "none" }} />
        <_.Btn bgColor="#E1AD01" h={45} style={{ maxWidth: "150px" }}>
          이미지 변경
        </_.Btn>
        <_.Input {...register("name")} />
        <_.Input {...register("email")} style={{ color: "#787878" }} />
        <_.Input {...register("tag")} />
        <_.Input h={111} {...register("introduce")} />
      </_.Container>
      <_.BtnContainer>
        <_.Btn h={45} bgColor="#E1AD01">
          저장
        </_.Btn>
        <_.Btn h={45} bgColor="#F7F7F7">
          계정삭제
        </_.Btn>
      </_.BtnContainer>
    </_.Container>
  );
}

export default ProfileEditComponent;
