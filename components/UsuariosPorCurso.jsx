import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

const { Container, Heading, Text } = require("@chakra-ui/react");

const UsuariosPorCurso = (props) => {
  let dataArray = [];
  props.data.map((item) => {
    dataArray.push({
      name: item.curso,
      value: item.usuarios,
    });
  });

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
        {dataArray.length && (
          <PieChart width={800} height={800}>
            <Pie
              data={dataArray}
              dataKey="value"
              cx="50%"
              cy="40%"
              outerRadius={100}
              fill="#8884d8"
            >
              {dataArray.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={props.colors[index % props.colors.length]}
                />
              ))}
            </Pie>
          </PieChart>
        )}
      </ResponsiveContainer>

      {dataArray.length &&
        dataArray.map((item) => {
          return (
            <Text key={item.curso}>
              {item.name}: {item.value}
            </Text>
          );
        })}
    </Container>
  );
};

export default UsuariosPorCurso;
