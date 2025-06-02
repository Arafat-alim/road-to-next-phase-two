"use client";

import { useEffect } from "react";
import { toast } from "sonner";

import { deleteCookieByKey, getCookieByKey } from "@/actions/cookies";
import { usePathname } from "next/navigation";

const RedirectToast = () => {
  const pathname = usePathname();
  const showCookieToast = async () => {
    const message = await getCookieByKey("toast");
    if (message) {
      toast.success(message);
      deleteCookieByKey("toast");
    }
    return message;
  };

  useEffect(() => {
    showCookieToast();
  }, [pathname]);
  return null;
};

export { RedirectToast };
