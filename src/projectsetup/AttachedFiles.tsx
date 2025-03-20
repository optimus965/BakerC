import { useState } from "react";

export function AttachedFiles() {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <div className="OneMore">
      <div>
        <div className="SpacingBetween7">
          <div className="SpacingBetween6">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
                fill="#9B9B9B"
              ></path>
            </svg>
            <div className="noInput">
              <input type="text" />
            </div>
          </div>
          <div className="SpacingBetween8" onClick={() => setVisible(!visible)}>
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
                d="M15.8333 2.5H4.16667C3.25 2.5 2.5 3.25 2.5 4.16667V10C2.5 10.9167 3.25 11.6667 4.16667 11.6667H15.8333C16.75 11.6667 17.5 10.9167 17.5 10V4.16667C17.5 3.25 16.75 2.5 15.8333 2.5ZM15.8333 7.5H12.5C12.5 8.85 11.35 10 10 10C8.65 10 7.5 8.85 7.5 7.5H4.16667V4.16667H15.8333V7.5ZM12.5 13.3333H17.5V15.8333C17.5 16.75 16.75 17.5 15.8333 17.5H4.16667C3.25 17.5 2.5 16.75 2.5 15.8333V13.3333H7.5C7.5 14.7167 8.61667 15.8333 10 15.8333C11.3833 15.8333 12.5 14.7167 12.5 13.3333Z"
              ></path>{" "}
            </svg>
            New
          </div>
          {visible && (
            <div className="form2">
              <div>
                <label htmlFor="">
                  
                </label>
              </div>
            </div>
          )}
          <div className="SpacingBetween8">
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
            Download
          </div>
          <div className="SpacingBetween8">
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
                d="M11.667 1.66699H3.33366C2.40866 1.66699 1.66699 2.41699 1.66699 3.33366V11.667H3.33366V3.33366H11.667V1.66699ZM15.0003 5.00033H6.66699C5.74199 5.00033 5.00033 5.75033 5.00033 6.66699V15.0003H6.66699V6.66699H15.0003V5.00033ZM16.667 8.33366H10.0003C9.07533 8.33366 8.33366 9.08366 8.33366 10.0003V16.667C8.33366 17.5837 9.07533 18.3337 10.0003 18.3337H16.667C17.5837 18.3337 18.3337 17.5837 18.3337 16.667V10.0003C18.3337 9.08366 17.5837 8.33366 16.667 8.33366Z"
              ></path>{" "}
            </svg>
            Carousel
          </div>
          <div className="SpacingBetween8">
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
                d="M10 1.66699L5.41667 9.16699H14.5833L10 1.66699Z"
              ></path>{" "}
              <path
                fill="#808080"
                d="M14.5833 18.3337C16.6544 18.3337 18.3333 16.6547 18.3333 14.5837C18.3333 12.5126 16.6544 10.8337 14.5833 10.8337C12.5123 10.8337 10.8333 12.5126 10.8333 14.5837C10.8333 16.6547 12.5123 18.3337 14.5833 18.3337Z"
              ></path>{" "}
              <path
                fill="#808080"
                d="M2.5 11.2503H9.16667V17.917H2.5V11.2503Z"
              ></path>{" "}
            </svg>
            Logo
          </div>
          <div className="SpacingBetween8">
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
                d="M9.99967 2.5L3.33301 7.5V17.5H16.6663V7.5L9.99967 2.5ZM13.333 13.3833L11.6663 12.5V13.3333C11.6663 13.7917 11.2913 14.1667 10.833 14.1667H7.49967C7.04134 14.1667 6.66634 13.7917 6.66634 13.3333V10C6.66634 9.54167 7.04134 9.16667 7.49967 9.16667H10.833C11.2913 9.16667 11.6663 9.54167 11.6663 10V10.8333L13.333 9.95V13.3833Z"
              ></path>{" "}
            </svg>
            Thumbnail
          </div>
        </div>
      </div>
      <div className="ParentDiv">
        <div className="TableDiv">
          <table>
            <thead>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Label</td>
                <td>File Name</td>
                <td>File Type</td>
                <td>Order Index</td>
                <td>Download Count</td>
                <td>File Path</td>
                <th className="tableData">Actions</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
}
