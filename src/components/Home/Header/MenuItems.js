"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./MenuItems.module.css";

/* coverageData (unchanged) */
const coverageData = {
  Asia: [
    {
      name: "Japan",
      flagSrc: "/icons/countries-icon/asia/japan.png",
      url: "/coverage/asia/japan",
    },
    {
      name: "Thailand",
      flagSrc: "/icons/countries-icon/asia/thailand.png",
      url: "/coverage/asia/thailand",
    },
    {
      name: "Vietnam",
      flagSrc: "/icons/countries-icon/asia/vietnam.png",
      url: "/coverage/asia/vietnam",
    },
    {
      name: "Russia",
      flagSrc: "/icons/countries-icon/asia/russia.png",
      url: "/coverage/asia/russia",
    },
    {
      name: "Philippines",
      flagSrc: "/icons/countries-icon/asia/philippines.png",
      url: "/coverage/asia/philippines",
    },
    {
      name: "Turkey",
      flagSrc: "/icons/countries-icon/asia/turkey.png",
      url: "/coverage/asia/turkey",
    },
    {
      name: "Singapore",
      flagSrc: "/icons/countries-icon/asia/singapore.png",
      url: "/coverage/asia/singapore",
    },
    {
      name: "Malaysia",
      flagSrc: "/icons/countries-icon/asia/malaysia.png",
      url: "/coverage/asia/malaysia",
    },
    {
      name: "Indonesia",
      flagSrc: "/icons/countries-icon/asia/indonesia.png",
      url: "/coverage/asia/indonesia",
    },
  ],
  Europe: [
    {
      name: "United Kingdom",
      flagSrc: "/icons/countries-icon/europe/united-kingdom.png",
      url: "/coverage/europe/united-kingdom",
    },
    {
      name: "France",
      flagSrc: "/icons/countries-icon/europe/france.png",
      url: "/coverage/europe/france",
    },
    {
      name: "Germany",
      flagSrc: "/icons/countries-icon/europe/germany.png",
      url: "/coverage/europe/germany",
    },
    {
      name: "Spain",
      flagSrc: "/icons/countries-icon/europe/spain.png",
      url: "/coverage/europe/spain",
    },
    {
      name: "Italy",
      flagSrc: "/icons/countries-icon/europe/italy.png",
      url: "/coverage/europe/italy",
    },
    {
      name: "Sweden",
      flagSrc: "/icons/countries-icon/europe/sweden.png",
      url: "/coverage/europe/sweden",
    },
    {
      name: "Netherlands",
      flagSrc: "/icons/countries-icon/europe/netherlands.png",
      url: "/coverage/europe/netherlands",
    },
    {
      name: "Ireland",
      flagSrc: "/icons/countries-icon/europe/ireland.png",
      url: "/coverage/europe/ireland",
    },
    {
      name: "Finland",
      flagSrc: "/icons/countries-icon/europe/finland.png",
      url: "/coverage/europe/finland",
    },
    {
      name: "Russia",
      flagSrc: "/icons/countries-icon/europe/russia.png",
      url: "/coverage/europe/russia",
    },
    {
      name: "Hungary",
      flagSrc: "/icons/countries-icon/europe/hungary.png",
      url: "/coverage/europe/hungary",
    },
    {
      name: "Belgium",
      flagSrc: "/icons/countries-icon/europe/belgium.png",
      url: "/coverage/europe/belgium",
    },
    {
      name: "Turkey",
      flagSrc: "/icons/countries-icon/europe/turkey.png",
      url: "/coverage/europe/turkey",
    },
  ],
  Africa: [
    {
      name: "Nigeria",
      flagSrc: "/icons/countries-icon/africa/nigeria.png",
      url: "/coverage/africa/nigeria",
    },
    {
      name: "Ghana",
      flagSrc: "/icons/countries-icon/africa/ghana.png",
      url: "/coverage/africa/ghana",
    },
    {
      name: "Kenya",
      flagSrc: "/icons/countries-icon/africa/kenya.png",
      url: "/coverage/africa/kenya",
    },
  ],
  Oceania: [
    {
      name: "Australia",
      flagSrc: "/icons/countries-icon/oceania/australia.png",
      url: "/coverage/oceania/australia",
    },
    {
      name: "New Zealand",
      flagSrc: "/icons/countries-icon/oceania/new-zealand.png",
      url: "/coverage/oceania/newzealand",
    },
  ],
  "Latin America": [
    {
      name: "Canada",
      flagSrc: "/icons/countries-icon/latin-america/canada.png",
      url: "/coverage/latin-america/canada",
    },
    {
      name: "USA",
      flagSrc: "/icons/countries-icon/latin-america/usa.png",
      url: "/coverage/latin-america/usa",
    },
    {
      name: "Brazil",
      flagSrc: "/icons/countries-icon/latin-america/brazil.png",
      url: "/coverage/latin-america/brazil",
    },
  ],
};

function useIsMobile(breakpoint = 1200) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const onChange = (e) => setIsMobile(e.matches);
    setIsMobile(mql.matches);
    mql.addEventListener?.("change", onChange);
    return () => mql.removeEventListener?.("change", onChange);
  }, [breakpoint]);
  return isMobile;
}

export default function MenuItems({ onNavigate }) {
  const pathname = usePathname();
  const isMobile = useIsMobile(1200); // <— hamburger/mobile breakpoint at 1200px

  // helper goes here ⬇️
  const isActive = (base) =>
    pathname === base || pathname.startsWith(base + "/");

  // mobile-only: which dropdown is open?
  const [openKey, setOpenKey] = useState(null);
  const [activeContinent, setActiveContinent] = useState("Asia");

  // close any open dropdown on route change (useful when hamburger closes after nav)
  useEffect(() => setOpenKey(null), [pathname]);

  const toggle = (key) => setOpenKey((prev) => (prev === key ? null : key));
  const handleLeafClick = () => {
    if (typeof onNavigate === "function") onNavigate(); // lets header close the drawer
  };

  // NEW: Parent links are clickable on mobile.
  // First tap opens submenu; second tap navigates.
  const handleParentClick = (e, key) => {
    if (!isMobile) return; // Desktop: allow normal navigation.
    if (openKey !== key) {
      e.preventDefault(); // First tap: open submenu only.
      setOpenKey(key);
    } else {
      // Second tap while open: allow navigation and close the drawer if needed.
      if (typeof onNavigate === "function") onNavigate();
    }
  };

  return (
    <ul className={[styles.menu, "navbar-nav"].join(" ")}>
      <li>
        <Link
          href="/"
          className={pathname === "/" ? styles.active : ""}
          onClick={handleLeafClick}
        >
          Home
        </Link>
      </li>

      <li>
        <Link
          href="/about"
          className={isActive("/about") ? styles.active : ""}
          onClick={handleLeafClick}
        >
          About Us
        </Link>
      </li>

      {/* Solutions */}
      <li
        className={[
          styles.dropdown,
          openKey === "solutions" ? styles.open : "",
        ].join(" ")}
      >
        <Link
          href="/solutions"
          className={`${styles.link} ${
            pathname.startsWith("/solutions") ? styles.active : ""
          }`}
          aria-haspopup="true"
          aria-expanded={openKey === "solutions"}
          onClick={(e) => handleParentClick(e, "solutions")}
        >
          Solutions
        </Link>
        <ul className={styles.dropdownMenu} role="menu">
          <li>
            <Link href="/solutions/payins" onClick={handleLeafClick}>
              PayIns
            </Link>
          </li>
          <li>
            <Link href="/solutions/payouts" onClick={handleLeafClick}>
              PayOuts
            </Link>
          </li>
          <li>
            <Link href="/solutions/whitelabeling" onClick={handleLeafClick}>
              White Labeling
            </Link>
          </li>
        </ul>
      </li>

      {/* Coverage */}
      <li
        className={[
          styles.dropdown,
          openKey === "coverage" ? styles.open : "",
        ].join(" ")}
      >
        <Link
          href="/coverage"
          className={`${styles.link} ${
            pathname.startsWith("/coverage") ? styles.active : ""
          }`}
          aria-haspopup="true"
          aria-expanded={openKey === "coverage"}
          onClick={(e) => handleParentClick(e, "coverage")}
        >
          Coverage
        </Link>

        <ul
          className={`${styles.dropdownMenu} ${styles.coverageDropdown}`}
          role="menu"
        >
          <li className={styles.continentsList}>
            {Object.keys(coverageData).map((continent) => (
              <Link
                key={continent}
                href={`/coverage/${continent
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className={`${styles.continentName} ${
                  activeContinent === continent ? styles.activeContinent : ""
                }`}
                onMouseEnter={() => !isMobile && setActiveContinent(continent)}
                onFocus={() => !isMobile && setActiveContinent(continent)}
                onClick={(e) => {
                  if (isMobile) {
                    if (activeContinent !== continent) {
                      // First tap: just open/select this continent
                      e.preventDefault();
                      setActiveContinent(continent);
                    }
                    
                    else {
                     
                      if (typeof onNavigate === "function") onNavigate();
                     
                    }
                  } else {
                    // Desktop: navigate normally
                    handleLeafClick();
                  }
                }}
              >
                {continent}
              </Link>
            ))}
          </li>

          <li className={styles.countriesList}>
            {(() => {
              const countries = coverageData[activeContinent] || [];
              const mid = Math.ceil(countries.length / 2);
              const col1 = countries.slice(0, mid);
              const col2 = countries.slice(mid);
              return countries.length > 4 ? (
                <div className={styles.twoColumnsWrapper}>
                  <div className={styles.column}>
                    {col1.map(({ name, flagSrc, url }) => (
                      <Link
                        href={url}
                        key={name}
                        className={styles.countryItem}
                        onClick={handleLeafClick}
                      >
                        <Image
                          src={flagSrc}
                          alt={`${name} flag`}
                          width={24}
                          height={16}
                          className={styles.flagIcon}
                        />
                        {name}
                      </Link>
                    ))}
                  </div>
                  <div className={styles.column}>
                    {col2.map(({ name, flagSrc, url }) => (
                      <Link
                        href={url}
                        key={name}
                        className={styles.countryItem}
                        onClick={handleLeafClick}
                      >
                        <Image
                          src={flagSrc}
                          alt={`${name} flag`}
                          width={24}
                          height={16}
                          className={styles.flagIcon}
                        />
                        {name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                countries.map(({ name, flagSrc, url }) => (
                  <Link
                    href={url}
                    key={name}
                    className={styles.countryItem}
                    onClick={handleLeafClick}
                  >
                    <Image
                      src={flagSrc}
                      alt={`${name} flag`}
                      width={24}
                      height={16}
                      className={styles.flagIcon}
                    />
                    {name}
                  </Link>
                ))
              );
            })()}
          </li>
        </ul>
      </li>

      {/* Industries */}
      <li
        className={[
          styles.dropdown,
          openKey === "industries" ? styles.open : "",
        ].join(" ")}
      >
        <Link
          href="/industries/digital-subscriptions"
          className={`${styles.link} ${
            pathname.startsWith("/industries") ? styles.active : ""
          }`}
          aria-haspopup="true"
          aria-expanded={openKey === "industries"}
          onClick={(e) => handleParentClick(e, "industries")}
        >
          Industries
        </Link>
        <ul className={styles.dropdownMenu} role="menu">
          <li>
            <Link
              href="/industries/digital-subscriptions"
              onClick={handleLeafClick}
            >
              Digital &amp; Subscriptions
            </Link>
          </li>
          <li>
            <Link
              href="/industries/travel-hospitality"
              onClick={handleLeafClick}
            >
              Travel &amp; Hospitality
            </Link>
          </li>
          <li>
            <Link href="/industries/retail-ecommerce" onClick={handleLeafClick}>
              Retail &amp; E-commerce
            </Link>
          </li>
          <li>
            <Link
              href="/industries/remittance-fintech"
              onClick={handleLeafClick}
            >
              Remittance &amp; Fintech
            </Link>
          </li>
          <li>
            <Link
              href="/industries/healthcare-wellness"
              onClick={handleLeafClick}
            >
              Healthcare &amp; Wellness
            </Link>
          </li>
          <li>
            <Link href="/industries/others-industry" onClick={handleLeafClick}>
              Other Industries
            </Link>
          </li>
        </ul>
      </li>

      <li>
        <Link
          href="/blogs"
          className={pathname.startsWith("/blogs") ? styles.active : ""}
          onClick={handleLeafClick}
        >
          Blogs
        </Link>
      </li>
<li>
        <Link
          href="/developers"
          className={pathname.startsWith("/developers") ? styles.active : ""}
          onClick={handleLeafClick}
        >
          Developers
        </Link>
      </li>

      <li>
        <Link
          href="/contact"
          className={pathname.startsWith("/contact") ? styles.active : ""}
          onClick={handleLeafClick}
        >
          Contact Us
        </Link>
      </li>
    </ul>
  );
}
