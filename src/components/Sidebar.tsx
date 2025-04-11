import logo from "../assets/img/logo1.jpg";
import { FiChevronRight, FiMenu, FiX } from "react-icons/fi";
import { useContext, useEffect, useState } from "react";
import {
  MapDataContextType,
  NavigationContextType,
  ObjectItem,
} from "@/utils/types";
import { MapDataContext, NavigationContext } from "../pages/Map";
import { navigateToObject } from "@/utils/navigationHelper";

interface ParsedObjects {
  [key: string]: {
    len: number;
    results: ObjectItem[];
  };
}

function Sidebar() {
  const { navigation, setNavigation, setIsEditMode } = useContext(
    NavigationContext
  ) as NavigationContextType;
  const { objects } = useContext(MapDataContext) as MapDataContextType;
  const [parsedObjects, setParsedObjects] = useState<ParsedObjects>({});
  const [isRotating, setIsRotating] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Control sidebar visibility on mobile
  const [buttonPosition, setButtonPosition] = useState({ top: "", left: "" }); // Initial button position

  useEffect(() => {
    const groupedObjects = () => {
      const data: ParsedObjects = {};
      objects.forEach((object) => {
        const firstLetter = object.name.charAt(0).toUpperCase();
        if (!data[firstLetter]) {
          data[firstLetter] = {
            len: 0,
            results: [],
          };
        }
        data[firstLetter].results.push(object);
        data[firstLetter].len += 1;
      });
      setParsedObjects(data);
    };
    groupedObjects();
  }, [objects]);

  function handleObjectNavigation(selectedObjectName: string) {
    const object = objects.find((obj) => obj.name === selectedObjectName);
    setIsEditMode(false);
    if (!object) return;
    navigateToObject(object.name, navigation, setNavigation);

    setIsSidebarOpen(false); // Close sidebar on mobile after navigation

    // Update button position after object navigation
    setButtonPosition({ top: "", left: "" }); // Example of new position after item navigation
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);

    // Update button position when sidebar is toggled
    if (!isSidebarOpen) {
      setButtonPosition({ top: "", left: "14rem" }); // Example new position when sidebar is open
    } else {
      setButtonPosition({ top: "", left: "" }); // Reset position when sidebar is closed
    }
  };

  return (
    <>
      {/* Toggle button for mobile view */}
      <button
        className="lg:hidden sm:block h-12 w-12 center bg-blue-500 text-white rounded-full absolute z-[61]"
        style={{ top: buttonPosition.top, left: buttonPosition.left }}
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed pl-2 sm:pb-12 md:pb-12 lg:static top-0 left-0 w-[18rem] h-v lg:w-[35rem] bg-white shadow-xl transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } duration-300 ease-in-out z-40`}
        style={{ height: "100vh" }} // Ensure the sidebar takes full height of the viewport
      >
        <header className="flex mb-4 pr-1 border-b py-2 w-full">
          <div className="flex items-center flex-none mr-10">
            <div className="rounded-lg w-16 h-16 bg-gray-100 center">
              <img
                src={logo}
                alt="PathPal"
                className={` rounded-lg ${isRotating ? "rotate" : ""}`}
                onClick={() => setIsRotating(true)}
                onAnimationEnd={() => setIsRotating(false)}
              />
            </div>
            <div className="flex flex-col">
              <p className="text-2xl font-semibold text-gray-900 pl-2">CCSIT</p>
              <p className="text-sm font-semibold text-[#225EA9] pl-2">
                Indoor-Navigation
              </p>
            </div>
          </div>
        </header>
        {/* Scrollable Area */}
        <div className="overflow-y-auto h-[calc(100vh-128px)] mb-10">
          {Object.keys(parsedObjects)
            .sort()
            .map((letter, index) => (
              <div key={index} className="mb-4">
                <header className="p-2">
                  <h2 className="text-2xl font-bold">
                    {letter}
                    <span className="ml-2 text-sm font-medium text-gray-900">
                      - {parsedObjects[letter].len}{" "}
                      {parsedObjects[letter].len === 1 ? "Room" : "Rooms"}
                    </span>
                  </h2>
                </header>
                <div className="flex flex-col">
                  {parsedObjects[letter].results.map((item) => (
                    <div
                      key={item.id?.toString()}
                      data-product={item.name}
                      className="flex bg-[#f4faff] m-1 px-4 py-2 shadow-sm rounded-md cursor-pointer h-auto hover:bg-[#e4f2ff]"
                      onClick={() => handleObjectNavigation(item.name)}
                    >
                      <div className="m-1">
                        <p className="text-xs 2xl:text-sm font-semibold">
                          {item.name}
                        </p>
                        <p className="text-xs 2xl:text-sm text-gray-600">
                          {item.desc}
                        </p>
                      </div>
                      <div className="center ml-auto h-auto center text-xl text-blue-300">
                        <FiChevronRight />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
