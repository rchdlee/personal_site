import { useState } from "react";

const Figma = () => {
  const [isHovering, setIsHovering] = useState(false);

  const hoverHandler = () => {
    setIsHovering(true);
  };

  const unhoverHandler = () => {
    setIsHovering(false);
  };

  return (
    <svg
      width="726"
      height="477"
      viewBox="0 0 726 477"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="figma">
        <g id="pencil">
          <path
            d="M273.967 385.19L213.935 407.945L209.275 410.113L211.681 416.105L216.581 415.068L276.253 390.616L280.993 386.136L284.312 383L279.139 384.095L273.967 385.19Z"
            fill="#717171"
          />
          <path
            d="M273.967 385.19L213.935 407.945M273.967 385.19L276.253 390.616M273.967 385.19L279.139 384.095M213.935 407.945L216.581 415.068M213.935 407.945L209.275 410.113L211.681 416.105L216.581 415.068M216.581 415.068L276.253 390.616M276.253 390.616L280.993 386.136M279.139 384.095L284.312 383L280.993 386.136M279.139 384.095L280.993 386.136"
            stroke="black"
          />
        </g>
        <g id="paper">
          <path
            d="M324.721 401.004V411.444C322.517 412.154 317.035 414.85 312.737 419.95C310.089 423.091 306.426 419.382 303.1 414.81C301.685 415.455 300.509 415.291 299.925 413.763C297.859 408.35 292.954 404.484 295.379 404.484C297.129 400.875 300.93 393.89 302.137 394.818C303.244 389.869 317.655 396.88 324.721 401.004Z"
            fill="#D9D9D9"
          />
          <path
            d="M316.456 398.298C312.599 398.427 305.215 399.148 306.538 401.004C307.86 402.86 308.466 405.128 308.604 406.031H302.818C302.278 406.978 301.811 408.372 302.137 409.51M302.137 409.51C302.476 410.694 303.673 411.601 306.538 411.444C313.563 411.057 316.869 407.964 312.737 404.484C308.604 401.004 306.538 392.885 311.497 394.818C315.464 396.364 317.558 402.937 318.109 406.031L302.137 409.51ZM302.137 409.51C308.604 416.083 309.017 418.79 313.976 415.696C317.944 413.222 322.793 411.83 324.721 411.444M324.721 411.444V401.004C317.655 396.88 303.244 389.869 302.137 394.818M324.721 411.444C322.517 412.154 317.034 414.85 312.737 419.95C307.364 426.324 297.805 404.484 295.379 404.484M302.137 394.818C300.752 401.004 294.553 406.031 299.925 404.484C305.298 402.937 313.976 399.177 312.737 403.324C311.497 407.471 301.992 419.176 299.925 413.763C297.859 408.35 292.954 404.484 295.379 404.484M302.137 394.818C300.93 393.89 297.129 400.875 295.379 404.484"
            stroke="black"
          />
        </g>
        <g id="birb">
          <g id="beak-closed">
            <path
              d="M175.434 349.989C177.431 349.103 181.854 349.318 185.998 349.525C190.106 349.73 182.105 354.573 176.92 356.934C176.841 357.217 176.789 356.994 176.789 356.994L177.256 353.053L175.434 349.989Z"
              fill="#BB7E5D"
            />
            <path
              d="M185.998 349.525C181.854 349.318 177.431 349.103 175.434 349.989L177.256 353.053M185.998 349.525C190.141 349.732 181.969 354.655 176.789 356.994M185.998 349.525C183.988 350.416 179.266 352.162 177.256 353.053M176.789 356.994C176.789 356.994 177.022 357.997 177.256 353.053M176.789 356.994L177.256 353.053"
              stroke="black"
            />
          </g>
          <g id="body">
            <path
              d="M144.565 358.175L146.958 349.416C147.116 346.099 158.255 341.102 163.172 341.348C167.636 341.571 174.69 348.828 176.893 353.584C177.372 354.881 176.718 357.27 176.718 357.27C175.794 359.869 174.313 362.612 173.147 364.772C172.684 365.63 172.271 366.396 171.961 367.025L172.901 376.293C172.361 379.921 167.038 394.476 164.415 398.624C162.646 401.166 156.339 406.072 142.881 406.406C129.401 406.74 119.004 404.642 115.674 404.082C115.065 403.778 114.414 403.427 113.745 403.033C109.795 400.702 105.25 396.851 105.33 392.189C99.4258 393.053 90.419 392.981 86.6535 392.837C87.3627 391.446 89.6796 387.157 93.2733 381.132C95.1942 377.911 98.666 374.648 102.195 371.772C101.97 371.525 101.716 371.263 101.445 370.983C99.72 369.204 97.328 366.737 97.7478 363.319C98.2335 359.364 95.8308 356.557 95.8308 356.557L89.1858 336.667L94.7741 339.508L94.3817 324.179L98.9659 329.741L98.0618 316.394C103.421 324.605 110.693 341.336 111.537 344.779C111.832 345.982 112.57 348.072 113.432 350.512L113.432 350.512C115.035 355.053 117.065 360.803 117.465 364.303C120.446 364.011 122.852 363.92 124.431 363.859L124.432 363.859C125.161 363.832 125.715 363.811 126.067 363.78C127.018 363.696 128.166 363.759 133.52 361.569C136.895 360.188 141.887 359.194 144.565 358.175Z"
              fill="#6B8F71"
            />
            <path
              d="M105.33 392.189C105.25 396.851 109.795 400.702 113.745 403.033C114.414 403.427 115.065 403.778 115.674 404.082C119.004 404.642 129.401 406.74 142.881 406.406C156.339 406.072 162.646 401.166 164.415 398.624C167.038 394.476 172.361 379.921 172.901 376.293L171.961 367.025C172.271 366.396 172.684 365.63 173.147 364.772C174.313 362.612 175.794 359.869 176.718 357.27C176.718 357.27 177.372 354.881 176.893 353.584C174.69 348.828 167.636 341.571 163.172 341.348C158.255 341.102 147.116 346.099 146.958 349.416L144.565 358.175C141.887 359.194 136.895 360.188 133.52 361.569C128.166 363.759 127.018 363.696 126.067 363.78C125.715 363.811 125.161 363.832 124.431 363.859C122.852 363.92 120.446 364.011 117.465 364.303M105.33 392.189C99.4258 393.053 90.419 392.981 86.6535 392.837C87.3627 391.446 89.6796 387.157 93.2733 381.132M105.33 392.189C116.604 391.082 139.447 386.832 140.624 378.693M93.2733 381.132C95.1942 377.911 98.666 374.648 102.195 371.772M93.2733 381.132C96.4202 375.855 103.73 370.465 108.634 366.849M102.195 371.772C101.97 371.525 101.716 371.263 101.445 370.983C99.72 369.204 97.328 366.737 97.7478 363.319C98.2335 359.364 95.8308 356.557 95.8308 356.557L89.1858 336.667L94.7741 339.508L94.3817 324.179L98.9659 329.741L98.0618 316.394C103.421 324.605 110.693 341.336 111.537 344.779C111.832 345.982 112.57 348.072 113.432 350.512C115.035 355.052 117.065 360.803 117.465 364.303M102.195 371.772C104.447 369.936 106.723 368.258 108.634 366.849M117.465 364.303C116.673 364.381 115.285 364.642 113.952 364.892C112.419 365.18 110.958 365.454 110.559 365.421C109.978 365.857 109.33 366.335 108.634 366.849"
              stroke="black"
            />
          </g>
          <path
            id="eye"
            d="M166.961 351.873C166.792 355.439 163.63 358.215 159.856 358.026C156.081 357.838 153.196 354.76 153.365 351.194C153.534 347.629 156.696 344.853 160.471 345.042C164.246 345.23 167.13 348.308 166.961 351.873Z"
            fill="white"
            stroke="black"
          />
          <path
            id="left-foot"
            d="M114.358 402.309L112.175 407.206L119.516 414.79M119.516 414.79L118.56 416.535L116.472 419.435L119.533 416.584L123.33 418.776L123.425 416.778L130.094 420.115L119.516 414.79Z"
            stroke="black"
          />
          <path
            id="right-foot"
            d="M127.68 404.977L123.757 409.787L132.737 415.241M132.737 415.241L132.643 417.239L132.595 418.238L133.564 417.285L137.204 418.468L137.252 417.469L140.891 418.652L132.737 415.241Z"
            stroke="black"
          />
          <path
            id="eyeball"
            d="M165.562 350.802C165.457 353.008 163.412 354.699 160.994 354.578C158.576 354.458 156.701 352.571 156.805 350.364C156.91 348.158 158.955 346.467 161.373 346.588C163.791 346.709 165.667 348.595 165.562 350.802Z"
            fill="black"
          />
        </g>

        <g id="easel">
          <path
            id="Vector 127"
            d="M526.97 423.236L518.524 277.122L507 277.461L513 423.236L526.97 423.236Z"
            fill="#BB7E5D"
            stroke="black"
            strokeWidth="2"
          />
          <path
            id="Vector 123"
            d="M525 60L526.226 46H538L537.019 60H525Z"
            fill="#BB7E5D"
            stroke="black"
            strokeWidth="2"
          />
          <path
            id="Vector 124"
            d="M642 248H394.725L391 258H640.603L642 248Z"
            fill="#BB7E5D"
            stroke="black"
            strokeWidth="2"
          />
          <g id="Vector 125">
            <path
              d="M410 424L432.707 258H594.991V424H580.966L577.961 278.438H516.854L513.515 328.288H500.826L504.499 278.438H444.728L424.693 424H410Z"
              fill="#BB7E5D"
            />
            <path
              d="M432.707 258C434.71 258.997 438.584 263.184 438.049 271.958C437.515 280.732 437.827 279.934 438.049 278.438H444.728M432.707 258L410 424H424.693L444.728 278.438M432.707 258H594.991M594.991 258C588.647 266.474 588.981 265.976 587.645 269.964C586.847 272.345 586.866 277.109 586.977 278.438H577.961M594.991 258V424H580.966L577.961 278.438M444.728 278.438H504.499M577.961 278.438H516.854M504.499 278.438L500.826 328.288H513.515L516.854 278.438M504.499 278.438H516.854"
              stroke="black"
              strokeWidth="2"
            />
          </g>
          <path
            id="Vector 126"
            d="M578 329H438.636L436 349H578V329Z"
            fill="#BB7E5D"
            stroke="black"
            strokeWidth="2"
          />
        </g>
        <a
          href="https://www.figma.com/file/DhLzWC6LExWIgPV069GMtr/Untitled?node-id=0%3A1"
          target="_blank"
        >
          <g
            onMouseOver={hoverHandler}
            onMouseLeave={unhoverHandler}
            className="test"
            stroke={isHovering ? "#FF272A" : "black"}
            strokeWidth={isHovering ? "4" : "3"}
          >
            <path
              id="canvas"
              d="M647 60H520.816H424L403 248H632.579L647 60Z"
              fill="white"
              stroke="black"
              // stroke={isHovering ? "blue" : "black"}
              strokeWidth="2"
            />
            <g id="text">
              <path
                id="Vector 128"
                d="M462.763 112.874C461.985 107.073 460.637 101.182 461.015 95.3067C461.113 93.793 460.69 91.116 461.419 89.7326C462.33 88.0034 471.008 88.1142 472.179 89.3036C475.753 92.9319 472.641 99.9154 468.803 102.035C466.803 103.139 464.791 103.617 462.545 103.475C461.286 103.395 465.097 103.476 466.315 103.804C467.803 104.206 469.226 105.596 470.335 106.621C472.335 108.468 472.966 111.569 473.88 113.987C474.46 115.521 474.055 118.561 475.497 119.394"
                // stroke="black"
                // strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                id="Vector 129"
                d="M489.807 95.0002C487.314 94.8423 486.529 94.9076 484.764 96.721C483.602 97.9146 483.704 100.419 483.604 101.975C483.287 106.908 486.759 110.421 491.121 111.497C495.336 112.537 499.109 110.14 499.401 105.606C499.579 102.831 495.204 96.1584 492.211 95.9688"
                // stroke="black"
                // strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                id="Vector 130"
                d="M512.861 94.4211C512.012 99.2051 506.013 107.918 511.955 111.707C519.307 116.394 522.283 101.315 522.555 97.0759"
                // stroke="black"
                // strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                id="Vector 131"
                d="M537.78 96.8169C532.827 96.9936 528.648 107.818 531.493 111.495C534.831 115.809 539.933 117.615 544.87 114.405"
                // stroke="black"
                // strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                id="Vector 132"
                d="M534.923 109.286C535.106 108.332 540.941 107.281 542.039 107.288C543.313 107.297 544.84 107.069 546.088 106.819C547.213 106.594 546.068 109.766 545.987 110.168C545.654 111.834 543.788 121.682 545.628 121.798"
                // stroke="black"
                // strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                id="Vector 133"
                d="M555.566 95.087C555.421 97.3402 551.669 116.876 556.201 117.164"
                // stroke="black"
                // strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                id="Vector 134"
                d="M567.594 93.4009C567.319 97.6683 567.045 101.936 566.771 106.203C566.618 108.578 564.695 119.124 566.688 120.277"
                // stroke="black"
                // strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                id="Vector 135"
                d="M553.963 107.228C554.238 105.794 561.945 105.694 563.1 105.767C565.01 105.888 566.92 106.009 568.831 106.13"
                // stroke="black"
                // strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                id="Vector 136"
                d="M468.274 138.372C467.89 144.348 466.277 150.254 465.897 156.177"
                // stroke="black"
                // strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                id="Vector 137"
                d="M469.937 138.07C472.773 138.249 477.94 137.88 480.119 139.531"
                // stroke="black"
                // strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                id="Vector 138"
                d="M467.699 147.314C470.024 147.584 472.271 148.012 474.632 148.161"
                // stroke="black"
                // strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                id="Vector 139"
                d="M489.892 140.967C489.051 146.033 488.822 151.217 488.49 156.385"
                // stroke="black"
                // strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                id="Vector 140"
                d="M510.743 142.696C508.823 142.103 506.946 142.048 504.947 141.921C503.502 141.829 503.251 142.617 502.159 143.377C499.559 145.185 498.38 149.586 498.191 152.533C497.977 155.856 498.958 158.924 502.212 160.315C505.185 161.587 508.898 160.487 510.978 158.218"
                // stroke="black"
                // strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                id="Vector 141"
                d="M503.436 154.067C505.724 153.322 508.604 153.471 510.995 153.345C512.216 153.28 511.558 155.602 511.507 156.392C511.426 157.645 511.164 162.718 512.738 162.818"
                // stroke="black"
                // strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                id="Vector 142"
                d="M521.543 160.112C521.674 158.072 521.806 156.033 521.937 153.993C521.974 153.413 522.328 146.471 523.485 147.675C524.836 149.082 525.989 150.906 526.747 152.688C527.668 154.852 528.074 153.907 529.343 152.445C531.08 150.446 533.24 148.839 535.278 147.153C536.766 145.923 536.406 147.326 536.564 148.822C536.85 151.528 536.832 154.272 536.93 156.984C536.972 158.146 536.372 159.842 537.125 160.692"
                // stroke="black"
                // strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                id="Vector 143"
                d="M548.099 162.612C548.363 158.504 551.521 154.528 552.971 150.769C553.348 149.79 555.603 144.762 556.013 145.362C558.166 148.505 558.713 152.745 559.39 156.413C560.004 159.74 559.952 163.649 559.735 167.022"
                // stroke="black"
                // strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                id="Vector 144"
                d="M551.279 157.916L557.419 158.305"
                // stroke="black"
                // strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                id="Vector 145"
                d="M438.438 185.423C438.071 191.138 437.694 196.999 437.328 202.696C437.216 204.442 436.868 208.121 438.56 209.099"
                // stroke="black"
                // strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                id="Vector 146"
                d="M437.62 185.371C440.55 185.386 444.263 183.817 446.795 186.157C449.255 188.43 449.585 191.066 449.365 194.481C448.93 201.251 447.391 208.454 440.093 210.829"
                // stroke="black"
                // strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                id="Vector 147"
                d="M461.285 188.095L473.975 188.899"
                // stroke="black"
                // strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                id="Vector 148"
                d="M459.516 190.024C459.239 194.329 458.963 198.634 458.686 202.939C458.306 208.842 465.796 210.272 469.907 207.414"
                // stroke="black"
                // strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                id="Vector 149"
                d="M459.76 199.017C460.15 198.155 468.212 198.488 469.663 198.42"
                // stroke="black"
                // strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                id="Vector 150"
                d="M487.788 191.408C487.394 189.927 481.34 189.409 481.211 191.421C481.034 194.167 483.154 195.822 484.817 197.839C486.748 200.181 487.059 202.748 486.875 205.61C486.718 208.044 481.044 207.303 479.374 207.197"
                // stroke="black"
                // strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                id="Vector 151"
                d="M497.413 188.752C497.083 193.883 496.411 198.971 496.016 204.08C495.966 204.725 495.417 209.363 496.106 209.074"
                // stroke="black"
                // strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                id="Vector 152"
                d="M522.95 187.923C520.516 187.007 516.214 186.41 513.912 187.849C509.562 190.567 508.156 194.979 507.833 200.001C507.231 209.365 517.045 209.993 523.969 210.432"
                // stroke="black"
                // strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                id="Vector 153"
                d="M516.33 201.378C518.486 201.277 520.713 201.034 522.911 200.956C524.774 200.889 524.5 202.178 524.386 203.951C524.139 207.784 524.31 211.524 524.065 215.334"
                // stroke="black"
                // strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                id="Vector 154"
                d="M535.997 189.566C535.522 196.951 533.423 204.03 532.948 211.409"
                // stroke="black"
                // strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                id="Vector 155"
                d="M535.152 189.92C535.995 190.978 536.299 192.357 537 193.506C538.153 195.398 539.592 197.174 540.92 198.946C543.76 202.737 547.724 205.561 551.014 208.881C551.365 209.236 551.354 206.425 551.393 205.822C551.539 203.554 551.457 201.374 551.322 199.107C551.049 194.506 551.597 189.865 551.892 185.268"
                // stroke="black"
                // strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                id="Vector 156"
                d="M572.099 190.629C569.77 188.525 562.857 187.934 561.059 191.154C558.506 195.728 563.398 200.016 565.5 203.769C567.443 207.237 566.744 211.794 566.385 215.568C566.049 219.107 557.046 218.723 555.176 217.306"
                // stroke="black"
                // strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                id="Vector 157"
                d="M598.131 193.515C596.451 193.409 593.274 192.351 593.14 194.423C593.023 196.254 593.23 197.991 593.21 199.732C593.184 202.041 594.147 204.331 594 206.629C593.95 207.401 594.09 208.603 594.258 209.366C594.378 209.914 594.288 211.335 594.533 211.832C595.096 212.974 603.343 212.617 604.502 212.69C606.898 212.842 609.293 212.994 611.689 213.146C612.373 213.189 615.682 213.834 615.786 212.997C615.91 211.993 615.917 210.959 615.982 209.949C616.116 207.861 615.444 205.523 615.568 203.598"
                // stroke="black"
                // strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                id="Vector 158"
                d="M601.44 205.966C601.772 204.236 606.034 201.186 607.372 200.017C608.307 199.2 609.552 197.769 610.164 196.725C611.374 194.662 612.036 195.212 609.745 195.067C608.466 194.985 607.38 195.325 606.08 195.242C604.795 195.161 608.736 195.614 609.944 195.17C610.653 194.909 613.277 194.482 613.212 195.49C613.132 196.738 613.183 197.892 612.58 198.919"
                // stroke="black"
                // strokeWidth="3"
                strokeLinecap="round"
              />
            </g>
          </g>
        </a>
      </g>
    </svg>
  );
};

export default Figma;
