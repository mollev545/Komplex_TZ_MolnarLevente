import { useState, useEffect } from 'react';
import './App.css';
import './css/felveteli.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tachyons/css/tachyons.min.css';

function App() {
  const [data, setData] = useState([]);
  const [selectedAgazat, setSelectedAgazat] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:5000/diakok")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Nem helyes a válasz a hálózattól");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.error("Hiba:", error));
  }, []);

  const filteredData = selectedAgazat
    ? data.filter((diak) => diak.agazat === selectedAgazat)
    : data;

  return (
    <>
      <div className="bg-fej">
      <img src="./img/oktatas-01.jpg" alt="Oktatás" />
      </div>

      <div className="container-fluid row">
        <div className="bg-torzs col-md-4">
          <h3>Központi felvételi tájékoztató</h3>
          <p>A középiskolákba történő jelentkezés során az iskolák határozzák meg, hogy a felvételi rangsort mi alapján döntik el...</p>
          <a href="https://www.oktatas.hu/kozneveles/kozepfoku_felveteli_eljaras/kozepfoku_felveteli_eljaras_informacioi">
            Tájékoztató oldal
          </a>
          <img src="./img/logo.png" alt="Logo" />
        </div>

        <div className="col-md-4">
          <h1>Tájékoztatás</h1>
          <h3>Jószakma Szakgimnázium</h3>
          <p>A központi felvételit magyar nyelv és irodalom, illetve matematika tantárgyakból írják...</p>
          <img src="./img/e-mail-marketing-2745489__340.jpg" alt="Tájékoztatás" />
        </div>

        <div className="bg-torzs col-md-4">
          <h3>Az oldal használatáról</h3>
          <h6>Ön az oldal használatával a következő információkhoz juthat hozzá:</h6>
          <ul>
            <li>Előzetes rangsor</li>
            <li>Nevek, Ágazat, Összes pontszám</li>
            <li>Előzetes rangsor nyelvi előkészítő</li>
            <li>A felvettek névsora</li>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="col-md-5">
          <h3>A felvételt nyert tanulók névsora a nyelvi előkészítőre</h3>
          <label>Válassz egy ágazatot:</label>
          <select onChange={(e) => setSelectedAgazat(e.target.value)}>
            <option value="">Összes</option>
            <option value="informatika">Informatika</option>
            <option value="elektronika">Elektronika</option>
          </select>
          <button onClick={() => setSelectedAgazat("")}>Adatok</button>
        </div>
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Tanuló neve</th>
            <th scope="col">Ágazat</th>
            <th scope="col">Összes pontszám</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((diak, index) => (
              <tr key={index}>
                
                <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">{diak.nev}</th>
                <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">{diak.agazat}</th>
                <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">{diak.osszpont}</th>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center">Nincs elérhető adat</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default App;
