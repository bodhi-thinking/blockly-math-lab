import Image from "next/image"

export default function Series02() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 leading-relaxed text-gray-800">

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold">
        Series 02 — From Classification to Motion
      </h1>

      {/* Intro */}
      <section className="space-y-4 max-w-2xl">

        <p>
          In the previous puzzle, you answered a simple question:
        </p>

        <p className="font-semibold text-center">
          Does this belong here — or not?
        </p>

        <p>
          You were classifying animals.
        </p>

        <p>
          The maze asks a different question:
        </p>

        <p className="font-semibold text-center">
          How do you get from here to there?
        </p>

        <p>
          But underneath, both puzzles rely on the same idea:
        </p>

        <p className="italic text-center">
          a rule with no ambiguity.
        </p>

        <p>
          In classification, the rule decides <strong>membership</strong>.
        </p>

        <p>
          In the maze, the rule decides <strong>movement</strong>.
        </p>

      </section>


      {/* Maze Thinking Illustration */}
      <div className="flex justify-center">
        <Image
          src="/images/maze-thinking.png"
          alt="Explorer thinking about maze strategies"
          width={520}
          height={360}
          className="w-full max-w-md h-auto"
        />
      </div>


      {/* PLAY SECTION */}
      <section className="space-y-6">

        <h2 className="text-2xl font-semibold">
          Play
        </h2>

        <p className="max-w-2xl">
          Guide the character out of the maze.
          Instead of controlling the character directly,
          you will build the instructions that guide its movement.
        </p>


        {/* Launch Card */}
        <div className="flex flex-col items-center gap-4 p-6 border rounded-lg bg-gray-50">

          <a
            href="https://blockly.games/maze?lang=en"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Launch Maze in Full Screen →
          </a>

          <p className="text-sm text-gray-500 text-center">
            Opens the Blockly Maze puzzle in a new tab
          </p>

        </div>


        {/* Embedded Maze */}
        <div className="w-full overflow-hidden rounded-lg border">

          <iframe
            src="https://blockly.games/maze?lang=en"
            className="w-full h-[450px] md:h-[600px]"
          />

        </div>

        <p className="text-sm text-gray-500">
          Maze powered by Blockly Games.
        </p>

      </section>



      {/* OBSERVE */}
      <section className="space-y-6 max-w-2xl">

        <h2 className="text-2xl font-semibold">
          Observe
        </h2>

        <p>
          As you solve the maze, slow down and notice a few things.
        </p>


        {/* Grid Illustration */}
        <div className="flex justify-center">
          <Image
            src="/images/grid-movement.png"
            alt="Movement on a grid diagram"
            width={520}
            height={360}
            className="w-full max-w-md h-auto"
          />
        </div>


        <div className="space-y-3">

          <p className="font-semibold">
            What does each block actually do?
          </p>

          <p>
            When you drag a <code>moveForward()</code> block,
            the character moves exactly one square forward.
          </p>

          <p>
            Each step changes the character’s position on the grid.
          </p>

        </div>


        <div className="space-y-3">

          <p className="font-semibold">
            What does "turn left" change?
          </p>

          <p>
            Turning left does not move the character.
          </p>

          <p>
            It changes the direction the character is facing.
          </p>

        </div>


        <div className="space-y-3">

          <p className="font-semibold">
            What makes a good solution?
          </p>

          <ul className="list-disc pl-6 space-y-1">
            <li>Did you repeat instructions?</li>
            <li>Did you use more steps than necessary?</li>
            <li>Could the idea be written more simply?</li>
          </ul>

        </div>

      </section>



      {/* THINK */}
      <section className="space-y-4 bg-yellow-50 p-6 rounded-lg max-w-2xl">

        <h2 className="text-xl font-semibold">
          Think
        </h2>

        <p>
          Every puzzle, no matter how complex,
          usually hides a simple rule.
        </p>

        <p>
          Look at your solution again.
        </p>

        <ul className="list-disc pl-6 space-y-1">
          <li>Could you remove any block and still reach the goal?</li>
          <li>Could repeated instructions become a loop?</li>
          <li>Could you describe your path as simple grid steps?</li>
        </ul>

        <textarea
          className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows={4}
          placeholder="Write your thoughts..."
        />

      </section>



      {/* INSIGHT */}
      <section className="space-y-4 max-w-2xl">

        <h2 className="text-2xl font-semibold">
          Insight
        </h2>

        <p className="italic text-center">
          An algorithm is a set of instructions that solves a problem step by step.
        </p>

        <p>
          The maze character followed your instructions exactly.
        </p>

        <p>
          Traditional computers work the same way.
        </p>

        <p>
          They do not guess.  
          They simply follow rules.
        </p>

        <p>
          Modern AI systems are different.
        </p>

        <p>
          They can learn patterns from data — but even they ultimately run on algorithms written by humans.
        </p>

      </section>

      <div style={{marginTop:40,textAlign:"center"}}>

<a
href="/series/03"
style={{
padding:"10px 18px",
border:"1px solid #ddd",
borderRadius:6,
textDecoration:"none"
}}
>

Continue → Series 03: Grid Paths

</a>

</div>

    </main>
  )
}