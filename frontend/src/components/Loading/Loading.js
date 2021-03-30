import "./Loading.scss";

const Loading = (props) => {
  return (
    <div className="title-container">
      <div className="title-background">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1132"
          height="234"
          viewBox="0 0 1132 234"
        >
          <text
            id="mocknews1"
            transform="translate(1 70)"
            fill="none"
            stroke="#fff"
            strokeWidth="1"
            fontSize="190"
            fontFamily="Montserrat-Black, Montserrat"
            fontWeight="800"
          >
            <tspan x="50%" y="18%" textAnchor="middle">
              mocknews
            </tspan>
          </text>

          <text
            id="mocknews2"
            transform="matrix(1, 0, 0, -1, 1, 167)"
            fill="none"
            stroke="#fb0"
            strokeWidth="1"
            fontSize="190"
            fontFamily="Montserrat-Black, Montserrat"
            fontWeight="800"
          >
            <tspan x="50%" y="18%" textAnchor="middle">
              mocknews
            </tspan>
          </text>
        </svg>
      </div>
    </div>
  );
};

export default Loading;
