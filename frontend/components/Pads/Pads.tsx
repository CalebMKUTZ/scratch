import React, { useEffect } from "react";
import { usePad } from "../../hooks/usePad";
import { useUser } from "../../hooks/useUser";
import Message from "../Message";
import Pad from "./Pad";

const Pads = () => {
  const { pads, error, fetchPads } = usePad();
  const { isLoggedIn, user } = useUser();

  useEffect(() => {
    if (isLoggedIn) {
      fetchPads(user.email);
    }
  }, []);

  if (error) {
    return <Message text={error} />;
  }

  return (
    <>
      {pads.map((pad) => (
        <Pad key={pad.id} pad={pad} />
      ))}
    </>
  );
};

export default Pads;
