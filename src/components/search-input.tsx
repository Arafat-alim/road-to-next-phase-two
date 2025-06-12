"use client";

import { usePathname, useRouter,useSearchParams } from "next/navigation";
import React from "react";

import { Input } from "./ui/input";

type SearchInputProps = {
  placeholder: string;
};

const SearchInput = ({ placeholder }: SearchInputProps) => {
  const searchParams = useSearchParams(); // reads current query params
  const { replace } = useRouter(); // for updating the URL
  const pathname = usePathname(); // gets the current path (without query string)

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    replace(`${pathname}?${params.toString()}`);
  };
  return <Input placeholder={placeholder} onChange={handleSearch} />;
};

export { SearchInput };
