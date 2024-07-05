import { calcA1, calcA2, calcA3 } from "./dimensaoAmbiental";
import { calcF1, calcF2, calcF3, calcF4 } from "./dimensaoFinanceira";
import { calcP1, calcP2, calcP3 } from "./dimensaoFisica";
import { calcH1, calcH2, calcH3, calcH4, calcH5 } from "./dimensaoHumana"
import { calcS1, calcS2, calcS3 } from "./dimensaoSocial";

export function dimensaoHumana(dados) {
    const H1 = calcH1(dados);
    const H2 = calcH2(dados);
    const H3 = calcH3(dados);
    const H4 = calcH4(dados);
    const H5 = calcH5(dados);

    const dHumana = [
        H1,
        H2,
        H3,
        H4,
        H5
    ]
    return dHumana;
}

export function dimensaoSocial(dados) {
    const S1 = calcS1(dados);
    const S2 = calcS2(dados);
    const S3 = calcS3(dados);

    const dSocial = [S1, S2, S3];
    return dSocial;
}

export function dimensaoAmbiental(dados) {
    const A1 = calcA1(dados);
    const A2 = calcA2(dados);
    const A3 = calcA3(dados);

    const dAmbiental = [A1, A2, A3];
    return dAmbiental;
}

export function dimensaoFisica(dados) {
    const P1 = calcP1(dados);
    const P2 = calcP2(dados);
    const P3 = calcP3(dados);

    const dFisica = [P1, P2, P3];
    return dFisica;
}

export function dimensaoFinanceira(dados) {
    const F1 = calcF1(dados);
    const F2 = calcF2(dados);
    const F3 = calcF3(dados);
    const F4 = calcF4(dados);

    const dFisica = [F1, F2, F3, F4];
    return dFisica;
}
