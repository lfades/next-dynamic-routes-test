import Link from "next/link";

const linkStyle = {
  marginRight: 15
};

const Header = () => {
  return (
    <div>
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/about">
        <a style={linkStyle}>About</a>
      </Link>
      <Link href="/teams/[id]/members" as="/teams/123456/members">
        <a style={linkStyle}>Dynamic page</a>
      </Link>
    </div>
  );
};

export default Header;
