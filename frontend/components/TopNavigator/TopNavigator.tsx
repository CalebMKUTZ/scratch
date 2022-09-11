import { useRouter } from "next/router";
import React from "react";
import Logo from "../Logo";
import NavigatorOption from "./NavigatorOption";

const TopNavigator: React.FC = () => {
  const router = useRouter();

  return (
    <nav className="flex flex-row justify-between items-center bg-gray-800 p-3">
      <div className="flex flex-row items-center gap-[0.5rem]">
        <Logo />
        <NavigatorOption name="Pads" onNavigate={() => router.push("/pads")} />
        <NavigatorOption name="Create" onNavigate={() => router.push("/create")} />
        <NavigatorOption name="Trash" />
      </div>
    </nav>
  );
};

export default TopNavigator;
