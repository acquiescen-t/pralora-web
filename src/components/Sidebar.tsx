import { ListIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  HouseIcon,
  FilmReelIcon,
  TelevisionIcon,
  UserIcon,
  MaskHappyIcon,
} from "@phosphor-icons/react";

const Sidebar = () => {
  const pages = ["home", "movies", "tv series", "actors", "genres"];
  const iconMap: Record<string, React.ElementType> = {
    home: HouseIcon,
    movies: FilmReelIcon,
    "tv series": TelevisionIcon,
    actors: UserIcon,
    genres: MaskHappyIcon,
  };
  const [selectedIndex, setSelectedIndex] = useState(-1);

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
    <div className="bebas-light">
      <ListIcon
        className="sidebar-btn"
        size={24}
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#sidebar"
        aria-controls="sidebar"
      ></ListIcon>

      <div
        className="offcanvas offcanvas-start sidebar"
        tabIndex={-1}
        id="sidebar"
        aria-labelledby="sidebarLabel"
      >
        <div className="offcanvas-body p-0">
          <div className="list-group list-group-flush">
            {pages.map((page, index) => {
              const Icon = iconMap[page];
              return (
                <Link
                  key={page}
                  to={"/" + page.replaceAll(" ", "-")}
                  className={
                    "list-group-item list-group-item-action bebas-light" +
                    (selectedIndex === index ? " active" : "")
                  }
                  onClick={() => setSelectedIndex(index)}
                  style={{ textDecoration: "none" }}
                >
                  <Icon size={24} weight="bold" className="me-3" />
                  {toTitleCase(page)}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
