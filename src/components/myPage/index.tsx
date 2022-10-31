import * as _ from "./MyPosts.style";

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
        <_.LogOutBtn>
          <_.Text weight={500} size={24} height={29} color="black">
            로그아웃
          </_.Text>
        </_.LogOutBtn>
      </_.ProfileContainer>
      <_.TagContainer>
        {[1, 2, 3, 4].map(() => (
          <_.Tag>
            <_.Text weight={700} size={18} height={30} color="black">
              TAG
            </_.Text>
          </_.Tag>
        ))}
      </_.TagContainer>
    </_.Container>
  );
}

export default MyPageComponent;
