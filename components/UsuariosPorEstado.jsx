import Chart from "react-google-charts";

const { Container, Heading, Text } = require("@chakra-ui/react");

const usuarios_por_estado = [
  {
    estados: "AC",
    usuarios_totais: 107302,
    direito_certificacao: 136502,
  },
  {
    estados: "AL",
    usuarios_totais: 160870,
    direito_certificacao: 238731,
  },
  {
    estados: "AP",
    usuarios_totais: 117120,
    direito_certificacao: 118232,
  },
  {
    estados: "AM",
    usuarios_totais: 180472,
    direito_certificacao: 352234,
  },
  {
    estados: "BA",
    usuarios_totais: 27392,
    direito_certificacao: 54261,
  },
  {
    estados: "CE",
    usuarios_totais: 162194,
    direito_certificacao: 181529,
  },
  {
    estados: "DF",
    usuarios_totais: 97487,
    direito_certificacao: 130843,
  },
  {
    estados: "ES",
    usuarios_totais: 201001,
    direito_certificacao: 210585,
  },
  {
    estados: "GO",
    usuarios_totais: 91525,
    direito_certificacao: 118870,
  },
  {
    estados: "MA",
    usuarios_totais: 60413,
    direito_certificacao: 113240,
  },
  {
    estados: "MT",
    usuarios_totais: 158223,
    direito_certificacao: 202495,
  },
  {
    estados: "MS",
    usuarios_totais: 21697,
    direito_certificacao: 41177,
  },
  {
    estados: "MG",
    usuarios_totais: 22494,
    direito_certificacao: 33807,
  },
  {
    estados: "PA",
    usuarios_totais: 178874,
    direito_certificacao: 242684,
  },
  {
    estados: "PB",
    usuarios_totais: 205090,
    direito_certificacao: 393782,
  },
  {
    estados: "PR",
    usuarios_totais: 176313,
    direito_certificacao: 177474,
  },
  {
    estados: "PE",
    usuarios_totais: 173895,
    direito_certificacao: 312382,
  },
  {
    estados: "PI",
    usuarios_totais: 166750,
    direito_certificacao: 282826,
  },
  {
    estados: "RJ",
    usuarios_totais: 108806,
    direito_certificacao: 111878,
  },
  {
    estados: "RN",
    usuarios_totais: 27457,
    direito_certificacao: 33428,
  },
  {
    estados: "RS",
    usuarios_totais: 90396,
    direito_certificacao: 141852,
  },
  {
    estados: "RO",
    usuarios_totais: 216961,
    direito_certificacao: 242962,
  },
  {
    estados: "RR",
    usuarios_totais: 74208,
    direito_certificacao: 116116,
  },
  {
    estados: "SC",
    usuarios_totais: 74354,
    direito_certificacao: 85857,
  },
  {
    estados: "SP",
    usuarios_totais: 160091,
    direito_certificacao: 314606,
  },
  {
    estados: "SE",
    usuarios_totais: 39855,
    direito_certificacao: 75703,
  },
  {
    estados: "TO",
    usuarios_totais: 213094,
    direito_certificacao: 268273,
  },
];

const UsuariosPorEstado = (props) => {
  const geoChartData = usuarios_por_estado.map(
    ({ estados, usuarios_totais, direito_certificacao }) => [
      `BR-${estados}`,
      usuarios_totais,
    ]
  );

  return (
    <Container
      textAlign={"center"}
      backgroundColor={"#f5f5f7"}
      maxWidth={"28rem"}
      borderRadius={"0.5rem"}
      marginBottom={"1.5rem"}
    >
      <Heading fontSize={"1.5rem"} textColor={"#D2202C"} padding={"2rem 0"}>
        Usuários por Estado
      </Heading>

      <Chart
        chartType="GeoChart"
        data={[["State", "Usuários totais"], ...geoChartData]}
        options={{
          responsive: true,
          backgroundColor: "transparent",
          region: "BR",
          displayMode: "markers",
          colorAxis: {
            colors: props.colors,
          },
          sizeAxis: {
            minSize: 10,
            maxSize: 15,
          },
          resolution: "provinces",
          datalessRegionColor: "#E8E8E8",
          defaultColor: "#f5f5f5",
          zoomFactor: 0,
          legend: true,
          forceIFrame: true,
          enableRegionInteractivity: true,
          tooltip: {
            isHtml: true,
          },
        }}
        mapsApiKey={process.env.NEXT_PUBLIC_API_KEY}
        chartLanguage="pt-BR"
      />
      <Text>Curso de prevenção ao suicídio: 43.412</Text>
      <Text>A covid-19 e seus sintomas: 120.000</Text>
      <Text>Pai presente: Cuidado e Compromisso: 105.301</Text>
      <Text>Outros: 1.669.402</Text>
    </Container>
  );
};

export default UsuariosPorEstado;
