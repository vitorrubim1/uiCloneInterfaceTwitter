import styled from "styled-components";

interface Props {
  outlined?: boolean;
}

export default styled.button<Props>`
  background: ${(props) => (props.outlined ? "transparent" : "var(--twitter)")};

  border: ${(props) => (props.outlined ? "1px solid var(--twitter)" : "none")};
  border-radius: 25px;

  cursor: pointer;
  padding: 16px;
  outline: 0;

  font-size: 15px;
  font-weight: bold;
  color: ${(props) => (props.outlined ? "var(--twitter)" : "var(--white)")};

  &:hover {
    background: ${(props) =>
      props.outlined
        ? "var(--twitter-dark-hover)"
        : "var(--twitter-light-hover)"};
  }
`;
