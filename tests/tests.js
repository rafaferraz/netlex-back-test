const assert = require('assert');
const doc = require('./doc').content;
const DocumentHelper = require("../app/helpers/document.helper");

function wordFrequency() {
    assert.equal(DocumentHelper.wordFrequency(doc, 'neste'), 7);
    assert.equal(DocumentHelper.wordFrequency(doc, 'azul'), 0)
    assert.equal(DocumentHelper.wordFrequency(doc, 'trinta'), 2)
    assert.equal(DocumentHelper.wordFrequency(doc, 'pagamento'), 2)
    assert.equal(DocumentHelper.wordFrequency(doc, 'poderá'), 4)
    assert.equal(DocumentHelper.wordFrequency(doc, 'mediação'), 1)
    assert.equal(DocumentHelper.wordFrequency(doc, 'contrato'), 21)
    assert.equal(DocumentHelper.wordFrequency(doc, 'três'), 2)
}

function wordSentences() {
    assert.equal(JSON.stringify(DocumentHelper.wordSentences(doc, 'setembro')), JSON.stringify(['São Paulo, 25 de setembro de 2019.']))
    assert.equal(JSON.stringify(DocumentHelper.wordSentences(doc, 'vigência')), JSON.stringify(['Vigência e prazo\n']))
    assert.equal(JSON.stringify(DocumentHelper.wordSentences(doc, 'mediante')), JSON.stringify(
        [
            'A contraprestação estabelecida será paga mediante depósito em conta bancária a ser indicada pelo Contratado, valendo o correspondente comprovante de depósito como recibo de quitação.',
            'Qualquer das Partes poderá, a qualquer tempo, denunciar unilateralmente este Contrato mediante aviso prévio com antecedência de 30 (trinta) dias.',
            'Nenhuma das Partes poderá ceder ou dar em garantia este Contrato ou os créditos dele decorrentes, exceto mediante a anuência prévia e por escrito da outra Parte.'
        ]
    ))
    assert.equal(JSON.stringify(DocumentHelper.wordSentences(doc, 'isoladamente')), JSON.stringify(
        [
            'Sendo conjuntamente denominadas “Partes” e, isoladamente, “Parte”;'
        ]
    ))
}

function topWords() {
    assert.equal(
        JSON.stringify(DocumentHelper.topWords(doc, 5, 2)),
        JSON.stringify(
            ['de', 'contrato', 'ou', 'por', 'contratante']
        )
    )
    assert.equal(
        JSON.stringify(DocumentHelper.topWords(doc, 4, 5)),
        JSON.stringify(
            ['contrato', 'contratante', 'contratado', 'serviços']
        ),
    )
    assert.equal(
        JSON.stringify(DocumentHelper.topWords(doc, 2, 12)),
        JSON.stringify(['contraprestação', 'imediatamente'])
    )
}

wordFrequency();
wordSentences();
topWords();