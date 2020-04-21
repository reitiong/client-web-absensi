import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css";
import { NavLink } from "react-router-dom";
import logo from "./../../assets/images/logo.png";

const Home = (props) => {
  useEffect(() => {
    // props.history.push("/login");
  });
  const data = [
    //{ name: "Group A", value: 20 },
    { name: "Mahasiswa Dengan Kehadiran Di Atas 75%", value: 80 },
    //{ name: "Group C", value: 4 },
    { name: "Mahasiswa Dengan Kehadiran Di Bawah 75%", value: 20 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const matakuliah = [
    { mataKuliah: "Kalkulus" },
    { mataKuliah: "Kalkulus" },
    { mataKuliah: "Kalkulus" },
  ];

  return (
    <div className="main-container bg-purple">
      <div className="d-flex justify-content-between bg-purple margin-left-300 px-2">
        <NavLink className="p-2 text-light">Home</NavLink>
        <NavLink className="p-2 text-light">Home</NavLink>
        <NavLink className="p-2 text-light" to="/login">
          Logout
        </NavLink>
      </div>
      <div className="main-wrapper">
        <div className="main-side-bar bg-purple">
          <div className="d-flex justify-content-center py-5 bg-light">
            <img src={logo} alt="logo" width="200px" height="200px" />
          </div>
          <div className="d-flex flex-column">
            <div className="p-3 border-bottom border-light">
              <NavLink className="text-light">
                Laporan Kehadiran Mahasiswa
              </NavLink>
            </div>
            <div className="p-3 border-bottom border-light">
              <NavLink className="text-light">Buka Kamera Scan QR Code</NavLink>
            </div>
            <div className="p-3 border-bottom border-light">
              <NavLink className="text-light">Buat Jadwal Pengganti</NavLink>
            </div>
          </div>
        </div>
        <div className="main-content p-3 bg-light">
          <div className="content-content p-2 border border-dark bg-light">
            <div>
              <div className="d-flex justify-content-center">
                <button className="btn btn-info">Cetak Laporan</button>
              </div>
              Mahasiswa Dengan Kehadiran Di Bawah 75% <br></br> Jumlah = 4 Orang{" "}
              <br></br> Persentase = 20%
              <table className="table table-striped table-hover">
                <thead className="thead-dark">
                  <tr>
                    <th>Nama Mahasiswa</th>
                    <th>NPM</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Adi Andoyo</td>
                    <td>15420909</td>
                  </tr>
                  <tr>
                    <td>Hendri Januardi</td>
                    <td>15420937</td>
                  </tr>
                  <tr>
                    <td>Sylvia Devianti</td>
                    <td>15420953</td>
                  </tr>
                  <tr>
                    <td>Willy Yanpraga</td>
                    <td>15420964</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              Mahasiswa Dengan Kehadiran Di Atas 75% <br></br> Jumlah = 16 Orang{" "}
              <br></br> Persentase = 80%
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th>Nama Mahasiswa</th>
                    <th>NPM</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Feryadi</td>
                    <td>15420933</td>
                  </tr>
                  <tr>
                    <td>Velzen Pratama</td>
                    <td>15420956</td>
                  </tr>
                  <tr>
                    <td>Willy</td>
                    <td>15420962</td>
                  </tr>
                  <tr>
                    <td>Willy Pangestu</td>
                    <td>15420963</td>
                  </tr>
                  <tr>
                    <td>Yerri Fitrah</td>
                    <td>15420965</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
