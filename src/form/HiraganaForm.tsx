import React, { useState } from "react";

const HiraganaForm = () => {
  const [hiraganaForm, setHirganaForm] = useState({
    formBuilder: {
      firstRow: [
        {
          name: "row1res1",
        },
        {
          name: "row1res2",
        },
        {
          name: "row1res3",
        },
      ],
      secondRow: [
        {
          name: "row2res1",
        },
        {
          name: "row2res2",
        },
        {
          name: "row2res3",
        },
      ],
    },
    initialValues: {
      row1res1: "",
      row1res2: "",
      row1res3: "",
      row2res1: "",
      row2res2: "",
      row2res3: "",
    },
    validationSchame: "",
    onSubmit: (values: any, e: any) => {
      e.preventDefault();
      console.log(values);
    },
  });

  return {
    hiraganaForm,
    setHirganaForm,
  };
};

export default HiraganaForm;
