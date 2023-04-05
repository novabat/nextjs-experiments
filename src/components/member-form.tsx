import { TextField } from "@mui/material";
const MemberForm = ({ index }:any) => {
  console.log("memberFormRender", index);
  return (
    <div>
      <div className="textfield">
        <TextField
          type="text"
          fullWidth
          placeholder="Full Name"
          variant="outlined"
          name="fullNameValue"
        />
      </div>
      <div className="textfield">
        <TextField
          type="number"
          fullWidth
          placeholder="Age"
          variant="outlined"
          name="fullNameValue"
        />
      </div>
    </div>
  );
};

export default MemberForm;
