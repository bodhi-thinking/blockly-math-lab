import Image from "next/image"

export default function Series01() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 space-y-10">

      {/* Title */}
      <h1 className="text-4xl font-bold">
        Series 01 — The Puzzle of Classification
      </h1>

      {/* Quote */}
      <blockquote className="border-l-4 pl-4 italic text-gray-600">
        “Je le vois, mais je ne le crois pas.” <br/>
        I see it, but I do not believe it. <br/>
        — Georg Cantor
      </blockquote>

      {/* Curiosity Opening */}
      <section className="space-y-4">

        <h2 className="text-2xl font-semibold">
          Can you count to infinity?
        </h2>

        <p>
          Start simple. Pick any number. Now pick the next one.
          Easy, right?
        </p>

        <p>You could do this forever.</p>

        <div className="bg-gray-100 p-4 rounded font-mono">
          1 &nbsp; 2 &nbsp; 3 &nbsp; 4 &nbsp; 5 &nbsp; ...
        </div>

        <p>
          You never run out of numbers.
          You know what comes next.
          There's a pattern.
        </p>

        <p>Now try something different.</p>

        <p>
          Write down a number between <strong>0 and 1</strong>.
        </p>

        <div className="bg-gray-100 p-4 rounded font-mono">
          0.5 &nbsp; 0.318 &nbsp; 0.777777...
        </div>

        <p>
          Got one? Great.
        </p>

        <p>
          Now try writing down <strong>all of them</strong>.
        </p>

        <p>
          Where would you even begin?
        </p>

        <p>
          With counting numbers you start at 1.
          But decimals between 0 and 1?
        </p>

        <p>
          Is the first one 0.1?  
          What about 0.01?  
          Or 0.001?
        </p>

        <p>
          You can always go smaller.
        </p>

        <p>
          There's no obvious starting point.
        </p>

      </section>

      {/* Cantor Story */}
      <section className="space-y-4">

        <p>
          But here's the real question.
        </p>

        <p>
          What if you tried anyway —
          just threw every decimal into an infinitely long list?
        </p>

        <p>
          Would you eventually get them all?
        </p>

        <p>
          It turns out the answer is no.
        </p>

        <p>
          No matter how long your list is,
          no matter how carefully you build it,
          there will always be a decimal number missing.
        </p>

        <p>
          Not because you ran out of time.
        </p>

        <p>
          Because it is <strong>mathematically impossible </strong>
          to list them all.
        </p>

        <p>
          A mathematician named <strong>Georg Cantor </strong>
          discovered this in the 1800s.
        </p>

        <p>
          Even he was surprised by his own result.
        </p>

         {/* Image */}
      <div className="flex justify-center">
        <Image
          src="/images/cantor-thinking.png"
          alt="Scientist thinking about numbers"
          width={520}
          height={360}
        />
      </div>

      </section>

      {/* Infinity Comparison */}
      <section className="space-y-4">

        <p>
          Cantor discovered that infinity isn't just one thing.
        </p>

        <p>
          There are actually <strong>different sizes of infinity</strong>.
        </p>

        <p>
          The infinity of counting numbers:
        </p>

        <div className="bg-gray-100 p-4 rounded font-mono text-center">
          ℵ₀
        </div>

        <p>
          And the infinity of decimal numbers between 0 and 1:
        </p>

        <div className="bg-gray-100 p-4 rounded font-mono text-center">
          𝔠
        </div>

        <p className="text-center text-lg font-semibold">
          ℵ₀ &nbsp; &lt; &nbsp; 𝔠
        </p>

        <p className="text-center text-gray-600">
          A smaller infinity.  
          A larger infinity.  
          Both infinite.
        </p>

      </section>

      {/* Think */}
      <section className="space-y-4 bg-yellow-50 p-6 rounded">

        <h2 className="text-xl font-semibold">
          Think
        </h2>

        <p>
          Imagine someone gives you an infinitely long list of decimal numbers.
        </p>

        <p>
          Can you create a decimal number that is guaranteed
          not to appear anywhere on that list?
        </p>

        <textarea
          className="w-full border rounded p-3"
          rows={4}
          placeholder="Write your idea here..."
        />

      </section>

      {/* Collections */}
      <section className="space-y-4">

        <p>
          Cantor realised something important.
        </p>

        <p>
          The question wasn't really about a single number.
        </p>

        <p>
          It was about two <strong>collections</strong>.
        </p>

        <div className="bg-gray-100 p-4 rounded font-mono">
          1, 2, 3, 4, ...
        </div>

        <div className="bg-gray-100 p-4 rounded font-mono">
          0.13729... &nbsp; 0.50013... &nbsp; 0.33333...
        </div>

        <p>
          Could every number in one collection be paired
          with exactly one number in the other?
        </p>

        <p>
          If yes — the collections are the same size.
        </p>

        <p>
          If not — one of them must be larger.
        </p>

        <p>
          Mathematicians call any collection like this a <strong>set</strong>.
        </p>

      </section>

      {/* Animal Sets Image */}


      {/* Classification */}
      <section className="space-y-4">

        <p>
          You already use this kind of thinking naturally.
        </p>

        <p>
          When you see a duck and a bee,
          you immediately start sorting.
        </p>

        <p>
          Wings.  
          Legs.  
          Traits.
        </p>

        <p>
          You're applying a rule
          to decide which group something belongs to.
        </p>

        <p>
          That's <strong>classification</strong>.
        </p>

        <p>
          And classification is exactly what a set is:
        </p>

        <p className="italic text-gray-700 text-center">
          A collection defined by a rule so clear that
          for any object you can answer one question:
        </p>

        <p className="text-center font-semibold">
          Does this belong — or doesn't it?
        </p>

      </section>

      {/* Puzzle */}
      <section>

        <h2 className="text-xl font-semibold mb-4">
          Play
        </h2>

        <p className="mb-3 text-sm text-gray-600">
          Before Cantor classified infinite collections of numbers,
          try classifying animals.
        </p>

        <iframe
          src="https://blockly.games/puzzle?lang=en"
          width="100%"
          height="600"
          className="border rounded"
          loading="lazy"
        />

        <p className="text-sm text-gray-500 mt-2">
          Puzzle powered by Blockly Games.
        </p>

      </section>

      {/* Observe */}
      <section className="space-y-3">

        <h2 className="text-xl font-semibold">
          Observe
        </h2>

        <ul className="list-disc pl-6">
          <li>What rule decides where each animal goes?</li>
          <li>Could an animal belong to more than one group?</li>
          <li>What happens if you choose the wrong trait?</li>
        </ul>

        <textarea
          className="w-full border rounded p-3"
          rows={4}
          placeholder="Write your observations..."
        />

      </section>


      <div style={{marginTop:40,textAlign:"center"}}>

<a
href="/series/02"
style={{
padding:"10px 18px",
border:"1px solid #ddd",
borderRadius:6,
textDecoration:"none"
}}
>

Continue → Series 02: From Classification to Motion

</a>

</div>

    </main>
  )
}