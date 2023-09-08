import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  head: (
    <>
      <title>Llampukaq Technology</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Nextra" />
      <meta property="og:description" content="The next site builder" />
    </>
  ),
  logo: <span>@llampukaq/realm</span>,
  project: {
    link: "https://github.com/LlampuKaq-Tecnology/realm",
  },
  docsRepositoryBase: "https://github.com/LlampuKaq-Tecnology/realm",
  footer: {
    text: "Developed By Llampukaq Technology",
  },
};

export default config;
