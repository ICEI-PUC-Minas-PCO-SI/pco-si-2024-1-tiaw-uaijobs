 HEAD:docs/02 - relatório técnico/Relatorio Tecnico - TEMPLATE.md
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

![imagem](https://raw.githubusercontent.com/ICEI-PUC-Minas-PCO-SI/pco-si-2024-1-tiaw-uaijobs/Documenta%C3%A7%C3%B5es/docs/02%20-%20relat%C3%B3rio%20t%C3%A9cnico/images/Base_Elementos.jpg)
alt: Imagem Wireframe Modelo.


### Tela - Página Inicial

Essa tela representa o que o usuário encontrará assim que carregar a página pela primeira vez. Nela podemos identificar alguns elementos importantes: 
 
* **Botão de login**: Guia o usuário para a tela de login;
 
* **Botão de cadastro**: Guia o usuário para a tela de cadastro;
 
* **Botão Freelancers disponíveis**: Esse botão guia o usuário até uma página que exibe todos os usuários cadastrados na plataforma que estão disponíveis para realizar serviços.

![imagem](https://raw.githubusercontent.com/ICEI-PUC-Minas-PCO-SI/pco-si-2024-1-tiaw-uaijobs/Documenta%C3%A7%C3%B5es/docs/02%20-%20relat%C3%B3rio%20t%C3%A9cnico/images/P%C3%A1gina_Inicial.jpg)
alt: Imagem Tela Página inicial.


### Tela - Página de Login

Nesse ambiente, o usuário poderá realizar seu login na página.

![imagem](https://raw.githubusercontent.com/ICEI-PUC-Minas-PCO-SI/pco-si-2024-1-tiaw-uaijobs/Documenta%C3%A7%C3%B5es/docs/02%20-%20relat%C3%B3rio%20t%C3%A9cnico/images/P%C3%A1gina_Login.jpg)
alt: Imagem Tela Página de Login.


### Tela - Página de Cadastro

Nessa página o usuário poderá realizar seu cadastro caso ainda não possua login no sistema.

![imagem](https://raw.githubusercontent.com/ICEI-PUC-Minas-PCO-SI/pco-si-2024-1-tiaw-uaijobs/Documenta%C3%A7%C3%B5es/docs/02%20-%20relat%C3%B3rio%20t%C3%A9cnico/images/P%C3%A1gina_Cadastro.jpg)
alt: Imagem Tela Página inicial.


### Tela - Freelancers Disponíveis

Na tela de Freelancers Disponíveis o usuário poderá localizar todos os demais usuários disponíveis para executar serviços na plataforma. Ele poderá usar uma serie de filtros para achar o freelancer ideal para seu serviço, podendo ainda, abrir o perfil deste Freelancer e acessar suas avaliações e detalhes de contato.

![imagem](https://raw.githubusercontent.com/ICEI-PUC-Minas-PCO-SI/pco-si-2024-1-tiaw-uaijobs/Documenta%C3%A7%C3%B5es/docs/02%20-%20relat%C3%B3rio%20t%C3%A9cnico/images/Freelancers_Dispon%C3%ADveis.jpg)
alt: Imagem Tela Freelancers Disponíveis.


### Tela - Página do Freelancer

Nessa tela o usuário poderá ter uma visão mais detalhada de um freelancer em especifico, tal como, suas avaliações e um breve resumo do usuário ao qual ele deseja contratar.

![imagem](https://raw.githubusercontent.com/ICEI-PUC-Minas-PCO-SI/pco-si-2024-1-tiaw-uaijobs/Documenta%C3%A7%C3%B5es/docs/02%20-%20relat%C3%B3rio%20t%C3%A9cnico/images/P%C3%A1gina_Freelancer.jpg)
alt: Imagem Tela Página do Freelancer.


### Tela - Vagas em Aberto

Essa página é destinada aos Freelancers, visto que expõe as vagas cadastradas por contratantes na plataforma. O usuário tem acesso a um breve resumo da vaga, contendo informações como: função, remuneração, data, etc. Além disso, existe um filtro de busca na barra horizontal da página, permitindo ao usuário navegar pelas vagas que desejar, deixando visível apenas as que atenderem seus requisitos.

![imagem](https://raw.githubusercontent.com/ICEI-PUC-Minas-PCO-SI/pco-si-2024-1-tiaw-uaijobs/Documenta%C3%A7%C3%B5es/docs/02%20-%20relat%C3%B3rio%20t%C3%A9cnico/images/Vagas_Aberto.jpg)
alt: Imagem Tela Vagas em aberto.


### Tela - Detalhe da Vaga

O usuário, ao clicar em uma vaga na página anterior, pode acessar todas as informações por completo, bem como manifestar seu interesse por ela.

![imagem](https://raw.githubusercontent.com/ICEI-PUC-Minas-PCO-SI/pco-si-2024-1-tiaw-uaijobs/Documenta%C3%A7%C3%B5es/docs/02%20-%20relat%C3%B3rio%20t%C3%A9cnico/images/Vaga.jpg)
alt: Imagem Tela Vaga.


### Tela - Como o UaiJobs funciona?

Aqui o usuário tem acesso a um vídeo de apresentação de como a plataforma funciona, além de informações adicionais como um campo de anúncios e patrocínios.

![imagem](https://raw.githubusercontent.com/ICEI-PUC-Minas-PCO-SI/pco-si-2024-1-tiaw-uaijobs/Documenta%C3%A7%C3%B5es/docs/02%20-%20relat%C3%B3rio%20t%C3%A9cnico/images/Como_UaiJobs_Funciona.jpg)
alt: Imagem Tela Como o UaiJobs funciona?.


### Tela - Publicar Vaga

Essa é a seção em que um dono de um serviço pode divulgar sua vaga em busca de um trabalhador para realizá-la. Nela há um formulário obrigatório ao qual o contratante deve preencher. 

![imagem](https://raw.githubusercontent.com/ICEI-PUC-Minas-PCO-SI/pco-si-2024-1-tiaw-uaijobs/Documenta%C3%A7%C3%B5es/docs/02%20-%20relat%C3%B3rio%20t%C3%A9cnico/images/Publicar_Vaga.jpg)
alt: Imagem Tela Publicar Vaga.



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

### Linguagens de Programação

1. **HTML (HyperText Markup Language)**
   - **Descrição**: Utilizado para estruturar o conteúdo do site.
   - **Aplicação**: Todas as páginas do site são criadas usando HTML para definir a estrutura básica dos elementos.

2. **CSS (Cascading Style Sheets)**
   - **Descrição**: Utilizado para estilizar e melhorar a aparência visual do site.
   - **Aplicação**: CSS é utilizado para aplicar estilos personalizados às páginas, garantindo um design atraente e consistente.

3. **JavaScript**
   - **Descrição**: Linguagem de programação usada para adicionar interatividade e lógica ao site.
   - **Aplicação**: JavaScript é implementado para funcionalidades dinâmicas como validação de formulários, manipulação do DOM, e comunicação assíncrona com o servidor.

### Frameworks e Bibliotecas

1. **Bootstrap**
   - **Descrição**: Framework front-end para desenvolver interfaces responsivas.
   - **Aplicação**: Bootstrap é utilizado para criar interfaces dinâmicas e responsivas, garantindo a compatibilidade do design em diferentes dispositivos.

2. **API do MapBox**
   - **Descrição**: Serviço de geolocalização.
   - **Aplicação**: Utilizado para fornecer serviços de localização, facilitando a busca de vagas próximas ao usuário.

### IDEs de Desenvolvimento

1. **Visual Studio Code (VS Code)**
   - **Descrição**: Ambiente de desenvolvimento integrado.
   - **Aplicação**: Utilizado para escrever, depurar e testar o código, proporcionando um ambiente de desenvolvimento eficiente.

### Ferramentas de Controle de Versão

1. **GitHub**
   - **Descrição**: Plataforma de hospedagem de código e controle de versão.
   - **Aplicação**: Utilizado para versionamento de código e colaboração entre os membros da equipe, permitindo um desenvolvimento organizado e colaborativo.

### Prototipagem e Design

1. **Figma**
   - **Descrição**: Ferramenta de design de interface e prototipagem.
   - **Aplicação**: Utilizado para criar wireframes e protótipos interativos, facilitando a visualização do design antes da implementação.

2. **Miro**
   - **Descrição**: Plataforma de colaboração visual.
   - **Aplicação**: Utilizado para brainstorming e design thinking, ajudando na geração de ideias e planejamento do projeto.


> Descreva aqui qual(is) tecnologias você vai usar para resolver o seu
> problema, ou seja, implementar a sua solução. Liste todas as
> tecnologias envolvidas, linguagens a serem utilizadas, serviços web,
> frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.
> Apresente também uma figura explicando como as tecnologias estão
> relacionadas ou como uma interação do usuário com o sistema vai ser
> conduzida, por onde ela passa até retornar uma resposta ao usuário.
> 
> Inclua os diagramas de User Flow, esboços criados pelo grupo
> (stoyboards), além dos protótipos de telas (wireframes). Descreva cada
> item textualmente comentando e complementando o que está apresentado
> nas imagens.

## Arquitetura da solução

......  COLOQUE AQUI O SEU TEXTO E O DIAGRAMA DE ARQUITETURA .......

> Inclua um diagrama da solução e descreva os módulos e as tecnologias
> que fazem parte da solução. Discorra sobre o diagrama.
> 
> **Exemplo do diagrama de Arquitetura**:
> 
> ![Exemplo de Arquitetura](images/arquitetura-exemplo.png)


# Avaliação da Aplicação

Para garantir que a aplicação atende aos requisitos e funciona corretamente, diversos cenários de teste foram planejados e executados.

**Cenários de Teste:**
* Teste de Cadastro de Usuário: Verificar se os usuários podem se cadastrar como freelancers ou empregadores e se todos os campos obrigatórios são validados corretamente.
* Teste de Busca de Vagas: Validar a funcionalidade de busca, incluindo filtros por localização, tipo de trabalho e remuneração.
* Teste de Sistema de Avaliação: Avaliar se o sistema de feedback funciona corretamente após a conclusão de um trabalho.
* Teste de Responsividade: Garantir que a aplicação é responsiva e funciona bem em diferentes dispositivos e tamanhos de tela.

> Apresente os cenários de testes utilizados na realização dos testes da
> sua aplicação. Escolha cenários de testes que demonstrem os requisitos
> sendo satisfeitos.

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

......  COLOQUE AQUI O SEU TEXTO ......

> Discorra sobre os resultados do teste. Ressaltando pontos fortes e
> fracos identificados na solução. Comente como o grupo pretende atacar
> esses pontos nas próximas iterações. Apresente as falhas detectadas e
> as melhorias geradas a partir dos resultados obtidos nos testes.


# Referências

INSTITUTO BRASILEIRO DE GEOGRAFIA E ESTATÍSTICA. **Pesquisa Nacional por Amostra de Domicílios Contínua - PNAD Contínua.** Disponível em: https://www.ibge.gov.br/estatisticas/sociais/trabalho/9171-pesquisa-nacional-por-amostra-de-domicilios-continua-trimestral.html. Acesso em: 10 jun. 2024.

INSTITUTO BRASILEIRO DE GEOGRAFIA E ESTATÍSTICA. **161,6 milhões de pessoas com 10 anos ou mais de idade utilizaram a Internet no país, em 2022.** Disponível em: https://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38307-161-6-milhoes-de-pessoas-com-10-anos-ou-mais-de-idade-utilizaram-a-internet-no-pais-em-2022. Acesso em: 15 mar. 2024.

INSTITUTO BRASILEIRO DE GEOGRAFIA E ESTATÍSTICA. **Divulgação trimestral.** Disponível em: https://www.ibge.gov.br/estatisticas/sociais/populacao/9173-pesquisa-nacional-por-amostra-de-domicilios-continua-trimestral.html?. Acesso em: 3 abr. 2024.

INSTITUTO BRASILEIRO DE GEOGRAFIA E ESTATÍSTICA. **Sistema IBGE de Recuperação Automática - SIDRA.** Disponível em: https://sidra.ibge.gov.br/home/pnadct/brasil. Acesso em: 21 mar. 2024.

> Inclua todas as referências (livros, artigos, sites, etc) utilizados
> no desenvolvimento do trabalho.
> 
> **Links Úteis**:
> - [Formato ABNT](https://www.normastecnicas.com/abnt/trabalhos-academicos/referencias/)
=======
# Informações do Projeto
`TÍTULO DO PROJETO`  

......  COLOQUE AQUI O SEU TEXTO ......

`CURSO` 

......  COLOQUE AQUI O SEU TEXTO ......

## Participantes

......  COLOQUE AQUI O SEU TEXTO ......

> Inclua a lista dos membros da equipe com seus nomes completos.
>
> Os membros do grupo são: 
> - Fulano da Silva
> - Ciclano Albuquerque

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
  - [Personas, Empatia e Proposta de Valor](#personas-empatia-e-proposta-de-valor)
  - [Histórias de Usuários](#histórias-de-usuários)
  - [Requisitos](#requisitos)
    - [Requisitos Funcionais](#requisitos-funcionais)
    - [Requisitos não Funcionais](#requisitos-não-funcionais)
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

## Problema

......  COLOQUE AQUI O SEU TEXTO ......

> Nesse momento você deve apresentar o problema que a sua aplicação deve
> resolver. No entanto, não é a hora de comentar sobre a aplicação.
> Descreva também o contexto em que essa aplicação será usada, se
> houver: empresa, tecnologias, etc. Novamente, descreva apenas o que de
> fato existir, pois ainda não é a hora de apresentar requisitos
> detalhados ou projetos.
>
> Nesse momento, o grupo pode optar por fazer uso
> de ferramentas como Design Thinking, que permite um olhar de ponta a
> ponta para o problema.
>
> **Links Úteis**:
> - [Objetivos, Problema de pesquisa e Justificativa](https://medium.com/@versioparole/objetivos-problema-de-pesquisa-e-justificativa-c98c8233b9c3)
> - [Matriz Certezas, Suposições e Dúvidas](https://medium.com/educa%C3%A7%C3%A3o-fora-da-caixa/matriz-certezas-suposi%C3%A7%C3%B5es-e-d%C3%BAvidas-fa2263633655)
> - [Brainstorming](https://www.euax.com.br/2018/09/brainstorming/)

## Objetivos

......  COLOQUE AQUI O SEU TEXTO ......

> Aqui você deve descrever os objetivos do trabalho indicando que o
> objetivo geral é desenvolver um software para solucionar o problema
> apresentado acima. Apresente também alguns (pelo menos 2) objetivos
> específicos dependendo de onde você vai querer concentrar a sua
> prática investigativa, ou como você vai aprofundar no seu trabalho.
> 
> **Links Úteis**:
> - [Objetivo geral e objetivo específico: como fazer e quais verbos utilizar](https://blog.mettzer.com/diferenca-entre-objetivo-geral-e-objetivo-especifico/)

## Justificativa

......  COLOQUE AQUI O SEU TEXTO ......

> Descreva a importância ou a motivação para trabalhar com esta aplicação
> que você escolheu. Indique as razões pelas quais você escolheu seus
> objetivos específicos ou as razões para aprofundar em certos aspectos
> do software.
> 
> O grupo de trabalho pode fazer uso de questionários, entrevistas e
> dados estatísticos, que podem ser apresentados, com o objetivo de
> esclarecer detalhes do problema que será abordado pelo grupo.
>
> **Links Úteis**:
> - [Como montar a justificativa](https://guiadamonografia.com.br/como-montar-justificativa-do-tcc/)

## Público-Alvo

......  COLOQUE AQUI O SEU TEXTO ......

> Descreva quem serão as pessoas que usarão a sua aplicação indicando os
> diferentes perfis. O objetivo aqui não é definir quem serão os
> clientes ou quais serão os papéis dos usuários na aplicação. A ideia
> é, dentro do possível, conhecer um pouco mais sobre o perfil dos
> usuários: conhecimentos prévios, relação com a tecnologia, relações
> hierárquicas, etc.
>
> Adicione informações sobre o público-alvo por meio de uma descrição
> textual, ou diagramas de personas, mapa de stakeholders, ou como o
> grupo achar mais conveniente.
> 
> **Links Úteis**:
> - [Público-alvo: o que é, tipos, como definir seu público e exemplos](https://klickpages.com.br/blog/publico-alvo-o-que-e/)
> - [Qual a diferença entre público-alvo e persona?](https://rockcontent.com/blog/diferenca-publico-alvo-e-persona/)
 
# Especificações do Projeto

......  COLOQUE AQUI O SEU TEXTO ......

> Apresente uma visão geral do que será abordado nesta parte do
> documento, enumerando as técnicas e/ou ferramentas utilizadas para
> realizar a especificações do projeto

## Personas, Empatia e Proposta de Valor

......  COLOQUE AQUI O SEU TEXTO ......


> Relacione as personas identificadas no seu projeto, os respectivos mapas de empatia e 
> mapas da proposta de valor. Lembre-se que você deve ser enumerar e descrever precisamente 
> e de forma personalizada todos os principais envolvidos com a solução almeja. 
> 
> Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina
> e/ou nos seguintes links:
>
> **Links Úteis**:
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Como fazer um mapa de empatia - Vídeo](https://www.youtube.com/watch?v=JlKHGpVoA2Y)
> - [Canvas da Proposta de Valor](https://analistamodelosdenegocios.com.br/canvas-da-proposta-de-valor/)
> 
> 
> **Exemplo de Persona**
> 
> ![Exemplo de Persona](images/persona.png)
> 
> Fonte: [Como criar uma persona para o seu negócio](https://raissaviegas.com.br/como-criar-uma-persona/)
>
> **Exemplo de Proposta de Valor**
> ![Exemplo da Proposta de Valor](images/proposta_valor.png)


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

> Apresente aqui as histórias de usuário que são relevantes para o
> projeto de sua solução. As Histórias de Usuário consistem em uma
> ferramenta poderosa para a compreensão e elicitação dos requisitos
> funcionais e não funcionais da sua aplicação. Se possível, agrupe as
> histórias de usuário por contexto, para facilitar consultas
> recorrentes à essa parte do documento.
>
> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA | 
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

> Com base nas Histórias de Usuário, enumere os requisitos da sua
> solução. Classifique esses requisitos em dois grupos:
>
> - [Requisitos Funcionais (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
>   correspondem a uma funcionalidade que deve estar presente na
>   plataforma (ex: cadastro de usuário).
>
> - [Requisitos Não Funcionais (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
>   correspondem a uma característica técnica, seja de usabilidade,
>   desempenho, confiabilidade, segurança ou outro (ex: suporte a
>   dispositivos iOS e Android).
>
> Lembre-se que cada requisito deve corresponder à uma e somente uma
> característica alvo da sua solução. Além disso, certifique-se de que
> todos os aspectos capturados nas Histórias de Usuário foram cobertos.
> 
> **Links Úteis**:
> 
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


> Enumere as restrições à sua solução. Lembre-se de que as restrições
> geralmente limitam a solução candidata.
> 
> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)


# Projeto de Interface

......  COLOQUE AQUI O SEU TEXTO DE INTRODUÇÃO ......

> Apresente as principais interfaces da solução. Discuta como 
> foram elaboradas de forma a atender os requisitos funcionais, não
> funcionais e histórias de usuário abordados nas [Especificações do
> Projeto](#especificações-do-projeto).

## User Flow

......  INCLUA AQUI O DIAGRAMA COM O FLUXO DO USUÁRIO NA APLICAÇÃO ......

> Fluxo de usuário (User Flow) é uma técnica que permite ao desenvolvedor
> mapear todo fluxo de telas do site ou app. Essa técnica funciona
> para alinhar os caminhos e as possíveis ações que o usuário pode
> fazer junto com os membros de sua equipe.
>
> **Links Úteis**:
> - [User Flow: O Quê É e Como Fazer?](https://medium.com/7bits/fluxo-de-usu%C3%A1rio-user-flow-o-que-%C3%A9-como-fazer-79d965872534)
> - [User Flow vs Site Maps](http://designr.com.br/sitemap-e-user-flow-quais-as-diferencas-e-quando-usar-cada-um/)
> - [Top 25 User Flow Tools & Templates for Smooth](https://www.mockplus.com/blog/post/user-flow-tools)
>
> **Exemplo**:
> 
> ![Exemplo de UserFlow](images/userflow.jpg)


## Wireframes

......  INCLUA AQUI OS WIREFRAMES DAS TELAS DA APLICAÇÃO COM UM BREVE DESCRITIVO ......

> Wireframes são protótipos das telas da aplicação usados em design de interface para sugerir a
> estrutura de um site web e seu relacionamentos entre suas
> páginas. Um wireframe web é uma ilustração semelhante ao
> layout de elementos fundamentais na interface.
> 
> **Links Úteis**:
> - [Ferramentas de Wireframes](https://rockcontent.com/blog/wireframes/)
> - [Figma](https://www.figma.com/)
> - [Adobe XD](https://www.adobe.com/br/products/xd.html#scroll)
> - [MarvelApp](https://marvelapp.com/developers/documentation/tutorials/)
> 
> **Exemplo**:
> 
> ![Exemplo de Wireframe](images/wireframe-example.png)


# Metodologia
> Coloque detalhes sobre o processo de Design Thinking e a implementação do Framework Scrum seguido
> pelo grupo. O grupo poderá fazer uso de ferramentas on-line para acompanhar
> o andamento do projeto, a execução das tarefas e o status de desenvolvimento
> da solução.
> 
> **Links Úteis**:
> - [Tutorial Trello](https://trello.com/b/8AygzjUA/tutorial-trello)
> - [Gestão ágil de projetos com o Trello](https://www.youtube.com/watch?v=1o9BOMAKBRE)
> - [Gerência de projetos - Trello com Scrum](https://www.youtube.com/watch?v=DHLA8X_ujwo)
> - [Tutorial Slack](https://slack.com/intl/en-br/)

## Divisão de Papéis

> A equipe escolheu utilizar metodologias ágeis, tendo o ScrumBan como base para definição do processo de desenvolvimento. Metodologia essa que foca na organização de tarefas e na otimização das mesmas.
> O Projeto Scrumban é organizado em um quadro do tipo Kanban. Denominando tarefas para cada membro, sendo essas escritas em cartões distribuídos entre diversas colunas correspondentes aos estágios das tarefas. 
> À medida que os membros das equipes trabalham nelas, os cartões são movidos para a coluna correspondente ao estágio atual de cada tarefa.
> Essa metódologia foi escolhida por se fácil de se usar, ter uma boa otimização do fluxo de trabalho, uma boa consistência e por propor uma melhora constante

> - ![image](https://github.com/ICEI-PUC-Minas-PCO-SI/pco-si-2024-1-tiaw-uaijobs/assets/129126008/eb9c3700-5f67-46d2-b182-c3b30db897da)

 Para o processo de Design Thinking, todos os membros foram incentivados a contribuir com ideias das mais diversas, adquirindo uma variedade de linhas de pensamento e de recursos que poderiam ou não ser usados.
 ![image](https://github.com/ICEI-PUC-Minas-PCO-SI/pco-si-2024-1-tiaw-uaijobs/assets/129126008/d6aef4a7-9acb-49b2-bbbc-50e819e49237) 
 Como vemos na imagem acima, após a contribuição com este leque de opções e ideias, aplicamos uma priorização das tarefas numa relação de custo x impacto, deixando claro o que poderia ser mais viável ou não.

Scrum Master: Thiago Moreira
Product Owner: Vitor Prates
Equipe de Desenvolvimento
Guilherme De Oliveira (Desenvolvedor Front End)
Luis H. Sampaio (Desenvolvedor Back End)
Igor Fernandes (Analista de Negócios)
Victor Schneider (Designer)




## Ferramentas

......  COLOQUE AQUI O SEU TEXTO - SIGA O EXEMPLO DA TABELA ABAIXO  ......

| Ambiente  | Plataforma              |Link de Acesso |
|-----------|-------------------------|---------------|
|Processo de Design Thinkgin  | Miro |  https://miro.com/XXXXXXX | 
|Repositório de código | GitHub | https://github.com/XXXXXXX | 
|Hospedagem do site | Heroku |  https://XXXXXXX.herokuapp.com | 
|Protótipo Interativo | MavelApp ou Figma | https://figma.com/XXXXXXX | 

>
> Liste as ferramentas empregadas no desenvolvimento do
> projeto, justificando a escolha delas, sempre que possível.
> 
> As ferramentas empregadas no projeto são:
> 
> - Editor de código.
> - Ferramentas de comunicação
> - Ferramentas de diagramação
> - Plataforma de hospedagem
> 
> O editor de código foi escolhido porque ele possui uma integração com o
> sistema de versão. As ferramentas de comunicação utilizadas possuem
> integração semelhante e por isso foram selecionadas. Por fim, para criar
> diagramas utilizamos essa ferramenta por melhor captar as
> necessidades da nossa solução.
> 
> **Links Úteis - Hospedagem**:
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Crie seu Site com o HostGator](https://www.hostgator.com.br/como-publicar-seu-site)
> - [GoDady](https://br.godaddy.com/how-to)
> - [GitHub Pages](https://pages.github.com/)

## Controle de Versão

......  COLOQUE AQUI O SEU TEXTO ......

> Discuta como a configuração do projeto foi feita na ferramenta de
> versionamento escolhida. Exponha como a gerência de tags, merges,
> commits e branchs é realizada. Discuta como a gerência de issues foi
> realizada.
> A ferramenta de controle de versão adotada no projeto foi o
> [Git](https://git-scm.com/), sendo que o [Github](https://github.com)
> foi utilizado para hospedagem do repositório `upstream`.
> 
> O projeto segue a seguinte convenção para o nome de branchs:
> 
> - `master`: versão estável já testada do software
> - `unstable`: versão já testada do software, porém instável
> - `testing`: versão em testes do software
> - `dev`: versão de desenvolvimento do software
> 
> Quanto à gerência de issues, o projeto adota a seguinte convenção para
> etiquetas:
> 
> - `bugfix`: uma funcionalidade encontra-se com problemas
> - `enhancement`: uma funcionalidade precisa ser melhorada
> - `feature`: uma nova funcionalidade precisa ser introduzida
>
> **Links Úteis**:
> - [Tutorial GitHub](https://guides.github.com/activities/hello-world/)
> - [Git e Github](https://www.youtube.com/playlist?list=PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA)
> - [5 Git Workflows & Branching Strategy to deliver better code](https://zepel.io/blog/5-git-workflows-to-improve-development/)
>
> **Exemplo - GitHub Feature Branch Workflow**:
>
> ![Exemplo de Wireframe](images/Github-Workflow.png)

# **############## SPRINT 1 ACABA AQUI #############**


# Projeto da Solução

......  COLOQUE AQUI O SEU TEXTO ......

## Tecnologias Utilizadas

......  COLOQUE AQUI O SEU TEXTO ......

> Descreva aqui qual(is) tecnologias você vai usar para resolver o seu
> problema, ou seja, implementar a sua solução. Liste todas as
> tecnologias envolvidas, linguagens a serem utilizadas, serviços web,
> frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.
> Apresente também uma figura explicando como as tecnologias estão
> relacionadas ou como uma interação do usuário com o sistema vai ser
> conduzida, por onde ela passa até retornar uma resposta ao usuário.
> 
> Inclua os diagramas de User Flow, esboços criados pelo grupo
> (stoyboards), além dos protótipos de telas (wireframes). Descreva cada
> item textualmente comentando e complementando o que está apresentado
> nas imagens.

## Arquitetura da solução

......  COLOQUE AQUI O SEU TEXTO E O DIAGRAMA DE ARQUITETURA .......

> Inclua um diagrama da solução e descreva os módulos e as tecnologias
> que fazem parte da solução. Discorra sobre o diagrama.
> 
> **Exemplo do diagrama de Arquitetura**:
> 
> ![Exemplo de Arquitetura](images/arquitetura-exemplo.png)


# Avaliação da Aplicação

......  COLOQUE AQUI O SEU TEXTO ......

> Apresente os cenários de testes utilizados na realização dos testes da
> sua aplicação. Escolha cenários de testes que demonstrem os requisitos
> sendo satisfeitos.

## Plano de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Enumere quais cenários de testes foram selecionados para teste. Neste
> tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo
> de usuários que foi escolhido para participar do teste e as
> ferramentas utilizadas.
> 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)

## Ferramentas de Testes (Opcional)

......  COLOQUE AQUI O SEU TEXTO ......

> Comente sobre as ferramentas de testes utilizadas.
> 
> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)

## Registros de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Discorra sobre os resultados do teste. Ressaltando pontos fortes e
> fracos identificados na solução. Comente como o grupo pretende atacar
> esses pontos nas próximas iterações. Apresente as falhas detectadas e
> as melhorias geradas a partir dos resultados obtidos nos testes.


# Referências

......  COLOQUE AQUI O SEU TEXTO ......

> Inclua todas as referências (livros, artigos, sites, etc) utilizados
> no desenvolvimento do trabalho.
> 
> **Links Úteis**:
> - [Formato ABNT](https://www.normastecnicas.com/abnt/trabalhos-academicos/referencias/)
> 576e4073eb686b7caee5801aac8f95491eb4d605:docs/relatorio/Relatorio Tecnico - TEMPLATE.md
> - [Referências Bibliográficas da ABNT](https://comunidade.rockcontent.com/referencia-bibliografica-abnt/)
