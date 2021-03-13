import React, { useEffect, useState } from "react";
import styled from "styled-components";
import HiraganaForm from "../form/HiraganaForm";
import Buttons from "./atoms/Buttons";
import KanaInput from "./KanaInput";

// ButtonDiv.
const ButtonsDivStyle = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
`;

// KanaRow.
const KanaRowStyle = styled.div`
  display: flex;
`;

const KanaRow = () => {
  // Hook to handler form fields and props.
  const { hiraganaForm, setHirganaForm } = HiraganaForm();

  // Hook to handle component reload.
  const [reload, setReload] = useState<any>(false);

  // Hook to handle user responses.
  const [responseReport, setResponseReport] = useState<boolean>(false);

  // Function to handler inputs
  const setInputValue = (e: any) => {
    setHirganaForm({
      ...hiraganaForm,
      [e.target.name]: e.target.value,
    });
  };

  // Function to handler submitting.
  const getFormValues = (e: any) => {
    e.preventDefault();
    setResponseReport(true);
  };

  // useEffect to reload component.
  useEffect(() => {
    if (reload) {
      setReload(false);
    }
  }, [reload]);

  // Refresh Kana Options.
  const refreshPage = () => {
    setResponseReport(false);
    setReload(true);
  };

  // Kanas Inputs.
  const HiraganaFormInputs = hiraganaForm.formBuilder.map((el) => {
    return (
      <KanaInput
        kanaOptions={el}
        handler={setInputValue}
        responseReport={responseReport}
      />
    );
  });

  return (
    <>
      {reload ? (
        <p></p>
      ) : (
        <>
          <KanaRowStyle>{HiraganaFormInputs}</KanaRowStyle>
          <ButtonsDivStyle>
            <Buttons width="80px" func={getFormValues}>
              Press
            </Buttons>
            <Buttons
              width="80px"
              func={refreshPage}
              disabledState={responseReport}
            >
              Refresh
            </Buttons>
          </ButtonsDivStyle>
        </>
      )}
    </>
  );
};

export default KanaRow;
