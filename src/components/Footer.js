import React from 'react';
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  } from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "purple", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
        Purple Car Dealer: A Car site for Car Lovers
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Aim</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading>Shop for a Car</Heading>
            <FooterLink href="#">New Cars</FooterLink>
            <FooterLink href="#">Used Cars</FooterLink>
            <FooterLink href="#">Car Deals</FooterLink>
            <FooterLink href="#">Car Dealers</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Writing</FooterLink>
            <FooterLink href="#">Internships</FooterLink>
            <FooterLink href="#">Coding</FooterLink>
            <FooterLink href="#">Teaching</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="tel:0121234">(123) 456-789</FooterLink>
            <FooterLink href="mailto:support@example.com"> support@example.com </FooterLink>
            <FooterLink href="mailto:sales@example.com"> sales@example.com </FooterLink>
           
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="https://www.facebook.com/">
            <i className="fa-brands fa-facebook fa-3x">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span></i>
              
           
            </FooterLink>
            <FooterLink href="https://www.instagram.com/">
              <i className="fab fa-instagram fa-3x">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="https://twitter.com/">
              <i className="fab fa-twitter fa-3x">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube fa-3x">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
              
            </FooterLink>
            <span style={{ color: "purple"}}>&copy; Purple Dealership.</span>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;

