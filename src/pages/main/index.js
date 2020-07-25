import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import Search from '../../components/search/search';
import PokerInfo from '../../components/poker-info/poker-info';
import './styles.css'
import BlogCard from '../../components/card/blog-card';


const Main = () => {

    const [teste, setTeste] = useState({});

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
         async function fetch() {
            const res = await api.get('/pokemon/');
            setTeste(res.data);
         }
         
         fetch();
    }, []);

    const prevPage = async () => {    
        if(teste.previous) {
            const previous = teste.previous.split("?")[1];
            const res = await api.get(`/pokemon/?${previous}`);
            setTeste(res.data);
        }
    }

    const nextPage = async () => {
        const next = teste.next.split("?")[1];
        const res = await api.get(`/pokemon/?${next}`);
        setTeste(res.data);
    }

    return (
        <>

            <PokerInfo pokerInfo={teste} />
            <div className="actions">
                <button onClick={prevPage}>Anterior</button>
                <button onClick={nextPage}>Próximo</button>
            </div>
        </>
    );
}

export default Main;