import Header from "@/components/Header";
import Layout from "./layout";
import { Providers } from "./Providers";
import Home from "@/components/Home";

export default function Page() {
  return (
    <Providers>
      <Layout>
        <Header />
        <Home />
      </Layout>
    </Providers>
  );
}
