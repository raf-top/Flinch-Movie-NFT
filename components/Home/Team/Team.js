// Styled Components
import styled from "styled-components";

// Components
import TeamMember from "./TeamMember/TeamMember";

const Team = () => {
  return (
    <Wrapper>
      <p className="team-header">The Team</p>

      <div className="team">
        <TeamMember
          img={"https://i.postimg.cc/WFXcy3hn/Doyle.jpg"}
          header={"Writer & Director"}
          info={"Cameron Van Hoy"}
          instagram={"https://www.instagram.com/cameronvanhoy/"}
          facebook={""}
          twitter={"https://twitter.com/CameronVanHoy"}
        />
        <TeamMember
          img={"https://i.postimg.cc/BXhfptdQ/Mia.jpg"}
          header={"Characters by"}
          info={"@sveta_has"}
          instagram={"https://www.instagram.com/sveta_has/"}
          facebook={""}
          twitter={""}
          tiktok={"https://www.tiktok.com/@sveta_has?lang=en"}
        />     
        <TeamMember
          img={"https://i.postimg.cc/gnwbMGdV/James.jpg"}
          header={"Developer"}
          info={"Iceyy"}
        />
      </div>
    </Wrapper>
  );
};

export default Team;

const Wrapper = styled.div`
  width: 100%;
  height: max-content;
  background-color: #191919;

  padding: 20px;

  border-top: 2px solid #eaa721;
  border-bottom: 2px solid #eaa721;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  .team-header {
    text-align: center;
    font-family: interstate, sans-serif;
    font-weight: 900;
    font-style: normal;
    font-size: 2rem;
    color: #eaa721;
  }

  .team {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 25px;

    &-single {
      gap: 0;
      flex-wrap: nowrap;
      align-items: center;

      //   display: block;
      //  width: 100%;
    }
  }
`;
