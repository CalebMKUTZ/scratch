import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import TopNavigator from "../components/TopNavigator/TopNavigator";
import { PadProvider } from "../context/PadContext";
import { TodoProvider } from "../context/TodoContext";
import { UserProvider } from "../context/UserContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <DndProvider backend={HTML5Backend}>
      <TodoProvider>
        <UserProvider>
          <PadProvider>
            <TopNavigator />
            <Component {...pageProps} />
          </PadProvider>
        </UserProvider>
      </TodoProvider>
    </DndProvider>
  );
}

export default MyApp;
