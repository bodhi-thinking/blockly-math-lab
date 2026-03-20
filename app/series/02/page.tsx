import Image from "next/image"

export default function Series02() {
  return (
    <main className="page">

      <span className="series-label">Series 02</span>

      <h1 className="title">From Classification to Motion</h1>

      {/* ── Section 1 ─────────────────────────────────────── */}
      <section className="section">
        <p>In the previous puzzle, you answered a simple question:</p>

        <p className="focus center">Does this belong here — or not?</p>

        <p>You observed an object, noticed a trait, and applied a rule..</p>

        <p>Now the situation changes. Instead of deciding where something fits, you are faced with a 
          different kind of question — not about belonging, but about movement.</p>

        <p className="focus center">How do you get from here to there?</p>

        <p>
          Imagine standing at the entrance of a maze.
          You want to reach the exit, but the maze only allows movement along narrow corridors.
          At every step you must decide what to do.
        </p>

        <div className="code">{`Move forward.
Turn left.
Turn right.`}</div>

        <p>
          Each choice changes your position inside the maze.
          If someone asked you to guide a friend through the maze,
          you would probably describe the path in a sequence of steps:
        </p>

        <div className="code">{`Move forward three steps.
Turn right.
Move forward two steps.`}</div>

        <p>
          What you are giving is not just a set of directions. It is a way of describing movement itself.
          Those instructions form a <strong>procedure</strong>.
          In mathematics and computer science, we give such procedures a special name.
        </p>

        <p className="highlight">
          An <strong>algorithm</strong> is a sequence of clear instructions that takes you from one state to another, 
          step by step, without ambiguity.
        </p>
      </section>

      <div className="image">
        <Image
          src="/images/maze-thinking.png"
          alt="Explorer thinking about maze strategies"
          width={520}
          height={360}
          className="responsive-image"
        />
      </div>

      <hr className="divider" />

      {/* ── Play ──────────────────────────────────────────── */}
      <section className="play">
        <h3>Play</h3>

        <p>
          Guide the character out of the maze.
          Instead of controlling the character directly,
          you will build the instructions that guide its movement.
        </p>

        <iframe
          src="https://blockly.games/maze?lang=en"
          className="frame"
          title="Blockly Maze Game"
          sandbox="allow-scripts allow-same-origin allow-forms"
        />

        <div className="puzzle-footer">
          <p className="puzzle-credit">Maze powered by Blockly Games.</p>
          <a
            href="https://blockly.games/maze?lang=en"
            target="_blank"
            rel="noopener noreferrer"
            className="puzzle-link"
          >
            Launch in full screen →
          </a>
        </div>
      </section>

      <hr className="divider" />

      {/* ── Observe ───────────────────────────────────────── */}
      <section className="observe">
        <h3>Observe</h3>

        <p>As you solve the maze, slow down and notice a few things.</p>

        <div className="image">
          <Image
            src="/images/grid-movement.png"
            alt="Movement on a grid diagram"
            width={520}
            height={360}
            className="responsive-image"
          />
        </div>

        <p className="strong">What does each block actually do?</p>
        <p>
          When you drag a <code>moveForward()</code> block,
          the character moves exactly one square forward.
          Each step changes the character's position on the grid.
        </p>

        <p className="strong">What does "turn left" change?</p>
        <p>
          Turning left does not move the character.
          It changes the direction the character is facing.
        </p>

        <p>
          So every step in the maze is doing one of two things: changing position, or changing direction.
        </p>

        <p className="strong">Now look again at the sequence of steps you created.</p>
        <ul>
          <li>Did you repeat instructions?</li>
          <li>Did you use more steps than necessary?</li>
          <li>Could the idea be written more simply?</li>
        </ul>
      </section>

      {/* ── Think ─────────────────────────────────────────── */}
      <section className="think">
        <h3>Think</h3>

        <p>Every puzzle, no matter how complex, usually hides a simple rule.</p>
        <p>Look at your solution again.</p>

        <ul>
          <li>1. Could you remove any block and still reach the goal?</li>
          <li>2. Do repeated steps suggest a pattern that could be written more compactly?</li>
          <li>3. Can your entire path be described as a single block movement on a grid rather than as individual movements?</li>
        </ul>

        <textarea placeholder="Write your thoughts here..." rows={4} />
      </section>

      <hr className="divider" />

      {/* ── Section: Insight ──────────────────────────────── */}
      <section className="section">
        <h2>Insight</h2>

        <p className="highlight">
          An <em>algorithm</em> is not just a list of commands.
          It is a <em>structured way of thinking</em>.
        </p>

        <p>
          The maze puzzle may feel like a small game, but something important has happened.
        </p>

        <p>
          Instead of moving through the maze yourself, you described the movement as a sequence of steps. 
          You turned action into instructions.
          That shift — from doing something to describing how it is done — is where algorithms begin.
          The same idea that you observed in the maze puzzle appears in many places.
        </p>

        <div className="code">{`1. Navigation systems computing routes
2. Search engines finding information
3. AI systems analysing patterns`}</div>

        <p>
          All of them ultimately rely on algorithms —
          carefully defined rules that transform one state into another.
        </p>

        <p>
          In the next series we will look more closely at movement itself.
          Surprisingly,{" "}
          <strong>
            when movement is restricted to a grid, something unexpected begins to appear — a pattern that connects simple steps to deeper ideas in combinatorics and algebra.
          </strong>
        </p>
      </section>

      {/* ── Navigation ────────────────────────────────────── */}
      <div className="next-link">
        <a href="/series/03" className="next-button">
          Continue → Series 03: Grid Paths
        </a>
      </div>

      <div className="next-link" style={{ marginTop: "16px" }}>
        <a href="/series/01" className="next-button" style={{ background: "transparent", color: "var(--text-primary)", border: "1px solid var(--border-strong)" }}>
          ← Back to Series 01: The Puzzle of Classification
        </a>
      </div>

    </main>
  )
}
