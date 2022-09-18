import Breadcrumb from "../components/Breadcrumb";
import Footer from "../parts/Footer";
import Header from "../parts/Header";
import Clients from "../parts/Homepage/Clients";
import Sitemap from "../parts/Homepage/Sitemap";

export default function Details() {
  return (
    <>
      <Header theme="black" />
      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/categories/91231", name: "Office Room" },
          { url: "/categories/91231/products/7888", name: "Details" },
        ]}
      />
      <Clients />
      <Sitemap />
      <Footer />
    </>
  );
}
