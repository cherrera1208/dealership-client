import styled from 'styled-components';

export const Box = styled.div`
  padding: 80px 60px;
  background: #9fc9f3;
  }
`;

export const Container = styled.div`
  max-width: 80vw;
  margin:  auto;
`;

export const Column = styled.p`
  // border: 1px solid white;
  display: flex;
  flex-direction: column;
  `;

export const Row = styled.div`
  }
`;

export const FooterText = styled.div`
  // border: 1px solid white;
  display: flex;
  flex-direction: column;
  padding: .5rem;
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 24px;
  text-decoration: none;
  padding: 0rem 2rem 0rem .5rem;
  width: 10%;
  &:hover {
    color: #a460ed;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  border: 1px solid white;
  font-size: 24px;
  color: #fff;
  font-weight: bold;
`;

export const Text = styled.p`
  font-size: 24px;
  color: #fff;
  font-weight: bold;
`;
