export default function Home() {
  return (
    <main className="max-w-3xl mx-auto p-10 space-y-6">

      <h1 className="text-4xl font-bold">
        Blockly Math Lab
      </h1>

      <p>
        A story-driven journey through mathematics.
      </p>

      <a
        href="/series/01"
        className="text-blue-600 underline"
      >
        Start Series 01 — The Puzzle of Classification
      </a>
      <br/>

      <a
        href="/series/02"
        className="text-blue-600 underline"
      >
        Start Series 02 — From Classification to Motion
      </a>

         <br/>

      <a
        href="/series/03"
        className="text-blue-600 underline"
      >
        Start Series 03 —   A Pattern Appears
      </a>

    </main>
  );
}