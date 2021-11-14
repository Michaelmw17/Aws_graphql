import "../styles/globals.css";
import "../configAmplify.js";
import { AppProps } from "next/app";
import NavBar from "../components/SideBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <NavBar />
      <div className="py-8 px-16">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
export default MyApp;
