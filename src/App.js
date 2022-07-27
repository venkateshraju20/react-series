import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Home from "./Components/Pages/Home";
import Navbar from "./Components/Navigation/Navbar";
import ParentClass from "./Components/Counter/ParentClass";
import ListData from "./Components/Lists/ListData";
import Search from "./Components/Search/Search";
import ListPost from "./Components/FetchData/ListPost";
import EmpTable from "./Components/Tables/EmpTable";
import UseCallbacks from "./Components/Hooks/useCallbacks/UseCallbacks";
import UseMemo from "./Components/Hooks/useMemo/UseMemo";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/aboutus" element={<About />} />
        <Route exact path="/contactus" element={<Contact />} />
        <Route exact path="/counter" element={<ParentClass />} />
        <Route exact path="/listdata" element={<ListData />} />
        <Route exact path="/searchmeals" element={<Search />} />
        <Route exact path="/customhooks" element={<ListPost />} />
        <Route exact path="/tables" element={<EmpTable />} />
        <Route exact path="/use-memo" element={<UseMemo />} />
        <Route exact path="/use-callbacks" element={<UseCallbacks />} />
      </Routes>
    </>
  );
}

export default App;
