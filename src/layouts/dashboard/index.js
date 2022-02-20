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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";

// Data
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import AccountabilityChecklist from "layouts/dashboard/components/AccountabilityChecklist";
import Doctors from "layouts/dashboard/components/Doctors";
import Quote from "layouts/dashboard/components/Quote";

function Dashboard() {
  const { tasks } = reportsLineChartData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid item xs={12} md={12} lg={12}>
          <MDBox mb={1.5}>
            <Quote />
          </MDBox>
        </Grid>
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12} lg={12}>
              <AccountabilityChecklist />
            </Grid>
          </Grid>
        </MDBox>
        <MDBox mt={6}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={6}>
              <Doctors />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <ReportsLineChart
                color="dark"
                title="completed tasks"
                description="Tracked progress over the months"
                date="just updated"
                chart={tasks}
              />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default Dashboard;
