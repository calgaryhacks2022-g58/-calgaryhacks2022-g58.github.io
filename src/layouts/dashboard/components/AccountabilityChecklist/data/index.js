/* eslint-disable radix */
/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/* eslint-disable-next-line radix */

import MDBox from "components/MDBox";
import MDAvatar from "components/MDAvatar";
import MDTypography from "components/MDTypography";

import ChatDialog from "../ChatDialog";
import { chat, goals } from "./testData";
import AchievedCheckbox from "../AchievedCheckbox";

export default function data() {
  const Goal = ({ image, goal, latestMsg }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDBox>
        <MDAvatar src={image} name={goal} size="sm" />
      </MDBox>
      <MDBox>
        <MDTypography fontWeight="medium" ml={1} lineHeight={1}>
          {goal}
        </MDTypography>
        <MDTypography variant="button" fontWeight="light" ml={1} lineHeight={1}>
          {latestMsg}
        </MDTypography>
      </MDBox>
    </MDBox>
  );

  const GetLatestMessage = (id) => {
    const i = parseInt(id);
    const msgs = chat[i].messages;
    const latestMsg = msgs[msgs.length - 1];
    const sender =
      chat[i].members[latestMsg.sender] === "Bob" ? "You" : chat[i].members[latestMsg.sender];
    return `${sender}: ${latestMsg.content}`;
  };
  const rowEntries = [];
  goals.forEach((goal) => {
    rowEntries.push({
      goals: (
        <Goal image={goal.partnerImg} goal={goal.goal} latestMsg={GetLatestMessage(goal.chatid)} />
      ),
      chat: <ChatDialog id={parseInt(goal.chatid)} />,
      achieved: <AchievedCheckbox achieved={goal.achived} />,
    });
  });

  return {
    columns: [
      { Header: "Goals", accessor: "goals", width: "80%", align: "left" },
      { Header: "", accessor: "chat", width: "10%", align: "center" },
      { Header: "Achieved", accessor: "achieved", width: "10%", align: "center" },
    ],

    rows: rowEntries,
  };
}
