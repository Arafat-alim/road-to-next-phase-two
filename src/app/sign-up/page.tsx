import Link from "next/link";
import React from "react";

import { CardCompact } from "@/components/card-compact";
import { SignUpForm } from "@/features/auth/components/sign-up-form";
import { signInPath } from "@/path";

const SignUp = () => {
  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <CardCompact
        title="Sign up"
        description="Create an account to get started!"
        content={<SignUpForm />}
        className="w-full max-w-[420px] animate-fade-in-from-top"
        footer={
          <Link href={signInPath()} className="text-sm text-muted-foreground">
            Have an account? Sign in now.
          </Link>
        }
      />
    </div>
  );
};

export default SignUp;
