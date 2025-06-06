import Link from "next/link";
import React from "react";

import { CardCompact } from "@/components/card-compact";
import { SignInForm } from "@/features/auth/components/sign-in-form";
import { passwordForgotPath, signUpPath } from "@/path";

const SignIn = () => {
  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <CardCompact
        title="Sign in"
        description="Sign in to your account"
        content={<SignInForm />}
        className="w-full max-w-[420px] animate-fade-in-from-top"
        footer={
          <div className="flex-1 flex justify-between ">
            <Link href={signUpPath()} className="text-sm text-muted-foreground">
              No account yet?
            </Link>
            <Link
              href={passwordForgotPath()}
              className="text-sm text-muted-foreground"
            >
              Forgot Password?
            </Link>
          </div>
        }
      />
    </div>
  );
};

export default SignIn;
