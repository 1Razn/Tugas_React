import { Outlet } from "react-router";
import Header from "../shared/Header";
import Footer from "../shared/Footer";

export default function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* Child routes akan dirender di sini */}
      </main>
      <Footer />
    </>
  );
}