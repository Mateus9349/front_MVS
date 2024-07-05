import styles from './CardMVSGraf.module.scss';

const formatarData = (dataJson) => {
    // Converter a data JSON para um objeto Date
    const data = new Date(dataJson);

    // Verificar se a data é válida
    if (isNaN(data)) {
        throw new Error("Data inválida fornecida");
    }

    // Extrair dia, mês e ano
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0'); // Os meses são baseados em zero, por isso adicionamos 1
    const ano = data.getFullYear();

    // Retornar a data no formato "dd/mm/yyyy"
    return `${dia}/${mes}/${ano}`;
};

const CardMVSGraf = ({ dados, onClick, excluir }) => {
    return (
        <div className={styles.container}>
            {dados.map((item) => (
                <div className={styles.containerCard} key={item.id}>
                    <p>{item.id}</p>
                    <p>{formatarData(item.createdAt)}</p>
                    <button onClick={() => onClick(item.id)}>ver Graf</button>
                    <button onClick={() => excluir(item.id)}>Excluir</button>
                </div>
            ))}
        </div>
    );
};

export default CardMVSGraf;