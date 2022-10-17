import React, { useState, useEffect } from "react";

// @styled-components
import {
  Layout,
  Container,
  Title,
  RoadmapContainer,
  RoadMapItem,
  Percent,
  ItemTitle,
  ItemDetail,
  TimerContainer,
  TimerTitle,
  Timer,
  TimerItem,
  Text,
} from "./Roadmap.styled";

//------------------------------------------------------

const Roadmap: React.FC = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let launchTime = new Date("Dec 18, 2022 00:00:00").getTime();
    let now = new Date().getTime();
    setTime(launchTime - now);
  }, []);

  useEffect(() => {
    let launchTime = new Date("Dec 18, 2022 00:00:00").getTime();
    let now = new Date().getTime();
    setTimeout(() => {
      setTime(launchTime - now);
    }, 1000);
  }, [time]);

  return (
    <Layout id="roadmap">
      <Container>
        <Title data-aos="fade-up">Our Roadmap</Title>
        <RoadmapContainer>
          <RoadMapItem align={true} data-aos="fade-right">
            <Percent>25%</Percent>
            <ItemTitle>Project Launch</ItemTitle>
            <ItemDetail>
              Giveaway to 20 random people in the DogDrip Community
              <br />
              <br />
              Release of the 10,000 Dog Drip NFT collection.
            </ItemDetail>
          </RoadMapItem>
          <RoadMapItem align={false} data-aos="fade-left">
            <Percent>50%</Percent>
            <ItemTitle>Marketing</ItemTitle>
            <ItemDetail>
              Collaboration with bigger influencers and celebrities to create
              more awareness
              <br />
              <br />
              After sale of the 10,000 collection, giveaway of Rolex
              wristwatches to 10 lucky holders.
            </ItemDetail>
          </RoadMapItem>
          <RoadMapItem align={true} data-aos="fade-right">
            <Percent>75%</Percent>
            <ItemTitle>Merchandise</ItemTitle>
            <ItemDetail>
              Launch of Online Merchandise store - This is where all holders
              would earn 15% on sale made from the merchandise store, passive
              income for life.
            </ItemDetail>
          </RoadMapItem>
          <RoadMapItem align={false} data-aos="fade-left">
            <Percent>100%</Percent>
            <ItemTitle>DogDrip token</ItemTitle>
            <ItemDetail>
              Launch of DogDrip Token. DogDrip Token would be airdropped to all
              holders of DogDrip NFT before public sale.
            </ItemDetail>
          </RoadMapItem>
        </RoadmapContainer>
        <TimerContainer>
          <TimerTitle data-aos="fade-right">
            We are Launcing in . . .
          </TimerTitle>
          <Timer>
            <TimerItem data-aos="zoom-in">
              <Text>
                {Math.floor(time / (1000 * 60 * 60 * 24))}
                <br />
                Days
              </Text>
            </TimerItem>
            <TimerItem data-aos="zoom-in">
              <Text>
                {Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))}
                <br />
                Hours
              </Text>
            </TimerItem>

            <TimerItem data-aos="zoom-in">
              <Text>
                {Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))} <br />
                Mins
              </Text>
            </TimerItem>

            <TimerItem data-aos="zoom-in">
              <Text>
                {Math.floor((time % (1000 * 60)) / 1000)} <br />
                Sec
              </Text>
            </TimerItem>
          </Timer>
        </TimerContainer>
      </Container>
    </Layout>
  );
};

export default Roadmap;
