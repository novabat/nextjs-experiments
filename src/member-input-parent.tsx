import MemberInputLayout from "./member-input-layout";
import Button from "./components/button";
import CustomAccordion from "./components/accordion";
import MemberForm from "./components/member-form";
import { ExpandMore } from "@mui/icons-material";
import { useState } from "react";
import TestCounter from "./components/test-counter";

const MemberInputParent = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    console.log("increment called");
    setCount((prev) => prev + 1);
  };
  return (
    <>
      <MemberInputLayout>
        <Button key="editButton" label="Edit" />
        <CustomAccordion key="memberAccordion" expandIcon={<ExpandMore />} summaryText="Self">
          <MemberForm index={0} />
        </CustomAccordion>
        <CustomAccordion key="memberAccordion" expandIcon={<ExpandMore />} summaryText="Son">
          <MemberForm index={1} />
        </CustomAccordion>
        <Button key="submitButton" label="Submit" />
      </MemberInputLayout>
      <TestCounter count={count} handleClick={handleIncrement} />
    </>
  );
};

export default MemberInputParent;
