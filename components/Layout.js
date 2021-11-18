import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="mainContainer">
        <div className="container">{children}</div>
      </div>
    </>
  )
}
