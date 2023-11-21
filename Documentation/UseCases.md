# Casos de Uso ( Effort Control V1)

## Usuário

- O usuário pode :

  - Criar um perfil
  - Nome (name)
  - E-mail (email)
  - Profissão (role)
  - Valor da hora trabalho (costPerHour)
  - Porcentagem da Alíquota (taxPrice)
  - Custos personalizados, como internet, energia, desgaste do equipamento, compra de equipamento, contratação de algum serviço. (personalCost)

- O usuário poderá criar um orçamento:

  - Titulo (title)
  - Descrição (description)
  - Tempo estimado (estimatedTime)
  - Tempo utilizado (elapsedTime)
  - Tarefas (array de tasks)

- O usuário poderá criar uma tarefa:

  - Titulo (title)
  - Descrição (description)
  - Tempo estimado (estimatedTime)
  - Tempo utilizado (elapsedTime)
  - Concluído (status)

- O usuário poderá editar um orçamento
- O usuário poderá editar uma tarefa
- O valor do orçamento é dado de acordo com o valor da hora trabalho multiplicado pela quantidade de horas estimadas.
- As horas utilizadas, só são contabilizadas quando uma tarefa é marcada como `concluída`.
- O orçamento só pode ser marcado como finalizado, quando todas as tarefas forem marcadas como `concluída`
