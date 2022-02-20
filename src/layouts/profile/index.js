/* eslint-disable radix */
/* eslint-disable no-param-reassign */
/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import ConversationLists from "layouts/profile/components/ConversationLists";

// Overview page components
import Header from "layouts/profile/components/Header";

// Data
import profilesListData from "layouts/profile/data/profilesListData";

// Firebase
import { db } from "utils/firestore";
import { collection, query } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

function Overview() {
  const messageRef = collection(db, "Chat");
  const queryMsg = query(messageRef);
  const [messages] = useCollectionData(queryMsg);

  let conversations = [];
  if (messages) {
    conversations = [...profilesListData];
    conversations.forEach((record) => {
      record.messages = messages[record.chatId].messages;
      record.description = record.messages[record.messages.length - 1].content;
    });
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
      <Header>
        <MDBox mt={5} mb={3}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6} xl={6} sx={{ display: "flex" }}>
              <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
              <ProfileInfoCard
                title="profile information"
                description=""
                info={{
                  fullName: "Richard Davis",
                  mobile: "(403) 215 9182",
                  email: "Richard.Davis@mail.com",
                  location: "Calgary, Alberta",
                }}
                social={[]}
                action={{ route: "", tooltip: "Edit Profile" }}
                shadow={false}
              />
              <Divider orientation="vertical" sx={{ mx: 0 }} />
            </Grid>
            <Grid item xs={12} xl={6}>
              <ConversationLists title="conversations" profiles={conversations} shadow={false} />
            </Grid>
          </Grid>
        </MDBox>
      </Header>
      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
