import { People } from "@mui/icons-material";
import { Children, useMemo } from "react";
import CustomAccordion from "./components/accordion";
import Button from "./components/button";
import MemberForm from "./components/member-form";
const MemberInputLayout = ({ children }: any) => {
  const components = useMemo(() => {
    const components: any = {};
    const memberAccordion: any = [];

    Children.forEach(children, (child) => {
      if (child.key === "memberAccordion") {
        memberAccordion.push(child);
      } else if (child.key === "editButton") {
        components.editButton = child;
      } else if (child.key === "submitButton") {
        components.submitButton = child;
      }
    });
    components.memberAccordion = memberAccordion;

    return components;
  }, [children]);
  return (
    <div className="parentDiv">
      <div className="headerContainer">
        <div style={{ display: "flex" }}>
          <People />
          <div>1 member added</div>
        </div>
        {components.editButton}
      </div>
{components.memberAccordion}
      {components.submitButton}
    </div>
  );
};

export default MemberInputLayout;
