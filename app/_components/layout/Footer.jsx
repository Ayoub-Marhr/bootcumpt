import Link from "next/link";

export default function Footer() {
  const navItems = [
    { display: "the camp", slug: "/" },
    { display: "the experience", slug: "/experience" },
    { display: "the blog", slug: "/blog" },
    { display: "the events", slug: "/events" },
  ];
  const policies = [
    { display: "Imprint", slug: "/" },
    { display: "Terms and Conditions", slug: "/" },
    { display: "Data Protection", slug: "/" },
  ];
  return (
    <>
      <footer className="footer">
        <nav className="footer__nav">
          <img src="/assets/logo.svg" alt="" className="footer__logo" />
          <ul className="footer__links">
            {navItems.map((item) => (
              <li key={item.slug}>
                <Link href={item.slug}>
                  <h5>{item.display}</h5>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="footer__policies">
          <ul className="footer__policies-nav">
            {policies.map((item) => (
              <li key={item.slug}>
                <Link href={item.slug}>
                  <p className="copy">{item.display}</p>
                </Link>
              </li>
            ))}
          </ul>
          <p className="copy">© Sam’s Surfcamp - all rights reserved</p>
        </div>
      </footer>
    </>
  );
}
