import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export function MyBaker() {
  return (
    <div className="box">
      <div className="SpacingBetween1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          height="24"
          width="24"
        >
          {" "}
          <path
            fill="#D92D27"
            d="M20 6H12L10 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6ZM20 18H4V8H20V18Z"
          ></path>{" "}
        </svg>
        MyBaker File Manager
      </div>
      <div className="SpacingBetween3">
        <div className="SpacingBetween3h">
            <Link to={""} >
          <div className="SpacingBetween4">
            <svg
              fill="none"
              viewBox="0 0 20 20"
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <path
                fill="#D92D27"
                d="M15.8333 2.5H4.16667C3.25 2.5 2.5 3.25 2.5 4.16667V10C2.5 10.9167 3.25 11.6667 4.16667 11.6667H15.8333C16.75 11.6667 17.5 10.9167 17.5 10V4.16667C17.5 3.25 16.75 2.5 15.8333 2.5ZM15.8333 7.5H12.5C12.5 8.85 11.35 10 10 10C8.65 10 7.5 8.85 7.5 7.5H4.16667V4.16667H15.8333V7.5ZM12.5 13.3333H17.5V15.8333C17.5 16.75 16.75 17.5 15.8333 17.5H4.16667C3.25 17.5 2.5 16.75 2.5 15.8333V13.3333H7.5C7.5 14.7167 8.61667 15.8333 10 15.8333C11.3833 15.8333 12.5 14.7167 12.5 13.3333Z"
              ></path>{" "}
            </svg>
            Attached Files
          </div>
          </Link>
          <Link to={"ExternalUrls"}>
          <div className="SpacingBetween4">
            <svg
              fill="none"
              viewBox="0 0 20 20"
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <path
                fill="#808080"
                d="M4.16699 16.6667H15.8337V15H4.16699V16.6667ZM15.8337 7.5H12.5003V2.5H7.50033V7.5H4.16699L10.0003 13.3333L15.8337 7.5Z"
              ></path>{" "}
            </svg>
            External URLS
          </div>
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
