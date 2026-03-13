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
          Counting feels like one of the simplest things we ever learn.
          Each number naturally leads to the next. Nothing mysterious about it. If you keep going, the numbers never stop.
        </p>

        <p>You could do this forever.</p>

        <div className="bg-gray-100 p-4 rounded font-mono">
          1 &nbsp; 2 &nbsp; 3 &nbsp; 4 &nbsp; 5 &nbsp; ...
        </div>

        <p>
          Infinity simply means that the process of counting has no end.
          Now try a slightly different experiment.
          Instead of whole numbers, write down a number <strong>between 0 and 1. </strong>
        </p>

        <div className="bg-gray-100 p-4 rounded font-mono">
          0.5 &nbsp; 0.318 &nbsp; 0.777777...
        </div>


        <p>
          But now imagine trying to <strong>list all of them</strong>.
        </p>

        <p>
          Where would you even begin?
        </p>

        <p>
          With counting numbers, you start at 1.
          But with decimals between 0 and 1?
        </p>

        <p>
          Is the first one 0.1?  <br/>
          But then what about 0.01? <br/>
          Or 0.001?
        </p>

        <p>
          Every time you think you found the smallest one, you can always place another number before it.
        </p>

        <p>
          Something strange begins to happen.
          The idea of listing all these numbers starts to feel impossible.
        </p>

      </section>

      {/* Cantor Story */}
      <section className="space-y-4">

        <p>
          <strong>In the late 1800s, Georg Cantor investigated exactly this question.</strong> What he discovered surprised even him.
        </p>

        <p>
          <strong>The infinity of counting numbers and the infinity of decimal numbers are not the same size. </strong> <br/>
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
          Mathematicians use special symbols to describe this idea. <br/>
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
          Both collections are infinite.
          But one of them is larger.
          It sounds almost absurd at first. How can infinity be bigger than infinity?
          Yet Cantor showed that this is unavoidable.
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
          Can you create a decimal number that is guaranteed not to appear anywhere on that list?
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
          <br/>
          ......<br/>
          .....<br/>
          ....<br/>
          ...<br/>
          ..<br/>
          .<br/>
         <br/>

          Cantor had a clever trick. <br/>
          Look at the <strong>first digit of the first number.</strong> <br/>
          Look at the <strong>second digit of the second number.</strong> <br/>
          Look at the <strong>third digit of the third number.</strong> <br/>
          
          Now <strong>change each of those digits slightly.</strong>
          The new number you create will differ from every number in the list in at least one position.
          So it cannot appear anywhere in the list.
        </p>

        <p>
          No matter how long the list is, you can always construct a new number missing from it.
          Which means the decimals can never be fully listed.
          That single argument changed how mathematicians think about infinity.
        </p>


        <p>
          What Cantor eventually realised was that the question wasn’t really about a single number.
          It was about two collections of numbers.
        </p>

        <div className="bg-gray-100 p-4 rounded font-mono">
          1, 2, 3, 4, ...
        </div>

        <div className="bg-gray-100 p-4 rounded font-mono">
          0.13729... &nbsp; 0.50013... &nbsp; 0.33333...
        </div>

        <p>
          Instead of asking “Can we list them?”, Cantor asked a different question.
          Can we pair the numbers from these two collections?
          Imagine matching them one by one
        </p>

         <div className="bg-gray-100 p-4 rounded font-mono">
          1 → 0.13729...<br/>
          2 → 0.50013...<br/>
          3 → 0.33333...<br/>
          4 → 0.92104...<br/>
        </div>

        <p>
          If every number in the first collection could be paired with exactly one number in the second, 
          and none were left over, then the two collections would be the same size.
        </p>

        <p>
          Mathematicians use a special word for any collection of objects like this.
          They call it a <strong>set</strong>. <br/>
          <strong> A set is simply a collection defined by a clear rule.</strong>
        </p>

        <p>
          The set of counting numbers.<br/>
          The set of decimal numbers between 0 and 1.<br/>
          The set of all prime numbers.<br/>
        </p>

        <p>
          This idea of deciding membership may feel abstract, but you already use it constantly in everyday life.
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
          Wings.  
          Legs.  
          Traits.<br/>
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