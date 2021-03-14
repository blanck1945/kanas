import styled from "styled-components"
import GlobalStyles from "../../styles/GlobalStyles"

export interface CommonFormProps {
    state: string;
    setState: React.Dispatch<React.SetStateAction<string>>;
  }

export const FormStyle = styled.form`
    background-color: ${GlobalStyles.colors.mainGray};
    width: 40%;
    height: 400px;
    margin: auto;
    border-radius: 8px;
    margin-top: 20px;
`

export const HeaderDivStyle = styled.div`
   background-color: ${GlobalStyles.colors.mainBlue} ;
    color: white;
    width: 100%;
    display: flex;
    padding: 0px 8px;
    align-items:center;
    border-radius: 8px 8px 0 0;
    height: 30px;
    justify-content: space-between;
`


  export const SpanStyle = styled.span`
  color: #4835b3;
  cursor: pointer;
  font-weight: 700;
`;