import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Diakok() {
    const [diakok, setdiakok] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/diakok')
            .then(response => {
                setDiakok(response.data);
            })
            .catch(error => {
                console.error('❌ Hiba a diákok lekérésekor:', error);
            });
    }, []);

    return (
        <div>
            <h2>Diákok</h2>
            {diakok.length === 0 ? (
                <p>Baj van</p>
            ) : (
                <ul>
    {diakok.map((diak) => (
        <li key={diakok.nev}>
            Ágazat: {diakok.agazat},
             Összpont: {diakok.osszpont} Ft
        </li>
    ))}
</ul>

            )}
        </div>
    );
}

export default Diakok;
