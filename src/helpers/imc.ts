export type Level = {
    title: string;
    color: string;
    icon: 'down' | 'up';
    imc: number[],
    yourImc?: number;
}

export const levels: Level[] = [
    { title: 'Thinness', color: '#9693ab', icon: 'down', imc: [0, 18.5]},
    { title: 'Normal', color: '#0ead69', icon: 'up', imc: [18.6, 24.9]},
    { title: 'Overweight', color: '#E2B039', icon: 'down', imc: [25, 30]},
    { title: 'Obesity', color: '#C3423F', icon: 'down', imc: [30.1, 99]}
];

export const calculateIMC = (height: number, weight: number) => {
    const imc = weight / (height * height);

    for (let i in levels) {
        if (imc >= levels[i].imc[0] &&
            imc < levels[i].imc[1]) {
            let levelCopy: Level = { ...levels[i] };

            levelCopy.yourImc = parseFloat(imc.toFixed(1));
            return levels[i];
            }
    }

    return null;
}