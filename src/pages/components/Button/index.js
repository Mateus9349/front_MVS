import { useEffect, useState } from 'react';
import style from './Button.module.scss';

const Button = ({ text, onClick, initialModo }) => {
    const [modo, setModo] = useState(initialModo); // Use initialModo como valor inicial do estado

    useEffect(() => {
        // Atualize o estado baseado no prop "modo"
        if (initialModo) {
            setModo('false');
        } else {
            setModo('true');
        }
    }, [initialModo]); // Adicione initialModo como dependência do useEffect

    return (
        <>
            {/* Utilize a variável de estado "modo" para definir a classe do botão */}
            <button className={modo === 'true' ? style.true : style.false} onClick={onClick}>
                {text}
            </button>
        </>
    );
};

export default Button;
