import { useState } from "react";
import { Link } from "react-router-dom";

export function Sidebar() {
  const [isCollapsed, setCollapsed] = useState<boolean>(false);
  function handleClick() {
    console.log(isCollapsed);
    setCollapsed((isCollapsed) => !isCollapsed);
  }
  return (
    <div>
      <div className={`Sidebar ${isCollapsed ? "Collapse" : ""}`}>
        <button className="SideBarButton" onClick={handleClick}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 6 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={isCollapsed ? "rotated" : ""}
          >
            <path
              d="M5.40417 1.071L4.66667 0.333496L0.5 4.50016L4.66667 8.66683L5.40417 7.92933L1.975 4.50016L5.40417 1.071Z"
              fill="black"
              fill-opacity="0.54"
            ></path>
          </svg>
        </button>
        <div className="ParentSideBar">
         
          <Link to={""}>
          <div className="SideBarButton1">
            <div> 
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 16"
                height="36"
                width="36"
              >
                <path
                  fill="#7F7F86"
                  d="M2 8.66667H7.33333V2H2V8.66667ZM2 14H7.33333V10H2V14ZM8.66667 14H14V7.33333H8.66667V14ZM8.66667 2V6H14V2H8.66667Z"
                ></path>{" "}
              </svg>
            </div>
            <button className={`ItemButton1 ${isCollapsed ? "collapse" : ""}`}>
              Dashboard
            </button>
          </div></Link>
          <Link to={"WorkSheetManagement"}>
          <div className="SideBarButton1">
            <div>
            <svg fill="none" viewBox="0 0 16 16" height="16" width="16" xmlns="http://www.w3.org/2000/svg"> <path fill="#7F7F86" d="M2.66699 10.6668V14.6668H13.3337V10.6668C13.3337 9.9335 12.7337 9.3335 12.0003 9.3335H4.00033C3.26699 9.3335 2.66699 9.9335 2.66699 10.6668ZM12.0003 12.0002H4.00033V10.6668H12.0003V12.0002ZM8.00033 1.3335C6.16033 1.3335 4.66699 2.82683 4.66699 4.66683L8.00033 9.3335L11.3337 4.66683C11.3337 2.82683 9.84033 1.3335 8.00033 1.3335ZM8.00033 7.3335L6.00033 4.66683C6.00033 3.56016 6.89366 2.66683 8.00033 2.66683C9.10699 2.66683 10.0003 3.56016 10.0003 4.66683L8.00033 7.3335Z"></path> </svg>
            </div>
            <button className={`ItemButton1 ${isCollapsed ? "collapse" : ""}`}>
              WorkSheet Management
            </button>
          </div></Link>
          <Link to={"Transactions"}>
          <div className="SideBarButton1">
           <div>
           <svg fill="none" viewBox="0 0 16 16" height="16" width="16" xmlns="http://www.w3.org/2000/svg"> <path fill="#7F7F86" d="M8 1.33334C4.32 1.33334 1.33333 4.32001 1.33333 8.00001C1.33333 11.68 4.32 14.6667 8 14.6667C11.68 14.6667 14.6667 11.68 14.6667 8.00001C14.6667 4.32001 11.68 1.33334 8 1.33334ZM4.33333 6.00001L6.66667 3.66668L9 6.00001H7.33333V8.66668H6V6.00001H4.33333ZM11.6667 10L9.33333 12.3333L7 10H8.66667V7.33334H10V10H11.6667Z"></path> </svg>
           </div>
            <button className={`ItemButton1 ${isCollapsed ? "collapse" : ""}`}>
              {" "}
              Transactions
            </button>
          </div></Link>
          <Link to={"UnitListView"}>
          <div className="SideBarButton1">
           <div>
           <svg fill="none" viewBox="0 0 16 16" height="16" width="16" xmlns="http://www.w3.org/2000/svg"> <path fill="#7F7F86" d="M13.333 1.3335H2.66634C1.99967 1.3335 1.33301 1.9335 1.33301 2.66683V4.6735C1.33301 5.1535 1.61967 5.56683 1.99967 5.80016V13.3335C1.99967 14.0668 2.73301 14.6668 3.33301 14.6668H12.6663C13.2663 14.6668 13.9997 14.0668 13.9997 13.3335V5.80016C14.3797 5.56683 14.6663 5.1535 14.6663 4.6735V2.66683C14.6663 1.9335 13.9997 1.3335 13.333 1.3335ZM9.99967 9.3335H5.99967V8.00016H9.99967V9.3335ZM13.333 4.66683H2.66634V2.66683L13.333 2.6535V4.66683Z"></path> </svg>
           </div>
            <button className={`ItemButton1 ${isCollapsed ? "collapse" : ""}`}>
              {" "}
              Units List View
            </button>
          </div></Link>
          <Link to={"LeadManagement"}>
          <div className="SideBarButton1">
           <div>
           <svg fill="none" viewBox="0 0 16 16" height="16" width="16" xmlns="http://www.w3.org/2000/svg"> <path fill="#7F7F86" d="M14 5.33333V4.66667L12 6L10 4.66667V5.33333L12 6.66667L14 5.33333ZM14.6667 2H1.33333C0.6 2 0 2.6 0 3.33333V12.6667C0 13.4 0.6 14 1.33333 14H14.6667C15.4 14 15.9933 13.4 15.9933 12.6667L16 3.33333C16 2.6 15.4 2 14.6667 2ZM5.33333 4C6.44 4 7.33333 4.89333 7.33333 6C7.33333 7.10667 6.44 8 5.33333 8C4.22667 8 3.33333 7.10667 3.33333 6C3.33333 4.89333 4.22667 4 5.33333 4ZM9.33333 12H1.33333V11.3333C1.33333 10 4 9.26667 5.33333 9.26667C6.66667 9.26667 9.33333 10 9.33333 11.3333V12ZM14.6667 8H9.33333V4H14.6667V8Z"></path> </svg>
           </div>
            <button className={`ItemButton1 ${isCollapsed ? "collapse" : ""}`}>
              Lead Management
            </button>
          </div></Link>
          <Link to={"CoOps"}>
          <div className="SideBarButton1">
          <div>
          <svg fill="none" viewBox="0 0 16 16" height="16" width="16" xmlns="http://www.w3.org/2000/svg"> <path fill="#7F7F86" d="M12.6667 1.99984H12V0.666504H10.6667V1.99984H5.33333V0.666504H4V1.99984H3.33333C2.59333 1.99984 2 2.59984 2 3.33317V12.6665C2 13.3998 2.59333 13.9998 3.33333 13.9998H12.6667C13.4 13.9998 14 13.3998 14 12.6665V3.33317C14 2.59984 13.4 1.99984 12.6667 1.99984ZM8 3.99984C9.10667 3.99984 10 4.89317 10 5.99984C10 7.1065 9.10667 7.99984 8 7.99984C6.89333 7.99984 6 7.1065 6 5.99984C6 4.89317 6.89333 3.99984 8 3.99984ZM12 11.9998H4V11.3332C4 9.99984 6.66667 9.2665 8 9.2665C9.33333 9.2665 12 9.99984 12 11.3332V11.9998Z"></path> </svg>
          </div>
            <button className={`ItemButton1 ${isCollapsed ? "collapse" : ""}`}>
              {" "}
              Co-ops
            </button>
          </div></Link>
          <Link to={"ProjectDetails"}>
          <div className="SideBarButton1">
           <div>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" height="16" width="16"> <path fill="#7F7F86" d="M11.3333 7.33333V2H4.66667V4.66667H2V14H7.33333V11.3333H8.66667V14H14V7.33333H11.3333ZM4.66667 12.6667H3.33333V11.3333H4.66667V12.6667ZM4.66667 10H3.33333V8.66667H4.66667V10ZM4.66667 7.33333H3.33333V6H4.66667V7.33333ZM7.33333 10H6V8.66667H7.33333V10ZM7.33333 7.33333H6V6H7.33333V7.33333ZM7.33333 4.66667H6V3.33333H7.33333V4.66667ZM10 10H8.66667V8.66667H10V10ZM10 7.33333H8.66667V6H10V7.33333ZM10 4.66667H8.66667V3.33333H10V4.66667ZM12.6667 12.6667H11.3333V11.3333H12.6667V12.6667ZM12.6667 10H11.3333V8.66667H12.6667V10Z"></path> </svg>
           </div>
            <button className={`ItemButton1 ${isCollapsed ? "collapse" : ""}`}>
              {" "}
              Project Details
            </button>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
