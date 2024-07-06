import React from "react";
import { Button } from "../button";
import { Link } from "react-router-dom";
import { UserButton, useUser } from "@clerk/clerk-react";

function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <div className="p-3 mx-2 px-5 flex justify-between  shadow-md my-4">
     
       <Link to={'/'}>
           <img src="/cv.svg" width={50} height={50} />
       </Link>
      

      {isSignedIn ? (
        <div className="flex gap-2 items-center ">
        <Link to={'/dashboard'}>
          <Button variant='outline' >Dashboard</Button>
        </Link>

          <UserButton />
        </div>
      ) : (
        <Link to={"/auth/sign-in"}>
          <Button> Get Started</Button>
        </Link>
      )}
    </div>
  );
}

export default Header;
