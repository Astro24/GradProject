interface ObjectsProps {
  handleObjectClick: (e: React.MouseEvent<SVGPathElement>) => void;
  className?: string;
}

function Objects({ handleObjectClick, className }: ObjectsProps) {
  

  return (
    <g id="Objects">

<path
id="G136"
className={`${className} object`}
d="M662.456 664.811h38.321v58.115h-38.321z"
    style={{
      transformBox: "fill-box",
      transformOrigin: "50% 50%",
      strokeWidth: 0,
      stroke: "#f46c6c",
      fill: "#f2a0a0",
    }}
    transform="rotate(45 -298.266 -221.451)"
    onClick={(e) => handleObjectClick(e)}
  />

      {/* <path
        id="M250-8"
        className={`${className} object`}
        d="M1191.208 498.157h224.309v92.559h-224.309z"
        style={{
          fill: "#efe76a",
          opacity: 0.4,
          stroke: "#000",
          transformBox: "fill-box",
          transformOrigin: "50% 50%",
        }}
        transform="rotate(45 -.502 -1.207)"
        onClick={(e) => handleObjectClick(e)}
      />
      <path
        id="OTG Group"
        className={`${className} object`}
        d="m1084.51 627.861 106.103-100.359 180.125 186.055-98.82 104.383-187.408-190.079Zm237.33 125.142c.012-.675 42.521-44.933 42.52-44.866l-47.766-51.033-44.792 43.575 50.038 52.324Z"
        style={{
          fill: "#d8d8d8",
          stroke: "#000",
        }}
        transform="rotate(-.999 1228.667 669.187)"
        onClick={(e) => handleObjectClick(e)}
      />
      <path
        id="Graphics"
        className={`${className} object`}
        d="M940.182 605.64h113.713v57.487H940.182z"
        style={{
          fill: "#d8d8d8",
          stroke: "#000",
          transformBox: "fill-box",
          transformOrigin: "50% 50%",
        }}
        transform="rotate(-45 -4.285 8.113)"
        onClick={(e) => handleObjectClick(e)}
      />
      <path
        id="OT&SSD Manager"
        className={`${className} object`}
        d="M1159.837 683.151h68.222v55.695h-68.222z"
        style={{
          fill: "#d8d8d8",
          stroke: "#000",
          transformBox: "fill-box",
          transformOrigin: "50% 50%",
        }}
        transform="rotate(45 72.317 147.233)"
        onClick={(e) => handleObjectClick(e)}
      />
      <path
        id="SurveyLinkEntrance"
        className={`${className} object`}
        d="M770.361 824.261h86.904v81.092h-86.904z"
        style={{
          fill: "#efe76a",
          opacity: 0.4,
        }}
        onClick={() => handleSurveyClick("https://forms.gle/15wm7rsL1fLAJbQh8")}
      />


      {/* Add more paths or other elements as needed */}
      {/* <ellipse
        id="Entrance"
        cx={1157.655}
        cy={1072.459}
        rx={57}
        ry={57}
        className={`${className} object`}
        onClick={handleObjectClick}
        style={{
          fill: "#ffcc00",
          stroke: "#000",
        }}
      />

      <a href="https://forms.gle/15wm7rsL1fLAJbQh8" target="_blank" rel="noopener noreferrer">
        <text
          x={1000}  // Adjust X position as needed
          y={1050}  // Adjust Y position as needed
          fill="black"
          fontSize="30"
          fontWeight="bold"
          cursor="pointer"
        >
          Rate Our service here! 
        </text>
      </a> */} 



    </g>


  );
}

export default Objects;
