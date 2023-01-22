import Head from "next/head";
import { Flex } from "@chakra-ui/react";
import Layout from "../components/Layout";
import Show from "@/components/Show";
import Content from "@/components/Content";

export default function Home() {
  return (
    <>
      <Head>
        <title>MONU-TUBE | HOME</title>
      </Head>
      <Layout>
        <Show />
        <Content />
      </Layout>
    </>
  );
}
