import { UserProfile } from "@clerk/nextjs";
import React from "react";

type Props = {};

const Profile = (props: Props) => {
  return (
    <div className="flex flex-1 justify-center m-3 overflow-auto">
      <UserProfile appearance={{ elements: { card: "shadow-none" } }} />
    </div>
  );
};

export default Profile;
