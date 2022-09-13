import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import TopNavigator from "../components/TopNavigator/TopNavigator";
import { PadProvider } from "../context/PadContext";
import { UserProvider } from "../context/UserContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <DndProvider backend={HTML5Backend}>
      <UserProvider>
        <PadProvider>
          <TopNavigator />
          <Component {...pageProps} />
        </PadProvider>
      </UserProvider>
    </DndProvider>
  );
}

export default MyApp;
