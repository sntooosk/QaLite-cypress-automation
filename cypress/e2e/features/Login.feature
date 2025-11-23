Feature: Login

  Background:
    Given estou na página de login

  Scenario: Login válido
    When o usuário informa o email "juliano.cassimiro@qualitydigital.global"
    And o usuário informa a senha "Jul!@ninho0"
    And o usuário envia o formulário
    Then o login deve ser realizado com sucesso

  Scenario: Login com senha incorreta
    When o usuário informa o email "juliano.cassimiro@qualitydigital.global"
    And o usuário informa a senha "senha_errada"
    And o usuário envia o formulário
    Then a mensagem "E-mail ou senha incorretos. Confira os dados informados." deve ser exibida
