import classNames from "classnames";
import Link from "next/link";
import { useState, useEffect } from "react";

function Navigation() {
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const screenHeight = window.innerHeight;

      let hash = "";

      for (let i = 0; i < nav.length; i++) {
        const itemHash = nav[i].href.replaceAll("#", "");
        const element = document.getElementById(itemHash);

        if (element) {
          const { top, bottom } = element.getBoundingClientRect();

          if (top < screenHeight / 3 && bottom > screenHeight / 3) {
            hash = itemHash;
            break;
          }
        }
      }

      setActiveHash((prevState) => {
        if (prevState === hash) return prevState;

        return hash;
      });
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const linkItem = document.getElementById(`${activeHash}`);

    if (linkItem)
      linkItem.scrollIntoView({ inline: "nearest", block: "nearest" });
  }, [activeHash]);

  return (
    <ul className="Navigation hide-for-mobile">
      {nav.map((item, index) => (
        <li
          key={index}
          className={classNames({
            active: activeHash === item.href.replaceAll("#", ""),
          })}
        >
          <Link href={item.href}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
}

const nav = [
  {
    name: "Workflow",
    href: "#workflow",
  },
  {
    name: "Portfolio",
    href: "#portfolio",
  },
  //   {
  //     name: "Testimonials",
  //     href: "#testimonials",
  //   },
  //   {
  //     name: "Technologies",
  //     href: "#technologies",
  //   },
  //   {
  //     name: "App Features",
  //     href: "#app-features",
  //   },
  {
    name: "FAQ",
    href: "#faq",
  },
];

export default Navigation;
