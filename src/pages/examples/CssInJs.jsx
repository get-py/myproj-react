import styled, { css } from 'styled-components';

function CssInJs() {
  return (
    <div style={style}>
      <h2>Css in js</h2>
      <Button1>버튼1</Button1>
      <Button2>버튼2</Button2>
      <Button2 primary>버튼2-1</Button2>
    </div>
  );
}

const style = {
  backgroundColor: 'purple',
};

function Button1({ children }) {
  return (
    <button style={{ backgroundColor: 'yellowgreen', color: 'white' }}>
      {children}
    </button>
  );
}

const Button2 = styled.button`
  background: palevioletred;
  border-radius: 3px;
  border: none;
  color: white;

  ${(props) =>
    props.primary &&
    css`
      background: white;
      color: black;
    `}
`;

export default CssInJs;
