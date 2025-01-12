import { StyledTitle, StyledSubTitle, Avatar, StyledButtom, ButtonGroup, StyledFormArea, colors} from "./../components/Styles";
 
//logo
import Logo from"./../assets/logo192 copy.png";

const Dashboard = () => {
  return (
    <div>
       <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          backgroundColor: "transparent",
          width: "100%",
          padding: "15px",
          display: "flex",
          justifyContent: "flex-start",
       }}
      >
        <Avatar image={Logo} />
        </div>
        <StyledFormArea bg={colors.dark2}>
            <StyledTitle> size={65}
            Welcome, User</StyledTitle>
            
            <ButtonGroup>
            <StyledButtom to="#">Logout</StyledButtom>
            </ButtonGroup>

        </StyledFormArea>
       
    </div>
  );
};

export default Dashboard;
    