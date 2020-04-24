import Link from "next/link";

const Nav = () => {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>Venues</a>
        </Link>
      </li>
      <li>
        <Link href="/beverages">
          <a>Beverages</a>
        </Link>
      </li>
    </ul>
  );
};

export default Nav;
