import { Children, useMemo } from "react";
const MemberInputLayout = ({ children }: any) => {
  const components = useMemo(() => {
    const components: any = {};
    const memberAccordion: any = [];

    Children.forEach(children, (child) => {
      if (child.key.includes("memberAccordion")) {
        memberAccordion.push(child);
      } else if (child.key === "editButton") {
        components.editButton = child;
      } else if (child.key === "submitButton") {
        components.submitButton = child;
      } else if (child.key === "numberOfPeopleStrip") {
        components.numberOfPeopleStrip = child;
      }
    });
    components.memberAccordion = memberAccordion;

    return components;
  }, [children]);
  return (
    <div className="parentDiv">
      <div className="headerContainer">
        {components.numberOfPeopleStrip}
        {components.editButton}
      </div>
      {components.memberAccordion}
      {components.submitButton}
    </div>
  );
};

export default MemberInputLayout;
