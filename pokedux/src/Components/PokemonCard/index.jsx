import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";

const PokemonCard = ({ pokemon }) => {
  return (
    <Card
      title={pokemon.name}
      cover={<img src={pokemon.image} alt={pokemon.name} />}
      extra={<StarOutlined />}
    >
      <Meta description={pokemon.description} />
    </Card>
  );
};

export { PokemonCard };
