import { User } from "@prisma/client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { getAuth } from "../queries/get-auth";

function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [isFetched, setIsFetched] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    const fetchUser = async () => {
      const { user } = await getAuth();
      setUser(user);
      setIsFetched(true);
    };
    fetchUser();
  }, [pathName]);

  return { user, isFetched };
}

export { useAuth };
