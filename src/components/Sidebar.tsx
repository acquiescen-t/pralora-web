import { ListIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const pages = ["movies", "tv series", "actors", "genres"];
  const [hover, setHover] = useState(false);

  function toTitleCase(str: any) {
    return str
      .toLowerCase()
      .split(" ")
      .map((word: any) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  }

  return (
    <>
      <ListIcon
        className="sidebar-btn p-0"
        size={30}
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#sidebar"
        aria-controls="sidebar"
      ></ListIcon>

      <div
        className="offcanvas offcanvas-start"
        tabIndex={-1}
        id="sidebar"
        aria-labelledby="sidebarLabel"
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul style={{ listStyle: "none" }}>
            {pages.map((page) => (
              <li key={page}>
                <Link
                  to={"/" + page.replaceAll(" ", "-")}
                  style={{ textDecoration: "none" }}
                >
                  {toTitleCase(page)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
