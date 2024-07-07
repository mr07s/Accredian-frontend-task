import "./App.css";
import { Banner } from "./components/Banner";
import { Navbar } from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import { Sidebar } from "./components/Sidebar";
import Support from "./components/Support";

function App() {
  // const notify = () => toast("Here is your toast.");
  return (
    <>
      <Toaster />
      <Navbar />
      <Sidebar />
      <Support />
      <Banner />
    </>
  );
}

export default App;
