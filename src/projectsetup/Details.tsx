import { useState } from "react";

export function Details() {
  const [CollapsedYoti, setCollapsedYoti] = useState<Boolean>(true);
  const [CollapsedImp, setCollapsedImp] = useState<Boolean>(true);
  const [CollapsedInfo, setCollapsedInfo] = useState<Boolean>(true);
  const [CollapsedLaunch, setCollapsedLaunch] = useState<Boolean>(true);
  const [CollapseAll,setAllCollapse] = useState<Boolean>(true);
  function handleClick() {
    if(CollapseAll) {
        setAllCollapse(prev=>!prev)
        setCollapsedYoti(false)
        setCollapsedImp(false)
        setCollapsedInfo(false)
        setCollapsedLaunch(false);
    }else {
        setAllCollapse(prev=>!prev)
        setCollapsedYoti(true)
        setCollapsedImp(true)
        setCollapsedInfo(true)
        setCollapsedLaunch(true);
    }
  }
  return (
    <div className="box">
      <div className="SpacingBetween">
        <div className="SpacingBetween1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            height="34"
            width="34"
          >
            {" "}
            <path
              fill="#D92D27"
              d="M16 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V8L16 3ZM7 7H12V9H7V7ZM17 17H7V15H17V17ZM17 13H7V11H17V13ZM15 9V5L19 9H15Z"
            ></path>{" "}
          </svg>
          <div>Details</div>
        </div>

        <div onClick={handleClick} className="SpacingBetween1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M10 18H14V16H10V18ZM3 6V8H21V6H3ZM6 13H18V11H6V13Z"
              fill="#5B5B5B"
            ></path>
          </svg>
          <div>{CollapseAll ? 'Expand ':'Collapse '}All</div>
        </div>
      </div>
      <div className="ProjectSetUpSpacing">
        <div>
          <div
            className="SpacingBetween2"
            onClick={() => setCollapsedInfo((prev) => !prev)}
          >
            <svg
              width="12"
              height="9"
              viewBox="0 0 12 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.41 0.794922L6 5.37492L10.59 0.794922L12 2.20492L6 8.20492L0 2.20492L1.41 0.794922Z"
                fill="#808080"
              ></path>
            </svg>
            <div>Information</div>
          </div>{" "}
          <div className={`Attached1 ${CollapsedInfo ? "Collapsed1" : ""}`}>
            <div>
              <label htmlFor="delivery" className="control-label ">
                Vendor Contact 1
              </label>
              <div>
                {" "}
                <select>
                  <option>The District Union City</option>
                  <option>Union Central Park</option>
                  <option>EverGreen Valley</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="delivery" className="control-label ">
                Project Name
              </label>
              <div>
                {" "}
                <input type="text" />
              </div>
            </div>
            <div>
              <label htmlFor="delivery" className="control-label ">
                Sales Office
              </label>
              <div>
                <select>
                  <option>The District Union City</option>
                  <option>Union Central Park</option>
                  <option>EverGreen Valley</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="delivery" className="control-label ">
                Recession Period
              </label>
              <div>
                {" "}
                <input type="text" />
              </div>
            </div>
            <div>
              <label htmlFor="delivery" className="control-label ">
                Project Address
              </label>
              <div style={{ width: "210%" }}>
                {" "}
                <input type="textarea" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="SpacingBetween2"
            onClick={() => setCollapsedYoti((prev) => !prev)}
          >
            <svg
              width="12"
              height="9"
              viewBox="0 0 12 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.41 0.794922L6 5.37492L10.59 0.794922L12 2.20492L6 8.20492L0 2.20492L1.41 0.794922Z"
                fill="#808080"
              ></path>
            </svg>
            <div>Yoti Information</div>
          </div>{" "}
          <div className={`Attached1 ${CollapsedYoti ? "Collapsed1" : ""}`}>
            <div>
              <label htmlFor="delivery" className="control-label ">
                Yoti Application
              </label>
              <div>
                {" "}
                <select>
                  <option>The District Union City</option>
                  <option>Union Central Park</option>
                  <option>EverGreen Valley</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="delivery" className="control-label ">
                Yoti Warning Email Notification
              </label>
              <div>
                {" "}
                <input
                  type="text"
                  placeholder="Type Yoti Warning Email Notification"
                />
              </div>
            </div>
            <div className="selectBox">
              {" "}
              <div>
                <input type="checkbox" />
              </div>
              <label htmlFor="delivery" className="control-label ">
                Yoti Active
              </label>
            </div>
            <div className="selectBox">
              {" "}
              <div>
                <input type="checkbox" />
              </div>
              <label htmlFor="delivery" className="control-label ">
                Yoti Active
              </label>
            </div>
            <div>
              <label htmlFor="delivery" className="control-label ">
                Commencement of Construction Date
              </label>
              <div>
                {" "}
                <input type="date" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="SpacingBetween2"
            onClick={() => setCollapsedLaunch((prev) => !prev)}
          >
            <svg
              width="12"
              height="9"
              viewBox="0 0 12 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.41 0.794922L6 5.37492L10.59 0.794922L12 2.20492L6 8.20492L0 2.20492L1.41 0.794922Z"
                fill="#808080"
              ></path>
            </svg>
            <div>Launch Dates</div>
          </div>
          <div className={`Attached1 ${CollapsedLaunch ? "Collapsed1" : ""}`}>
            <div>
              <label htmlFor="delivery" className="control-label ">
                Delivery Date
              </label>
              <div>
                {" "}
                <input type="date" placeholder="DD / MM / YYYY" />
              </div>
            </div>
            <div>
              <label htmlFor="delivery" className="control-label ">
                Financing Deadline Date
              </label>
              <div>
                {" "}
                <input type="date" />
              </div>
            </div>
            <div>
              <label htmlFor="delivery" className="control-label ">
                Annulation Date
              </label>
              <div>
                {" "}
                <input type="date" />
              </div>
            </div>
            <div>
              <label htmlFor="delivery" className="control-label ">
                Report Date
              </label>
              <div>
                {" "}
                <input type="date" />
              </div>
            </div>
            <div>
              <label htmlFor="delivery" className="control-label ">
                Commencement of Construction Date
              </label>
              <div>
                {" "}
                <input type="date" />
              </div>
            </div>
          </div>
        </div>
        <div className="Attached">
          <div
            className="SpacingBetween2"
            onClick={() => setCollapsedImp((prev) => !prev)}
          >
            <svg
              width="12"
              height="9"
              viewBox="0 0 12 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.41 0.794922L6 5.37492L10.59 0.794922L12 2.20492L6 8.20492L0 2.20492L1.41 0.794922Z"
                fill="#808080"
              ></path>
            </svg>
            <div>Important Dates</div>
          </div>
          <div className={`Attached1 ${CollapsedImp ? "Collapsed1" : ""}`}>
            <div>
              <label htmlFor="delivery" className="control-label ">
                Delivery Date
              </label>
              <div>
                {" "}
                <input type="date" placeholder="DD / MM / YYYY" />
              </div>
            </div>
            <div>
              <label htmlFor="delivery" className="control-label ">
                Financing Deadline Date
              </label>
              <div>
                {" "}
                <input type="date" />
              </div>
            </div>
            <div>
              <label htmlFor="delivery" className="control-label ">
                Annulation Date
              </label>
              <div>
                {" "}
                <input type="date" />
              </div>
            </div>
            <div>
              <label htmlFor="delivery" className="control-label ">
                Report Date
              </label>
              <div>
                {" "}
                <input type="date" />
              </div>
            </div>
            <div>
              <label htmlFor="delivery" className="control-label ">
                Commencement of Construction Date
              </label>
              <div>
                {" "}
                <input type="date" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
