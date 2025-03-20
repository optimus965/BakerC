import { useState } from "react";
import { Header } from "../projectsetup/Header";

export function WorkSheetManagement() {
    const [visible, setVisible] = useState<boolean>(false);
    return (
        <div>
            <Header
                svgElement={
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        height="24"
                        width="24"
                    >
                        {" "}
                        <g id="Assistant">
                            {" "}
                            <path
                                fill="#D92D27"
                                d="M19 2H5C3.9 2 3 2.9 3 4V18C3 19.1 3.9 20 5 20H9L12 23L15 20H19C20.1 20 21 19.1 21 18V4C21 2.9 20.1 2 19 2ZM13.88 12.88L12 17L10.12 12.88L6 11L10.12 9.12L12 5L13.88 9.12L18 11L13.88 12.88Z"
                                id="Vector"
                            ></path>{" "}
                        </g>{" "}
                    </svg>
                }
                title="General WorkSheets"
            />
            <div className="SpacingBetween13">
                <div className="SpacingBetweenSearch">

                    <svg
                        className="searchIcon"
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
                    <input type="text" placeholder="search" />
                </div>
                <div className="SpacingBetween8">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"
                            fill="#D92D27"
                        ></path>
                    </svg>
                    <div>Add Manual</div>
                </div>
            </div>
            <div className="GeneralWorkSheetsHeader">
                <div>Co-OP Agent</div>
                <div>Status</div>
                <div>Total Requested</div>
                <div>Total Allocated</div>
                <div>Pending Allocation</div>
                <div>Actions</div>
            </div>
            <div className="box5">
                <div className="GeneralWorkSheetsHeader" style={{border:"none"}}>
                    <div className="SpacingBetween3"  onClick={() => setVisible(!visible)}>
                        <button style={{
                            all: "unset",
                            cursor: "pointer" /* Optional: Add back pointer for usability */
                        }}>
                            <svg className={`RotateGeneral ${visible ? "CollapseGeneral" : ""}`} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"> <path d="M16.8584 14.8083L18.3334 13.3333L10 5L1.66671 13.3333L3.14171 14.8083L10 7.95L16.8584 14.8083Z" fill="#393939"></path> </svg>
                        </button>
                        <div style={{ whiteSpace: "pre-wrap",marginLeft: "10px"  }}>
                        Akash Bhavitha
                        </div>
                       
                    </div>
                    <div>Partially Allocated</div>
                    <div>2</div>
                    <div>1</div>
                    <div style={{textAlign:"left"}}>1</div>
                </div>
                {
                    visible && <div className="DifferentTable">
                        <table>
                            <thead>
                                <tr>
                                    <td>Purchasers</td>
                                    <td>status</td>
                                    <td>Recieved Date</td>
                                    <td>Tags</td>
                                    <td>Choice 1</td>
                                    <td>Choice 2</td>
                                    <td>Choice 3</td>
                                    <td>Choice 4</td>
                                    <td>Choice 5</td>
                                    <td>Actions</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td colSpan={10} style={{ border: "none" }}></td></tr>
                                <tr>
                                    <td></td>
                                    <td>Allocated</td>
                                    <td>Dec 10, 2024 21:10 PM</td>
                                    <td>
                                        <div className="box1">
                                            <div className="SpacingBetween12">
                                                {/* {item.tags &&
                                                item?.tags.map((item, index) => {
                                                    return <div key={index}>{item}</div>;
                                                })} */}
                                            </div>
                                            <select
                                            // onChange={(
                                            //     event: React.ChangeEvent<HTMLSelectElement>
                                            // ) => handleChange(event, item.UnitName)}
                                            >
                                                <option>hello world</option>
                                                <option>helo world1</option>
                                                <option>aaaaaaaaaaaaaaaaaaaaa</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>MapleWood </td>
                                    <td>Choice 2</td>
                                    <td>Choice 3</td>
                                    <td>Choice 4</td>
                                    <td>Choice 5</td>
                                    <td></td>
                                </tr>
                                <tr><td colSpan={10} style={{ border: "none" }}></td></tr>
                                <tr>
                                    <td></td>
                                    <td>Allocated</td>
                                    <td>Dec 10, 2024 21:10 PM</td>
                                    <td>
                                        <div className="box1">
                                            <div className="SpacingBetween12">
                                                {/* {item.tags &&
                                                item?.tags.map((item, index) => {
                                                    return <div key={index}>{item}</div>;
                                                })} */}
                                            </div>
                                            <select
                                            // onChange={(
                                            //     event: React.ChangeEvent<HTMLSelectElement>
                                            // ) => handleChange(event, item.UnitName)}
                                            >
                                                <option>hello world</option>
                                                <option>helo world1</option>
                                                <option>aaaaaaaaaaaaaaaaaaaaa</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>MapleWood </td>
                                    <td>Choice 2</td>
                                    <td>Choice 3</td>
                                    <td>Choice 4</td>
                                    <td>Choice 5</td>
                                    <td></td>
                                </tr>
                                <tr><td colSpan={10} style={{ border: "none" }}></td></tr>
                                <tr>
                                    <td></td>
                                    <td>Allocated</td>
                                    <td>Dec 10, 2024 21:10 PM</td>
                                    <td>
                                        <div className="box1">
                                            <div className="SpacingBetween12">
                                                {/* {item.tags &&
                                                item?.tags.map((item, index) => {
                                                    return <div key={index}>{item}</div>;
                                                })} */}
                                            </div>
                                            <select
                                            // onChange={(
                                            //     event: React.ChangeEvent<HTMLSelectElement>
                                            // ) => handleChange(event, item.UnitName)}
                                            >
                                                <option>hello world</option>
                                                <option>helo world1</option>
                                                <option>aaaaaaaaaaaaaaaaaaaaa</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>MapleWood </td>
                                    <td>Choice 2</td>
                                    <td>Choice 3</td>
                                    <td>Choice 4</td>
                                    <td>Choice 5</td>
                                    <td></td>
                                </tr>
                                <tr><td colSpan={10} style={{ border: "none" }}></td></tr>
                                <tr>
                                    <td></td>
                                    <td>Allocated</td>
                                    <td>Dec 10, 2024 21:10 PM</td>
                                    <td>
                                        <div className="box1">
                                            <div className="SpacingBetween12">
                                                {/* {item.tags &&
                                                item?.tags.map((item, index) => {
                                                    return <div key={index}>{item}</div>;
                                                })} */}
                                            </div>
                                            <select
                                            // onChange={(
                                            //     event: React.ChangeEvent<HTMLSelectElement>
                                            // ) => handleChange(event, item.UnitName)}
                                            >
                                                <option>hello world</option>
                                                <option>helo world1</option>
                                                <option>aaaaaaaaaaaaaaaaaaaaa</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>MapleWood </td>
                                    <td>Choice 2</td>
                                    <td>Choice 3</td>
                                    <td>Choice 4</td>
                                    <td>Choice 5</td>
                                    <td></td>
                                </tr>
                                <tr><td colSpan={10} style={{ border: "none" }}></td></tr>
                                <tr>
                                    <td></td>
                                    <td>Allocated</td>
                                    <td>Dec 10, 2024 21:10 PM</td>
                                    <td>
                                        <div className="box1">
                                            <div className="SpacingBetween12">
                                                {/* {item.tags &&
                                                item?.tags.map((item, index) => {
                                                    return <div key={index}>{item}</div>;
                                                })} */}
                                            </div>
                                            <select
                                            // onChange={(
                                            //     event: React.ChangeEvent<HTMLSelectElement>
                                            // ) => handleChange(event, item.UnitName)}
                                            >
                                                <option>hello world</option>
                                                <option>helo world1</option>
                                                <option>aaaaaaaaaaaaaaaaaaaaa</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>MapleWood </td>
                                    <td>Choice 2</td>
                                    <td>Choice 3</td>
                                    <td>Choice 4</td>
                                    <td>Choice 5</td>
                                    <td></td>
                                </tr>
                                <tr><td colSpan={10} style={{ border: "none" }}></td></tr>
                                <tr>
                                    <td></td>
                                    <td>Allocated</td>
                                    <td>Dec 10, 2024 21:10 PM</td>
                                    <td>
                                        <div className="box1">
                                            <div className="SpacingBetween12">
                                                {/* {item.tags &&
                                                item?.tags.map((item, index) => {
                                                    return <div key={index}>{item}</div>;
                                                })} */}
                                            </div>
                                            <select
                                            // onChange={(
                                            //     event: React.ChangeEvent<HTMLSelectElement>
                                            // ) => handleChange(event, item.UnitName)}
                                            >
                                                <option>hello world</option>
                                                <option>helo world1</option>
                                                <option>aaaaaaaaaaaaaaaaaaaaa</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>MapleWood </td>
                                    <td>Choice 2</td>
                                    <td>Choice 3</td>
                                    <td>Choice 4</td>
                                    <td>Choice 5</td>
                                    <td></td>
                                </tr>
                                <tr><td colSpan={10} style={{ border: "none" }}></td></tr>
                                {/* <tr></tr>
                            <tr>
                                
                            </tr> */}

                            </tbody>
                        </table> </div>}
            </div>

        </div>
    );
}
