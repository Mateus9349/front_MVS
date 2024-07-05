import http from "@/pages/components/HTTP";


export async function enviarHumana(array) {
    const dados = {
        h1: array[0],
        h2: array[1],
        h3: array[2],
        h4: array[3],
        h5: array[4]
    }

    await http.post('dhumanas', dados).then(res => {
        console.log(res.data);
    }).catch(error => {
        alert('Erro ao enviar! ', error)
    });
}

export async function enviarAmbiental(array) {
    const dados = {
        a1: array[0],
        a2: array[1],
        a3: array[2]
    }

    await http.post('dambientais', dados).then(res => {
        console.log(res.data);
    }).catch(error => {
        alert('Erro ao enviar! ', error)
    });
}

export async function enviarSocial(array) {
    const dados = {
        s1: array[0],
        s2: array[1],
        s3: array[2]
    }

    await http.post('dsociais', dados).then(res => {
        console.log(res.data);
    }).catch(error => {
        alert('Erro ao enviar! ', error)
    });
}

export async function enviarFisica(array) {
    const dados = {
        p1: array[0],
        p2: array[1],
        p3: array[2]
    }

    await http.post('dfisicas', dados).then(res => {
        console.log(res.data);
    }).catch(error => {
        alert('Erro ao enviar! ', error)
    });
}

export async function enviarFinanceira(array) {
    const dados = {
        f1: array[0],
        f2: array[1],
        f3: array[2],
        f4: array[3]
    }

    await http.post('dfinanceiras', dados).then(res => {
        console.log(res.data);
    }).catch(error => {
        alert('Erro ao enviar! ', error)
    });
}

export async function getDados(url) {
    let dados = {};

    await http.get(url).then(res => {
        dados = res.data;
    });

    return dados;
}

export function buscarGraf(array, dataInicio, dataFim) {
    // Converter as datas de string para objetos Date
    const dataInicioObj = new Date(dataInicio);
    const dataFimObj = new Date(dataFim);

    // Ajustar as datas para ignorar os minutos e segundos
    dataInicioObj.setHours(0, 0, 0, 0);
    dataFimObj.setHours(23, 59, 59, 999);

    // Filtrar os objetos do array que estão dentro do intervalo de datas
    const objetosFiltrados = array.filter(objeto => {
        // Verificar se o objeto possui a propriedade 'createdAt'
        if (objeto.createdAt) {
            // Converter a data de criação do objeto para um objeto Date
            const dataCriacao = new Date(objeto.createdAt);
            // Ajustar a data de criação para ignorar os minutos e segundos
            dataCriacao.setUTCHours(0, 0, 0, 0);
            // Verificar se a data de criação está dentro do intervalo de datas
            return dataCriacao >= dataInicioObj && dataCriacao <= dataFimObj;
        }
        return false; // Ignorar objetos que não possuem a propriedade 'createdAt'
    });

    if (objetosFiltrados.length === 0) {
        return []; // Retorna um array vazio se não houver objetos filtrados
    }

    return valoresDoObjeto(objetosFiltrados[0]);
}


function valoresDoObjeto(objeto) {

    // Inicializa um array vazio para armazenar os valores numéricos
    const valoresNumericos = [];

    // Variável para controlar se o primeiro valor foi ignorado
    let primeiroValorIgnorado = false;

    // Itera sobre as chaves do objeto
    for (const chave in objeto) {
        // Verifica se a chave pertence diretamente ao objeto (e não à sua cadeia de protótipos)
        if (Object.prototype.hasOwnProperty.call(objeto, chave)) {
            // Ignora o primeiro valor
            if (!primeiroValorIgnorado) {
                primeiroValorIgnorado = true;
                continue;
            }

            // Obtém o valor correspondente à chave
            const valor = objeto[chave];

            // Verifica se o valor é numérico
            if (typeof valor === 'number' && !isNaN(valor)) {
                // Adiciona o valor numérico ao array
                valoresNumericos.push(valor);
            }
        }
    }

    // Retorna o array contendo os valores numéricos do objeto
    return valoresNumericos;
}