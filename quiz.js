const quiz = [
    {
        pergunta: 'Qual é o método usado para adicionar um item ao final de um array?',
        respostas: ['1. add()', '2. push()', '3. map()', '4. insert()'],
        respostaCorreta: 2                
    },
    {
        pergunta: 'Qual é o tipo de dado usado para representar verdadeiro ou falso no JavaScript?',
        respostas: ['1. String', '2. Number', '3. Boolean', '4. Objeto'],
        respostaCorreta: 3
    },
    {
        pergunta: 'Como declara const ou let no JavaScript?',
        respostas: ['1. const = variavel', '2. const = 0', '3. let var = 0', '4. const variavel = 0'],
        respostaCorreta: 4
    }
];

function fazerQuiz() {
    let score = 0;

    quiz.forEach(({ pergunta, respostas, respostaCorreta }) => {
        const resposta = prompt(`${pergunta} \n ${respostas.join('\n')}`);
        const isCorreta = parseInt(resposta) === respostaCorreta;

        alert(isCorreta 
            ? 'Correto' 
            : `Incorreto! A resposta correta é ${respostas[respostaCorreta - 1]}`);

        score += isCorreta ? 1 : 0;
    });

    alert(`Você acertou ${score} de ${quiz.length} perguntas.`);
}

fazerQuiz();