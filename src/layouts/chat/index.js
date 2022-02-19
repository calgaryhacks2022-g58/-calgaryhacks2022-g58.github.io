// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

function Chat() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Grid item xs={12} md={12} lg={12}>
        <MDBox mb={1.5}>
          <iframe
            title="Bot"
            allow="microphone;"
            src="https://console.dialogflow.com/api-client/demo/embedded/5853f5a1-2ff9-435a-a099-394748ea2273"
            style={{
              position: "relative",
              height: "500px",
              display: "flex",
              flexDirection: "column",
              width: "500px",
              maxWidth: "90vw",
              margin: "auto",
            }}
          />
        </MDBox>
      </Grid>
    </DashboardLayout>
  );
}

export default Chat;
