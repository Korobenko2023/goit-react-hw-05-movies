import { Outlet } from "react-router-dom";
import { HeaderNav } from "./HeaderNav/HeaderNav";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";
import { Loader } from "./Loader/Loader";
import { GlobalStyle } from "./Services/GlobalStyle";

export const AppLayout = () => {
  return (
    <>
      <HeaderNav />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <GlobalStyle />
        <Toaster position="top-center"/> 
      </main>
    </>
  );
};
