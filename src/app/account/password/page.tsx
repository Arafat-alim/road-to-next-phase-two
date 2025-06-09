import { Heading } from "@/components/Heading";
import { AccountTabs } from "@/features/account/components/account-tabs";

import React from "react";

const PasswordPage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading
        title="Password"
        description="Keep your account secure"
        tabs={<AccountTabs />}
      />
    </div>
  );
};

export default PasswordPage;
