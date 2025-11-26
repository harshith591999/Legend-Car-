import { Button } from "@/components/ui/button";
import { SignIn, SignInButton } from "@clerk/clerk-react";
import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Category from "./Category";
import Mostsearchedcar from "./Mostsearchedcar";
import CTA from "./CTA";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <Hero />
      <Category />
      <Mostsearchedcar />
      <CTA />
      <Footer />
    </div>
  );
};
export default Home;
