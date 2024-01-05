import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DataList } from './components/DataList';
import {AddDataForm} from './components/AddDataForm';
import UpdateDataForm from "./components/UpdateDataForm";

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<DataList/>} />
      <Route path="/save" element={<AddDataForm/>} />
      <Route path="/update" element={<UpdateDataForm/>} />
      <Route path="/*" element={<DataList/>} />
      </Routes>
    </>

  );
}

export default App;
