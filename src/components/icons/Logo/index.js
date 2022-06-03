// Styling
import './style.scss';

const LogoSVG = () => {
  const style = {
    fill: 'none',
    strokeWidth: '3.88046',
    // strokeLinejoin: 'bevel',
    // strokeMiterlimit: '4',
    // strokeDasharray: 'none',
    // strokeOpacity: '1',
  };

  return (
    <svg
      width="206.22961"
      height="218.03191"
      viewBox="0 0 206.22961 218.03191"
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      className="svg-icon-maraicher-logo"
    >
      <g transform="translate(-5.02863,-2.2820463)">
        <g transform="matrix(3.0413901,0,0,3.0413901,-20.953849,-10.981783)">
          <g transform="matrix(0.84723704,0,0,0.84723704,3.1414711,1.6847656)">
            <path
              d="m 61.819433,87.026811 c 0,-23.290201 20.776195,-34.484676 22.483825,-55.545474 a 25.448464,25.448464 0 0 0 0.16583,-2.703751 23.717115,23.717115 0 0 0 -47.434167,0 25.448464,25.448464 0 0 0 0.165833,2.703751"
              style={style}
            />
            <path
              d="M 60.799605,39.189392 A 10.411813,10.411813 0 1 1 71.235165,28.777586"
              style={style}
            />
            <path
              d="m 34.165292,65.705129 c 0,0 -13.921909,-7.921513 -26.0888561,-30.097014 58.1069171,-5.858129 48.4778431,51.418696 48.4778431,51.418696 0,0 -11.858588,-28.460535 -23.978026,-35.575669"
              style={style}
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default LogoSVG;
