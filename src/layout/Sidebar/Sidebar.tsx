import { NavLink, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { v4 } from "uuid";

import { toggleMenu } from "../../store/menu/menuSlice";
import { toggleTagsModal } from "../../store/modal/modalSlice";

import getStandardName from "../../utils/getStandardName";

import { FaArchive, FaLightbulb, FaTag, FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

import { Container, MainBox, StyledLogo, ItemsBox } from "./Sidebar.styles";

const items = [
  {
    icon: <FaArchive />,
    title: "Archive",
    id: v4(),
  },
  {
    icon: <FaTrash />,
    title: "Trash",
    id: v4(),
  },
];

export default function Sidebar() {
  const dispatch = useAppDispatch();

  const { pathname } = useLocation();

  const { isOpen } = useAppSelector((state) => state.menu);
  const { tagsList } = useAppSelector((state) => state.tags);

  if (pathname === "404") {
    return null;
  }

  return (
    <Container openmenu={isOpen ? "open" : ""}>
      <MainBox openmenu={isOpen ? "open" : ""}>
        <StyledLogo>
          <h1>Keep</h1>
        </StyledLogo>
        <ItemsBox>
          {/* note item */}
          <li onClick={() => dispatch(toggleMenu(false))}>
            <NavLink
              to={"/"}
              state={`notes`}
              className={(isActive) =>
                isActive ? "active-item" : "inactive-item"
              }
            >
              <span>
                <FaLightbulb />
              </span>
              <span>Notes</span>
            </NavLink>
          </li>

          {/* tag items */}
          {tagsList.map(({ tag, id }) => (
            <li key={id} onClick={() => dispatch(toggleMenu(false))}>
              <NavLink
                to={`/tag/${tag}`}
                state={`${tag}`}
                className={({ isActive }) =>
                  isActive ? "active-item" : "inactive-item"
                }
              >
                <span>
                  <FaTag />
                </span>
                <span>{getStandardName(tag)}</span>
              </NavLink>
            </li>
          ))}

          {/* edit tag item */}
          <li
            className="sidebar__edit-item"
            onClick={() =>
              dispatch(toggleTagsModal({ types: "edit", view: true }))
            }
          >
            <span>
              <MdEdit />
            </span>
            <span>Edit Notes</span>
          </li>

          {/* other items */}
          {items.map(({ icon, title, id }) => (
            <li key={id} onClick={() => dispatch(toggleMenu(false))}>
              <NavLink
                to={`/${title.toLocaleLowerCase()}`}
                state={`${title}`}
                className={({ isActive }) =>
                  isActive ? "active-item" : "inactive-item"
                }
              >
                <span>{icon}</span>
                <span>{title}</span>
              </NavLink>
            </li>
          ))}
        </ItemsBox>
      </MainBox>
    </Container>
  );
}
