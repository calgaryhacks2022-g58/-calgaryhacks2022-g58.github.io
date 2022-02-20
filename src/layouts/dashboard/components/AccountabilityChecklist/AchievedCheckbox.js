/* eslint-disable react/prop-types */
import * as React from "react";
import { Checkbox } from "@mui/material";

export default function AchievedCheckbox({ achieved }) {
  const [checked, setChecked] = React.useState(achieved);

  return <Checkbox checked={checked} onClick={() => setChecked(!checked)} />;
}
