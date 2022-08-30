import React from "react";

// @styled-component
import { Layout, Row, Image, Title, Detail } from "./StoryItem.styled";

// @type
import { StoryItemProps } from "types/Story";

//------------------------------------------------------------------

const Header: React.FC<StoryItemProps> = ({ img, detail, title }) => {
  return (
    <Layout data-aos="zoom-in">
      <Row>
        <Image>
          <img src={img} alt="No StoryItemImage" />
        </Image>
        <Title>{title}</Title>
      </Row>
      <Detail>{detail}</Detail>
    </Layout>
  );
};

export default Header;
