import Chart from "react-google-charts";

const { Container, Heading, Text } = require("@chakra-ui/react");

const UsuariosPorEstado = (props) => {
  const geoChartData = props.data.map(
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

      {props.cursos.map((item) => {
        return (
          <Text key={item.estados}>
            {item.curso}: {item.usuarios}
          </Text>
        );
      })}
    </Container>
  );
};

export default UsuariosPorEstado;
