"use client";

import { Inter } from "next/font/google";
import TopMenu from "@/components/topMenu";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title> CheesGame </title>
      </head>
      <body className={`${inter.className} bg-black`}>
        <Provider store={store}>
          <TopMenu />
          {children}
        </Provider>
      </body>
    </html>
  );
}
