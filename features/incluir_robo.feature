Feature: Incluir robo

    Background: Acessar tela de estrategias na pagina da SmarttBot
        Given realizo login na SmarttBot
        When Clico em 'estratégia' no menu lateral

    Scenario: Buscar Robo Heitor Villa-Lobos da estratégia Price Action
    When realizo a busca do robo 'Heitor Villa-Lobos'
    Then o resultado da busca deve ser o correto

    Scenario: Iniciar Robo Heitor Villa-Lobos da estratégia Price Action
    Given realizo a busca do robo 'Heitor Villa-Lobos'
    And seleciono o robô na busca no modo simulado
    When Inicio a execução do robo com os parametros do ranking
    Then Deve ser exibida mensagem que o robo esta executando
    

    