  import { ReactNode } from "react";
  import groundFloor from "@/assets/img/mall-floor-plan1.svg";
  import firstFloor from "@/assets/img/mall-floor-plan.svg";
  interface MapBackgroundProps {
    children: ReactNode;
    selectedFloor: string;
  }

  function MapBackground({ children, selectedFloor }: MapBackgroundProps) {
    const floorImages: Record<string, string> = {
      ground: groundFloor,
      first: firstFloor,
      // second: secondFloor,
    };
    return (
      <svg
        //same as mall-floor-plan1.svg viewBox
        viewBox="0.469 0.006 1461.95 1149.136"
        className="lg:h-[85vh] lg:w-[75vw] h-[85dvh]"
      >
        <image id="background" width="100%" height="100%" href={floorImages[selectedFloor]} />
        {children}
      </svg>
    );
  }

  export default MapBackground;

  //! Dont delete bc might be useful sometime
  /*
    const getMousePositionSVG = (event: MouseEvent) => {
      const point = svgRef.current?.createSVGPoint();
      if (point) {
        point.x = event.clientX;
        point.y = event.clientY;
        const transformedPoint = point.matrixTransform(
          svgRef.current?.getScreenCTM()?.inverse()
        );
        console.log(transformedPoint.x, transformedPoint.y);
      }
    };
    useEffect(() => {
      svgRef.current?.addEventListener("click", getMousePositionSVG);
      console.log(svgRef.current?.getBoundingClientRect());
    }, []);
    */
