import {
  Button,
  Center,
  Container,
  Flex,
  Spinner,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import Modulo from "./Modulo";

const DUMMY_MODULOS = [
  {
    id: 1,
    cateroria: "Especialização",
    capa: "https://avasus.ufrn.br/pluginfile.php/952815/course/thumbimage//PEPSUS_379x220.jpg",
    titulo: "Curso de Especialização em Saúde da Família (PEPSUS) Turma 6",
    parceiros: "UFRN / SEDIS / LAIS / PEPSUS / MS",
    resumo:
      "O curso de Especialização em Saúde da Família possui duração de 48 semanas, com carga horária total de 360h (trezentos e sessenta horas), sendo 345h (trezentos e quarenta e cinco horas) a distância, via Ambiente Virtual de Aprendizagem.  A especiali Ver mais",
    duracao: " 360h",
    matriculados: 14817,
    criado_em: "16/5/2022",
    avaliacao: "3.74",
    numero_avaliacoes: 5759,
    sobre:
      "O curso de Especialização em Saúde da Família possui duração de 48 semanas, com carga horária total de 360h (trezentos e sessenta horas), sendo 345h (trezentos e quarenta e cinco horas) a distância, via Ambiente Virtual de Aprendizagem. \nA especialização está organizada em três eixos: Eixo I – Investigação em Atenção Primária à Saúde; Eixo II – Itinerários Formativos na Atenção à Saúde; Eixo III – Gestão em Atenção Primária à Saúde. Além disso, o curso possui módulos obrigatórios e módulos optativos, que produzem um itinerário formativo.\nO tempo de dedicação a distância obrigatório é de, no mínimo, 8h (oito horas) semanais, e 15h (quinze horas) presenciais a serem cumpridas no seminário de apresentação do trabalho de conclusão de curso.\nA proposta pedagógica da especialização sustenta-se em uma base clínica e de saúde coletiva e, transversalmente ao curso: promoção da saúde e vigilância à saúde, atenção à demanda espontânea e programada, educação em saúde, gestão do cuidado e controle social, planejamento, monitoramento e avaliação com foco nos indicadores do SUS.\nSaiba mais sobre o PEPSUS em <www.pepsus.lais.ufrn.br>.",
    objetivo_geral:
      "Favorecer a consolidação e aprimoramento da Atenção Primária à Saúde como reorientadora do modelo de Atenção à Saúde por meio da qualificação para a Estratégia de Saúde da Família no cuidado, na gestão e participação popular com base clínica e de saúde coletiva consoante ao perfil de multiplicador de saberes nos egressos do Programa.",
    objetivo_especifico:
      "- Qualificar as equipes da Estratégia de Saúde da Família com foco nas mudanças positivas nas práticas nos territórios do SUS. - Fortalecer a educação permanente enquanto prática transformadora da realidade das equipes de Saúde da Família. - Instrumentalizar as equipes de Saúde da Família em ferramentas de diagnóstico, planejamento, monitoramento e avaliação com fins do aprimoramento da gestão participativa e do cuidado nos territórios. - Implementar intervenções baseadas nas situações de saúde dos territórios. - Promover e reincorporar ações de promoção à saúde e vigilância em saúde na prática diária da Estratégia de Saúde da Família. - Promover e reincorporar o trabalho em equipe e a qualificação das ferramentas de humanização na prática diária da Estratégia de Saúde da Família.",
    conteudo: [
      "Integração ao AVASUS e PEPSUS",
      "Atenção à Saúde Mental na Atenção Primária à Saúde.",
      "Políticas Públicas de Saúde e Reforma Sanitária.",
      "Atenção à Saúde do Idoso na Atenção Primária à Saúde.",
      "Atenção Primária à Saúde, Estratégia de Saúde da Família e Territorialização.",
      "Abordagem do Câncer na Atenção Primária à Saúde.",
      "Controle das Doenças Crônicas Não Transmissíveis na Atenção Primária à Saúde.",
      "Observação na Unidade de Saúde.",
      "Tópicos Especiais em Saúde da Família.",
      "Acolhimento à Demanda Espontânea e Programada.",
      "Monitoramento e Avaliação.",
      "Planejamento Reprodutivo, Pré-natal e Puerpério.",
      "Seminário de Apresentação do TCC.",
      "Atenção à Saúde da Criança: Crescimento e Desenvolvimento.",
    ],
    creditos: [
      {
        capa: "https://avasus.ufrn.br/pluginfile.php/1/instituicao/foto/5/UFRN%202.png",
        titulo: "Universidade Federal do Rio Grande do Norte",
      },
      {
        capa: "https://avasus.ufrn.br/pluginfile.php/1/instituicao/foto/17/Logotipo%20SEDIS%2015%20anos-01.png",
        titulo: "Secretaria de Educação a Distância UFRN",
      },
      {
        capa: "https://avasus.ufrn.br/pluginfile.php/1/instituicao/foto/18/coimbra_AVA-03.png",
        titulo: "Laboratório de Inovação Tecnológica em Saúde",
      },
      {
        capa: "https://avasus.ufrn.br/pluginfile.php/1/instituicao/foto/39/Pepsus.png",
        titulo: "Programa de Educação Permanente em Saúde da Família",
      },
      {
        capa: "https://avasus.ufrn.br/local/avasplugin/cursos/img/MS.png",
        titulo: "Ministério da Saúde",
      },
    ],
  },
  {
    id: 2,
    cateroria: "Especialização",
    capa: "https://avasus.ufrn.br/pluginfile.php/732574/course/thumbimage//imagem_capa_info%20em%20saude.jpg",
    titulo: "Especialização em Informática na Saúde",
    parceiros: "UFRN / SEDIS / LAIS / MS",
    resumo:
      "Trata-se do Curso de Pós-graduação Lato Sensu, criado oficialmente através da PORTARIA Nº 24/2020 - PPG (11.23) UFRN, de 15/07/2020, processo nº 23077.082514/2019-03, possui carga horária de 360 horas e foca sua atuação na área de Informática na Saúd Ver mais",
    duracao: " 360h",
    matriculados: 8660,
    criado_em: "7/12/2020",
    avaliacao: "4.83",
    numero_avaliacoes: 2251,
    sobre:
      "Trata-se do Curso de Pós-graduação Lato Sensu, criado oficialmente através da PORTARIA Nº 24/2020 - PPG (11.23) UFRN, de 15/07/2020, processo nº 23077.082514/2019-03, possui carga horária de 360 horas e foca sua atuação na área de Informática na Saúde, é ofertado na modalidade a distancia através do AVASUS - Ambiente Virtual de Ensino e Aprendizagem do Ministério da Saúde do Brasil, por meio de uma parceria entre o Laboratório de Inovação Tecnológica em Saúde (LAIS) e a Secretaria de Educação a Distância (SEDIS), ambos da Universidade Federal do Rio Grande do Norte, e o Ministério da Saúde. O programa está disponibilizado através do Departamento de Computação e Tecnologia do Centro de Ensino Superior do Seridó (DCT/CERES), e outros departamentos, também vinculados à instituição. \nO Curso de Especialização em Informática na Saúde faz parte da TED (Termo de Execução Descentralizada) – 53/2015 do Ministério da Saúde(MS), documento que estabelece que a Universidade Federal do Rio Grande do Norte - UFRN deverá oferecer 1.000 (mil) vagas para o curso de Especialização em Informática na Saúde para formação de profissionais graduados que atuam no SUS nos diferentes entes Federados ou servem e prestam trabalhos ao Ministério da Saúde, por meio de Curso de Especialização a Distância na Modalidade Semipresencial. Desta forma, tem público alvo profissionais graduados e vinculados (seja a nível federal, estadual ou municipal) ao Ministério da Saúde (MS), Sistema Único de Saúde (SUS), Empresa Brasileira de Serviços Hospitalares (EBSERH), ou ainda vinculados a Universidade Federal do Rio Grande do Norte (UFRN), observando o Art. 17 da resolução Nº 197/2013 – CONSEPE de dezembro de 2013.",
    objetivo_geral:
      "O curso visa capacitar profissionais relacionados ao Ministério da Saúde e do Sistema Único de Saúde - SUS, por meio do conhecimento e identificação das ferramentas tecnológicas existentes, da análise e seleção de tecnologias para o uso nos ambientes de trabalho.",
    conteudo: [null, null, null, null],
    creditos: [
      {
        capa: "https://avasus.ufrn.br/pluginfile.php/1/instituicao/foto/5/UFRN%202.png",
        titulo: "Universidade Federal do Rio Grande do Norte",
      },
      {
        capa: "https://avasus.ufrn.br/pluginfile.php/1/instituicao/foto/17/Logotipo%20SEDIS%2015%20anos-01.png",
        titulo: "Secretaria de Educação a Distância UFRN",
      },
      {
        capa: "https://avasus.ufrn.br/pluginfile.php/1/instituicao/foto/18/coimbra_AVA-03.png",
        titulo: "Laboratório de Inovação Tecnológica em Saúde",
      },
      {
        capa: "https://avasus.ufrn.br/local/avasplugin/cursos/img/MS.png",
        titulo: "Ministério da Saúde",
      },
    ],
  },
  {
    id: 3,
    cateroria: "Módulo de extensão",
    capa: "https://avasus.ufrn.br/pluginfile.php/932684/course/thumbimage//Imagem_capa.png",
    titulo: "Sífilis: Vigilância Epidemiológica",
    parceiros:
      "UFRN / SEDIS / LAIS / CEIS 20 / UC / SESAP / EBSERH / Governo do RN / UaB-PT / MS",
    resumo:
      "O módulo Sífilis: Vigilância Epidemiológica tem como objetivo promover uma atualização dos profissionais de saúde acerca dos conceitos essenciais nessa área de conhecimento, com foco na sífilis. Este módulo traz uma revisão de conceitos relativos ao Ver mais",
    duracao: " 30h",
    matriculados: 20530,
    criado_em: "19/4/2022",
    avaliacao: "3.59",
    numero_avaliacoes: 4508,
    sobre:
      "O módulo Sífilis: Vigilância Epidemiológica tem como objetivo promover uma atualização dos profissionais de saúde acerca dos conceitos essenciais nessa área de conhecimento, com foco na sífilis. Este módulo traz uma revisão de conceitos relativos aos sistemas de notificação e fluxo da informação e, também, acerca do boletim epidemiológico com sua análise crítica. Além disso, trata da importância da interação entre as áreas da vigilância epidemiológica e atenção à saúde em seus distintos níveis de cuidado na Rede de Atenção à Saúde (RAS). O módulo se propõe, ainda, a fornecer subsídios que podem embasar a conduta de profissionais para a realização dos processos de identificação e investigação de casos epidemiológicos de sífilis, a notificação compulsória, a alimentação regular e a retroalimentação das bases de dados, de forma a prover condições para o planejamento das ações de saúde a ser implementadas e o controle de determinantes e condicionantes dos agravos de notificação compulsória.",
    objetivo_geral:
      "Proporcionar conhecimentos para médicos, enfermeiros e demais profissionais de saúde acerca da Vigilância Epidemiológica e sua integração com a Atenção em saúde, com foco na sífilis adquirida, congênita e em gestantes.",
    conteudo: [
      "Aula 1:  Conhecendo o Sistema Nacional de Vigilância Epidemiológica (SNVE)",
      "Aula 2: Definição epidemiológica de caso de sífilis",
      "Aula 3: Utilizando a Ficha de notificação",
      "Aula 4: Principais sistemas de informação para busca ativa de casos da vigilância das sífilis.",
      " ",
      "Aula 1: O boletim epidemiológico como instrumento de informação e fomento para a   implementação de estratégias no controle da sífilis. ",
      "Aula 2: Interagindo com o boletim epidemiológico da sífilis",
      " ",
      "Aula 1: Qualificando a relação entre as áreas de vigilância epidemiológica e atenção à   saúde",
      "Aula 2: Fortalecendo o processo de trabalho na atenção básica à luz dos pressupostos da vigilância epidemiológica.",
    ],
    creditos: [
      {
        capa: "https://avasus.ufrn.br/pluginfile.php/1/instituicao/foto/5/UFRN%202.png",
        titulo: "Universidade Federal do Rio Grande do Norte",
      },
      {
        capa: "https://avasus.ufrn.br/pluginfile.php/1/instituicao/foto/17/Logotipo%20SEDIS%2015%20anos-01.png",
        titulo: "Secretaria de Educação a Distância UFRN",
      },
      {
        capa: "https://avasus.ufrn.br/pluginfile.php/1/instituicao/foto/18/coimbra_AVA-03.png",
        titulo: "Laboratório de Inovação Tecnológica em Saúde",
      },
      {
        capa: "https://avasus.ufrn.br/pluginfile.php/1/instituicao/foto/41/Empresa%20Brasileira%20de%20Servic%CC%A7os%20Hospitalares.png",
        titulo: "Empresa Brasileira de Serviços Hospitalares",
      },
      {
        capa: "https://avasus.ufrn.br/pluginfile.php/1/instituicao/foto/78/aberta.png",
        titulo: "Universidade Aberta de Portugal",
      },
      {
        capa: "https://avasus.ufrn.br/pluginfile.php/1/instituicao/foto/93/RN%20SESAP%202020.png",
        titulo: "Secretaria de Saúde Pública do Rio Grande do Norte",
      },
      {
        capa: "https://avasus.ufrn.br/pluginfile.php/1/instituicao/foto/104/coimbra_AVA-10.png",
        titulo: " Universidade de Coimbra",
      },
      {
        capa: "https://avasus.ufrn.br/pluginfile.php/1/instituicao/foto/111/CEIS%2020_Prancheta%201.png",
        titulo: "Centro de Estudos Interdisciplinares do Século XX",
      },
      {
        capa: "https://avasus.ufrn.br/pluginfile.php/1/instituicao/foto/112/Governo%20RN%202019-2022%20%281%29.png",
        titulo: "Governo do RN",
      },
      {
        capa: "https://avasus.ufrn.br/local/avasplugin/cursos/img/MS.png",
        titulo: "Ministério da Saúde",
      },
    ],
  },
];

const FilterStates = {
  POPULAR: "POPULAR",
  RATING: "RATING",
  RECENT: "RECENT",
};

const ModulosEducacionais = (props) => {
  const [modulos, setModulos] = useState([]);
  const [filter, setFilter] = useState(FilterStates.RATING);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    if (filter === FilterStates.POPULAR) {
      axios
        .get(
          "http://localhost:3004/cursos?_sort=matriculados&_order=desc&_page=3&_limit=3"
        )
        .then((response) => {
          setModulos([...response.data]);
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
        });
    }
    if (filter === FilterStates.RATING) {
      axios
        .get(
          "http://localhost:3004/cursos?_sort=avaliacao&_order=desc&_page=3&_limit=3"
        )
        .then((response) => {
          setModulos([...response.data]);
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
        });
    }
    if (filter === FilterStates.RECENT) {
      axios
        .get(
          "http://localhost:3004/cursos?_sort=criado_em&_order=desc&_page=3&_limit=3"
        )
        .then((response) => {
          setModulos([...response.data]);
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
        });
    }
  }, [filter]);

  const handleFilterPopular = (filter) => {
    setFilter(FilterStates.POPULAR);
  };

  const handleFilterRating = (filter) => {
    setFilter(FilterStates.RATING);
  };

  const handleFilterRecent = (filter) => {
    setFilter(FilterStates.RECENT);
  };

  return (
    <>
      <Flex>
        <Button
          margin={".5rem"}
          backgroundColor={"white"}
          onClick={handleFilterPopular}
        >
          Mais populares
        </Button>
        <Button
          margin={".5rem"}
          backgroundColor={"white"}
          onClick={handleFilterRating}
        >
          Mais bem avaliados
        </Button>
        <Button
          margin={".5rem"}
          backgroundColor={"white"}
          onClick={handleFilterRecent}
        >
          Mais recentes
        </Button>
      </Flex>
      {isLoading && (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      )}
      {!isLoading && (
        <ul>
          {modulos.map((modulo) => {
            return (
              <Container
                maxW="60rem"
                bg="gray.100"
                borderRadius={"2rem"}
                padding={"1rem"}
                margin={"1rem"}
                key={modulo.id}
              >
                <Modulo
                  id={modulo.id}
                  capa={modulo.capa}
                  titulo={modulo.titulo}
                  matriculados={modulo.matriculados}
                  duracao={modulo.duracao}
                  avaliacao={modulo.avaliacao}
                />
              </Container>
            );
          })}
          <Center>
            <Button variant="solid" bgColor={"#707070"} textColor={"#fff"}>
              <Link href="/modulos-educacionais">Ver Mais</Link>
            </Button>
          </Center>
        </ul>
      )}
    </>
  );
};

export default ModulosEducacionais;
