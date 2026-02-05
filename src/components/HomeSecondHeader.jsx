import React from "react";
import "./homeSecondHeader.css";

const HomeSecondHeader = () => {
  const tabs = [
    { label: "Tests & results", active: true },
    { label: "Book new test" },
    { label: "Preparation" },
    { label: "Help & contact" },
    { label: "My account" },
  ];

  return (
    <header className="bc2-header">
      <div className="bc2-container" style={{paddingBottom: 0}}>
        {/* Top row: logos */}
        <div className="bc2-top">
          <div className="bc2-logos">
            <img
              src="https://takeielts.britishcouncil.org/themes/bc_ielts/img/bc-logo-white.svg"
              alt="British Council"
              className="bc2-bc-logo"
            />

            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='234' height='69'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpolygon fill='%23FFFFFF' points='0 2.168 8.301 2.168 16.602 2.168 16.602 34.605 16.602 67.042 8.301 67.042 0 67.042 0 34.605'/%3E%3Cpolygon fill='%23FFFFFF' points='23.446 2.168 73.613 2.168 73.613 15.431 40.048 15.431 40.048 27.341 73.522 27.341 73.522 40.335 40.048 40.335 40.048 53.777 73.793 53.777 73.793 67.042 23.446 67.042'/%3E%3Cpolygon fill='%23FFFFFF' points='80.022 2.168 96.715 2.168 96.715 52.965 127.211 52.965 127.211 67.042 80.022 67.042'/%3E%3Cpolygon fill='%23FFFFFF' points='133.443 15.34 114.854 15.34 114.854 2.168 168.722 2.168 168.722 15.34 150.042 15.34 150.042 67.042 133.443 67.042'/%3E%3Cpath fill='%23FFFFFF' d='M185.3713,45.4774 C185.5503,52.8764 189.7023,56.6674 197.6423,56.6674 C204.5893,56.6674 208.2873,54.2294 208.2873,50.2604 C208.2873,48.0944 207.2963,46.4684 205.7623,45.6564 C201.8833,43.6724 194.4843,42.4104 185.0093,38.6184 C175.6243,34.9204 170.7543,28.6944 170.7543,20.6644 C170.7543,8.4844 180.4083,0.3634 196.6513,0.3634 C212.4383,0.3634 222.0933,8.8444 222.0933,21.7464 L206.4853,21.7464 C205.7623,15.7024 202.2433,12.9044 195.5663,12.9044 C189.9713,12.9044 186.5443,15.5214 186.5443,18.7694 C186.5443,23.6424 191.5983,24.6344 201.7943,27.9734 C209.2813,30.4084 214.6973,32.1224 217.8533,34.6494 C222.0933,38.0774 224.2593,42.7694 224.2593,48.3644 C224.2593,60.9944 214.2443,68.8474 196.0163,68.8474 C179.1463,68.8474 170.3923,61.1764 169.4013,45.4774 L185.3713,45.4774 Z'/%3E%3Cpolygon fill='%23FFFFFF' points='221.268 3.304 219.104 3.304 219.104 2.005 224.922 2.005 224.922 3.304 222.77 3.304 222.77 9.303 221.268 9.303'/%3E%3Cpolygon fill='%23FFFFFF' points='225.886 2.005 228.109 2.005 229.56 7.557 230.989 2.005 233.224 2.005 233.224 9.304 231.813 9.304 231.813 3.416 230.331 9.304 228.797 9.304 227.297 3.416 227.297 9.304 225.886 9.304'/%3E%3C/g%3E%3C/svg%3E"
              alt="IELTS"
              className="bc2-ielts-logo"
            />
          </div>
        </div>

        {/* Tabs row */}
        <nav className="bc2-tabs" aria-label="Primary">
          {tabs.map((t) => (
            <a
              key={t.label}
              href="#"
              className={`bc2-tab ${t.active ? "bc2-tab--active" : ""}`}
            >
              {t.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default HomeSecondHeader;
