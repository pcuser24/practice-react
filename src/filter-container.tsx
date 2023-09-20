import Badge from "./components/badge";
import Rating from "./components/rating";
import Toggle from "./components/toggle";

export default function FilterContainer() {
  return (
    <section className="max-w-[260px] w-full mr-[60px]">
      {/* Filter header */}
      <div className="min-h-[80px] flex justify-between items-center">
        <h2>Filters</h2>
        <div className="hidden md:flex items-center">
          <div className="text-slate-500 text-sm">
            <button className="cursor-not-allowed p-0 bg-transparent border-none" disabled type="button">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11"><g fill="none" fill-rule="evenodd"><path d="M0 0h11v11H0z"></path><path fill="#000" fill-rule="nonzero" d="M8.26 2.75a3.896 3.896 0 1 0 1.102 3.262l.007-.056a.49.49 0 0 1 .485-.456c.253 0 .451.206.437.457 0 0 .012-.109-.006.061a4.813 4.813 0 1 1-1.348-3.887v-.987a.458.458 0 1 1 .917.002v2.062a.459.459 0 0 1-.459.459H7.334a.458.458 0 1 1-.002-.917h.928z"></path></g></svg>
                Clear filters
              </div>
            </button>
          </div>
        </div>
      </div>
      {/* Filter body */}
      <div className="py-8 border-t text-sm">
        <div className="text-slate-800 tracking-wider uppercase border-none pb-4 text-xs leading-relaxed font-medium">Category</div>
        <div className="ais-Panel-body">
          <div className="ais-HierarchicalMenu">
            <ul className="font-light">
              {[
                {
                  cat: 'Appliances',
                  count: 4306,
                },
                {
                  cat: 'Audio',
                  count: 1570,
                },
                {
                  cat: 'Camera & Camcorders',
                  count: 1369,
                },
                {
                  cat: 'Car Electronic & GPS',
                  count: 1208,
                },
                {
                  cat: 'Cell Phones',
                  count: 3291,
                },
                {
                  cat: 'Computers & Tablets',
                  count: 3563,
                },
                {
                  cat: 'Health, Fitness & Beasuty',
                  count: 923,
                },
                {
                  cat: 'Office & School Supplies',
                  count: 617,
                },
                {
                  cat: 'TV & Home Theater',
                  count: 1201,
                },
                {
                  cat: 'Video Games',
                  count: 505,
                },
              ].map((item, index) => (
                <li key={index} className="select-none">
                  <a
                    className="flex items-center pb-4"
                    href="/Appliances/?query=a"
                  >
                    <img
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cpath fill='%2390919E' fill-rule='nonzero' d='M0 4l4-4 4 4z'/%3E%3C/svg%3E%0A"
                      className="h-2 w-2 
                      flex justify-center items-center
                      mr-4"
                      alt=""
                    />
                    <span className="">{item.cat}</span>
                    <Badge>{item.count}</Badge>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="py-8 border-t text-sm">
        <div className="text-slate-800 tracking-wider uppercase border-none pb-4 text-xs leading-relaxed font-medium">Brands</div>
        <div className="">
          <form action="" className="mb-4 relative" noValidate>
            <input 
              className="text-slate-500 min-h-[40px] rounded-sm py-0 px-11 text-sm bg-slate-200 border-none outline-none w-full" 
              autoComplete="off" autoCorrect="off" autoCapitalize="off" placeholder="Search for brands…" spellCheck="false" maxLength={512} type="search" value=""/>
            <button className="left-0 h-full w-12 flex justify-center items-center absolute top-1/2 -translate-y-1/2" type="submit" title="Submit the search query">
              <svg className="cursor-pointer text-yellow-600" width="10" height="10" viewBox="0 0 40 40" aria-hidden="true"><path d="M26.804 29.01c-2.832 2.34-6.465 3.746-10.426 3.746C7.333 32.756 0 25.424 0 16.378 0 7.333 7.333 0 16.378 0c9.046 0 16.378 7.333 16.378 16.378 0 3.96-1.406 7.594-3.746 10.426l10.534 10.534c.607.607.61 1.59-.004 2.202-.61.61-1.597.61-2.202.004L26.804 29.01zm-10.426.627c7.323 0 13.26-5.936 13.26-13.26 0-7.32-5.937-13.257-13.26-13.257C9.056 3.12 3.12 9.056 3.12 16.378c0 7.323 5.936 13.26 13.258 13.26z"></path></svg>
            </button>
            {/* <button className="ais-SearchBox-reset" type="reset" title="Clear the search query" hidden>
              <svg className="ais-SearchBox-resetIcon" viewBox="0 0 20 20" width="10" height="10" aria-hidden="true"><path d="M8.114 10L.944 2.83 0 1.885 1.886 0l.943.943L10 8.113l7.17-7.17.944-.943L20 1.886l-.943.943-7.17 7.17 7.17 7.17.943.944L18.114 20l-.943-.943-7.17-7.17-7.17 7.17-.944.943L0 18.114l.943-.943L8.113 10z"></path></svg>
            </button> */}
            {/* <span className="ais-SearchBox-loadingIndicator" hidden>
              <svg width="16" height="16" viewBox="0 0 38 38" stroke="#444" className="ais-SearchBox-loadingIcon" aria-hidden="true"><g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity=".5" cx="18" cy="18" r="18"></circle><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animateTransform></path></g></g></svg>
            </span> */}
          </form>
          <ul className="m-0 p-0 list-none">
            {[
              {
                brand: <span>Insignia<sup>tm</sup></span>,
                count: 746,
              },
              {
                brand: <span>Metra</span>,
                count: 580,
              },
              {
                brand: <span>HP</span>,
                count: 493,
              },
              {
                brand: <span>Apple</span>,
                count: 363,
              },
              {
                brand: <span>Samsung</span>,
                count: 347,
              },
              {
                brand: <span>Sony</span>,
                count: 316,
              },
              {
                brand: <span>Incipio</span>,
                count: 311,
              },
              {
                brand: <span>Canon</span>,
                count: 270,
              },
              {
                brand: <span>Speck</span>,
                count: 195,
              },
              {
                brand: <span>Otterbox</span>,
                count: 194,
              },
            ].map((item, index) => (
              <li className="pb-4 cursor-pointer select-none" key={index}>
                <label className="flex items-center cursor-pointer">
                  <input className="h-4 w-4 bg-slate-200 border-none rounded-sm mr-4 relative" type="checkbox" name="" value="" />
                  <span className="cursor-pointer select-none">{item.brand}</span>
                  <Badge>{item.count}</Badge>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="py-8 border-t text-sm">
        <div className="text-slate-800 tracking-wider uppercase border-none pb-4 text-xs leading-relaxed font-medium">Price</div>
        <div className="flex gap-2">
          <div className="flex flex-col items-center gap-1">
            <label htmlFor="min-price">Min ($)</label>
            <input type="number" id="min-price" className="bg-slate-200 max-w-[60px]" min={1}/>
          </div>
          <span>-</span>
          <div className="flex flex-col items-center gap-1">
            <label htmlFor="max-price">Max ($)</label>
            <input type="number" id="max-price" className="bg-slate-200 max-w-[60px]" max={5000}/>
          </div>
        </div>
      </div>
      <div className="py-8 border-t text-sm">
        <div className="text-slate-800 tracking-wider uppercase border-none pb-4 text-xs leading-relaxed font-medium">Free shipping</div>
        <div className="flex justify-between">
          <p className="flex-grow whitespace-normal">Display only items with free shipping</p>
          <span className="flex gap-1 items-center">
            <span className="text-yellow-600">Yes</span>
            <Toggle 
              toggled={false} 
              setToggled={(toggled) => {console.log(toggled)}}
            />
          </span>
        </div>
      </div>
      <div className="py-8 border-t text-sm">
        <div className="text-slate-800 tracking-wider uppercase border-none pb-4 text-xs leading-relaxed font-medium">Ratings</div>
        <div className="space-y-2">
          {[
            {
              rating: 4,
              count: 13438,
            },
            {
              rating: 3,
              count: 14797,
            },
            {
              rating: 2,
              count: 14956,
            },
            {
              rating: 1,
              count: 15088,
            },
          ].map((item, index) => (
            <div className="flex gap-2" key={index}>
              <Rating value={item.rating}/>
              <Badge>{item.count}</Badge>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
