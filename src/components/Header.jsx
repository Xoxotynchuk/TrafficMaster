import { useContext, useState } from "react";
import { GlobalContext } from "./store/GlobalContext";
import { Link } from "react-router-dom";


function Header() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const { setStatus } = useContext(GlobalContext);


  return (
    <header>
        <div className="header-main">
            <h1>TRAFFICMaster</h1>
            <Link to="/">
                <svg width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.9646 0.674819C17.4029 0.237456 16.7115 0 15.9998 0C15.2882 0 14.5968 0.237456 14.0351 0.674819L0.620953 11.1161C-0.582222 12.0561 0.0801643 13.9858 1.60493 13.9858H3.2001V26.7972C3.2001 27.6466 3.53724 28.4613 4.13734 29.0619C4.73744 29.6626 5.55136 30 6.40004 30H12.7999V20.3915C12.7999 19.542 13.137 18.7274 13.7371 18.1267C14.3373 17.5261 15.1512 17.1887 15.9998 17.1887C16.8485 17.1887 17.6624 17.5261 18.2625 18.1267C18.8626 18.7274 19.1998 19.542 19.1998 20.3915V30H25.5996C26.4483 30 27.2622 29.6626 27.8623 29.0619C28.4624 28.4613 28.7996 27.6466 28.7996 26.7972V13.9858H30.3947C31.9179 13.9858 32.5835 12.0561 31.3787 11.1177L17.9646 0.674819Z" fill="white"/>
                </svg>
            </Link>
        </div>
        <div className="header-wave__first">
            <svg preserveAspectRatio="none" width="393" height="100" viewBox="0 0 393 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 -107H403V88.9968L367.765 80.4796C331.391 71.6872 293.236 73.7735 258.037 86.4792L248.942 89.7623C223.045 99.1107 195.246 101.951 167.993 98.0326L49.5 80.9968L-31.5 76.5L0 -107Z" fill="url(#paint0_linear_42_1290)"/>
                <defs>
                <linearGradient id="paint0_linear_42_1290" x1="201.5" y1="-107" x2="201.5" y2="102" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0A3FFB"/>
                <stop offset="1" stopColor="#83A2FF"/>
                </linearGradient>
                </defs>
            </svg>
        </div>
        <div className="header-wave__second">
            <svg preserveAspectRatio="none" width="393" height="125" viewBox="0 0 393 125" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 -71H403V124.997L370.75 117.248L365.225 115.921C347.506 111.664 329.254 110.048 311.062 111.126L232.518 115.781C218.865 116.59 205.168 116.206 191.582 114.632L107.137 104.853C90.7561 102.956 74.2229 102.752 57.7999 104.245L0 109.5V-71Z" fill="url(#paint0_linear_42_1289)" fillOpacity="0.6"/>
                <defs>
                <linearGradient id="paint0_linear_42_1289" x1="201.5" y1="-71" x2="201.5" y2="138" gradientUnits="userSpaceOnUse">
                <stop stopColor="#830AFB"/>
                <stop offset="0.45417" stopColor="#834FFD"/>
                <stop offset="1" stopColor="#83A2FF"/>
                </linearGradient>
                </defs>
            </svg>
        </div>
    </header>
  );
}

export default Header;
