import React from "react";
import { useShopQuery, CacheLong, gql, useUrl, Link } from "@shopify/hydrogen";
function Layout({ children }: any) {
  const { pathname } = useUrl();
  const isHome = pathname === "/";
  const {
    data: { shop },
  } = useShopQuery({
    query: SHOP_QUERY,
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
              {shop.name}
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
const SHOP_QUERY = gql`
  query ShopInfo {
    shop {
      name
      description
    }
  }
`;
