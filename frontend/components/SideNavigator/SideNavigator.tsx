import { useRouter } from "next/router";
import SideNavigatorOption from "./SideNavigatorOption";
import { FcEmptyTrash } from "react-icons/fc";
import { useDrop } from "react-dnd";
import { useState } from "react";

const SideNavigator = () => {
  const router = useRouter();
  const strippedEndpoint = router.pathname.substring(1, Infinity).toUpperCase();
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "pad",
    drop: () => ({ name: "trash" }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  return (
    <nav className="sticky top-6 left-0 flex flex-col gap-[0.5rem] h-screen bg-gray-700 p-6">
      <h1 className="font-bold text-2xl mb-2 text-gray-300 text-center">
        {strippedEndpoint}
      </h1>
      <SideNavigatorOption name="Settings" />
      <SideNavigatorOption
        name="Create pad"
        onNavigate={() => router.push("/create")}
      />
      <SideNavigatorOption
        name="Create todo"
        onNavigate={() => router.push("/create-todo")}
      />
      <SideNavigatorOption
        name="Todo list"
        onNavigate={() => router.push("/todos")}
      />
      <SideNavigatorOption
        name="Pads"
        onNavigate={() => router.push("/pads")}
      />
      <SideNavigatorOption
        name="Article viewer"
        onNavigate={() => router.push("/article-viewer")}
      />
      <div ref={drop} className="relative h-[200px]">
        <FcEmptyTrash fontSize="70px" className="absolute bottom-0 w-full" />
      </div>
    </nav>
  );
};

export default SideNavigator;
