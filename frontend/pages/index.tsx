import { useRouter } from "next/router";
import { FcGoogle } from "react-icons/fc";
import Button from "../components/Button";
import Message from "../components/Message";
import { useUser } from "../hooks/useUser";
import Image from "next/image";
import LandingPageImageOne from "../images/landing-page-image-one.png";
import { MdDraw } from "react-icons/md";
import { motion } from "framer-motion";

const Index = () => {
  const { loginWithGoogle, error } = useUser();
  const router = useRouter();

  const login = async () => {
    await loginWithGoogle(); // the await needs to be there because it will make the router.push("/pads") wait
    router.push("/pads");
  };

  if (error) {
    return <Message text={error} />;
  }

  return (
    <div className="flex flex-col gap-6 mt-24 m-auto w-[1000px]">
      <motion.div
        animate={{
          scale: [1, 1.5, 1.5, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: null,
          repeatDelay: 1,
        }}
      >
        <MdDraw fontSize="200px" className="m-auto text-blue-400" />
      </motion.div>
      <h1 className="font-bold text-center text-5xl text-gray-500 mb-6">
        Productivity all starting with a simple sticky note.
      </h1>
      <div className="text-center flex flex-col">
        <div className="m-auto mb-6">
          <Button color="blacked" onClick={() => login()}>
            <FcGoogle className="m-auto" fontSize="50px" />
          </Button>
        </div>
      </div>
      <Image
        src={LandingPageImageOne}
        className="w-full h-[600px] shadow-lg rounded"
      />
    </div>
  );
};

export default Index;
