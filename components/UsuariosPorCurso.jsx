import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

const { Container, Heading, Text } = require("@chakra-ui/react");

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const COLORS = ["#2F2E41", "#FFFFFF", "#707070", "#D2202C"];

const UsuariosPorCurso = (props) => {
  return (
    <Container
      textAlign={"center"}
      backgroundColor={"#f5f5f7"}
      maxWidth={"28rem"}
      borderRadius={"0.5rem"}
      marginBottom={"1.5rem"}
    >
      <Heading fontSize={"1.5rem"} textColor={"#D2202C"} padding={"2rem 0"}>
        Usuários por curso
      </Heading>

      <ResponsiveContainer width={"100%"} height={"60%"}>
        <PieChart width={800} height={800}>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="40%"
            outerRadius={100}
            fill="#8884d8"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      <Text>Curso de prevenção ao suicídio: 43.412</Text>
      <Text>A covid-19 e seus sintomas: 120.000</Text>
      <Text>Pai presente: Cuidado e Compromisso: 105.301</Text>
      <Text>Outros: 1.669.402</Text>
    </Container>
  );
};

export default UsuariosPorCurso;
