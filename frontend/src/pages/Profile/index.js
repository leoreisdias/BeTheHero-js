import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi'

import api from '../../services/api';

import './style.css'

import logoImg from '../../assets/logo.svg'

const Profile = () => {
    const [incidents, setIncidents] = useState([]);

    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');

    const history = useHistory();

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ongId
            }
        }).then(response => {
            setIncidents(response.data);
        })
    }, [ongId]);

    async function handleDeleteIncident(id) {
        try {
            await api.delete(`/incidents/${id}`, {
                headers: {
                    Authorization: ongId,
                }
            });

            setIncidents(incidents.filter(incidents => incidents.id !== id));
        } catch (err) {
            alert('Erro ao deletar caso, tente novamente.');
        }
    }

    function handleLogout() {
        localStorage.clear();

        history.push('/');
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="beTheHero" />
                <span>Bem vinda, {ongName}</span>

                <Link className="button" to="/incidents/new">Cadatrar novo caso</Link>
                <button type="button" onClick={handleLogout}>
                    <FiPower size={18} color="#E02041" />
                </button>

            </header>

            <h1>Casos Cadastrados</h1>

            <ul>
                {incidents.map(incidents => (
                    <li key={incidents.id}>
                        <strong>CASO:</strong>
                        <p>{incidents.title}</p>

                        <strong>DESCRIÇÃO</strong>
                        <p>{incidents.description}</p>

                        <strong>VALOR</strong>
                        <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incidents.value)}</p>

                        <button type="button" onClick={() => handleDeleteIncident(incidents.id)}>
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Profile;