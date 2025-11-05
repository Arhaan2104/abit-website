"use client"

export default function WhatWeDo() {
  return (
    <section aria-labelledby="whatwedo-title" className="relative">
      {/* Cream panel with soft bottom fade */}
      <div className="relative">
        <div className="container py-10 md:py-14">
          {/* Heading row */}
          <div className="mb-6 md:mb-8 flex items-center gap-3">
            <span className="inline-block h-4 w-4 rounded-sm transition-transform duration-300 hover:scale-125 hover:rotate-12" style={{ background: "#F7750B" }} />
            <span className="inline-block h-4 w-4 rounded-sm transition-transform duration-300 hover:scale-125 hover:rotate-12" style={{ background: "#0916F8", transitionDelay: '0.05s' }} />
            <span className="inline-block h-4 w-4 rounded-sm transition-transform duration-300 hover:scale-125 hover:rotate-12" style={{ background: "#F80641", transitionDelay: '0.1s' }} />
            <h2
              id="whatwedo-title"
              className="text-2xl md:text-4xl font-extrabold tracking-tight"
              style={{ color: "#0916F8" }}
            >
              What do we do?
            </h2>
          </div>

          {/* Chevron flow bar */}
          <div className="relative overflow-hidden">
            <svg
              viewBox="0 0 1400 200"
              role="img"
              aria-label="Consulting Unit, Research, Publications"
              className="w-full h-auto"
              style={{ background: 'transparent' }}
            >
              {/* Left partial yellow chevron */}
              <path
                d="M-50,40 L50,100 L-50,160 Z"
                fill="#FABC0D"
                stroke="#373737"
                strokeWidth="8"
                strokeLinejoin="miter"
              />

              {/* Blue chevron - Consulting Unit */}
              <g className="cursor-pointer transition-all duration-300 hover:opacity-90 hover:scale-105" style={{transformOrigin: 'center'}} onClick={() => window.location.href = '/consulting'}>
                <path
                  d="M20,40 L320,40 L420,100 L320,160 L20,160 L120,100 Z"
                  fill="#373737"
                  strokeWidth="0"
                />
                <path
                  d="M28,48 L315,48 L410,100 L315,152 L28,152 L123,100 Z"
                  fill="#FFFFFF"
                  strokeWidth="0"
                />
                <path
                  d="M35,55 L310,55 L400,100 L310,145 L35,145 L130,100 Z"
                  fill="#0916F8"
                  strokeWidth="0"
                />
                <text
                  x="217"
                  y="108"
                  textAnchor="middle"
                  fontFamily="Anton, ui-sans-serif, system-ui, sans-serif"
                  fontSize="32"
                  fontWeight="400"
                  fill="#FFFFFF"
                  letterSpacing="1.5px"
                  style={{ pointerEvents: 'none' }}
                >
                  CONSULTING
                </text>
              </g>

              {/* Red chevron - Research */}
              <g className="cursor-pointer transition-all duration-300 hover:opacity-90 hover:scale-105" style={{transformOrigin: 'center'}} onClick={() => window.location.href = '/research'}>
                <path
                  d="M320,40 L650,40 L750,100 L650,160 L320,160 L420,100 Z"
                  fill="#373737"
                  strokeWidth="0"
                />
                <path
                  d="M328,48 L645,48 L740,100 L645,152 L328,152 L423,100 Z"
                  fill="#FFFFFF"
                  strokeWidth="0"
                />
                <path
                  d="M335,55 L640,55 L730,100 L640,145 L335,145 L430,100 Z"
                  fill="#F80641"
                  strokeWidth="0"
                />
                <text
                  x="530"
                  y="108"
                  textAnchor="middle"
                  fontFamily="Anton, ui-sans-serif, system-ui, sans-serif"
                  fontSize="32"
                  fontWeight="400"
                  fill="#FFFFFF"
                  letterSpacing="1.5px"
                  style={{ pointerEvents: 'none' }}
                >
                  RESEARCH
                </text>
              </g>

              {/* Orange chevron - Publications */}
              <g className="cursor-pointer transition-all duration-300 hover:opacity-90 hover:scale-105" style={{transformOrigin: 'center'}} onClick={() => window.location.href = '/publications'}>
                <path
                  d="M650,40 L980,40 L1080,100 L980,160 L650,160 L750,100 Z"
                  fill="#373737"
                  strokeWidth="0"
                />
                <path
                  d="M658,48 L975,48 L1070,100 L975,152 L658,152 L753,100 Z"
                  fill="#FFFFFF"
                  strokeWidth="0"
                />
                <path
                  d="M665,55 L970,55 L1060,100 L970,145 L665,145 L760,100 Z"
                  fill="#F7750B"
                  strokeWidth="0"
                />
                <text
                  x="860"
                  y="108"
                  textAnchor="middle"
                  fontFamily="Anton, ui-sans-serif, system-ui, sans-serif"
                  fontSize="30"
                  fontWeight="400"
                  fill="#FFFFFF"
                  letterSpacing="1.2px"
                  style={{ pointerEvents: 'none' }}
                >
                  PUBLICATIONS
                </text>
              </g>

              {/* Right partial yellow chevrons */}
              <path
                d="M980,40 L1080,100 L980,160 L1200,160 L1300,100 L1200,40 Z"
                fill="#FABC0D"
                stroke="#373737"
                strokeWidth="8"
                strokeLinejoin="miter"
              />
              
              <path
                d="M1200,40 L1450,100 L1200,160 Z"
                fill="#FABC0D"
                stroke="#373737"
                strokeWidth="8"
                strokeLinejoin="miter"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}