"use client";
import React from "react";

import Placeholder from "@/components/placeholder";

const Error = ({ error }: { error: Error }) => {
  return <Placeholder label={error.message || "Something went wrong"} />;
};

export default Error;
