import { NavigationContext } from "@/pages/Map";
import { NavigationContextType } from "@/utils/types";
import { useContext } from "react";
import { isDesktop } from "react-device-detect";
import EditPositionButton from "./EditPositionButton";
import DesktopRouteDetails from "./DesktopRouteDetails";
import SearchBar from "./SearchBar";
import Sidebar from "./Sidebar";

function Toolbar({ selectedFloor, setSelectedFloor }: { selectedFloor: string; setSelectedFloor: (floor: string) => void }) {
  const { navigation } = useContext(NavigationContext) as NavigationContextType;
  return (
    <div className="flex space-x-1 mb-4 h-12 relative">
      <div className=" lg:hidden">
        <Sidebar/>
      </div>
      <SearchBar />
      <EditPositionButton />
      <select
        value={selectedFloor}
        onChange={(e) => setSelectedFloor(e.target.value)}
        className="appearance-none pr-4 py-2 pl-4 border border-gray-300 rounded-md"
      >
        <option value="ground">Ground Floor</option>
        <option value="first">First Floor</option>
        <option value="second">Second Floor</option>
      </select>
      {navigation.end && isDesktop && <DesktopRouteDetails />}
    </div>
  );
}

export default Toolbar;
