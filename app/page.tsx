import Header from "@/components/Header";
import Layout from "./layout";
import { Providers } from "./Providers";
import ListProducts from "@/components/ListProducts";

export default function Page() {
  return (
    <Providers>
      <Layout>
        <Header />
        <div>
          <ListProducts />
        </div>
      </Layout>
    </Providers>
  );
}
