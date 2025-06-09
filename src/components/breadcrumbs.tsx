import { LucideChevronRight } from "lucide-react";
import Link from "next/link";
import React, { Fragment } from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

type BreadcrumbsProps = {
  breadcrumbs: {
    title: string;
    href?: string;
  }[];
};

const Breadcrumbs = ({ breadcrumbs }: BreadcrumbsProps) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbs.map((breadcrumb, index) => {
          let breadcrumbItem = (
            <BreadcrumbPage>{breadcrumb.title}</BreadcrumbPage>
          );

          if (breadcrumb.href) {
            breadcrumbItem = (
              <BreadcrumbLink asChild>
                <Link
                  href={breadcrumb.href}
                  className="flex items-center gap-1"
                >
                  {breadcrumb.title}
                </Link>
              </BreadcrumbLink>
            );
          }

          return (
            <Fragment key={index}>
              <BreadcrumbItem>{breadcrumbItem}</BreadcrumbItem>
              {index < breadcrumbs.length - 1 && (
                <BreadcrumbSeparator className="flex justify-center items-center">
                  <LucideChevronRight className="w-4 h-4" />
                </BreadcrumbSeparator>
              )}
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export { Breadcrumbs };
