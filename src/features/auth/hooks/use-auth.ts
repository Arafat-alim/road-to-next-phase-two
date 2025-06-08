import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { getAuth } from "../queries/get-auth";
import { AuthUser } from "../utils/is-owner";

function useAuth() {
  const [user, setUser] = useState<AuthUser | null>(null);
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
