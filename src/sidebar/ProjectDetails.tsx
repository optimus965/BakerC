import { Outlet } from "react-router-dom";
import { titles } from "../data/title";
import { IconButton } from "../components/IconButton";
import { Header } from "../projectsetup/Header";
export function ProjectDetails() {
  return (
    <div className="heightFixed">
      <Header title='project Details' svgElement={''}/>
      <div className="Responsive-TabBar">
        {titles.map((item, index) => {
          return <IconButton key={item} index={index} />;
        })}
      </div>
      <Outlet />
    </div>
  );
}
