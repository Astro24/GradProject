import logo from "../assets/img/logo1.jpg";
function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <img src={logo} alt="PathPal Logo" className="w-32 h-32 animate-spin" />
    </div>
  );
}

export default Loading;
