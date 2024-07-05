import Button from '../Button';
import style from './styles.module.scss';

const CardConfirm = ({ dadosAcao, dados, confirmar, cancelar }) => {
    return (
        <div className={style.card}>
            <table className={style.tableDadosAtividade}>
                <tbody>
                    <tr>
                        Técnico responsável: <span>{dadosAcao.tecnico}</span>
                    </tr>
                    <tr>
                        Ação: <span>{dadosAcao.acao}</span>
                    </tr>
                    <tr>
                        Projeto: <span>{dadosAcao.projeto}</span>
                    </tr>
                    <tr>
                        Código: <span>{dadosAcao.codigo}</span>
                    </tr>
                    <tr>
                        Associação: <span>{dadosAcao.associacao}</span>
                    </tr>
                    <tr>
                        Territorio: <span>{dadosAcao.territorio}</span>
                    </tr>
                    <tr>
                        De: <span>{dadosAcao.data_inicio}</span> à <span>{dadosAcao.data_fim}</span>
                    </tr>
                </tbody>
            </table>

            <table className={style.tableArquivo}>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Gênero</th>
                        <th>Idade</th>
                        <th>Organização</th>
                        <th>CPF</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Percorrer a lista de registros */}
                    {dados.map((row, index) => (
                        <tr key={index}>
                            <td>{row.nome}</td>
                            <td>{row.genero}</td>
                            <td>{row.idade}</td>
                            <td>{row.organizacao}</td>
                            <td>{row.cpf}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className={style.containerBtts}>
                <Button onClick={confirmar} text={'Confirmar'}/>
                <Button className={style.cancelar} onClick={cancelar} text={'Cancelar'} initialModo={true}/>
            </div>
        </div>
    )
}

export default CardConfirm;