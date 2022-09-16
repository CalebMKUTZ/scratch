import { useRouter } from "next/router";
import { FcGoogle } from "react-icons/fc";
import Button from "../components/Button";
import Card from "../components/Card";
import Message from "../components/Message";
import { useUser } from "../hooks/useUser";

const Index = () => {
  const { loginWithGoogle, user, error } = useUser();
  const router = useRouter();

  const login = () => {
    loginWithGoogle();

    if (user) {
      router.push("/pads");
    }
  };

  if (error) {
    return <Message text={error} />;
  }

  return (
    <Card title="Login">
      <div className="m-auto">
        <Button color="blacked" fullWidth onClick={() => login()}>
          <FcGoogle fontSize="30px" />
        </Button>
      </div>
    </Card>
  );
};

export default Index;
