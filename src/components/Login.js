import React from 'react';
import './Login.css';
import Api from '../Api';

export default ({onReceive}) => {
    const handleFacebookLogin = async () => {
        let result = await Api.fbPopup();
        if(result) {
            onReceive(result.user);
        } else {
            alert("Erro!");
        }
    }

    return (
        <div className="login">
            <button onClick={handleFacebookLogin}>Logar com <span>Facebook</span></button>
            <p className="subtitulo">
                É necessário logar com o Facebook para que o projeto consiga identificar os dados do usuário
            </p>
        </div>
    );
}