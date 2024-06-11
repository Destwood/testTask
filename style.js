var styleElement = document.createElement('style');

styleElement.textContent = `
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    color: #fff;
  }

  }
  body {
    width: 100%;
    height: 100%;
  }

  canvas {
    width: 256px;
    height: 256px;
    display: block;
    margin: auto;
    border:  1px solid #000;
  }
    
  img {
    display: none;
  }
`;
document.head.appendChild(styleElement);