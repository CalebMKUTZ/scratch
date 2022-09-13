import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Logo from "../Logo";
import NavigatorOption from "./NavigatorOption";
import Button from "../Button";
import { useUser } from "../../hooks/useUser";

const TopNavigator: React.FC = () => {
  const { getUserWithPads, logout, isLoggedIn, user, userData } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn) {
      getUserWithPads(user.email);
    }
  }, []);

  const logoutCurrentUser = () => {
    logout();
    router.push("/");
  };

  return isLoggedIn ? (
    <nav className="flex flex-row justify-between items-center bg-gray-800 p-3">
      <div className="flex flex-row items-center gap-[0.5rem]">
        <Logo />
        <NavigatorOption name="Pads" onNavigate={() => router.push("/pads")} />
        <NavigatorOption
          name="Create"
          onNavigate={() => router.push("/create")}
        />
        <NavigatorOption name="Trash" />
      </div>
      <div className="flex flex-row items-center gap-3">
        <p className="font-black text-white text-sm">{userData?.email}</p>
        <Button color="primary" onClick={logoutCurrentUser}>
          logout
        </Button>
      </div>
    </nav>
  ) : (
    <nav className="flex flex-row justify-between items-center bg-gray-800 p-3">
      <div className="flex flex-row items-center gap-[0.5rem]">
        <Logo />
        <NavigatorOption name="Login" onNavigate={() => router.push("/")} />
      </div>
    </nav>
  );
};

export default TopNavigator;
