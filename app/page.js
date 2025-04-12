'use client'
import About from "./components/about";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Work from "./components/works";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";

export default function Home() {
  return (
    <>
    <Navbar />
    <Header />
    <About />
    <Work />
    <Portfolio />
    <Contact />
    </>
  );
}
