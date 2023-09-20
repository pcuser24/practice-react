
export default function ProductCard({
  product
} : {
  product: {
    img: string;
    cat: string;
    name: string;
    desc: string;
    price: number;
    rating: number;
  }
}) {
  return (
    <div className="ais-Hits-item">
      <article className="hit">
        <header className="w-[174px] h-[174px] flex justify-center items-center m-auto">
          <img 
            src="https://cdn-demo.algolia.com/bestbuy-0118/5477500_sb.jpg" 
            alt="Amazon - Fire TV Stick with Alexa Voice Remote - Black" 
            className="h-auto max-w-full max-h-full"/>
        </header>
        <div className="">
          <p className="hit-category">TV &amp; Home Theater</p>
          <h1>
            <span className="ais-Highlight">
              <span className="ais-Highlight-nonHighlighted">Amazon - Fire TV Stick with Alexa Voice Remote - Black</span>
            </span>
          </h1>
          <p className="hit-description">
            <span className="ais-Snippet">
              <span className="ais-Snippet-nonHighlighted">Enjoy smart access to videos, games and apps with this …</span>
            </span>
          </p>
          <footer>
            <p>
              <span className="hit-em">$</span>
              <strong>39.99</strong>
              <span className="hit-em hit-rating"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 16 16"><path fill="#e2a400" fill-rule="evenodd" d="M10.472 5.008L16 5.816l-4 3.896.944 5.504L8 12.616l-4.944 2.6L4 9.712 0 5.816l5.528-.808L8 0z"></path></svg> 4
              </span>
            </p>
          </footer>
        </div>
      </article>
    </div>
  );
}
