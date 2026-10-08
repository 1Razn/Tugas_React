import Contact from "../components/shared/Contact";
import Hero from "../components/shared/Hero";
import ProductList from "../components/shared/ProductList";
import Team from "../components/shared/Team";
import '../App.css';

export default function Home() {
  return (
    <>
      <Hero />
      <ProductList />
      <Team />
      <Contact />
    </>
  )
}