import { Providers } from "./providers";
import Header from "@/components/Header";
import Home from "@/components/Home";

export default function Page() {

  return (
    <Providers>
      <Header />
      <Home />
    </Providers>
  )
}

