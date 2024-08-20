import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <button className="btn btn-error">Error</button>
      <button className="btn btn-warning">Warning</button>
      <button className="btn btn-success">Success</button>
      <button className="btn btn-info">Info</button>
    </main>
  );
}
