import * as _ from "./style";
import { BackBtn, BackBtnContainer, Profile } from "../style";
import SortArrowIcon from "../../../assets/icon/SortArrow";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { customAxios } from "../../../lib/axios";
import { useEffect, useState } from "react";
import { IFormStates, IUserProfile } from "../../../LocalTypes";

function ProfileEditComponent() {
  const navigate = useNavigate();
  const [userProfileData, setUserProfileData] = useState<IUserProfile>();
  const { register, handleSubmit, setValue } = useForm<IFormStates>();

  const onVaild = (form: IFormStates) => {
    console.log(form);
    customAxios("users", {
      method: "patch",
      data: {
        name: form.name,
        profile_image_url: userProfileData?.profile_image_url,
        introduce: form.introduce,
        positions: ["FRONTEND", "BACKEND"],
      },
    })
      .then(() => {
        alert("수정 성공!");
        navigate("/");
      })
      .catch((err) => {
        alert("유저 수정 실패 " + err.message);
      });
  };

  const onValidImg = (data: React.ChangeEvent<HTMLInputElement>) => {
    if(data.target.files){
      customAxios("images", {
        method: "post",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        data: {
          images: data.target.files[0],
        },
      }).then((res) =>{
        console.log(res)
        setUserProfileData((current) => (
          current && {
            ...current,
            profile_image_url: res.data.images_url[0],
          }
        ))
      });
    }
  };
  useEffect(() => {
    customAxios("users", {
      method: "get",
    }).then((res) => {
      console.log(res)
      setUserProfileData(res.data);
      setValue("name", res.data.name);
      setValue("introduce", res.data.introduce);
      setValue("email", res.data.email);
      setValue("positions", res.data.positions);
    });
  }, []);
  return (
    <_.Container onSubmit={handleSubmit(onVaild)}>
      <_.Container style={{ padding: 0 }}>
        <BackBtnContainer
          onClick={() => navigate("/mypage/home")}
          style={{ marginLeft: 0 }}
        >
          <SortArrowIcon />
          <BackBtn>돌아가기</BackBtn>
        </BackBtnContainer>
        <Profile alt="none" style={{ border: 1, width: "100px", height:"100px" }} src={userProfileData?.profile_image_url} />
        <_.Btn
          bgColor="#E1AD01"
          h={25}
          style={{ maxWidth: "150px" }}
          as="label"
          htmlFor="imgFile"
        >
          이미지 변경
        </_.Btn>
        <input
          type="file"
          id="imgFile"
          style={{ display: "none" }}
          onChange={onValidImg}
        />
        <_.Input {...register("name")} defaultValue={userProfileData?.name} />
        <_.Input
          {...register("email")}
          style={{ color: "#787878" }}
          defaultValue={userProfileData?.email}
        />
        <_.Input
          {...register("positions")}
          defaultValue={userProfileData?.positions}
        />
        <_.Input
          h={111}
          {...register("introduce")}
          defaultValue={userProfileData?.introduce}
        />
      </_.Container>
      <_.BtnContainer>
        <_.Btn h={45} bgColor="#E1AD01">
          저장
        </_.Btn>
        <Link to="/mypage/delete">
          <_.Btn h={45} bgColor="#F7F7F7">
            계정삭제
          </_.Btn>
        </Link>
      </_.BtnContainer>
    </_.Container>
  );
}

export default ProfileEditComponent;
