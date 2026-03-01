import { useState } from "react"
import {
  FaBars,
  FaHome,
  FaChartBar,
  FaUsers,
  FaCog,
  FaChevronDown,
  FaChevronRight
} from "react-icons/fa"
import "./Sidebar.css"

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true)
  const [active, setActive] = useState("")
  const [openMenu, setOpenMenu] = useState(null)

  const menuItems = [
    { name: "Home", icon: <FaHome /> },
    {
      name: "Analytics",
      icon: <FaChartBar />,
      subMenu: ["Reports", "Revenue", "Traffic"]
    },
    {
      name: "Users",
      icon: <FaUsers />,
      subMenu: ["All Users", "Add User", "User Roles"]
    },
    {
      name: "Settings",
      icon: <FaCog />,
      subMenu: ["Profile", "Security", "Billing"]
    }
  ]

  const toggleSubMenu = (name) => {
    setOpenMenu(openMenu === name ? null : name)
  }

  return (
    <div className={isOpen ? "sidebar open" : "sidebar"}>
      <div className="top">
        {isOpen && <h2 className="logo">SaaS Admin</h2>}
        <FaBars className="toggle" onClick={() => setIsOpen(!isOpen)} />
      </div>

      <ul className="menu">
        {menuItems.map((item) => (
          <div key={item.name}>
            <li
              className={active === item.name ? "active" : ""}
              onClick={() =>
                item.subMenu
                  ? toggleSubMenu(item.name)
                  : setActive(item.name)
              }
            >
              <span className="icon">{item.icon}</span>
              {isOpen && <span className="text">{item.name}</span>}
              {item.subMenu && isOpen && (
                <span className="arrow">
                  {openMenu === item.name ? (
                    <FaChevronDown />
                  ) : (
                    <FaChevronRight />
                  )}
                </span>
              )}
            </li>

            {item.subMenu && openMenu === item.name && isOpen && (
              <ul className="submenu">
                {item.subMenu.map((sub) => (
                  <li
                    key={sub}
                    className={active === sub ? "sub-active" : ""}
                    onClick={() => setActive(sub)}
                  >
                    {sub}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar