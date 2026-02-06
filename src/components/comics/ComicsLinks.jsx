export default function ComicsLinks({ href, text }) {
  return (
    <li className="d-inline-block mx-3">
      <a href={href}> {text}</a>
    </li>
  );
}
