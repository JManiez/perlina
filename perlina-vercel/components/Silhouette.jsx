export default function Silhouette() {
  return (
    <div className="silhouette">
      <svg viewBox="0 0 300 340" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#a37f2e" />
            <stop offset=".5" stopColor="#e3c877" />
            <stop offset="1" stopColor="#a37f2e" />
          </linearGradient>
          <radialGradient id="pearlG" cx="35%" cy="30%">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset=".4" stopColor="#f3ecd9" />
            <stop offset=".8" stopColor="#d9c58e" />
            <stop offset="1" stopColor="#b99a55" />
          </radialGradient>
        </defs>
        <g className="glow">
          <circle className="ring" cx="150" cy="170" r="130" stroke="url(#gold)" strokeWidth="1.2" opacity=".6" pathLength="1" />
          <path className="draw d2" pathLength="1" d="M150 60 q30 -25 55 -5 q20 15 8 38 q25 5 20 30" stroke="url(#gold)" strokeWidth="2.4" strokeLinecap="round" />
          <path className="draw d2" pathLength="1" d="M158 52 q18 -20 40 -8" stroke="url(#gold)" strokeWidth="1.6" strokeLinecap="round" />
          <path className="draw d2" pathLength="1" d="M150 60 q-8 -18 8 -28 q20 -12 38 2" stroke="url(#gold)" strokeWidth="1.6" strokeLinecap="round" />
          <path className="draw d1" pathLength="1" d="M150 60 q-20 8 -22 34 q-1 14 -8 22 q-5 6 2 8 l8 2 q-3 10 4 12 q8 2 6 10 q-2 12 12 12 q14 0 22 -6" stroke="url(#gold)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          <path className="draw d3" pathLength="1" d="M132 104 q7 -5 13 -1" stroke="url(#gold)" strokeWidth="1.6" strokeLinecap="round" />
          <path className="draw d3" pathLength="1" d="M134 112 q5 3 9 1" stroke="url(#gold)" strokeWidth="1.4" strokeLinecap="round" />
          <path className="draw d3" pathLength="1" d="M128 138 q6 3 11 0" stroke="url(#gold)" strokeWidth="1.5" strokeLinecap="round" />
          <path className="draw d4" pathLength="1" d="M174 154 q4 26 30 38 q34 16 36 52 q1 30 -24 46" stroke="url(#gold)" strokeWidth="2.2" strokeLinecap="round" />
          <path className="draw d4" pathLength="1" d="M150 168 q-6 30 -30 44 q-26 16 -24 48" stroke="url(#gold)" strokeWidth="1.8" strokeLinecap="round" />
          <path className="draw d5" pathLength="1" d="M70 210 q-20 -40 10 -70 q14 -14 10 -34" stroke="url(#gold)" strokeWidth="1.6" strokeLinecap="round" />
          <path className="draw d5" pathLength="1" d="M78 150 q-16 -4 -20 -20 M80 130 q14 -8 12 -24" stroke="url(#gold)" strokeWidth="1.4" strokeLinecap="round" />
          <path className="leaf" d="M76 168 q-18 2 -22 16 q16 4 22 -16z" fill="url(#gold)" opacity=".85" />
          <path className="leaf" style={{ animationDelay: "2.4s,3.8s" }} d="M84 138 q16 -8 26 0 q-10 12 -26 0z" fill="url(#gold)" opacity=".85" />
          <circle className="pf pf1" cx="88" cy="96" r="13" fill="url(#pearlG)" />
          <circle className="pf pf2" cx="64" cy="220" r="8" fill="url(#pearlG)" />
          <circle className="pf pf3" cx="238" cy="238" r="15" fill="url(#pearlG)" />
          <circle className="pf pf4" cx="256" cy="210" r="9" fill="url(#pearlG)" />
          <circle className="pf pf5" cx="222" cy="268" r="7" fill="url(#pearlG)" />
          <circle className="pf pf6" cx="120" cy="46" r="6" fill="url(#pearlG)" />
        </g>
      </svg>
    </div>
  );
}
