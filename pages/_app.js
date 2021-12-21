import "../styles/globals.css";

// Redux
import { Provider } from "react-redux";
import store from "../store/index";
//

// Components
import Nav from "../components/Global/Nav/Nav";
import Footer from "../components/Global/Footer/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}

export default MyApp;
