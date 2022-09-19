import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Logo from "../Logo";
import NavigatorOption from "./NavigatorOption";
import Button from "../Button";
import { useUser } from "../../hooks/useUser";
import { Menu, MenuItem } from "@mui/material";

const TopNavigator: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
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
        <NavigatorOption name="Trash" />
      </div>
      <div className="flex flex-row items-center gap-3">
        <div
          className="cursor-pointer"
          onClick={(e: React.MouseEvent<HTMLElement>) => {
            setAnchorEl(e.currentTarget);
            setMenuOpen(true);
          }}
        >
          <p className="font-black text-white text-sm">{user.email}</p>
        </div>
        <Menu
          className="mt-8"
          open={menuOpen}
          onClose={() => {
            setMenuOpen(false);
            setAnchorEl(null);
          }}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem>Profile Settings</MenuItem>
          <MenuItem onClick={logoutCurrentUser}>Logout</MenuItem>
        </Menu>
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
