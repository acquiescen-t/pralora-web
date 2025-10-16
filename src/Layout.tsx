import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function Layout() {
  return (
    <main className="background">
      <Navbar />
      <div className="p-5 text-white">
        <Outlet />
      </div>
    </main>
  );
}
