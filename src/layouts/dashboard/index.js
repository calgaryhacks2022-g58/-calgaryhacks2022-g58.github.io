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
import Footer from "examples/Footer";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";

// Data
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";
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
        <Grid item xs={12} md={6} lg={6}>
          <MDBox mb={1.5}>
            <Doctors />
          </MDBox>
        </Grid>
        <MDBox mt={4.5}>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={3}>
              <ReportsLineChart
                color="dark"
                title="completed tasks"
                description="Last Campaign Performance"
                date="just updated"
                chart={tasks}
              />
            </MDBox>
          </Grid>
        </MDBox>
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              <AccountabilityChecklist />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <OrdersOverview />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
