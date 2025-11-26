import React from "react";
import { SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  const { isLoaded, isSignedIn } = useUser();
  if (!isLoaded) return null;
  return (
    <div className="header-container flex justify-between items-center p-5 shadow-sm">
      <img src="../public/Logo.svg" alt="Logo" width={50} height={100} />
      <ul className="md:flex gap-16 hidden ">
        <li className="font-medium hover:scale-105 transition-all  hover:text-primary cursor-pointer">
          Home
        </li>
        <li className="font-medium hover:scale-105 transition-all  hover:text-primary cursor-pointer">
          Search
        </li>
        <li className="font-medium hover:scale-105 transition-all  hover:text-primary cursor-pointer">
          New
        </li>
        <li className="font-medium hover:scale-105 transition-all  hover:text-primary cursor-pointer">
          Preowner
        </li>
      </ul>
      {isSignedIn ? (
        <div className="flex items-center gap-5">
          <UserButton />
          <Link to={"/profile"}>
            <Button>Submit Listing</Button>
          </Link>
        </div>
      ) : (
        <SignInButton mode="modal">
          <Button>Sign In</Button>
        </SignInButton>
      )}
    </div>
  );
};
export default Header;
