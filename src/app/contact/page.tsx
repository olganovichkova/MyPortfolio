import Link from "next/link";

export default function ContacMe() {
  return (
    <div className="min-h-svh">
      <h1 className="font-bold text-lg mb-4">Contact Me</h1>
      <p className="mb-2">
        <span className="font-bold">Phone number: </span>
        <span>(925)-949-9461</span>
      </p>
      <p className="mb-2">
        <span className="font-bold">Email: </span>
        <span>olganovichkova3@gmail.com</span>
      </p>
      <p className="mb-2">
        <span className="font-bold">GitHub: </span>
        <a target="_blank" href="https://github.com/olganovichkova">
          https://github.com/olganovichkova
        </a>
      </p>
      <p className="mb-2">
        <span className="font-bold">LinkedIn: </span>
        <a target="_blank" href="https://www.linkedin.com/in/olga-novichkova/">
          https://www.linkedin.com/in/olga-novichkova/
        </a>
      </p>
    </div>
  );
}
