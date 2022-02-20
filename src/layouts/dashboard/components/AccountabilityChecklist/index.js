import { Card } from "@mui/material";
import MDBox from "components/MDBox";
import * as React from "react";
import data from "layouts/dashboard/components/AccountabilityChecklist/data";
import DataTable from "examples/Tables/DataTable";
import MDTypography from "components/MDTypography";

function AccountabilityChecklist() {
  const { columns, rows } = data();

  return (
    <Card>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
        <MDTypography variant="h3" gutterBottom>
          Checklist
        </MDTypography>
      </MDBox>
      <MDBox>
        <DataTable
          table={{ columns, rows }}
          showTotalEntries={false}
          isSorted={false}
          noEndBorder
          entriesPerPage={false}
        />
      </MDBox>
    </Card>
  );
}

export default AccountabilityChecklist;
