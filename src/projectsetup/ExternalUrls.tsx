export function ExternalUrls() {
  return (
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
          <div>External Fields</div>
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
                <td>Video Name</td>
                <td>Description</td>
                <td>Creeated On</td>
                <td>Order</td>
                <td>Index</td>
                <td>Content URL</td>
                <th className="tableData">Actions</th>
              </tr>
            </thead>
            
          </table>
        </div>
        {/* <div>
        <table>
            <thead>
              <tr>Actions</tr>
            </thead>
          </table>
        </div> */}
      </div>
    </div>
  );
}
