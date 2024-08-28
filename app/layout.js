import store from "../store/store";
import { Provider } from "react-redux";
import Header from "../components/shared/header";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@/styles/main.css";

export const metadata = {
  title: "My store",
  description: "E-commerce website using next js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="shortcut icon" href="../public/logo.png" />
      </head>
      <body>
        <Provider store={store}>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
