'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
        "Documents",
        [
          {
            content: `

            CONTRATO DE PRESTAÇÃO DE SERVIÇOS
            
            Pelo presente instrumento particular,
            
            ACME LTDA., sociedade empresária limitada, inscrito no CNPJ sob o n. 20.222.555/0001-87, sediado na R Ceará, n. 123, Andar 20, bairro Funcionários, Belo Horizonte/MG, Brasil, CEP: 30.555-111. (“Contratante”); e, de outro lado,
            
            QWERTY S.A., sociedade de economia mista, inscrito no CNPJ sob o n. 23.333.444/0001-19, sediado na Rua Real Grandeza, n. 233, Rua Mena Barreto S/n, bairro Botafogo, Rio de Janeiro/RJ, Brasil, CEP: 22.288-900, representado por Gabriel Oliveira, brasileiro, solteiro, Diretor Comercial, portador da carteira de identidade n. 111111111 – DETRAN/RJ, inscrito no CPF sob o n. 333.222.000-33, residente e domiciliado na Rua Espírito Santo, n. 3434, bairro Lourdes, Belo Horizonte/MG, Brasil, CEP: 30.111-000 (“Contratado”);
            
            Sendo conjuntamente denominadas “Partes” e, isoladamente, “Parte”;
            
            Resolvem celebrar o presente Contrato de Prestação de Serviços (“Contrato”), de acordo com as seguintes cláusulas:
            
            1 Objeto
            
            1.1 Constitui objeto deste Contrato a prestação, pelo Contratado ao Contratante, dos serviços de consultoria na implantação do software ZxcSoft (“Serviços”).
            
            2 Remuneração
            
            2.1 Como contraprestação pelos Serviços, o Contratante pagará ao Contratado a quantia total de R$ 7.555.553,38 (sete milhões, quinhentos e cinquenta e cinco mil, quinhentos e cinquenta e três reais e trinta e oito centavos), dividida em 4 prestações mensais e sucessivas, iniciando-se a primeira em 17/03/2019.
            
            2.2 A contraprestação estabelecida será paga mediante depósito em conta bancária a ser indicada pelo Contratado, valendo o correspondente comprovante de depósito como recibo de quitação.
            
            2.3 O preço contratual previsto acima inclui todos os valores devidos ao Contratado, abrangendo todos os custos diretos e indiretos, as despesas, os encargos e as margens de lucro necessários à execução integral do objeto deste Contrato.
            
            2.4 O Contratado deverá emitir nota fiscal correspondente à contraprestação em questão, certificando-se de que o Contratante a receba com ao menos 5 (cinco) dias de antecedência da data prevista para o pagamento.
            
            2.5 Na hipótese de mora do Contratante, esta ficará sujeita ao pagamento da contraprestação em mora, acrescida de juros de mora de 1% (um por cento) ao mês calculados pro rata die, e correção monetária calculada pela variação do índice IPCA/FGV.
            
            3 Vigência e prazo
            
            3.1 Este Contrato permanecerá vigente por 14 (quatorze) meses, contados a partir da data de sua assinatura, encerrando-se, portanto, em 25/11/2020.
            
            4 Obrigações
            
            4.1 Sem prejuízo das demais obrigações estipuladas neste Contrato, o Contratado deverá:
            
            4.1.1 Prestar os Serviços e demais obrigações decorrentes deste Contrato na forma devida, atendendo às normas técnicas aplicáveis.
            
            4.1.2 Fornecer as informações necessárias ao Contratante sempre que requisitado, no prazo de 72 (setenta e duas) horas do recebimento de comunicação neste sentido ou, de imediatamente, quando houver solicitação do Contratante neste sentido ou quando a possibilidade da prestação dos Serviços depender disto.
            
            4.1.3 Responsabilizar-se pela adequação dos Serviços, obrigando-se a revisar e corrigir, imediatamente e sem qualquer ônus ao Contratante, todas as falhas, deficiências, imperfeições, defeitos, vícios e desconformidades constatadas na prestação dos Serviços.
            
            4.2 Nos termos da Cláusula 4.1.3, o Contratante poderá realizar por si ou por contratar terceiros para a execução de atividades a cargo do Contratado, ficando este responsável perante o Contratante pelos custos decorrentes de tanto.
            
            4.3 Sem prejuízo das demais obrigações estipuladas neste Contrato, o Contratante deverá:
            
            4.3.1 Pagar a contraprestação e eventuais quantias pecuniárias devidas ao Contratado de acordo com a Cláusula 2 deste Contrato.
            
            4.3.2 Fornecer as informações necessárias ao Contratado sempre que requisitado, no prazo de 72 (setenta e duas) horas do recebimento de comunicação neste sentido ou, de imediatamente, quando houver solicitação do Contratado neste sentido ou quando a possibilidade da prestação dos Serviços depender disto.
            
            5 Extinção
            
            5.1 Qualquer das Partes poderá, a qualquer tempo, denunciar unilateralmente este Contrato mediante aviso prévio com antecedência de 30 (trinta) dias.
            
            6 Disposições gerais
            
            6.1 Este Contrato é o acordo final e integral das Partes em relação ao seu objeto, substituindo integralmente e prevalecendo contra quaisquer tratativas e acordos anteriores.
            
            6.2 Qualquer alteração a este Contrato, novação de obrigações ou renúncia a direitos previstos neste Contrato deverá ser acordada pelas Partes por escrito, sob pena de nulidade.
            
            6.3 Qualquer tolerância das Partes no exercício dos direitos advindos deste Contrato não será interpretada como novação da obrigação ou renúncia ao direito em questão.
            
            6.4 Nenhuma das Partes poderá ceder ou dar em garantia este Contrato ou os créditos dele decorrentes, exceto mediante a anuência prévia e por escrito da outra Parte.
            
            6.5 Caso qualquer termo, condição ou encargo deste Contrato ser declarado inexistente, inválido ou ineficaz, esta inexistência, invalidade ou ineficácia não afetará as demais disposições do Contrato.
            
            6.6 As notificações ou comunicações relacionadas a este Contrato trocadas pelas Partes deverão ser formalizadas por escrito e encaminhadas à outra parte por meio de notificação extrajudicial, carta com aviso de recebimento, telegrama com cópia de conteúdo, fac-símile, e-mail ou outra forma de transmissão eletromagnética de informações por escrito.
            
            7 Solução de controvérsias
            
            7.1 Toda e qualquer controvérsia decorrente ou relacionada a este Contrato, incluindo aquelas relativas à sua existência, validade, interpretação, execução, violação ou extinção, será solucionada por arbitragem conforme o Regulamento de Arbitragem do CAM-CCBC – Centro de Arbitragem e Mediação da Câmara de Comércio Brasil-Canadá.
            
            7.1.1 O tribunal arbitral será constituído por 3 (três) árbitros nomeados conforme o Regulamento de Arbitragem aplicável.
            
            7.2 A sentença do tribunal arbitral será final, irrecorrível e vinculante entre as Partes. A sentença arbitral ou qualquer medida cautelar emitida pelo tribunal arbitral poderá ser assentada e executada por qualquer tribunal judicial com jurisdição competente.
            
            7.3 As Partes elegem o foro da Comarca de São Paulo para conduzir as medidas coercitivas ou cautelares cabíveis de acordo com a Lei 9.037/1996.
            
            As Partes celebram este Contrato em 2 (duas) vias de igual teor e forma na presença das testemunhas abaixo assinadas.
            
            São Paulo, 25 de setembro de 2019.
            
            Contratante:
            
            ____________________________________
            ACME LTDA.
            
            Contratado:
            
            QWERTY S.A.
            Gabriel Oliveira
            CPF: 333.222.000-33
            
            Testemunhas:
            
            1.                                 2.
            Nome:                              Nome:
            RG:                                RG:
            
            `
        ,
            createdAt: new Date(),
            updatedAt: new Date(),
          }
        ],
        {}
      );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Documents", null, {});
  }
};
