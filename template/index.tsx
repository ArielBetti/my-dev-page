import Head from "next/head";
import React, { FC } from "react";
import Sidebar from "../components/Sidebar";
import { ITemplateProps } from "./types";

const Template: FC<ITemplateProps> = ({ headTitle, user, children }) => {
  return (
    <div>
      <Head>
        <title>{headTitle || `${user.name} - dev`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex bg-gray-800">
        <Sidebar user={user} />
        <section className="section-container flex flex-col w-full items-start justify-start py-2">
          {children}
        </section>
      </main>
    </div>
  );
};

export default Template;
