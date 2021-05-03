const Icon = ({ className, name, theme }) => {
  switch (name) {
    case 'adobexd':
      return (
        <svg className={className} viewBox="0 0 2500 2437.5">
          <path
            d="M2057.3,2437.5H442.7C197.9,2437.5,0,2239.6,0,1994.8V442.7C0,197.9,197.9,0,442.7,0h1614.6
                          C2302.1,0,2500,197.9,2500,442.7v1552.1C2500,2239.6,2302.1,2437.5,2057.3,2437.5z"
            fill="#FF26BE"
          />
          <path
            className="st1"
            d="M2017.7,2333.3H482.3c-208.3,0-378.1-169.8-378.1-378.1V482.3c0-208.3,169.8-378.1,378.1-378.1h1534.4
                      c209.4,0,378.1,169.8,378.1,378.1v1471.9C2395.8,2163.5,2226,2333.3,2017.7,2333.3L2017.7,2333.3z"
            fill="#2E001F"
          />
          <path
            className="st2"
            d="M988.5,1140.6l291.7,560.4c5.2,8.3,2.1,16.7-6.3,16.7h-181.3c-11.5,0-16.7-3.1-21.9-13.5
                          c-66.7-137.5-134.4-275-204.2-422.9h-2.1c-62.5,139.6-131.3,286.5-197.9,424c-5.2,8.3-10.4,11.5-18.8,11.5H476
                          c-10.4,0-11.5-8.3-6.2-14.6l285.4-543.8l-276-550c-6.3-8.3,0-14.6,6.2-14.6h179.2c10.4,0,14.6,2.1,18.7,11.5
                          c65.6,137.5,132.3,279.2,194.8,417.7h2.1c60.4-137.5,127.1-280.2,191.7-416.7c5.2-8.3,8.3-13.5,18.8-13.5h167.7
                          c8.3,0,11.5,6.3,6.3,14.6L988.5,1140.6z M1331.3,1310.4c0-242.7,161.5-432.3,417.7-432.3c21.9,0,33.3,0,54.2,2.1v-276
                          c0-6.3,5.2-10.4,10.4-10.4h164.6c8.3,0,10.4,3.1,10.4,8.3v956.3c0,28.1,0,63.5,5.2,102.1c0,6.3-2.1,8.3-8.3,11.5
                          c-87.5,41.7-179.2,60.4-266.7,60.4C1492.7,1733.3,1331.2,1593.8,1331.3,1310.4L1331.3,1310.4z M1803.1,1043.8
                          c-14.6-6.3-35.4-10.4-60.4-10.4c-131.3,0-222.9,101-222.9,268.8c0,191.7,93.8,268.8,211.5,268.8c25,0,52.1-3.1,71.9-11.5V1043.8z"
            fill="#FFD9F2"
          />
        </svg>
      );
    case 'aws-amplify':
      return (
        <svg className={className} viewBox="0 0 126 94">
          <path
            d="M27.4194 78H62.9094L72 94H71.7439H0L25.2809 50.1921L35.8752 31.8473L44.971 47.6084L27.4194 78ZM40.6554 23.5512L49.3888 8.41854L98.8145 93.9997H81.3109L40.6554 23.5512ZM54.2496 0H71.7299L126 94H108.498L54.2496 0Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="126"
              y1="20.8415"
              x2="19.9779"
              y2="99.9374"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF9900" />
              <stop offset="1" stop-color="#FFC300" />
            </linearGradient>
          </defs>
        </svg>
      );
    case 'chakra':
      return (
        <svg className={className} viewBox="0 0 998 257">
          <rect width="257" height="257" rx="128.5" fill="url(#logo)"></rect>
          <path
            d="M69.558 133.985l87.592-86.9891c1.636-1.6251 4.27.3525 3.165 2.377l-32.601 59.7521c-.728 1.332.237 2.958 1.755 2.958h56.34c1.815 0 2.691 2.223 1.364 3.462l-98.7278 92.142c-1.7702 1.652-4.4051-.676-2.9839-2.636l46.7357-64.473c.958-1.322.014-3.174-1.619-3.174H70.9673c-1.7851 0-2.6759-2.161-1.4093-3.419z"
            fill="#fff"
          ></path>
          <defs>
            <linearGradient
              id="logo"
              x1="128.5"
              x2="128.5"
              y2="257"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#7BCBD4"></stop>
              <stop offset="1" stop-color="#29C6B7"></stop>
            </linearGradient>
          </defs>
        </svg>
      );
    case 'check':
      return (
        <svg className={className} viewBox="0 0 16 16">
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
          <path d="M22 4L12 14.01l-3-3" />
        </svg>
      );
    case 'firebase':
      return (
        <svg className={className} viewBox="0 0 256 230">
          <path
            d="M0 282.998l2.123-2.972L102.527 89.512l.212-2.017L58.48 4.358C54.77-2.606 44.33-.845 43.114 6.951L0 282.998z"
            fill="#FFC24A"
          />
          <path
            d="M135.005 150.38l32.955-33.75-32.965-62.93c-3.129-5.957-11.866-5.975-14.962 0L102.42 87.287v2.86l32.584 60.233z"
            fill="#F4BD62"
          />
          <path
            fill="#F6820C"
            d="M0 282.998l.962-.968 3.496-1.42 128.477-128 1.628-4.431-32.05-61.074z"
          />
          <path
            d="M139.121 347.551l116.275-64.847-33.204-204.495c-1.039-6.398-8.888-8.927-13.468-4.34L0 282.998l115.608 64.548a24.126 24.126 0 0 0 23.513.005"
            fill="#FDE068"
          />
          <path
            d="M254.354 282.16L221.402 79.218c-1.03-6.35-7.558-8.977-12.103-4.424L1.29 282.6l114.339 63.908a23.943 23.943 0 0 0 23.334.006l115.392-64.355z"
            fill="#FCCA3F"
          />
          <path
            d="M139.12 345.64a24.126 24.126 0 0 1-23.512-.005L.931 282.015l-.93.983 115.607 64.548a24.126 24.126 0 0 0 23.513.005l116.275-64.847-.285-1.752-115.99 64.689z"
            fill="#EEAB37"
          />
        </svg>
      );
    case 'github':
      return (
        <svg fill="none" className={className} viewBox="0 0 18 20">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      );
    case 'graphql':
      return (
        <svg className={className} viewBox="0 0 256 288">
          <path
            d="M152.576 32.963l59.146 34.15a25.819 25.819 0 0 1 5.818-4.604c12.266-7.052 27.912-2.865 35.037 9.402 7.052 12.267 2.865 27.912-9.402 35.037a25.698 25.698 0 0 1-6.831 2.72v68.325a25.7 25.7 0 0 1 6.758 2.702c12.34 7.125 16.527 22.771 9.402 35.038-7.052 12.266-22.771 16.453-35.038 9.402a25.464 25.464 0 0 1-6.34-5.147l-58.786 33.94a25.671 25.671 0 0 1 1.295 8.08c0 14.103-11.458 25.636-25.635 25.636-14.177 0-25.635-11.46-25.635-25.636 0-2.52.362-4.954 1.037-7.253l-59.13-34.14a25.824 25.824 0 0 1-5.738 4.52c-12.34 7.051-27.986 2.864-35.038-9.402-7.051-12.267-2.864-27.913 9.402-35.038a25.71 25.71 0 0 1 6.758-2.703v-68.324a25.698 25.698 0 0 1-6.831-2.72C.558 99.897-3.629 84.178 3.423 71.911c7.052-12.267 22.77-16.454 35.037-9.402a25.82 25.82 0 0 1 5.79 4.575l59.163-34.159a25.707 25.707 0 0 1-1.048-7.29C102.365 11.46 113.823 0 128 0c14.177 0 25.635 11.459 25.635 25.635 0 2.548-.37 5.007-1.059 7.328zm-6.162 10.522l59.287 34.23a25.599 25.599 0 0 0 2.437 19.831c3.609 6.278 9.488 10.44 16.013 12.062v68.41c-.333.081-.664.17-.993.264L145.725 44.17c.234-.224.464-.452.689-.684zm-36.123.7l-77.432 134.11a25.824 25.824 0 0 0-1.01-.27v-68.417c6.525-1.622 12.404-5.784 16.013-12.062a25.6 25.6 0 0 0 2.427-19.869l59.27-34.22c.239.247.483.49.732.727zm24.872 6.075l77.414 134.08a25.492 25.492 0 0 0-4.513 5.757 25.7 25.7 0 0 0-2.702 6.758H50.64a25.71 25.71 0 0 0-2.704-6.758 25.825 25.825 0 0 0-4.506-5.724l77.429-134.107A25.715 25.715 0 0 0 128 51.27c2.487 0 4.89-.352 7.163-1.01zm11.795 194.478l58.902-34.008a25.865 25.865 0 0 1-.473-1.682H50.607c-.082.333-.171.663-.266.992l59.19 34.175A25.558 25.558 0 0 1 128 236.373a25.564 25.564 0 0 1 18.958 8.365z"
            fill="#E535AB"
            fillRule="evenodd"
          />
        </svg>
      );
    case 'javascript':
      return (
        <svg className={className} viewBox="0 0 256 256">
          <path d="M0 0h256v256H0V0z" fill="#F7DF1E" />
          <path d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247L210.29 147.43c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
    case 'mail':
      return (
        <svg
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      );
    case 'moon':
      return (
        <svg
          className={className}
          fill="#000"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          ></path>
        </svg>
      );
    case 'next':
      return (
        <svg
          className={className}
          viewBox=".5 -.2 1023 1024.1"
          fill="currentColor"
        >
          <path d="m478.5.6c-2.2.2-9.2.9-15.5 1.4-145.3 13.1-281.4 91.5-367.6 212-48 67-78.7 143-90.3 223.5-4.1 28.1-4.6 36.4-4.6 74.5s.5 46.4 4.6 74.5c27.8 192.1 164.5 353.5 349.9 413.3 33.2 10.7 68.2 18 108 22.4 15.5 1.7 82.5 1.7 98 0 68.7-7.6 126.9-24.6 184.3-53.9 8.8-4.5 10.5-5.7 9.3-6.7-.8-.6-38.3-50.9-83.3-111.7l-81.8-110.5-102.5-151.7c-56.4-83.4-102.8-151.6-103.2-151.6-.4-.1-.8 67.3-1 149.6-.3 144.1-.4 149.9-2.2 153.3-2.6 4.9-4.6 6.9-8.8 9.1-3.2 1.6-6 1.9-21.1 1.9h-17.3l-4.6-2.9c-3-1.9-5.2-4.4-6.7-7.3l-2.1-4.5.2-200.5.3-200.6 3.1-3.9c1.6-2.1 5-4.8 7.4-6.1 4.1-2 5.7-2.2 23-2.2 20.4 0 23.8.8 29.1 6.6 1.5 1.6 57 85.2 123.4 185.9s157.2 238.2 201.8 305.7l81 122.7 4.1-2.7c36.3-23.6 74.7-57.2 105.1-92.2 64.7-74.3 106.4-164.9 120.4-261.5 4.1-28.1 4.6-36.4 4.6-74.5s-.5-46.4-4.6-74.5c-27.8-192.1-164.5-353.5-349.9-413.3-32.7-10.6-67.5-17.9-106.5-22.3-9.6-1-75.7-2.1-84-1.3zm209.4 309.4c4.8 2.4 8.7 7 10.1 11.8.8 2.6 1 58.2.8 183.5l-.3 179.8-31.7-48.6-31.8-48.6v-130.7c0-84.5.4-132 1-134.3 1.6-5.6 5.1-10 9.9-12.6 4.1-2.1 5.6-2.3 21.3-2.3 14.8 0 17.4.2 20.7 2z" />
          <path d="m784.3 945.1c-3.5 2.2-4.6 3.7-1.5 2 2.2-1.3 5.8-4 5.2-4.1-.3 0-2 1-3.7 2.1zm-6.9 4.5c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-7.6 4c-3.8 2-3.6 2.8.2.9 1.7-.9 3-1.8 3-2 0-.7-.1-.6-3.2 1.1z" />
        </svg>
      );
    case 'python':
      return (
        <svg className={className} viewBox="0 0 256 255">
          <defs>
            <linearGradient
              x1="12.959%"
              y1="12.039%"
              x2="79.639%"
              y2="78.201%"
              id="a"
            >
              <stop stopColor="#387EB8" offset="0%" />
              <stop stopColor="#366994" offset="100%" />
            </linearGradient>
            <linearGradient
              x1="19.128%"
              y1="20.579%"
              x2="90.742%"
              y2="88.429%"
              id="b"
            >
              <stop stopColor="#FFE052" offset="0%" />
              <stop stopColor="#FFC331" offset="100%" />
            </linearGradient>
          </defs>
          <path
            d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072zM92.802 19.66a11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13 11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.13z"
            fill="url(#a)"
          />
          <path
            d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897zm34.114-19.586a11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.131 11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13z"
            fill="url(#b)"
          />
        </svg>
      );
    case 'react':
      return (
        <svg className={className} viewBox="0 0 256 230">
          <path
            d="M.754 114.75c0 19.215 18.763 37.152 48.343 47.263-5.907 29.737-1.058 53.706 15.136 63.045 16.645 9.6 41.443 2.955 64.98-17.62 22.943 19.744 46.13 27.514 62.31 18.148 16.63-9.627 21.687-35.221 15.617-65.887 30.81-10.186 48.044-25.481 48.044-44.949 0-18.769-18.797-35.006-47.979-45.052 6.535-31.933.998-55.32-15.867-65.045-16.259-9.376-39.716-1.204-62.996 19.056C104.122 2.205 80.897-4.36 64.05 5.392 47.806 14.795 43.171 39.2 49.097 69.487 20.515 79.452.754 96.057.754 114.75z"
            fill={theme === 'dark' ? '#171a24' : '#fff'}
          />
          <path
            d="m201.02 79.674a151.36 151.36 0 0 0-7.274-2.292 137.5 137.5 0 0 0 1.124-4.961c5.506-26.728 1.906-48.26-10.388-55.348-11.787-6.798-31.065 0.29-50.535 17.233a151.14 151.14 0 0 0-5.626 5.163 137.57 137.57 0 0 0-3.744-3.458c-20.405-18.118-40.858-25.752-53.139-18.643-11.776 6.817-15.264 27.06-10.307 52.39a150.91 150.91 0 0 0 1.67 7.484c-2.894 0.822-5.689 1.698-8.363 2.63-23.922 8.34-39.2 21.412-39.2 34.97 0 14.004 16.4 28.05 41.318 36.566a128.44 128.44 0 0 0 6.11 1.91 147.81 147.81 0 0 0-1.775 8.067c-4.726 24.89-1.035 44.653 10.71 51.428 12.131 6.995 32.491-0.195 52.317-17.525 1.567-1.37 3.14-2.823 4.715-4.346a148.34 148.34 0 0 0 6.108 5.573c19.204 16.525 38.17 23.198 49.905 16.405 12.12-7.016 16.058-28.247 10.944-54.078-0.39-1.973-0.845-3.988-1.355-6.04 1.43-0.422 2.833-0.858 4.202-1.312 25.904-8.582 42.757-22.457 42.757-36.648 0-13.607-15.77-26.767-40.174-35.168z"
            fill="#53C1DE"
          />
          <path
            d="m195.41 142.33c-1.235 0.409-2.503 0.804-3.795 1.187-2.86-9.053-6.72-18.68-11.442-28.625 4.507-9.71 8.217-19.213 10.997-28.208 2.311 0.67 4.555 1.375 6.717 2.12 20.91 7.197 33.664 17.84 33.664 26.04 0 8.735-13.775 20.075-36.14 27.486zm-9.28 18.389c2.261 11.422 2.584 21.749 1.086 29.822-1.346 7.254-4.052 12.09-7.398 14.027-7.121 4.122-22.35-1.236-38.772-15.368-1.883-1.62-3.78-3.35-5.682-5.18 6.367-6.964 12.73-15.06 18.94-24.05 10.924-0.969 21.244-2.554 30.603-4.717 0.46 1.86 0.87 3.683 1.223 5.466zm-93.85 43.137c-6.957 2.457-12.498 2.527-15.847 0.596-7.128-4.11-10.09-19.98-6.049-41.265a138.51 138.51 0 0 1 1.65-7.502c9.255 2.047 19.5 3.52 30.45 4.408 6.251 8.797 12.798 16.883 19.396 23.964a118.86 118.86 0 0 1-4.305 3.964c-8.767 7.664-17.552 13.1-25.294 15.835zm-32.593-61.58c-11.018-3.766-20.117-8.66-26.354-14-5.604-4.8-8.434-9.565-8.434-13.432 0-8.227 12.267-18.722 32.726-25.855a139.28 139.28 0 0 1 7.777-2.447c2.828 9.197 6.537 18.813 11.013 28.537-4.534 9.869-8.296 19.638-11.15 28.943a118.91 118.91 0 0 1-5.578-1.746zm10.926-74.37c-4.247-21.703-1.427-38.074 5.67-42.182 7.56-4.376 24.275 1.864 41.893 17.507 1.126 1 2.257 2.047 3.39 3.13-6.564 7.049-13.051 15.074-19.248 23.82-10.627 0.985-20.8 2.567-30.152 4.686a141.52 141.52 0 0 1-1.553-6.962zm97.467 24.067a306.98 306.98 0 0 0-6.871-11.3c7.21 0.91 14.117 2.12 20.603 3.601-1.947 6.241-4.374 12.767-7.232 19.457a336.42 336.42 0 0 0-6.5-11.758zm-39.747-38.714c4.452 4.823 8.911 10.209 13.297 16.052a284.24 284.24 0 0 0-26.706-6e-3c4.39-5.789 8.887-11.167 13.409-16.046zm-40.002 38.78a285.24 285.24 0 0 0-6.378 11.685c-2.811-6.667-5.216-13.222-7.18-19.552 6.447-1.443 13.322-2.622 20.485-3.517a283.79 283.79 0 0 0-6.927 11.384zm7.133 57.683c-7.4-0.826-14.379-1.945-20.824-3.348 1.995-6.442 4.453-13.138 7.324-19.948a283.49 283.49 0 0 0 6.406 11.692 285.27 285.27 0 0 0 7.094 11.604zm33.136 27.389c-4.575-4.937-9.138-10.397-13.595-16.27 4.326 0.17 8.737 0.256 13.22 0.256 4.606 0 9.159-0.103 13.64-0.303-4.4 5.98-8.843 11.448-13.265 16.317zm46.072-51.032c3.02 6.884 5.566 13.544 7.588 19.877-6.552 1.495-13.625 2.699-21.078 3.593a337.54 337.54 0 0 0 6.937-11.498 306.63 306.63 0 0 0 6.553-11.972zm-14.915 7.15a316.48 316.48 0 0 1-10.84 17.49c-6.704 0.479-13.632 0.726-20.692 0.726-7.031 0-13.871-0.219-20.458-0.646a273.8 273.8 0 0 1-11.043-17.517 271.33 271.33 0 0 1-9.64-18.206 273.86 273.86 0 0 1 9.611-18.216v2e-3a271.25 271.25 0 0 1 10.956-17.442c6.72-0.508 13.61-0.774 20.575-0.774 6.996 0 13.895 0.268 20.613 0.78a290.7 290.7 0 0 1 10.887 17.383 316.42 316.42 0 0 1 9.741 18.13 290.81 290.81 0 0 1-9.709 18.29zm19.913-107.79c7.566 4.364 10.509 21.961 5.755 45.038a127.52 127.52 0 0 1-1.016 4.492c-9.374-2.163-19.554-3.773-30.212-4.773-6.209-8.841-12.642-16.88-19.1-23.838a141.92 141.92 0 0 1 5.196-4.766c16.682-14.518 32.273-20.25 39.377-16.153z"
            fill={theme === 'dark' ? '#171a24' : '#fff'}
          />
          <path
            d="m128.22 94.665c11.144 0 20.177 9.034 20.177 20.177 0 11.144-9.033 20.178-20.177 20.178-11.143 0-20.177-9.034-20.177-20.178 0-11.143 9.034-20.177 20.177-20.177"
            fill="#53C1DE"
          />
        </svg>
      );
    case 'resume':
      return (
        <svg className={className} viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M11.362 2c4.156 0 2.638 6 2.638 6s6-1.65 6 2.457v11.543h-16v-20h7.362zm.827-2h-10.189v24h20v-14.386c0-2.391-6.648-9.614-9.811-9.614zm4.811 13h-10v-1h10v1zm0 2h-10v1h10v-1zm0 3h-10v1h10v-1z"
          />
        </svg>
      );
    case 'sun':
      return (
        <svg className={className} viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          ></path>
        </svg>
      );
    case 'tailwind':
      return (
        <svg className={className} viewBox="0 0 52 36">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z"
            fill="#06B6D4"
          ></path>
        </svg>
      );
    case 'twitter':
      return (
        <svg
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
        </svg>
      );
    case 'x':
      return (
        <svg
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M15 9l-6 6M9 9l6 6" />
        </svg>
      );
    case 'vercel':
      return (
        <svg
          className={className}
          viewBox="0 0 116 100"
          fill={theme === 'dark' ? '#fff' : '#000'}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M57.5 0L115 100H0L57.5 0z"
          />
        </svg>
      );
    default:
      return null;
  }
};

export default Icon;
