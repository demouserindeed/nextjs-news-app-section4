import Link from "next/link";

export default function ManinHeader() {
  return (
    <>
      <header>Main header</header>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/news">News Page</Link>
        </li>
      </ul>
    </>
  );
}
