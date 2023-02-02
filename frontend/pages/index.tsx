import { useRouter } from "next/router";
import { FcGoogle } from "react-icons/fc";
import Button from "../components/Button";
import Card from "../components/Card";
import Message from "../components/Message";
import { useUser } from "../hooks/useUser";
import Image from "next/image";
import LandingPageImageOne from "../images/landing-page-image-one.png";
import { MdDraw } from "react-icons/md";

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
    <div className="flex flex-col gap-6 m-auto w-[1000px]">
      <MdDraw fontSize="200px" className="m-auto text-blue-400" />
      <h1 className="font-bold text-center text-5xl text-gray-500 mb-6">
        Productivity all starting with a simple sticky note.
      </h1>
      <Image
        src={LandingPageImageOne}
        className="w-full h-[600px] shadow-lg rounded"
      />
      <div className="text-center flex flex-col">
        <h1 className="font-bold text-center text-3xl text-gray-500 mb-6">
          Login With Google
        </h1>
        <div className="m-auto mb-6">
          <Button color="blacked" onClick={() => login()}>
            <FcGoogle className="m-auto" fontSize="50px" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
