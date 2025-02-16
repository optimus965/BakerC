import { Outlet } from "react-router-dom";
import { titles } from "../data/title";
import { IconButton } from "../components/IconButton";
export function ProjectDetails() {
  return (
    <div>
      <div className="ProjectSetUp">
        <div style={{fontSize:"20px"}}>Project Setup</div>
        <div className="IconJustify">
          {" "}
            <svg
              width="20"
              height="20"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Notifications">
                <path
                  id="Vector"
                  d="M8.00033 14.667C8.73366 14.667 9.33366 14.067 9.33366 13.3337H6.66699C6.66699 14.067 7.26033 14.667 8.00033 14.667ZM12.0003 10.667L12.0003 7.33366C12.0003 5.28699 10.907 3.57366 9.00033 3.12033V2.66699C9.00033 2.11366 8.55366 1.66699 8.00033 1.66699C7.44699 1.66699 7.00033 2.11366 7.00033 2.66699V3.12033C5.08699 3.57366 4.00033 5.28033 4.00033 7.33366V10.667L2.66699 12.0003V12.667L13.3337 12.667V12.0003L12.0003 10.667Z"
                  fill="#3A3737"
                ></path>
              </g>
            </svg>
            <div className="Profile">U</div>
          <div className="Icon">
            <svg
              width="20"
              height="20"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.66666 11.8333L5.60666 10.8933L3.88666 9.16667L10.6667 9.16667L10.6667 7.83333L3.88666 7.83333L5.60666 6.11333L4.66666 5.16667L1.33332 8.5L4.66666 11.8333ZM13.3333 13.1667L7.99999 13.1667L7.99999 14.5L13.3333 14.5C14.0667 14.5 14.6667 13.9 14.6667 13.1667L14.6667 3.83333C14.6667 3.1 14.0667 2.5 13.3333 2.5L7.99999 2.5L7.99999 3.83333L13.3333 3.83333L13.3333 13.1667Z"
                fill="#303030"
                fill-opacity="0.5"
              ></path>
            </svg>
            <div>Logout</div>
          </div>
        </div>
      </div>
      <div className="Responsive-TabBar">
        {titles.map((item, index) => {
          return <IconButton key={item} index={index} />;
        })}
      </div>
      <Outlet />
    </div>
  );
}
