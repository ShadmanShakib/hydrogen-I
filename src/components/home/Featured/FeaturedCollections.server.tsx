import { Link, Image, gql, useShopQuery, CacheLong } from "@shopify/hydrogen";
import React from "react";
export default function FeaturedCollections() {
  // const {
  //   data: { shop },
  // } = useShopQuery({
  //   query: SHOP_QUERY,
  //   cache: CacheLong(),
  // });

  return (
    <section className="w-full gap-4 md:gap-8 grid p-6 md:p-8 lg:p-12">
      <h2 className="whitespace-pre-wrap max-w-prose font-bold text-lead">
        Collections
      </h2>
      <div className="grid-flow-row grid gap-2 gap-y-6 md:gap-4 lg:gap-6 grid-cols-1 false  sm:grid-cols-3 false false"></div>
    </section>
  );
}
const SHOP_QUERY = gql`
  query ShopInfo {
    shop {
      name
      description
      id
    }
  }
`;
