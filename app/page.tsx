import GeneralPage from "./Pages/GeneralPage";
import { NextUIProvider } from "@nextui-org/system";

export default function Home() {
  return (
    <NextUIProvider>
      <GeneralPage />
    </NextUIProvider>
  );
}
