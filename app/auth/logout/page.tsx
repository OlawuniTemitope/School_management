import React from "react";
import { Button } from "@/components/ui/button";
import { signOut } from "@/auth";

const Logout = () => {
  return (
    <>
      <form
        action={async () => {
          "use server";

          await signOut();
        }}
        className="mb-10 flex items-center justify-center ml-[50%] align-middle w-10"
      >
        <Button className="bg-red-600">Logout</Button>
      </form>

    </>
  );
};
export default Logout;
