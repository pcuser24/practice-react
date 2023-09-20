import Pagination from "./components/pagination";
import ProductCard from "./components/product-card";

export default function ResultContainer() {
  return (
    <section className="flex-grow">
      {/* Result header */}
      <div className="flex justify-end gap-4 mb-7 py-7 border-b">
        <select name="" id="" className="bg-transparent text-xs">
          <option value="instant_search">Sort by featured</option>
          <option value="instant_search-price_asc">Price ascending</option>
          <option value="instant_search-price_desc">Price descending</option>
        </select>
        <select name="" id="" className="bg-transparent text-xs">
          <option value="instant_search">16 hits per page</option>
          <option value="instant_search">32 hits per page</option>
          <option value="instant_search">64 hits per page</option>
        </select>
      </div>
      {/* Result list */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10">
        {[
          {
            img: "https://cdn-demo.algolia.com/bestbuy-0118/5477500_sb.jpg",
            cat: "TV & Home Theater",
            name: "Amazon - Fire TV Stick with Alexa Voice Remote - Black",
            desc: "Enjoy smart access to videos, games and apps with this …",
            price: 39.99,
            rating: 4,
          },
          {
            img: "https://cdn-demo.algolia.com/bestbuy-0118/4397400_sb.jpg",
            cat: "TV & Home Theater",
            name: "Google - Chromecast - Black",
            desc: "Google Chromecast: Enjoy a world of entertainment with Google Chromecast …",
            price: 35,
            rating: 4,
          },
          {
            img: "https://cdn-demo.algolia.com/bestbuy-0118/5477500_sb.jpg",
            cat: "TV & Home Theater",
            name: "Amazon - Fire TV Stick with Alexa Voice Remote - Black",
            desc: "Enjoy smart access to videos, games and apps with this …",
            price: 39.99,
            rating: 4,
          },
          {
            img: "https://cdn-demo.algolia.com/bestbuy-0118/4397400_sb.jpg",
            cat: "TV & Home Theater",
            name: "Google - Chromecast - Black",
            desc: "Google Chromecast: Enjoy a world of entertainment with Google Chromecast …",
            price: 35,
            rating: 4,
          },
          {
            img: "https://cdn-demo.algolia.com/bestbuy-0118/5477500_sb.jpg",
            cat: "TV & Home Theater",
            name: "Amazon - Fire TV Stick with Alexa Voice Remote - Black",
            desc: "Enjoy smart access to videos, games and apps with this …",
            price: 39.99,
            rating: 4,
          },
          {
            img: "https://cdn-demo.algolia.com/bestbuy-0118/4397400_sb.jpg",
            cat: "TV & Home Theater",
            name: "Google - Chromecast - Black",
            desc: "Google Chromecast: Enjoy a world of entertainment with Google Chromecast …",
            price: 35,
            rating: 4,
          },
        ].map((item, index) => (
          <ProductCard key={index} product={item}/>
        ))}
      </div>
      {/* Result footer */}
      <div className="my-16">
        <div className="w-full flex justify-center">
          <Pagination current={1} total={5}/>
        </div>
      </div>
    </section>
  );
}
