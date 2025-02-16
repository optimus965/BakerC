import { titleLinks, titles } from "../data/title";
import { svgdata } from "../data/svgdata";
import { Link } from "react-router-dom";
export function IconButton({ index }: { index: number }) {
  console.log(index);
  return (
    <Link to={`${titleLinks[index]}`}>
    <button className="ItemButton">
    <div className="ResponsiveItem">
      <div>
        <svg
          fill="none"
          viewBox="0 0 20 20"
          height="20"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
        >
            {svgdata[index]}
        </svg>
      </div>
      <p>{titles[index]}</p>
    </div>
    </button>
    </Link>
  );
}
