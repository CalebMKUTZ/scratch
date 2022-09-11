import { useRouter } from "next/router";
import SideNavigatorOption from "./SideNavigatorOption";
import { FcEmptyTrash } from "react-icons/fc";
import { useDrop } from "react-dnd";

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
      <SideNavigatorOption name="Sticky notes" />
      <SideNavigatorOption name="Todo list" />
      <div ref={drop} className="relative h-[500px]">
        {canDrop && isOver ? (
          <FcEmptyTrash
            fontSize="70px"
            className="text-blue-300 absolute bottom-0 w-full"
          />
        ) : (
          <FcEmptyTrash fontSize="70px" className="absolute bottom-0 w-full" />
        )}
      </div>
    </nav>
  );
};

export default SideNavigator;
