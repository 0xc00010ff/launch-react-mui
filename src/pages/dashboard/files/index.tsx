import { useState } from "react";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import FileList from "../../../components/FileList";
import MasterDetail from "../../../components/MasterDetail";
import FileDetail from "./[fileId]";
import ExampleFile from "../../../models/ExampleFile";

const fakeData: ExampleFile[] = [
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
  const [selectedFile, setSelectedFile] = useState<ExampleFile | undefined>(
    undefined
  );

  const onFileSelect = (fileIndex: number) => {
    const file = fakeData[fileIndex];
    setSelectedFile(file);
    navigate(file.title);
  };

  return (
    <Routes>
      <Route
        path="/*"
        element={
          <MasterDetail>
            <FileList files={fakeData} onSelect={onFileSelect} />
            <Outlet />
          </MasterDetail>
        }
      >
        <Route path=":file_id" element={<FileDetail file={selectedFile} />} />
      </Route>
    </Routes>
  );
}
