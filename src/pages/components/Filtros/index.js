import { useState } from "react";
import Button from "../Button";
import styles from './Filtros.module.scss';

export default function Filtros({ onChange, onClick }) {
    const [fAno, setFAno] = useState(false);
    const [fMes, setFMes] = useState(false);
    const [fAsoc, setFAsoc] = useState(false);
    const [tipoDeBusca, setTipoDeBusca] = useState('');

    const escolheFiltro = (filtro) => {
        setFAno(false);
        setFMes(false);
        setFAsoc(false);

        if (filtro === 'ano') {setFAno(true)};
        if (filtro === 'mes') setFMes(true);
        if (filtro === 'associacao') setFAsoc(true);
    };

    const handleButtonClick = (filtro) => (event) => {
        event.preventDefault();
        escolheFiltro(filtro);
        setTipoDeBusca(filtro);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onClick(tipoDeBusca);
    };

    return (
        <section className={styles.container}>
            <form onSubmit={handleSubmit}>
                <div className={styles.div_filtro}>
                    <h2>Escolha o método de filtro:</h2>
                    <Button text={'Ano'} onClick={handleButtonClick('ano')} />
                    <Button text={'Mês'} onClick={handleButtonClick('mes')} />
                    <Button text={'Associação'} onClick={handleButtonClick('associacao')} />
                </div>

                {fAno && (
                    <div>
                        <label>Ano: </label>
                        <input name="ano" onChange={onChange} type="number" />
                    </div>
                )}

                {fMes && (
                    <div>
                        <label>Ano: </label>
                        <input name="ano" onChange={onChange} type="number" />

                        <label>Mês: </label>
                        <select name="mes" onChange={onChange}>
                            <option value="0">Selecione um mês</option>
                            <option value="1">Janeiro</option>
                            <option value="2">Fevereiro</option>
                            <option value="3">Março</option>
                            <option value="4">Abril</option>
                            <option value="5">Maio</option>
                            <option value="6">Junho</option>
                            <option value="7">Julho</option>
                            <option value="8">Agosto</option>
                            <option value="9">Setembro</option>
                            <option value="10">Outubro</option>
                            <option value="11">Novembro</option>
                            <option value="12">Dezembro</option>
                        </select>
                    </div>
                )}

                {fAsoc && (
                    <div>
                        <label>Associação: </label>
                        <select name="associacao" onChange={onChange}>
                            <option value="0">Selecione uma associação</option>
                            <option value="ASAGA">ASAGA</option>
                            <option value="ASPACS">ASPACS</option>
                            <option value="RDS">RDS</option>
                            <option value="APFOV">APFOV</option>
                            <option value="APADRIT">APADRIT</option>
                        </select>
                    </div>
                )}
                
                <Button text={'buscar'} onClick={handleSubmit} />
            </form>
        </section>
    );
}
