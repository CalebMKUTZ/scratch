import { useRouter } from "next/router";
import Button from "../components/Button";
import Card from "../components/Card";
import Message from "../components/Message";
import { useUser } from "../hooks/useUser";

const Index = () => {
  const { loginWithGoogle, error } = useUser();
  const router = useRouter();

  const login = () => {
    loginWithGoogle();
    router.push("/pads");
  };

  if (error) {
    return <Message text={error} />;
  }

  return (
    <Card title="Login">
      <div className="m-auto">
        <Button color="blacked" onClick={() => login()}>
          login with google
        </Button>
      </div>
    </Card>
  );
};

export default Index;
