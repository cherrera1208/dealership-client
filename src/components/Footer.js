import React from 'react';
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  FooterText,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      <h1 style={{
        color: "purple",
        textAlign: "center",
        marginTop: "-50px",
        marginBottom: "20px"
      }}>
        Purple Car Dealer: A Car Site for Car Lovers
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>About: </Heading>
            <FooterText>
              <p style={{
                color: "white",
                fontSize: "1.5rem",
              }}>Name: Carlos Herrera</p>
              <p style={{
                color: "white",
                fontSize: "1.5rem",
              }}>Role: Full-Stack Developer</p>
              <p style={{
                color: "white",
                fontSize: "1.5rem",
              }}>Mission: To learn, grow, and deliver with commitment to integrity and excellence</p>
            </FooterText>
          </Column>
          <Column>
            <Heading>Contact: </Heading>
            <FooterLink href="mailto:cherrera.dev@gmail.com"> cherrera.dev@gmail.com </FooterLink>
          </Column>
          <Row>
            <Heading>Social Media: </Heading>
            <FooterLink href="https://github.com/cherrera1208">
              <i className="fa-brands fa-github fa-3x">
                <span style={{ marginLeft: "10px" }}>
                  Github
                </span></i>
            </FooterLink>
            <FooterLink href="https://www.linkedin.com/in/cherrera1208/">
              <i className="fab fa-linkedin fa-3x">
                <span style={{ marginLeft: "100px" }}>
                  LinkedIn
                </span>
              </i>
            </FooterLink>
            <FooterLink href="https://cherrera-dev.netlify.app/">
              <i className="fa-regular fa-address-card fa-3x">
                <span style={{ marginLeft: "100px" }}>
                  LinkedIn
                </span>
              </i>
            </FooterLink>
          </Row>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
