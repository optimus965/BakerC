import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout";
import { Details } from "./projectsetup/Details";
import { BakerConfiguration } from "./projectsetup/BakerConfiguration";
import { CoOpsBaker } from "./projectsetup/CoOpsBaker";
import { Parking } from "./projectsetup/Parking";
import { Extras } from "./projectsetup/Extras";
import { DepositSchedule } from "./projectsetup/DepositSchedule";
import { MyBaker } from "./projectsetup/MyBaker";
import { Unit } from "./projectsetup/Unit";
import { Docusign } from "./projectsetup/Docusign";
import { DashBoard } from "./sidebar/DashBoard";
import { ProjectDetails} from "./sidebar/ProjectDetails";
import { WorkSheetManagement } from "./sidebar/WorkSheetManagement";
import { Transactions } from "./sidebar/Transactions";
import { UnitListView } from "./sidebar/UnitListView";
import { LeadManagement } from "./sidebar/LeadManagement";
import { CoOps } from "./sidebar/CoOps";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<DashBoard />}></Route>
          <Route path="WorkSheetManagement" element={<WorkSheetManagement />}></Route>
          <Route path="Transactions" element={<Transactions />}></Route>
          <Route path="UnitListView" element={<UnitListView />}></Route>
          <Route path="LeadManagement" element={<LeadManagement />}></Route>
          <Route path="CoOps" element={<CoOps />}></Route>
          <Route path="ProjectDetails" element={<ProjectDetails />}>
            <Route index element={<Details />}></Route>
            <Route path="BakerConfiguration" element={<BakerConfiguration />}></Route>
            <Route path="CoOpsBaker" element={<CoOpsBaker />}></Route>
            <Route path="Parking" element={<Parking />}></Route>
            <Route path="Extras" element={<Extras />}></Route>
            <Route path="DepositSchedule" element={<DepositSchedule />}></Route>
            <Route path="MyBaker" element={<MyBaker />}></Route>
            <Route path="Unit" element={<Unit />}></Route>
            <Route path="Docusign" element={<Docusign />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
