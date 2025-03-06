import './App.css';
import './css/felveteli.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

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

  return (
    <>
      <div className="bg-fej">
        <div>
          <img src="./img/oktatas-01.jpg" alt="Oktatás" />
        </div>
      </div>

      <div className="container-fluid row">
        <div className="bg-torzs col-md-4">
          <h3>Központi felvételi tájékoztató</h3>
          <p className="text-left">
            A középiskolákba történő jelentkezés során az iskolák határozzák meg, hogy a felvételi rangsort mi alapján döntik el.
            A Jószakma Szakgimnázium a felvételi során az általános iskolából hozott és a központi felvételin szerzett pontok alapján
            rangsorolja az iskolába jelentkezőket.
          </p>
          <a href="https://www.oktatas.hu/kozneveles/kozepfoku_felveteli_eljaras/kozepfoku_felveteli_eljaras_informacioi">
            Tájékoztató oldal
          </a>
          <img src="./img/logo.png" alt="Logo" />
        </div>

        <div className="col-md-4">
          <h1>Tájékoztatás</h1>
          <h3>Jószakma Szakgimnázium</h3>
          <p>
            A központi felvételit magyar nyelv és irodalom, illetve matematika tantárgyakból írják a jelentkezők. 
            Mindkét tárgy esetén legfeljebb 50 pont szerezhető. A felvételiző hozott pontjait az általános iskolai év végi 
            eredményei alapján számolják, ez a pontszám legfeljebb 50 pont lehet. A hozott pontokat duplázzák. A központi 
            felvételin szerzett és a hozott pontok összege adja a felvételiző összesített pontszámát.
          </p>
          <img src="./img/e-mail-marketing-2745489__340.jpg" alt="Tájékoztatás" />
        </div>

        <div className="bg-torzs col-md-4">
          <h3>Az oldal használatáról</h3>
          <h6>Ön az oldal használatával a következő információkhoz juthat hozzá:</h6>
          <ul>
            <li>Előzetes rangsor:</li>
            <ol>
              <li>Nevek</li>
              <li>Ágazat</li>
              <li>Összes pontszám</li>
            </ol>
            <li>Előzetes rangsor nyelvi előkészítő</li>
            <li>A felvettek névsora</li>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="col-md-5">
          <h3 className="text-left">A felvételt nyert tanulók névsora a nyelvi előkészítőre</h3>
          <div></div>
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
          {data.length > 0 ? (
            data.map((diak, index) => (
              <tr key={index}>
                <td>{diak.nev}</td>
                <td>{diak.agazat}</td>
                <td>{diak.osszpont}</td>
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
