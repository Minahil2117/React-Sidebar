import Sidebar from "./Sidebar"

function App() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main">
        <h1>Dashboard</h1>
        <p>Welcome to your SaaS Admin Panel</p>
      </div>
    </div>
  )
}

export default App