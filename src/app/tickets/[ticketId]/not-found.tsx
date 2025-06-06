import Link from "next/link";
import React from "react";

import Placeholder from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import { ticketsPath } from "@/path";

const NotFound = () => {
  return (
    <Placeholder
      label="Tickets not found"
      button={
        <Button variant={"link"}>
          <Link href={ticketsPath()}>Back to Tickets</Link>
        </Button>
      }
    />
  );
};

export default NotFound;
