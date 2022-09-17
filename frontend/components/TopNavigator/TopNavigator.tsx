import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Logo from "../Logo";
import NavigatorOption from "./NavigatorOption";
import Button from "../Button";
import { useUser } from "../../hooks/useUser";

const TopNavigator: React.FC = () => {
  const { logout, user } = useUser();
  const router = useRouter();

  const logoutCurrentUser = () => {
    logout();
    router.push("/");
  };

  return user ? (
    <nav className="flex flex-row justify-between items-center bg-gray-800 p-3">
      <div className="flex flex-row items-center gap-[0.5rem]">
        <Logo />
        <NavigatorOption name="Pads" onNavigate={() => router.push("/pads")} />
        <NavigatorOption name="Trash" />
      </div>
      <div className="flex flex-row items-center gap-3">
        <p className="font-black text-white text-sm">{user.email}</p>
        <Button color="primary" onClick={logoutCurrentUser}>
          logout
        </Button>
      </div>
    </nav>
  ) : (
    <nav className="flex flex-row justify-between items-center bg-gray-800 p-3">
      <div className="flex flex-row items-center gap-[0.5rem]">
        <Logo />
        <NavigatorOption name="Login" onNavigate={logoutCurrentUser} />
      </div>
    </nav>
  );
};

export default TopNavigator;
