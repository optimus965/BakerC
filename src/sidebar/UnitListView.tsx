import React, { useState } from "react";
import { Header } from "../projectsetup/Header";
enum unitType {
  BedRoom = "BedRoom",
  Studio = "Studio",
  Other = "Other",
}
enum Standard {
  Luxury = "Luxury",
  Deluxe = "Deluxe",
}
interface Data {
  UnitType: unitType;
  Floor: number;
  Model: Standard;
  // SquareFeet: number;
  LaunchPrice: number;
  // BedRooms: number;
  // BathRoom: number;
  // MaximumLockerCountNumber: number;
  // MaximumParkingCountNumber: number;
  // UnitPricePerSqFeet: number;
  BuildingName: string;
  unitName: string;
  status: string;
  AllocatedStatus: string;
  CoOpAgent: string;
  level2Status: string;
  tags?: string[];
}
export function UnitListView() {
  const [data, setData] = useState<Data[]>([]);
  const [otherTable, setOtherTable] = useState<boolean>(true);
  const [otherTable1, setOtherTable1] = useState<boolean>(false);
  const [searchTerm,setSearchTerm] = useState<string>(''); 
  const filteredData = data.filter(item =>
    searchTerm === "" || item.status.toLowerCase() === searchTerm.toLowerCase())
    console.log(searchTerm)
    console.log(filteredData)
  const [current, setCurrent] = useState<Data>({
    UnitType: unitType.Other,
    Floor: 0,
    Model: Standard.Deluxe,
    // SquareFeet: 0,
    LaunchPrice: 0,
    // IncreaseInRevenueSinceLaunch: 0,
    // BedRooms: 0,
    // BathRoom: 0,
    // MaximumLockerCountNumber: 0,
    // MaximumParkingCountNumber: 0,
    // UnitPricePerSqFeet: 0,
    BuildingName: "Antilia",
    unitName: "",
    status: "",
    level2Status: "",
    AllocatedStatus: "",
    CoOpAgent: "",
  });
  const [visible, setVisible] = useState<Boolean>(false);
  function handleClick() {
    if (
      current.unitName.length > 0 &&
      current.status.length > 0 &&
      current.level2Status.length > 0
    ) {
      setData((prev) => {
        prev.push(current);
        return data;
      });
      setCurrent((prev) => {
        const data: Data = {
          UnitType: unitType.Other,
          Floor: 0,
          Model: Standard.Deluxe,
          // SquareFeet: 0,
          LaunchPrice: 0,
          // IncreaseInRevenueSinceLaunch: 0,
          // BedRooms: 0,
          // BathRoom: 0,
          // MaximumLockerCountNumber: 0,
          // MaximumParkingCountNumber: 0,
          // UnitPricePerSqFeet: 0,
          BuildingName: "Antilia",
          unitName: "",
          status: "",
          level2Status: "",
          AllocatedStatus: "",
          CoOpAgent: "",
        };
        console.log(prev)
        return data;
      });
      setVisible(!visible);
    }
  }
  function handleChange(
    event: React.ChangeEvent<HTMLSelectElement>,
    unitName: string
  ) {
    console.log("hello, world");
    const data1 = data.map((item) => {
      if (item.unitName === unitName) {
        return {
          ...item,
          tags: [...(item.tags || []), event.target.value],
        };
      }
      return item;
    });
    console.log(data1);
    setData(data1);
  }
  return (
    <div>
      <Header
        title={"Units List View"}
        svgElement={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            height="24"
            width="24"
          >
            {" "}
            <path
              fill="#DA1E28"
              d="M18.4 4H5.6C4.8 4 4 4.72 4 5.6V8.008C4 8.584 4.344 9.08 4.8 9.36V18.4C4.8 19.28 5.68 20 6.4 20H17.6C18.32 20 19.2 19.28 19.2 18.4V9.36C19.656 9.08 20 8.584 20 8.008V5.6C20 4.72 19.2 4 18.4 4ZM14.4 13.6H9.6V12H14.4V13.6ZM18.4 8H5.6V5.6L18.4 5.584V8Z"
            ></path>{" "}
          </svg>
        }
      />
      <div className="SearchTerm"><label htmlFor="delivery" className="control-label ">Search</label><div> <input value={searchTerm} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setSearchTerm(e.target.value)} type="text" /></div></div>
      <div className="SpacingBetween7">
        <div className="SpacingBetween11">
          <div className="selectBox">
            {" "}
            <div>
              <input
                checked={otherTable}
                type="checkbox"
                onChange={() => setOtherTable(!otherTable)}
              />
            </div>
            <label htmlFor="delivery" className="control-label ">
              Unit Attributes
            </label>
          </div>
          <div className="selectBox">
            {" "}
            <div>
              <input checked={otherTable1} onChange={()=>setOtherTable1(!otherTable1)} type="checkbox" />
            </div>
            <label htmlFor="delivery" className="control-label ">
              Allocations
            </label>
          </div>
          <div className="selectBox">
            {" "}
            <div>
              <input type="checkbox" />
            </div>
            <label htmlFor="delivery" className="control-label ">
              Co-op
            </label>
          </div>
          <div className="selectBox">
            {" "}
            <div>
              <input type="checkbox" />
            </div>
            <label htmlFor="delivery" className="control-label ">
              Purchasers
            </label>
          </div>
          <div className="selectBox">
            {" "}
            <div>
              <input type="checkbox" />
            </div>
            <label htmlFor="delivery" className="control-label ">
              Transactions
            </label>
          </div>
          <div className="selectBox">
            {" "}
            <div>
              <input type="checkbox" />
            </div>
            <label htmlFor="delivery" className="control-label ">
              Deposits
            </label>
          </div>
        </div>
        <div className="SpacingBetween1"><div className="SpacingBetween8" onClick={() => setVisible(!visible)}>
          Add New
        </div>
       
        <div className="SpacingBetween8">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#DA291C"
              d="M5 20H19V18H5V20ZM19 9H15V3H9V9H5L12 16L19 9Z"
            ></path>
          </svg>
          Download Units List
        </div></div>
 {visible && (
          <div className="Form3">
            <div>
              <label>UnitType</label>
              <select
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setCurrent((prev) => ({
                    ...prev,
                    UnitType: e.target.value as unitType,
                  }))
                }
              >
                <option value="BedRoom">BedRoom</option>
                <option value="Studio">Studio</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              {" "}
              <label>Status</label>
              <input
                value={current?.status}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setCurrent((prev) => ({
                    ...prev,
                    status: e.target.value,
                  }))
                }
              />
            </div>
            <div>
              <label>Level 2 Status</label>
              <input
                value={current?.level2Status}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setCurrent((prev) => ({
                    ...prev,
                    level2Status: e.target.value,
                  }))
                }
              />
            </div>
            <div>
              <label>Allocated Status</label>
              <input
                value={current?.AllocatedStatus}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setCurrent((prev) => ({
                    ...prev,
                    AllocatedStatus: e.target.value,
                  }))
                }
              />
            </div>
            <div>
              <label>CoOpAgent</label>
              <input
                value={current?.CoOpAgent}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setCurrent((prev) => ({
                    ...prev,
                    CoOpAgent: e.target.value,
                  }))
                }
              />
            </div>
            <div>
              <label>Floor</label>
              <input
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setCurrent((prev) => ({
                    ...prev,
                    Floor: parseInt(event.target.value),
                  }))
                }
              />
            </div>
            <div>
              <label>Model</label>
              <select
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setCurrent((prev) => ({
                    ...prev,
                    Model: e.target.value as Standard,
                  }))
                }
              >
                <option value="Luxury">Luxury</option>
                <option value="Deluxe">Deluxe</option>
              </select>
            </div>
            <div>
              <label>Launch Price</label>
              <input
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setCurrent((prev) => ({
                    ...prev,
                    LaunchPrice: parseInt(e.target.value),
                  }))
                }
              />
            </div>
            <div>
              <label>Building Name</label>
              <input
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setCurrent((prev) => ({
                    ...prev,
                    BuildingName: e.target.value,
                  }))
                }
              />
            </div>
            <div>
              <label>Unit Name</label>
              <input
                value={current?.unitName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setCurrent((prev) => ({
                    ...prev,
                    unitName: e.target.value,
                  }))
                }
              />
            </div>
            <div>
              <button onClick={handleClick}>Save</button>
            </div>
          </div>
        )}


      </div>
      <div className="SecondTable">
        <table>
          <thead>
            <tr>
              <td>Unit Name</td>
              <td>Status</td>
              {otherTable && (
                <>
                  <td>Floor</td>
                  <td>Model</td>
                  <td>Launch price</td>
                  <td>Building Name</td>
                </>
              )}
              {otherTable1 && (
                <>
                  <td>Allocated Status</td>
                  <td>Co-Op Agent</td>
                </>
              )}
              <td>Level 2 Status</td>
              <td>Tags</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => {
              return (
                <tr key={item.unitName}>
                  <td>{item.unitName}</td>
                  <td>{item.status}</td>
                  {otherTable && (
                    <>
                      <td>{item.Floor}</td>
                      <td>{item.Model}</td>
                      <td>{item.LaunchPrice}</td>
                      <td>{item.BuildingName}</td>
                    </>
                  )}
                  {otherTable1 && (
                    <>
                      <td>{item.AllocatedStatus}</td>
                      <td>{item.CoOpAgent}</td>
                    </>
                  )}
                  <td>{item.level2Status}</td>
                  <td>
                    <div className="box1">
                      <div className="SpacingBetween12">
                        {item.tags &&
                          item?.tags.map((item) => {
                            return <div>{item}</div>;
                          })}
                      </div>
                      <select
                        onChange={(
                          event: React.ChangeEvent<HTMLSelectElement>
                        ) => handleChange(event, item.unitName)}
                      >
                        <option>hello world</option>
                        <option>helo world1</option>
                        <option>aaaaaaaaaaaaaaaaaaaaa</option>
                      </select>
                    </div>
                  </td>
                  <td></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
