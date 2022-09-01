import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import FileList from "../../../components/FileList";
import MasterDetail from "../../../components/MasterDetail";
import FileDetail from "./[fileId]";

const fakeData = [
  { title: "Work" },
  { title: "Finance" },
  { title: "Science" },
  { title: "Art" },
  { title: "Architecture" },
  { title: "Skateboarding" },
  { title: "Airplanes" },
  { title: "Drones" },
  { title: "Cars" },
  { title: "Video Production" },
  { title: "Dev" },
  { title: "Engineering" },
  { title: "3d Printing" },
  { title: "Fitness" },
  { title: "Travel" },
  { title: "Movies" },
  { title: "Random" },
];

export default function Files() {
  const navigate = useNavigate();
  return (
    <Routes>
      <Route
        path="/*"
        element={
          <MasterDetail>
            <FileList files={fakeData} />
            <Outlet />
          </MasterDetail>
        }
      >
        <Route
          path=":file_id"
          element={
            <FileDetail onClose={() => navigate("/dashboard/files")} /> // workaround. ".." flickers.
          }
        />
      </Route>
    </Routes>
  );
}
