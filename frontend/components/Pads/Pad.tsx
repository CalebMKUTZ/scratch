import React from "react";
import { useDrag } from "react-dnd";
import { PadProps } from "../../types";
import { usePad } from "../../hooks/usePad";
import { motion } from "framer-motion";

const Pad: React.FC<PadProps> = ({ pad }) => {
  const { id } = pad;
  const { deletePad } = usePad();

  const [{ opacity }, dragRef] = useDrag(
    () => ({
      type: "pad",
      item: { id },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.5 : 1,
      }),
      end: (item, monitor) => {
        const dropResult = monitor.getDropResult();
        if (item && dropResult) {
          deletePad(item.id);
        }
      },
    }),
    []
  );

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div
        ref={dragRef}
        style={{ opacity }}
        className="p-10 bg-[#ffff88] flex flex-col items-center justify-center shadow-md w-[300px] h-[300px]"
      >
        <p className="font-black text-black text-sm">
          {pad?.content.slice(0, 300)}...
        </p>
      </div>
    </motion.div>
  );
};

export default Pad;
