import Head from "next/head";
import React, { FC } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { ITemplateProps } from "./types";

const Template: FC<ITemplateProps> = ({ headTitle, user, children }) => {
  return (
    <div>
      <Head>
        <title>{headTitle || `${user.name} - Dev`}</title>
      </Head>
      <main className="flex bg-gray-800">
        <Header user={user} />
        <Sidebar user={user} />
        <section className="section-container flex flex-col w-full items-start justify-start">
          {children}
        </section>
      </main>
    </div>
  );
};

export default Template;
