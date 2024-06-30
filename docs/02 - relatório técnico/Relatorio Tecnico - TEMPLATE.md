
![logoPNG](https://github.com/ICEI-PUC-Minas-PCO-SI/pco-si-2024-1-tiaw-uaijobs/assets/160742926/5ffc81e7-cbfe-43a5-bd39-5d4ea7af339f)


# Informações do Projeto
`TÍTULO DO PROJETO`  

UaiJobs

`CURSO` 

Análise e Desenvolvimento de Sistemas

## Participantes

Os membros participantes do grupo são: 
* Guilherme de Oliveira Souza
* Igor Maia Moreira Fernandes
* Luis Henrique Sampaio Vieira
* Thiago Moreira de Queiroz
* Victor Schneider do Vale
* Vitor Prates Souza Lima

# Estrutura do Documento

- [Informações do Projeto](#informações-do-projeto)
  - [Participantes](#participantes)
- [Estrutura do Documento](#estrutura-do-documento)
- [Introdução](#introdução)
  - [Problema](#problema)
  - [Objetivos](#objetivos)
  - [Justificativa](#justificativa)
  - [Público-Alvo](#público-alvo)
- [Especificações do Projeto](#especificações-do-projeto)
  - [Personas e Mapas de Empatia](#personas-e-mapas-de-empatia)
  - [Histórias de Usuários](#histórias-de-usuários)
  - [Requisitos](#requisitos)
     [Requisitos Funcionais](#requisitos-funcionais)
     [Requisitos não Funcionais](#requisitos-não-funcionais)
  - [Restrições](#restrições)
- [Projeto de Interface](#projeto-de-interface)
  - [User Flow](#user-flow)
  - [Wireframes](#wireframes)
- [Metodologia](#metodologia)
  - [Divisão de Papéis](#divisão-de-papéis)
  - [Ferramentas](#ferramentas)
  - [Controle de Versão](#controle-de-versão)
- [**############## SPRINT 1 ACABA AQUI #############**](#-sprint-1-acaba-aqui-)
- [Projeto da Solução](#projeto-da-solução)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Arquitetura da solução](#arquitetura-da-solução)
- [Avaliação da Aplicação](#avaliação-da-aplicação)
  - [Plano de Testes](#plano-de-testes)
  - [Ferramentas de Testes (Opcional)](#ferramentas-de-testes-opcional)
  - [Registros de Testes](#registros-de-testes)
- [Referências](#referências)


# Introdução
O panorama socioeconômico contemporâneo é marcado por uma crescente demanda por flexibilidade e agilidade na busca por oportunidades de trabalho. A necessidade de encontrar oportunidades de trabalho de maneira rápida e eficiente tornou-se uma demanda crescente em um mundo cada vez mais conectado e dinâmico. De acordo com a Pesquisa Nacional por Amostra de Domicílios Contínua do IBGE, a taxa de desempregados (desocupados) foi de 8,1 milhões no 4º trimestre de 2023. Os homens representaram 45,7% dos desocupados e as mulheres 54,3%. Além disso, os jovens com idade entre 18 e 24 anos representam quase ⅓ dos desocupados, ficando atrás apenas daqueles com a idade de 25 a 39, com 35,5%.

Nesse contexto, o advento de plataformas digitais surge como uma alternativa promissora para conectar empregadores e trabalhadores de forma eficiente, especialmente no âmbito do mercado informal. A UaiJobs se destaca como uma plataforma inovadora que visa facilitar essa conexão, conectando empregos informais e empregados, proporcionando a possibilidade de fazer uma renda extra ou conseguir um funcionário de última hora.

O projeto nasceu da necessidade de se conseguir trabalhos esporádicos, sem vínculo empregatício formal, atendendo a um público-alvo composto por adultos e adolescentes a partir de 16 anos. A plataforma representa um avanço significativo na maneira como as pessoas buscam e oferecem trabalho, especialmente em um cenário onde a flexibilidade e a agilidade são cada vez mais valorizadas.
Dito isso, o UaiJobs é mais do que apenas um meio de conectar empregadores e trabalhadores, é uma ferramenta para capacitar indivíduos, bem como, oferecer uma solução inovadora que pode ajudar a aliviar algumas das pressões enfrentadas por aqueles que estão desocupados.

## Problema

De acordo com o exposto acima, a carência que este projeto deseja suprir é: “A falta de uma plataforma eficiente para conectar empregadores e trabalhadores no contexto informal”.
Muitas vezes, as vagas informais não são amplamente divulgadas, resultando em um mercado fragmentado e ineficiente. Além disso, os empregadores podem enfrentar dificuldades para encontrar pessoas com as habilidades necessárias para preencher essas vagas. 

## Objetivos

O objetivo geral da UaiJobs é facilitar a conexão entre empregadores e trabalhadores informais, permitindo que ambos encontrem o que procuram de maneira rápida e eficaz, a fim de suprir a comunicação defasada nesse sistema laboral. Analisando de forma mais detalhada, a plataforma objetiva os seguintes tópicos:
* Fornecer ao trabalhador informal uma maneira de encontrar remuneração de forma independente, podendo auxiliá-los financeiramente em períodos de altos índices de desemprego; 
* Implementar um local seguro para o empregador divulgar suas necessidades de serviços;
* Estimular a qualidade do serviço prestado através de um sistema de avaliações, a fim de manter um padrão de excelência entre os usuário da plataforma


## Justificativa

A necessidade de uma plataforma como a UaiJobs é evidente, uma vez que, o aumento da informalidade no mercado de trabalho, associada a alta taxa de desemprego, bem como a crescente demanda por flexibilidade, promovem a urgência da criação de ferramentas que permitam que empregadores e trabalhadores se conectem de maneira eficiente. Desta forma, a UaiJobs preenche essa lacuna, oferecendo uma solução prática e eficaz para a busca e oferta de trabalhos informais.

## Público-Alvo

O público-alvo da UaiJobs é composto por adultos e adolescentes a partir de 16 anos que buscam oportunidades de trabalho informal. Isso inclui pessoas que desejam complementar sua renda, seja para atender a necessidades financeiras imediatas ou para alcançar objetivos de longo prazo, bem como, estudantes que querem conciliar o estudo com o trabalho, os aposentados, que desejam permanecer ativos e produtivos.

Além disso, a plataforma também será útil para aqueles que valorizam a flexibilidade do trabalho informal. Esse perfil de usuário prefere trabalhar em horários não convencionais ou ter a liberdade de escolher tarefas que se alinhem com seus interesses pessoais.Por fim, a UaiJobs também será utilizada por empregadores que precisam de trabalhadores para tarefas específicas ou para períodos de tempo curtos. Esses empregadores podem variar desde pequenas ou grandes empresas até indivíduos que precisam de ajuda em tarefas diárias.

 
# Especificações do Projeto

Durante toda a elaboração do projeto, questões como as definições dos problemas e o escopo abrangente pelo sistema foram pautas trabalhadas em grupo a partir da observação e pesquisas do público-alvo, a fim de atingirmos a maior completude de informações possível ao sanar as dores dos usuários em questão. Sabendo disso, essa coleta de dados foi estabelecida por meio da personificação deste público, simulando seus padrões de rotina para esclarecer como a UaiJobs promoveria melhorias na vida destes. Seguem os dados coletados:

## Personas e Mapas de Empatia

As Personas identificadas durante a fase de compreensão do problema são descritas nas imagens que seguem:

| Ana Silva | Idade | Profissão | Aplicativos | Motivações | Frustrações | Hobbies|
| ---- | :-----: | :---------: | :--------------: | :-----------:| :------------: | :-----------------: |
| ![image](https://github.com/ICEI-PUC-Minas-PCO-SI/pco-si-2024-1-tiaw-uaijobs/assets/164440525/1b69084e-81cd-4759-ad76-4b099084db73)| 21 anos | Estudante universitária | Instagram<br/><br/>Facebook<br/><br/>WhatsApp<br/><br/>Pinterest| Desenvolver e aprimorar como profissional<br/><br/>Praticar e aprimorar suas habilidades|Falta de tempo<br/><br/>Falta de oportunidade| Fotografia<br/><br/>Edição de foto e video|

&nbsp;

| Pedro Oliveira| Idade | Profissão | Aplicativos | Motivações | Frustrações | Hobbies|
| ---- | :-----: | :---------: | :--------------: | :-----------:| :------------: | :-----------------: |
| ![image](https://github.com/ICEI-PUC-Minas-PCO-SI/pco-si-2024-1-tiaw-uaijobs/assets/164440525/770474bc-86ad-4c31-8d8a-25a4fbfff0b4) | 32 anos | Designer Gráfico | Instagram<br/><br/>Behance<br/><br/>WhatsApp<br/><br/>Webflow<br/><br/>Linkedin| Liberdade de trabalho<br/><br/>Viver uma vida autêntica|Baixa renda em tempos de pouca demanda<br/><br/>Pouca variedade em seu portfólio| Arte<br/><br/> Animação<br/><br/> Música<br/><br/>Poesia|

&nbsp;

| Maria da Silva | Idade | Profissão | Aplicativos | Motivações | Frustrações | Hobbies|
| ---- | :-----: | :---------: | :--------------: | :-----------:| :------------: | :-----------------: |
|![image](https://github.com/ICEI-PUC-Minas-PCO-SI/pco-si-2024-1-tiaw-uaijobs/assets/164440525/f5089341-79d0-49f0-a916-1df298a301c8)| 55 anos | Proprietária do bar "Calabouço" |Facebook<br/><br/>Whatsapp| <br/> Alcançar sucesso financeiro <br/><br/> Ter um estabelecimento reconhecido e renomado| Dificuldade de Gestão Pessoal <br/><br/> Alto custo| Culinária <br/><br/> Artesanato |

## Histórias de Usuários

Com base na análise e compreensão do dia a dia das Personas selecionadas para o UaiJobs, foram documentadas as seguintes histórias de usuário:

| `EU` | `QUERO/PRECISO` | `PARA` |
|:--------------------:|:------------------------------------:|:----------------------------------------:|
|Ana Silva     | Trabalhos flexíveis perto de mim. | Minha agenda é apertada, então eu preciso de encontrar serviços perto de onde moro e que eu possa realizar nos meus momentos livres.|
|Ana Silva     | Uma maneira de receber/ver o feedback | Me orientar sobre minha performance, no que posso melhorar e me sentir gratificada. |
|Pedro Oliveira| Site fácil de se navegar e que possa ser acessado em qualquer lugar. | Para que eu possa procurar oportunidades de renda extra seja no conforto de minha casa ou no celular em uma viagem. | 
|Pedro Oliveira| Ver as especificações do serviço, horários e expectativas. | Necessito de entender se sou capaz de cumprir com o serviço que fui contratado dentro do limite imposto.|
|Maria da Silva| Um repertório das habilidades do candidato.|Julgar se o candidato é ou não capaz de executar o serviço que estou contratando.| 
|Maria da Silva| Gostaria de ver tipo uma avaliação do usuário. | Antes de contratar, quero saber como o candidato foi avaliado previamente por outros, entender a qualidade e prestatividade do mesmo.|

Um pouco sobre as Personas:

**Ana Silva**

Ana é estudante universitária, dedicada e ocupada e busca ganhar uma renda extra para lidar com os custos de seus estudos. Apaixonada por fotografia, Ela é criativa e proativa. É uma pessoa sociável, ativa nas redes sociais, e está sempre buscando inspiração e compartilhando suas experiências com amigos e seguidores. Ana sonha em finalizar seus estudos, alcançar independência financeira e o sucesso em sua carreira. Quer viajar para novos lugares e capturar os momentos em que se sinta feliz, encontrando um equilíbrio do seu trabalho com seus hobbies e paixões.

**Pedro Oliveira**

Pedro é designer gráfico que valoriza liberdade e flexibilidade em seu estilo de vida. Ele é apaixonado por sua profissão e está sempre em busca de oportunidades para aprimorar suas habilidades e explorar novos projetos. Pedro é proativo e determinado, especialmente durante os períodos de baixa demanda de trabalho, quando busca oportunidades de emprego rápido para complementar sua renda. Ele é criativo, comprometido e está sempre em busca de inspiração em sua vida pessoal e profissional. Pedro almeja alcançar renome como designer gráfico, e fazer muito dinheiro com isso, Ele aspira a viver uma vida autêntica, conectada com suas raízes e valores, enquanto continua a se desenvolver profissionalmente e a contribuir para sua comunidade de maneiras significativas.

**Maria da Silva**

Maria é uma empresária determinada, com vasta experiencia no seu ramo. Ela é conhecida por sua dedicação ao seu bar e por sua busca incessante por manter altos padrões de qualidade. Apesar de sua relutância em adotar tecnologias modernas, ela é uma pessoa trabalhadora e focada no sucesso de seu negócio. Maria é tradicional e preza por métodos convencionais, mas também valoriza a eficiência e a confiabilidade. Embora possa ser brava, especialmente sob pressão durante os fins de semana movimentados, ela é uma líder respeitada por sua equipe e uma figura querida por seus clientes. Maria quer assegurar o sucesso do seu bar e manter sua boa renda até que possa se aposentar, Ela aspira a proporcionar experiências memoráveis aos seus clientes, mantendo altos padrões de qualidade em seus serviços. Ela almeja que um dia seus filhos assumam seu legado, mas teme que ninguém possa fazer um trabalho tão exigente quanto ela.


## Proposta de valor 

![image](https://github.com/ICEI-PUC-Minas-PCO-SI/pco-si-2024-1-tiaw-uaijobs/assets/164440525/42c08c89-ec1b-4578-b2c2-1be43d10f910)
alt: Imagem Proposta de Valor.



## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito                                                                           | Prioridade |
|------|--------------------------------------------------------------------------------------------------|-------|
|RF-001| Cadastro de usuário (Capacidade para usuários se cadastrarem como trabalhadores ou empregadores) | ALTA | 
|RF-002| Filtro de vagas que considera: tipo de trabalho, remuneração e período/data                      | ALTA |
|RF-003| Sistema de avaliação e feedback                                                                  | ALTA | 
|RF-004| Sistema de geolocalização                                                                        | MÉDIA |
|RF-005| Espaço para anúncios                                                                             | MÉDIA | 
|RF-006| Acessibilidade da plataforma para PCD                                                            | MÉDIA |
|RF-007| Barra de pesquisa para usuários                                                                  | MÉDIA | 
|RF-008| Página sobre criadores e objetivo do projeto                                                     | ALTA |
|RF-009| Impulsionar vagas por meio de pagamento para a plataforma                                        | MÉDIA | 
|RF-010| Algorítimo de recomendações de serviços baseados nos interesses do usuário                       | ALTA |
|RF-011| Pesquisa de interesses após primeiro Login                                                       | ALTA | 
|RF-012| Gamificação: Sistema de ranqueamento do usuário                                                  | BAIXA |



### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em todos dispositivos | ALTA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 
|RNF-003| Proteção dos dados dos usuários cadastrados, para ninguém ter acesso não autorizado. |  MÉDIA | 
|RNF-004| A interface do usuário deve ser intuitiva e fácil de usar, especialmente para um público diversificado que pode não estar familiarizado com tecnologia avançada. |  ALTA | 
|RNF-005| Oferecer recursos de personalização permite aos usuários adaptarem a experiência do site de acordo com suas preferências individuais. Isso pode incluir a capacidade de salvar buscas, configurar alertas de emprego, personalizar perfis e receber recomendações de vagas com base em históricos de navegação. |  MÉDIA | 
|RNF-006|  O sistema deve ser capaz de lidar com falhas de componentes individuais sem interromper o funcionamento do site como um todo. |  BAIXA | 

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                                                                                                     |
|--|-------------------------------------------------------------------------------------------------------------------------------|
|01| Não poderá utilizar banco de dados no desenvolvimento do projeto                                                              |
|02| O projeto precisa necessariamente ser intuitivo e de fácil entendimento para todas as idades diante de níveis tecnológicos.   |
|03| Todo os colaboradores do projeto precisam conhecer e participar efetivamente de todas as etapas do projeto                    |

# Projeto de Interface

As interfaces foram elaboradas com os fundamentos de serem completamente fluidas, intuitivas, fáceis de se usar e totalmente responsivas, onde o usuário se sentirá incluído e confortável independente do dispositivo ao qual estará utilizando, conseguindo ter um fluxo livre e abrangente. As páginas terão uma identidade visual única entre todas, sendo seus estilos padronizados. Alguns tópicos importantes sobre as interfaces são:

* A principal interface do site será a página de Home, onde o usuário poderá ter acesso a praticamente todas as páginas; 
* Em todas as interfaces, enquanto o usuário não estiver conectado a um perfil, ele terá a opção de se cadastrar ou de fazer o login em um já cadastrado;
* O site terá a funcionalidade de geolocalização, podendo filtrar trabalhos e trabalhadores para mais perto do usuário;
* Para procurar um trabalho informal, o trabalhador poderá filtrar requisitos como valor do trabalho;
* A barra de pesquisa permitirá que vagas possam ser buscadas, utilizando-se de palavras chave;
* A página terá uma resposta rápida e será totalmente útil.

## User Flow

A seguinte imagem mostra como poderá ser o fluxo de interação do usuário pelas telas do sistema, revelando cada caminho que poderá ser seguido, cada uma tem interação com outras uma ou mais.
Essas telas estão detalhadas na seção de Wireframes.
![User-Flow UaiJobs](https://github.com/ICEI-PUC-Minas-PCO-SI/pco-si-2024-1-tiaw-uaijobs/assets/129126008/183283d1-44fb-4a17-b112-692f076dbbff)
alt: Imagem do user flow.

## Wireframes

De acordo com o apresentado no User Flow, as telas do sistema contam com descrições detalhadas de cada uma de suas seções, seguindo um padrão para o desenvolvimento do projeto por completo. Existem estruturas presentes na grande maioria das telas, responsáveis pelas mesmas funções. São elas: 
 
* **Cabeçalho**: Essa seção tem a função de localizar o acesso à página de login e à página de usuário, além do nome e logo da página;
 
* **Barra Horizontal**: Essa seção é destinada aos filtros da página, sejam os de busca ou os de cadastro de vagas. Essa aba do sistema não está presente em todas as telas;
 
* **Conteúdo**: A parte de conteúdos está relacionada à todo a informação da página, tudo que é exposto ao usuário para navegar pelo programa;
 
* **Rodapé**: O rodapé, por fim, armazena a seção de perguntas frequentes, termos de uso e o “fale conosco”.

![Imagem Wireframe Modelo](https://raw.githubusercontent.com/ICEI-PUC-Minas-PCO-SI/pco-si-2024-1-tiaw-uaijobs/Codigos-Atualizados/docs/02%20-%20relat%C3%B3rio%20t%C3%A9cnico/images/Base_Elementos.jpg)
alt: Imagem Wireframe Modelo.


### Tela - Página Inicial

Essa tela representa o que o usuário encontrará assim que carregar a página pela primeira vez. Nela podemos identificar alguns elementos importantes: 
 
* **Botão de login**: Guia o usuário para a tela de login;
 
* **Botão de cadastro**: Guia o usuário para a tela de cadastro;
 
* **Botão Freelancers disponíveis**: Esse botão guia o usuário até uma página que exibe todos os usuários cadastrados na plataforma que estão disponíveis para realizar serviços.

![Página Inicial](https://raw.githubusercontent.com/ICEI-PUC-Minas-PCO-SI/pco-si-2024-1-tiaw-uaijobs/Codigos-Atualizados/docs/02%20-%20relat%C3%B3rio%20t%C3%A9cnico/images/P%C3%A1gina_Inicial.jpg)
alt: Página Inicial.


### Tela - Página de Login

Nesse ambiente, o usuário poderá realizar seu login na página.

![Página de Login](https://raw.githubusercontent.com/ICEI-PUC-Minas-PCO-SI/pco-si-2024-1-tiaw-uaijobs/Codigos-Atualizados/docs/02%20-%20relat%C3%B3rio%20t%C3%A9cnico/images/P%C3%A1gina_Login.jpg)
alt: Página de Login.


### Tela - Página de Cadastro

Nessa página o usuário poderá realizar seu cadastro caso ainda não possua login no sistema.

![Página de Cadastro](https://raw.githubusercontent.com/ICEI-PUC-Minas-PCO-SI/pco-si-2024-1-tiaw-uaijobs/Codigos-Atualizados/docs/02%20-%20relat%C3%B3rio%20t%C3%A9cnico/images/P%C3%A1gina_Cadastro.jpg)
alt: Página de Cadastro.


### Tela - Freelancers Disponíveis

Na tela de Freelancers Disponíveis o usuário poderá localizar todos os demais usuários disponíveis para executar serviços na plataforma. Ele poderá usar uma serie de filtros para achar o freelancer ideal para seu serviço, podendo ainda, abrir o perfil deste Freelancer e acessar suas avaliações e detalhes de contato.

![Freelancers Disponíveis](https://raw.githubusercontent.com/ICEI-PUC-Minas-PCO-SI/pco-si-2024-1-tiaw-uaijobs/Codigos-Atualizados/docs/02%20-%20relat%C3%B3rio%20t%C3%A9cnico/images/Freelancers_Dispon%C3%ADveis.jpg)
alt: Freelancers Disponíveis.


### Tela - Página do Freelancer

Nessa tela o usuário poderá ter uma visão mais detalhada de um freelancer em especifico, tal como, suas avaliações e um breve resumo do usuário ao qual ele deseja contratar.

![Página do Freelancer](https://raw.githubusercontent.com/ICEI-PUC-Minas-PCO-SI/pco-si-2024-1-tiaw-uaijobs/Codigos-Atualizados/docs/02%20-%20relat%C3%B3rio%20t%C3%A9cnico/images/P%C3%A1gina_Freelancer.jpg)
alt: Página do Freelancer.


### Tela - Vagas em Aberto

Essa página é destinada aos Freelancers, visto que expõe as vagas cadastradas por contratantes na plataforma. O usuário tem acesso a um breve resumo da vaga, contendo informações como: função, remuneração, data, etc. Além disso, existe um filtro de busca na barra horizontal da página, permitindo ao usuário navegar pelas vagas que desejar, deixando visível apenas as que atenderem seus requisitos.

![Vagas em Aberto](https://raw.githubusercontent.com/ICEI-PUC-Minas-PCO-SI/pco-si-2024-1-tiaw-uaijobs/Codigos-Atualizados/docs/02%20-%20relat%C3%B3rio%20t%C3%A9cnico/images/Vagas_Aberto.jpg)
alt: Vagas em Aberto.


### Tela - Detalhe da Vaga

O usuário, ao clicar em uma vaga na página anterior, pode acessar todas as informações por completo, bem como manifestar seu interesse por ela.

![Detalhe da Vaga](https://raw.githubusercontent.com/ICEI-PUC-Minas-PCO-SI/pco-si-2024-1-tiaw-uaijobs/Codigos-Atualizados/docs/02%20-%20relat%C3%B3rio%20t%C3%A9cnico/images/Vaga.jpg)
alt: Detalhe da Vaga.


### Tela - Como o UaiJobs funciona?

Aqui o usuário tem acesso a um vídeo de apresentação de como a plataforma funciona, além de informações adicionais como um campo de anúncios e patrocínios.

![Como o UaiJobs Funciona](https://raw.githubusercontent.com/ICEI-PUC-Minas-PCO-SI/pco-si-2024-1-tiaw-uaijobs/Codigos-Atualizados/docs/02%20-%20relat%C3%B3rio%20t%C3%A9cnico/images/Como_UaiJobs_Funciona.jpg)
alt: Como o UaiJobs Funciona.


### Tela - Publicar Vaga

Essa é a seção em que um dono de um serviço pode divulgar sua vaga em busca de um trabalhador para realizá-la. Nela há um formulário obrigatório ao qual o contratante deve preencher. 

![Publicar Vaga](https://raw.githubusercontent.com/ICEI-PUC-Minas-PCO-SI/pco-si-2024-1-tiaw-uaijobs/Codigos-Atualizados/docs/02%20-%20relat%C3%B3rio%20t%C3%A9cnico/images/Publicar_Vaga.jpg)
alt: Publicar Vaga.



# Metodologia

A equipe adotou a metodologia ScrumBan, focando na organização de tarefas, na flexibilidade, na possibilidade de escolha e na agilidade dos processos.
O Scrumban é uma metodologia ágil que mistura elementos do Scrum e do Kanban. Essa metodologia traz a estrutura organizada do Scrum, e combina com o fluxo contínuo e visualização do Kanban.

Alguns pontos que trouxeram a equipe para este método:

* Une o melhor dos dois métodos.
* Permite entregas contínuas.
* Usa quadros Kanban para acompanhar o fluxo de trabalho.
* As tarefas no quadro Kanban são priorizadas, o que ajuda a equipe a se concentrar nas mais importantes primeiro.
* É adaptável, pode ser facilmente ajustada para atender às necessidades específicas a qualquer hora.
* É focado no trabalho, a equipe foca em concluir tarefas o mais rápido possível.
* Incentiva a melhoria contínua, com a equipe constantemente procurando maneiras de melhorar seus processos e fluxos de trabalho.

Para o projeto, a equipe optou por todos participarem juntamente no processo de design thinking, construção da etapa de entendimento e na etapa de exploração, propondo idéias das mais diversas sobre funcionalidade e elementos do site.
Para implementação e documentação dessas idéias, foram separadas por seções, podendo cada integrante escolher qual desenvolveria. Nesta etapa, a equipe fez o uso da ferramenta Miro, com a finalidade de construir quadros contendo as idéias, e da ferramenta Trello, com a finalidade de separar e escolher as tarefas.
Miro: https://miro.com/app/board/uXjVNjOu4ck=/

![image](https://github.com/ICEI-PUC-Minas-PCO-SI/pco-si-2024-1-tiaw-uaijobs/assets/129126008/9bf1b0a8-7413-4d03-82cb-50f9c1e331be)
alt: Imagem do board no Miro, servindo apenas de ilustração e demonstração do projeto final.

Trello: https://trello.com/invite/b/qW8TBTgm/ATTI62ad82444c52393de4dd9e46e5877bf46509A37D/uai-jobs-tasks

![image](https://github.com/ICEI-PUC-Minas-PCO-SI/pco-si-2024-1-tiaw-uaijobs/assets/129126008/449b79e3-7d0a-41ed-8dab-254207638c68)
alt: Imagem do board do Trello, apresentando a separação das tarefas.

Para o controle e gestão do projeto via Git, foi acordado entre a equipe, a criação de apenas uma branch de revisão, sendo ela fora da master, e a criação de branchs diversas para a implementação de alterações, que depois de feitas, seriam conjuntas com a branch de testes. A equipe usou do próprio GitHub para a efetuação dos commits, trazendo uma padronização de ferramentas e de processo e gerenciamento de versões.

## Divisão de Papéis

* Scrum Master: Leonardo Vilela
* Product Owner: Amália Soares
Equipe de Desenvolvimento
* Guilherme de Oliveira (Desenvolvedor Front End)
* Igor Maia Moreira (Desenvolvedor Front End)
* Luis Henrique (Desenvolvedor Front End)
* Thiago Moreira (Desenvolvedor Front End)
* Victor Schneider(Desenvolvedor Front End)
* Vitor Prates (Desenvolvedor Front End)

## Ferramentas

| Ambiente  | Plataforma              |Link de Acesso |
|-----------|-------------------------|---------------|
Alteração-Metodologia-Divisão-Ferramentas
|Processo de Design Thinkgin  | Miro | <https://miro.com/app/board/uXjVNjOu4ck=/> | 
|Repositório de código | GitHub | <https://github.com/ICEI-PUC-Minas-PCO-SI/pco-si-2024-1-tiaw-uaijobs> | 
|Documentação | Google Drive | <https://drive.google.com/drive/folders/1Bt5ecXhlsIZ9WLKxS-o76BaBwXPInwzX?usp=drive_link> | 
|Hospedagem do site | Heroku |  https://XXXXXXX.herokuapp.com | 
|Protótipo Interativo | MavelApp | <https://marvelapp.com/prototype/1ah9095e/screen/94366212> | 
|User flow | Figma | <https://www.figma.com/file/Luqd8sBxzYdyUahcCHgC0H/User-Flow-UaiJobs?type=design&node-id=0%3A1&mode=design&t=KzEpENNHxDYwQXGN-1> |

 As ferramentas empregadas no projeto são:

- Editor de código |Vs code| A escolha do Vs code foi feita com base na experiência dos integrantes do grupo com a ferramenta.
- Ferramentas de comunicação |WhatsApp e Reuniões presenciais| Devido a praticidade de mensagens e o contato presencial entre os envolvidos.
- Ferramentas de diagramação |Figma e Miro| Escolhidas pela versatilidade das plataformas e por serem plataformas que trazem grandes possibilidades de conteúdos.
- Plataforma de hospedagem ||

## Controle de Versão

 Para configuração, gerenciamento e versionamento do projeto, o grupo utiliza das ferramentas disponíveis pelo próprio GitHub, onde todo o conteúdo foi incrementado atráves de branchs terceiras, que seriam revisadas, para branchs secundárias, onde seriam testadas e após isso, incrementadas a branch master. Ex:
 * master: Versão operante, já revisada e testada;
 * Documentações: Versão apenas revisada, ainda não testadas;
 * Alterações-XXXXX: Versão não revisada, sendo desenvolvida.

Quanto à gerência dos issues, seguimos:
 * bugfix: Onde algo apresenta problemas;
 * enhancement: Onde algo apresenta uma possibilidade de melhora;
 * feature: A incrementação de um novo recurso.


 ![Image](images/Github-Workflow.png)
 alt: Imagem modelo de Gestão de Versão.

# **############## SPRINT 1 ACABA AQUI #############**


# Projeto da Solução
O projeto UaiJobs foi desenvolvido pela equipe para a criação de uma plataforma digital robusta e intuitiva para conectar trabalhadores informais e empregadores. A plataforma permitirá que trabalhadores busquem e se candidatem a vagas de trabalho esporádico e que empregadores divulguem suas necessidades de contratação de forma eficiente.

## Objetivos do Projeto

1. **Facilitar a Conexão entre Trabalhadores e Empregadores**
   - Criar uma plataforma intuitiva que permita a comunicação eficiente entre trabalhadores informais e empregadores, promovendo oportunidades de trabalho esporádico.

2. **Otimizar a Busca por Vagas de Trabalho**
   - Desenvolver ferramentas de busca avançadas para que trabalhadores possam encontrar rapidamente vagas que correspondam às suas habilidades e localização.

3. **Simplificar o Processo de Candidatura**
   - Implementar um sistema de candidatura fácil de usar, que permita aos trabalhadores se candidatar a vagas com rapidez e eficiência.

4. **Aprimorar a Divulgação de Vagas por Empregadores**
   - Fornecer aos empregadores uma interface amigável para listar vagas, detalhar requisitos e gerenciar candidatos, melhorando o processo de recrutamento.

5. **Promover a Transparência e a Confiança**
   - Estabelecer um sistema de avaliação e feedback que incentive a transparência e construa confiança entre trabalhadores e empregadores, assegurando um ambiente seguro e confiável na plataforma.

## Funcionalidades Principais

* **Cadastro de Usuários**: Trabalhadores e empregadores poderão se cadastrar na plataforma, criando perfis detalhados que incluem habilidades e interesses favoritos.
* **Busca de Vagas e Trabalhadores**: Ferramentas de busca avançada para encontrar vagas de acordo com critérios específicos, como localização, tipo de trabalho e remuneração.
* **Sistema de Avaliação e Feedback**: Após a conclusão de um trabalho, tanto empregadores quanto trabalhadores poderão avaliar uns aos outros, ajudando a manter um padrão de qualidade.
* **Geolocalização**: Utilização de geolocalização para facilitar a busca de vagas próximas ao usuário.
* **Sistema de Assinatura**: Sistema que permite que o usuário assine uma versão premium da UaiJobs para benefícios especiais.


# Tecnologias Utilizadas

Para desenvolver a UaiJobs, utilizaremos uma combinação de tecnologias modernas que garantem a funcionalidade e usabilidade da plataforma. Abaixo, detalhamos cada tecnologia utilizada e sua aplicação no projeto:

**Tecnologias e Ferramentas:**

* HTML (HyperText Markup Language)
Descrição: Linguagem de marcação usada para estruturar o conteúdo das páginas web.
Uso no Projeto: Define a estrutura básica das páginas, incluindo cabeçalhos, parágrafos, links, botões e formulários.

* CSS (Cascading Style Sheets)
Descrição: Linguagem de estilo usada para descrever a apresentação dos documentos HTML.
Uso no Projeto: Estiliza os elementos HTML, criando um design agradável e responsivo, definindo layouts, cores e fontes.

* JavaScript
Descrição: Linguagem de programação que permite a criação de conteúdo dinâmico e interativo na web.
Uso no Projeto: Adiciona interatividade, manipula o DOM, faz requisições assíncronas e atualiza o conteúdo da página dinamicamente.

* Bootstrap
Descrição: Framework CSS de código aberto para desenvolvimento de interfaces web responsivas.
Uso no Projeto: Fornece estilos predefinidos e componentes como botões, formulários e barras de navegação para acelerar o desenvolvimento e garantir um design consistente.

* jQuery e jQuery UI
Descrição: Biblioteca JavaScript que simplifica a manipulação do DOM e a criação de interações dinâmicas. jQuery UI adiciona widgets e efeitos visuais.
Uso no Projeto: Facilita a manipulação de eventos, animações e a implementação de componentes interativos como sliders.

* Axios
Descrição: Biblioteca JavaScript para fazer requisições HTTP baseadas em Promises.
Uso no Projeto: Utilizada para comunicação com o JSON Server, permitindo buscar, criar, atualizar e excluir dados de forma assíncrona.
Ferramentas Utilizadas

* Visual Studio Code (VS Code)
Descrição: Editor de código-fonte desenvolvido pela Microsoft, altamente extensível e personalizável.
Uso no Projeto: Edita código com suporte para diversas extensões, como Live Server e Prettier, para desenvolvimento mais eficiente.

* Git e GitHub
Descrição: Git é um sistema de controle de versão distribuído. GitHub é uma plataforma de hospedagem de código-fonte que usa Git.
Uso no Projeto: Gerencia o código-fonte, facilita a colaboração, controle de versão e revisão de código.

* Postman
Descrição: Ferramenta de colaboração para desenvolvimento de APIs que permite criar, testar e documentar APIs.
Uso no Projeto: Testa as APIs desenvolvidas com o JSON Server para verificar se as requisições estão corretas.

* JSON Server
Descrição: Ferramenta que cria uma API RESTful falsa a partir de um arquivo JSON.
Uso no Projeto: Simula um backend durante o desenvolvimento, fornecendo dados de exemplo para testes.

* npm (Node Package Manager)
Descrição: Gerenciador de pacotes para Node.js, usado para instalar, compartilhar e gerenciar dependências.
Uso no Projeto: Instala e gerencia pacotes como axios, json-server, jQuery e Bootstrap.

* Browsers para Testes (Chrome, Opera)
Descrição: Navegadores web usados para testar a aplicação em diferentes ambientes.
Uso no Projeto: Garantem compatibilidade e responsividade em diversas plataformas e dispositivos.

### Prototipagem e Design

1. **Figma**
   - **Descrição**: Ferramenta de design de interface e prototipagem.
   - **Aplicação**: Utilizado para criar wireframes e protótipos interativos, facilitando a visualização do design antes da implementação.

2. **Miro**
   - **Descrição**: Plataforma de colaboração visual.
   - **Aplicação**: Utilizado para brainstorming e design thinking, ajudando na geração de ideias e planejamento do projeto.


## Arquitetura da solução

>![Modelagem](https://raw.githubusercontent.com/ICEI-PUC-Minas-PCO-SI/pco-si-2024-1-tiaw-uaijobs/Codigos-Atualizados/docs/02%20-%20relat%C3%B3rio%20t%C3%A9cnico/images/MODELAGEM.JPG)
alt: Modelagem.

A imagem detalha como diferentes componentes do sistema interagem. A arquitetura está dividida em três partes principais: Navegador, Internet e Servidor. Abaixo está uma descrição detalhada de cada componente e suas funções:

#### Navegador (Front-end)
- **HTML, CSS, JS**: Estes são os componentes principais utilizados para construir a página web que o usuário vê e interage. HTML define a estrutura da página, CSS estiliza os elementos visuais, e JavaScript adiciona interatividade.
- **Página WEB**: Representa a interface que os usuários acessam e utilizam. Esta página web é carregada no navegador do usuário.
- **Local Storage**: Um armazenamento local no navegador que guarda dados temporários ou persistentes do usuário, como:
  - **Usuário Corrente**: Armazena informações sobre o usuário que está atualmente logado.

#### Internet
- Representa a conexão entre o navegador do usuário e os servidores. A internet é o meio pelo qual as requisições e respostas são enviadas e recebidas.

#### Nuvem
- **Hospedagem da aplicação via Vercel**: Indica que a aplicação web está hospedada na plataforma Vercel, que serve as páginas web para os usuários.
- **Hospedagem JSON-Server via Vercel**: JSON-Server é utilizado para simular uma API RESTful, e neste caso, também está hospedado na Vercel. Ele gerencia as requisições de dados enviadas pela aplicação web.
- **Dados do usuário, Vagas Cadastradas, Freelancers Disponíveis**: Estes são os dados armazenados no servidor, incluindo informações sobre usuários, vagas de trabalho disponíveis e freelancers cadastrados.

### Fluxo de Dados
1. **Navegador**:
   - O usuário interage com a página web utilizando HTML, CSS e JavaScript.
   - Dados temporários, como o usuário corrente, são armazenados no Local Storage do navegador.
2. **Internet**:
   - As interações e solicitações do usuário são enviadas através da internet para o servidor.
3. **Servidor**:
   - O servidor processa as solicitações utilizando a aplicação hospedada na Vercel.
   - O JSON-Server responde com dados necessários, como informações do usuário, vagas cadastradas e freelancers disponíveis.



# Avaliação da Aplicação

Para garantir que a aplicação atende aos requisitos e funciona corretamente, diversos cenários de teste foram planejados e executados.

**Cenários de Teste:**
* Cadastro de Usuário
  
Descrição: Permite que novos usuários se registrem na plataforma, seja como freelancers ou empregadores.
Detalhes: Campos obrigatórios: nome, email, senha, tipo de usuário (freelancer ou empregador).
Validação de campos e confirmação de senha.


* Login de Usuário
Descrição: Autentica usuários registrados, permitindo acesso às suas contas.
Detalhes: Campos obrigatórios: email e senha.
Validação de credenciais.
Opção de recuperação de senha.

* Perfil de Usuário
Descrição: Permite que usuários visualizem e editem suas informações de perfil.
Detalhes: Atualização de dados pessoais como nome, localização, foto de perfil, e descrição.
Adição de habilidades (para freelancers).

* Publicação de Vagas
Descrição: Empregadores podem criar e publicar novas vagas de trabalho.
Detalhes: Campos obrigatórios: título da vaga, descrição, requisitos, localização, remuneração.
Definição de categorias e habilidades necessárias.

* Busca de Vagas
Descrição: Permite que freelancers busquem por vagas disponíveis.
Detalhes: Filtros de busca por localização, categoria, habilidades, e faixa de remuneração.
Exibição de resultados correspondentes aos critérios de busca.

* Aplicação para Vagas
Descrição: Freelancers podem aplicar para as vagas publicadas.
Detalhes: Envio de mensagem ou carta de apresentação junto com a aplicação.
Visualização do status da aplicação (pendente, aceita, rejeitada).

* Sistema de Avaliação
Descrição: Permite que empregadores e freelancers avaliem uns aos outros após a conclusão de um trabalho.
Detalhes: Avaliação com estrelas e comentários.
Exibição de avaliações no perfil do usuário.

* Notificações
Descrição: Sistema de notificações para manter os usuários informados sobre atividades importantes.
Detalhes: Notificações sobre novas mensagens, aplicações recebidas, avaliações, e atualizações de status de vagas.

* Mensagens Internas
Descrição: Sistema de mensagens internas para comunicação entre freelancers e empregadores.
Detalhes: Envio e recebimento de mensagens dentro da plataforma.
Histórico de conversas.

* Painel de Controle
Descrição: Interface de gerenciamento para freelancers e empregadores.
Detalhes: Freelancers: visualização de aplicações, mensagens, e avaliações.
Empregadores: gerenciamento de vagas publicadas, aplicações recebidas, e avaliações.

* Responsividade
Descrição: Garantia de que a plataforma funciona bem em diferentes dispositivos e tamanhos de tela.
Detalhes: Layouts adaptáveis para desktops, tablets, e dispositivos móveis.
 Testes para garantir a funcionalidade em navegadores modernos.

* Administração
Descrição: Painel administrativo para gerenciamento de usuários e conteúdo.
Detalhes: Gerenciamento de contas de usuários.
Moderação de conteúdo (vagas, avaliações, mensagens).

* Limites de Aplicações para Freelancers
Descrição: Define o número máximo de vagas às quais freelancers podem se candidatar com base em seu status de assinatura.
Detalhes: Freelancers Premium: Podem se candidatar a até 6 vagas simultaneamente.
Freelancers Não-Premium: Podem se candidatar a até 3 vagas simultaneamente.

* Limites de Publicações para Empregadores
Descrição: Define o número máximo de vagas que empregadores podem publicar com base em seu status de assinatura.
Detalhes: Empregadores Premium: Podem publicar até 10 vagas simultaneamente.
Empregadores Não-Premium: Podem publicar até 5 vagas simultaneamente.

## Plano de Testes

### Cenários Selecionados
Os cenários foram selecionados para cobrir as funcionalidades essenciais da plataforma UaiJobs. Detalhamos abaixo os cenários e as ferramentas utilizadas para cada teste.

#### Tela - Página Inicial

**Funcionalidade Avaliada:** Exibição da página inicial e navegação básica.  
**Grupo de Usuários:** Todos os visitantes.  
**Ferramentas Utilizadas:** Testes manuais, Ferramentas de inspeção do navegador.

#### Página de Login

**Funcionalidade Avaliada:** Autenticação de usuários.  
**Grupo de Usuários:** Usuários registrados.  
**Ferramentas Utilizadas:** Testes manuais, Ferramentas de inspeção do navegador.

#### Página de Cadastro

**Funcionalidade Avaliada:** Registro de novos usuários.  
**Grupo de Usuários:** Novos visitantes do site.  
**Ferramentas Utilizadas:** Testes manuais, Ferramentas de inspeção do navegador.

#### Freelancers Disponíveis

**Funcionalidade Avaliada:** Busca e filtros de freelancers.  
**Grupo de Usuários:** Empregadores.  
**Ferramentas Utilizadas:** Testes manuais, Ferramentas de inspeção do navegador.

#### Vagas em Aberto

**Funcionalidade Avaliada:** Exibição e busca de vagas de trabalho.  
**Grupo de Usuários:** Freelancers.  
**Ferramentas Utilizadas:** Testes manuais, Ferramentas de inspeção do navegador.

#### Publicar Vaga

**Funcionalidade Avaliada:** Criação e publicação de vagas.  
**Grupo de Usuários:** Empregadores.  
**Ferramentas Utilizadas:** Testes manuais, Ferramentas de inspeção do navegador.

## Ferramentas de Testes (Opcional)

### Testes Manuais

**Descrição:** Realização de testes por meio de interações diretas com a interface do usuário, verificando o comportamento esperado em diferentes cenários.
**Aplicação:** Utilizado para validar funcionalidades básicas e fluxos de navegação.

### Ferramentas de Inspeção do Navegador

**Descrição:** Ferramentas integradas nos navegadores, como o DevTools do Chrome, que permitem inspecionar e depurar elementos da página, verificar logs de console e monitorar o tráfego de rede.
**Aplicação:** Utilizado para identificar problemas de renderização, depurar erros de JavaScript e monitorar requisições de rede.

## Registros de Testes

Tela - Página Inicial
Funcionalidade Avaliada: Exibição da página inicial e navegação básica.
Grupo de Usuários: Todos os visitantes.
Ferramentas Utilizadas: Testes manuais, Ferramentas de inspeção do navegador.

Pontos Positivos:

Interface Limpa e Atraente: A página inicial é bem organizada e visualmente atraente, facilitando a navegação dos usuários.
Carregamento Rápido: A página inicial carrega rapidamente, proporcionando uma boa experiência inicial aos visitantes.
Facilidade de Navegação: Links e menus são facilmente acessíveis, permitindo uma navegação intuitiva pelo site.
Vídeo sobre o Projeto: Adicionar um vídeo explicativo sobre o UaiJobs na página inicial para apresentar a plataforma e suas funcionalidades de maneira mais envolvente e visualmente atraente.
Pontos Negativos:

Falta de Elementos Interativos: Podem ser adicionados mais elementos interativos, como vídeos introdutórios e tutoriais, para aumentar o engajamento dos usuários.

Página de Login
Funcionalidade Avaliada: Autenticação de usuários.
Grupo de Usuários: Usuários registrados.
Ferramentas Utilizadas: Testes manuais, Ferramentas de inspeção do navegador.

Pontos Positivos:

Processo de Login Simples: O processo de login é direto e fácil de usar.
Validação Eficiente: A validação das credenciais de login é eficiente e rápida.
Feedback Imediato: Os usuários recebem feedback imediato sobre a validade das credenciais inseridas.

Pontos Negativos:

Falta de Suporte para Autenticação Multifator: Implementar autenticação multifator para aumentar a segurança do login.

Página de Cadastro
Funcionalidade Avaliada: Registro de novos usuários.
Grupo de Usuários: Novos visitantes do site.
Ferramentas Utilizadas: Testes manuais, Ferramentas de inspeção do navegador.

Pontos Positivos:

Formulário de Cadastro Intuitivo: O formulário de cadastro é bem estruturado e fácil de preencher.
Feedback Imediato: Os usuários recebem feedback imediato sobre a validade dos dados inseridos.
Processo Rápido: O cadastro pode ser concluído rapidamente, sem etapas desnecessárias.

Pontos Negativos:

Ausência de Verificação de Email: Adicionar um sistema de verificação de email para garantir a autenticidade das contas registradas.

Freelancers Disponíveis
Funcionalidade Avaliada: Busca e filtros de freelancers.
Grupo de Usuários: Empregadores.
Ferramentas Utilizadas: Testes manuais, Ferramentas de inspeção do navegador.

Pontos Positivos:

Filtros Eficientes: Os filtros permitem refinar a busca de maneira eficaz, retornando resultados relevantes.
Exibição Clara de Resultados: Os resultados da busca são exibidos de forma clara e organizada.
Rapidez na Busca: A busca retorna resultados rapidamente, sem demora perceptível.

Pontos Negativos:

Filtros Limitados: Expandir as categorias e opções de filtros disponíveis para melhorar a precisão da busca.

Vagas em Aberto
Funcionalidade Avaliada: Exibição e busca de vagas de trabalho.
Grupo de Usuários: Freelancers.
Ferramentas Utilizadas: Testes manuais, Ferramentas de inspeção do navegador.

Pontos Positivos:

Busca Rápida e Precisa: A busca de vagas é rápida e retorna resultados precisos.
Interface de Vagas Atraente: A interface de exibição de vagas é visualmente atraente e fácil de navegar.
Filtros Úteis: Os filtros disponíveis ajudam a encontrar vagas específicas de acordo com os critérios do freelancer.

Pontos Negativos:

Falta de Opções Avançadas de Filtragem: Implementar opções avançadas de filtragem de vagas para facilitar a localização de vagas altamente específicas.

Publicar Vaga
Funcionalidade Avaliada: Criação e publicação de vagas.
Grupo de Usuários: Empregadores.
Ferramentas Utilizadas: Testes manuais, Ferramentas de inspeção do navegador.

Pontos Positivos:

Formulário de Publicação Simples: O formulário para publicar vagas é simples e fácil de usar.
Processo Rápido: O processo de publicação de vagas é rápido e eficiente.
Feedback Imediato: Os empregadores recebem feedback imediato sobre o status da vaga publicada.

Pontos Negativos:

Ausência de Pré-visualização: Adicionar uma funcionalidade de pré-visualização da vaga antes da publicação para permitir a revisão e correção de erros.

Pagamento Fake com QR Code
Funcionalidade Avaliada: Demonstração de pagamento com QR Code.
Grupo de Usuários: Freelancers e empregadores (para fins de teste).
Ferramentas Utilizadas: Testes manuais.

Pontos Positivos:

Facilidade de Uso: A função de pagamento com QR Code é fácil de usar e intuitiva.
Processo Rápido: A geração e o escaneamento do QR Code ocorrem quase instantaneamente.
Demonstração de Segurança: Apesar de ser fake, a implementação demonstra como os pagamentos com QR Code podem melhorar a segurança das transações.

Pontos Negativos:

Falta de Integração com Sistemas de Pagamento Reais: Atualmente, a funcionalidade não está integrada a sistemas de pagamento reais.
Confusão Potencial entre Usuários: É importante comunicar claramente que a função atual é apenas para testes, para evitar confusões.

##Estratégias para Melhorar nas Próximas Iterações

Página Inicial:

Ação: Adicionar elementos interativos, como vídeos introdutórios e tutoriais.
Objetivo: Aumentar o engajamento dos novos usuários e incentivar a exploração da plataforma.

Página de Login:

Ação: Implementar suporte para autenticação multifator.
Objetivo: Aumentar a segurança do processo de login.

Página de Cadastro:

Ação: Adicionar um sistema de verificação de email.
Objetivo: Garantir a autenticidade das contas registradas e reduzir a criação de contas falsas.

Busca e Filtros de Freelancers:

Ação: Expandir as categorias e opções de filtros disponíveis.
Objetivo: Melhorar a precisão e relevância dos resultados de busca para os empregadores.

Exibição e Busca de Vagas:

Ação: Implementar opções avançadas de filtragem de vagas.
Objetivo: Facilitar a localização de vagas altamente específicas para os freelancers.

Publicação de Vagas:

Ação: Adicionar uma funcionalidade de pré-visualização da vaga antes da publicação.
Objetivo: Permitir que os empregadores revisem e corrijam erros antes de publicar a vaga.

Integração com Sistemas de Pagamento Reais:

Ação: Trabalhar na integração da funcionalidade de pagamento com QR Code com provedores de pagamento reais, como bancos e carteiras digitais.
Objetivo: Permitir que os usuários realizem transações financeiras reais através da plataforma.

Comunicação Clara sobre Pagamento Fake:

Ação: Adicionar mensagens claras e destacadas na interface de pagamento para informar os usuários de que a função atual é apenas para testes.
Objetivo: Evitar confusão e garantir que os usuários entendam que o pagamento com QR Code é uma simulação.

# Referências

BRITISH BROADCASTING CORPORATION. **A dificuldade dos brasileiros de encontrar trabalho depois dos 50 anos: 'Pessoas nos julgam como inferiores'**. Disponível em: https://www.bbc.com/portuguese/articles/c4nvxvx8wqlo. Acesso em: 10 jun. 2024.

R7 NOTÍCIAS. **Jovens relatam dificuldades para achar trabalho: 'Pedem experiência, mas negam oportunidade'**. Disponível em: https://noticias.r7.com/sao-paulo/jovens-relatam-dificuldades-para-achar-trabalho-pedem-experiencia-mas-negam-oportunidade-01052023/. Acesso em: 10 jun. 2024.

O TEMPO. **Há vagas, mas onde estão os candidatos? Comércio de BH enfrenta dificuldades para contratar**. Disponível em: https://www.otempo.com.br/economia/2024/6/28/ha-vagas--mas-onde-estao-os-candidatos--comercio-de-bh-enfrenta-. Acesso em: 10 jun. 2024.
