import React from "react";
import { useShopQuery, CacheLong, gql, useUrl, Link } from "@shopify/hydrogen";
function Layout({ children }: any) {
  const { pathname } = useUrl();
  const isHome = pathname === "/";
  const {
    data: { collections },
  } = useShopQuery({
    query: query,
    cache: CacheLong(),
  });
  return (
    <>
      <div>
        <header
          role="banner"
          className={`flex items-center h-16 p-6 md:p-8 lg:p-12 sticky backdrop-blur-lg z-40 top-0 justify-between w-full leading-none gap-4 antialiased transition shadow-sm ${
            isHome ? "bg-black/80 text-white" : "bg-white/80"
          }`}
        >
          <div className="flex gap-12">
            <Link className="font-bold" to="/">
              {/* {shop.name} */}
              {collections ? "Yes" : "no"}
            </Link>
          </div>
        </header>

        <main role="main" className="flex-grow">
          {children}
        </main>
      </div>
    </>
  );
}

export default Layout;
// const SHOP_QUERY = gql`
//   query ShopInfo {
//     shop {
//       name
//       description
//       id
//       moneyFormat
//     }
//   }
// `;
const query = gql`
  query FeaturedCollections {
    collections(first: 3, query: "collection_type:smart", sortKey: UPDATED_AT) {
      nodes {
        id
        title
        handle
      }
    }
  }
`;
