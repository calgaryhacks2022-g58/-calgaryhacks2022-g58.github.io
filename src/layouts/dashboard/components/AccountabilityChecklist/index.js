/* eslint-disable no-unused-vars */
import { Card } from "@mui/material";
import MDBox from "components/MDBox";
import * as React from "react";
import data from "layouts/dashboard/components/AccountabilityChecklist/data";
import DataTable from "examples/Tables/DataTable";
import MDTypography from "components/MDTypography";
import { db } from "utils/firestore";
import { collection, orderBy, query } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

function AccountabilityChecklist() {
  const messageRef = collection(db, "Chat");
  const queryMsg = query(messageRef);
  const [messages] = useCollectionData(queryMsg);

  const { columns, rows } = data(messages);

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
