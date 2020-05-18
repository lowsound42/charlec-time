import React, { useCallback } from 'react'
import { useSpring, animated as a, interpolate } from 'react-spring'
import './App.css' // Icon made by Freepik from www.flaticon.com
import Time from './Clock';

function App() {
  const [{ st, xy }, set] = useSpring(() => ({ st: 0, xy: [0, 0] }))
  const interpBg = xy.interpolate((x, y) => `perspective(400px) rotateY(${x / 60}deg) rotateX(${-y / 60}deg) translate3d(-50%, -50%, 0)`)
  const interpFace = st.interpolate(o => `translate(90,${105 + o / 4})`)
  const interpEye = interpolate([st, xy], (o, xy) => `translate(${xy[0] / 30 + 157},${xy[1] / 30 + 80 + o / 2}) scale(0.8)`)
  const interpIris = interpolate([st, xy], (o, xy) => `translate(${xy[0] / 30},${xy[1] / 30 + -10 + o / 8})`)
  const interpPupil = interpolate([st, xy], (o, xy) => `translate(${xy[0] / 25},${xy[1] / 25 + -10 + o / 8})`)
  const interpSpot = interpolate([st, xy], (o, xy) => `translate(${8 + -xy[0] / 80},${-xy[1] / 80 + -10 + o / 8})`)
  const interpMouth = interpolate([st, xy], (o, xy) => `translate(${xy[0] / 18 + 188},${xy[1] / 20 + 230 + o / 1.7}) scale(0.8)`)
  const interpHair = st.interpolate(o => `translate(79,${o / 4})`)
  const onMove = useCallback(({ clientX: x, clientY: y }) => set({ xy: [x - window.innerWidth / 2, y - window.innerHeight / 20] }), [])
  return (
    <>
    <div className="container" onMouseMove={onMove}>
    <Time/>
      <div style={{ height: '100vh', overflow: 'hidden' }}></div>
      <a.svg style={{ transform: interpBg }} viewBox="0 0 490 512">
        <g id="bg">
          <path d="M490,267 C490,402.308594 380.308594,512 245,512 C109.691406,512 0,402.308594 0,267 C0,131.691406 109.691406,22 245,22 C380.308594,22 490,131.691406 490,267 Z" />
        </g>
        <g id="sweater" transform="translate(94.000000, 361.000000)">
          <path d="M282,0 L251.722656,0 C224.347656,23.640625 188.875,37.5 151,37.5 C113.128906,37.5 77.65625,23.640625 50.277344,0 L20,0 C9,0 2.84217094e-14,9 2.84217094e-14,20 L2.84217094e-14,98.945312 C41.609375,131.554688 94.035156,151 151,151 C207.964844,151 260.390625,131.554688 302,98.945312 L302,20 C302,9 293,0 282,0 Z" />
          <path d="M0,20 L0,98.945312 C9.464844,106.359375 19.492188,113.089844 30,119.066406 L30,20 C30,9 39,0 50,0 L20,0 C9,0 0,9 0,20 Z" />
          <path d="M151,151 C175.925781,151 199.984375,147.277344 222.648438,140.355469 C217.285156,105.605469 187.25,79 151,79 C114.75,79 84.714844,105.605469 79.355469,140.355469 C102.015625,147.277344 126.074219,151 151,151 Z" />
        </g>
        <a.g id="face" transform={interpFace}>
          <svg height="500" width="500">
            <circle cx="154" cy="154" r="150" stroke="black" strokeWidth="3" fill="#AA724B" />
          </svg>
        </a.g>
        <a.g id="eye" transform={interpEye}>
          <circle stroke="black" strokeWidth="3" cx="30" cy="104" r="72" fillOpacity="0.1"/>
          <circle fill="#FFFFFF" cx="30" cy="104" r="52" />
          <a.g transform={interpIris}>
          </a.g>
          <a.g transform={interpPupil} fill="#FFFFFF">
            <circle fill="#333031" cx="30" cy="104" r="18" />
            <a.path
              transform={interpSpot}
            />
          </a.g>
        </a.g>
        <a.g id="eye" transform={interpEye}>
          <line x1="100" x2="127" y1="104" y2="104" strokeWidth="1" stroke="black"/>
          <circle stroke="black" strokeWidth="3" cx="200" cy="104" r="72" fillOpacity="0.1" />
          <circle fill="#FFFFFF" cx="200" cy="104" r="52" />
          <a.g transform={interpIris}>
          </a.g>
          <a.g transform={interpPupil} fill="#FFFFFF">
            <circle fill="#333031" cx="200" cy="104" r="18" />
            <a.path
              transform={interpSpot}
            />
          </a.g>
        </a.g>
        <a.g id="mouth" transform={interpMouth}>
          <path d="M119.707031,0.621094 L24.292969,0.621094 C17.183594,0.621094 10.476562,3.738281 5.894531,9.167969 C1.304688,14.601562 -0.636719,21.738281 0.558594,28.75 C4.910156,54.292969 22.171875,74.695312 45,83.816406 C53,86.6054687 62.3333333,88 73,88 C83.6666667,88 92.3333333,86.6054687 99,83.816406 C121.828125,74.695312 139.089844,54.292969 143.441406,28.753906 C144.640625,21.738281 142.695312,14.601562 138.109375,9.171875 C133.523438,3.738281 126.816406,0.621094 119.707031,0.621094 Z" />
          <path d="M119.707031,17.253906 L24.292969,17.253906 C22.09375,17.253906 20.019531,18.21875 18.597656,19.898438 C17.183594,21.578125 16.578125,23.785156 16.953125,25.957031 C19.902344,43.246094 30.53125,57.480469 45,65.445312 C53.6666667,69.1484373 63,71 73,71 C83,71 91.6666667,69.1484373 99,65.445312 C113.46875,57.480469 124.101562,43.246094 127.046875,25.953125 C127.417969,23.78125 126.816406,21.578125 125.398438,19.898438 C123.980469,18.21875 121.90625,17.253906 119.707031,17.253906 Z" />
        </a.g>
        <a.g id="hair" transform={interpHair}>
          <g id="ears" transform="translate(-20.000000, 203.000000)" fill="#EFB06C">
            <path d="M31.382812,41.382812 C31.382812,27.445312 33.277344,13.65625 36.96875,0.320312 L33.878906,0.320312 C15.6875,0.320312 0.941406,15.066406 0.941406,33.261719 L0.941406,58.445312 C0.941406,76.636719 15.6875,91.382812 33.878906,91.382812 L39.792969,91.382812 C34.289062,75.457031 31.382812,58.585938 31.382812,41.382812 Z" />
            <path d="M336.121094,0.320312 L333.042969,0.320312 C336.730469,13.652344 338.613281,27.4375 338.613281,41.382812 C338.613281,58.585938 335.710938,75.457031 330.207031,91.382812 L336.121094,91.382812 C354.3125,91.382812 369.058594,76.636719 369.058594,58.445312 L369.058594,33.261719 C369.058594,15.066406 354.3125,0.320312 336.121094,0.320312 Z" />
          </g>
      </a.g>
      </a.svg>
    </div>
    </>
  )
}

export default App;