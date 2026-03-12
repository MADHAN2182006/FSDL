import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {

  const navigate = useNavigate();
  return (
    <>
      <div className="fsd-dashboard-navbar">
        <div className="fsd-dashboard-logo">MADHAN</div>

        <div className="fsd-dashboard-menu">
          <a href="#">ACTIVITY</a>
          <a href="#">EXPERIMENT</a>
        </div>
      </div>

      <div className="fsd-dashboard-container">
        <div className="fsd-dashboard-grid">

          <div className="fsd-dashboard-card" onClick={ () => window.open("https://github.com/MADHAN2182006/Activity1", "_blank")}>
            <h3>Activity 1</h3>
          </div>

          <div className="fsd-dashboard-card"  onClick={() => window.open("https://flipkart-clone-1hid.onrender.com/", "_blank")}>
            <h3>Activity 2</h3>
          </div>

          <div className="fsd-dashboard-card" onClick={() => navigate("/Experiment1")}>
            <h3>Experiment 1</h3>
          </div>

          <div className="fsd-dashboard-card" onClick={() => navigate("/Experiment2")}>
            <h3>Experiment 2</h3>
          </div>

          <div className="fsd-dashboard-card" onClick={() => navigate("/Experiment3")}>
            <h3>Experiment 3</h3>
          </div>
          <div className="fsd-dashboard-card" onClick={() => navigate("/Experiment4")}>
            <h3>Experiment 4</h3>
          </div>
          <div className="fsd-dashboard-card" onClick={() => navigate("/Experiment5")}>
            <h3>Experiment 5</h3>
          </div>
          <div className="fsd-dashboard-card" onClick={() => navigate("/Experiment6")}>
            <h3>Experiment 6</h3>
          </div>
          <div className="fsd-dashboard-card" onClick={() => navigate("/Experiment7")}>
            <h3>Experiment 7</h3>
          </div>
          <div className="fsd-dashboard-card" onClick={() => navigate("/Experiment8")}>
            <h3>Experiment 8</h3>
          </div>
          <div className="fsd-dashboard-card" onClick={() => navigate("/Experiment9")}>
            <h3>Experiment 9</h3>
          </div>
          <div className="fsd-dashboard-card" onClick={() => navigate("/Experiment10")}>
            <h3>Experiment 10</h3>
          </div>
          <div className="fsd-dashboard-card" onClick={() => navigate("/Experiment11")}>
            <h3>Experiment 11</h3>
          </div>
          <div className="fsd-dashboard-card" onClick={() => navigate("/Experiment12")}>
            <h3>Experiment 12</h3>
          </div>
          <div className="fsd-dashboard-card" onClick={() => navigate("/Experiment13")}>
            <h3>Experiment 13</h3>
          </div>
          <div className="fsd-dashboard-card" onClick={() => navigate("/Experiment14")}>
            <h3>Experiment 14</h3>
          </div>
          <div className="fsd-dashboard-card" onClick={() => navigate("/Experiment15")}>
            <h3>Experiment 15</h3>
          </div>

        </div>
      </div>
    </>
  );
}

export default Dashboard;