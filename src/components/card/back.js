import React,{ useEffect, useState } from 'react';
import api from '../../services/api';

const Back = ({pokemon}) => {

    const [info, setInfo] = useState({});

    useEffect(() => {
        async function fetch() {
            const res = await api.get(`/pokemon/${pokemon?.url.split("/")[6]}/`);
            setInfo(res.data);
        }
        fetch();

    }, []);

    return (
        <div className="back">
            <div>
                <h2>{pokemon?.name}</h2>
                <p>Altura: {info?.height}</p>
                <p>Peso: {info?.weight}</p>
            </div>
        </div>
    )
}

export default Back;