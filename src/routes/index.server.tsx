import React, { Suspense } from "react";
import { Layout } from "../components/common";
import { FeaturedCollections } from "../components/home";
export default function Home() {
  return (
    <div className="">
      <Layout>
        <h1 className="text-3xl">Welcome to Shopify Store with Hydrogen</h1>
        <h1>This is a shopify template</h1>
        <Suspense>
          <FeaturedCollections />
        </Suspense>
      </Layout>
    </div>
  );
}
