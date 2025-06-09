import { Heading } from "@/components/Heading";
import { AccountTabs } from "@/features/account/components/account-tabs";
import React from "react";

const ProfilePage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading
        title="Profile"
        description="All your profile information"
        tabs={<AccountTabs />}
      />
    </div>
  );
};

export default ProfilePage;
