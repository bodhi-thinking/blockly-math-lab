import Image from "next/image"
import CombinatoricsLab from "@/app/components/CombinatoricsLab"

export const metadata = {
  title: "Series 03 — From Manhattan Distance to Pascal's Triangle",
};

export default function Series03() {
  return (
    <main className="page">

      <span className="series-label">Series 03</span>

      <h1 className="title">From Manhattan Distance to Pascal's Triangle</h1>

      {/* ── Section 1 ─────────────────────────────────────── */}
      <section className="section">
        <div className="image">
          <Image
            src="/images/euclid-manhattan-dist.png"
            alt="Euclidean vs Manhattan distance"
            width={900}
            height={450}
            className="responsive-image"
          />
        </div>

        <p>
          In the maze puzzle, your character moved one square at a time.
          <em> Forward. Turn. Forward again. </em>
          Each instruction changed something, either the position on the grid, or the direction the character was facing.
        </p>

        <p>
          Grids appear everywhere: city streets, spreadsheets, pixels on a screen,
          even chessboards. They are one of the simplest ways to organise space.
        </p>

        <p>
          In geometry, <em>the shortest path between two points is a straight line. </em>
          This idea comes from the geometry developed by Euclid, and it is called{" "}
          <strong>Euclidean distance</strong>. But movement on a grid follows a different logic.
        </p>

        <p className="highlight">
          Imagine walking through a city where the streets form perfect squares. 
          You cannot move diagonally across buildings. You must follow the streets, 
          turning at intersections and moving block by block. 
          Cities like New York are built this way, which is why this way of measuring distance 
          is often called <strong>Manhattan distance</strong>.
        </p>
      </section>

      <hr className="divider" />

      {/* ── Section 2 ─────────────────────────────────────── */}
      <section className="section">
        <h2>How many shortest paths exist?</h2>

        <p>
          Now consider a slightly different question.
          You are standing at one corner of a square grid.
          Your goal is to reach the opposite corner.
        </p>

        <p>
          You can only move <strong>right</strong> or <strong>down</strong>.
          No diagonals. No shortcuts. Just one square at a time.
        </p>

        <p>
          Try sketching a small grid on paper.
          Start at the <strong>top-left corner</strong> and move to the{" "}
          <strong>bottom-right corner</strong>.
        </p>

        <p className="focus">
          Found the shortest path? Great! But once you have found one path, a new question naturally appears:
          but how many such <strong>shortest paths</strong> are there?
        </p>

        <p>
          If we start counting how many ways we can reach each point on the grid,
          Some paths move right first and then down. 
          Others alternate between the two. Even in a small grid, the number of possibilities grows faster than expected.
        </p>

        <p>Try it out below. Click <strong>START</strong> to begin.</p>

        <div className="code" style={{ fontFamily: "inherit", background: "var(--bg-subtle)", whiteSpace: "normal", padding: "0" }}>
          <CombinatoricsLab />
        </div>
      </section>

      <hr className="divider" />

      {/* ── Section 3 ─────────────────────────────────────── */}
      <section className="section">
        <p>
          Instead of counting entire paths, focus on a single point in the grid.
          To reach that point, the path must come from either:
        </p>

        <div className="code">{`• the square directly to the left
• the square directly above`}</div>

        <p>There are no other possibilities.</p>

        <p>
          So the number of ways to reach that point is simply the sum 
          of the number of ways to reach those two neighbouring squares to the left and above.
        </p>

        <p className="highlight">
          That rule may look familiar. It is exactly the rule that generates{" "}
          <strong>Pascal's Triangle</strong> — where each number is formed by adding the two numbers above it.
        </p>

        <p>
          The same numbers that appear in <strong>binomial expansions</strong> and{" "}
          <strong>probability theory</strong>.
        </p>

        <p>
          What began as a question about movement has quietly turned into a pattern of numbers.
        </p>
      </section>

      {/* ── Think ─────────────────────────────────────────── */}
      <section className="think">
        <h3>Think</h3>

        <p>
          Let’s return to a simple case.In a 3 × 3 grid, every shortest path consists of three moves to the right and three moves downward. 
          So each path can be seen as a sequence of six steps, where each step is either a right move or a downward move.
        </p>

        <div className="code">R R R D D D</div>

        <p className="strong">In how many ways can we arrange these six moves?</p>

        <textarea placeholder="Write your thoughts here..." rows={4} />
      </section>

      <hr className="divider" />

      {/* ── Section 4 ─────────────────────────────────────── */}
      <section className="section">
        <h2>Insight</h2>
        <p>
          This question is the same as asking: in how many ways can we choose which three of the six steps are rightward moves?
          Mathematicians write this as <strong>C(6, 3)</strong> —
          the number of ways to choose 3 objects from a set of 6.
        </p>

        <p className="strong" style={{ marginTop: "22px" }}>To generalise, we write C(n, r)</p>

        <p>which counts the number of ways to choose <em>r</em> objects from <em>n</em> objects.</p>

        <p>Now return to the grid. A shortest path across an <strong>n × n</strong> grid requires:</p>

        <div className="code">{`n moves to the right
n moves downward
─────────────────
2n moves in total`}</div>

        <p>So the question becomes:</p>

        <p className="highlight">
          If you have 2n moves to make,and exactly n of them must be “right” moves, in how many different ways can you arrange them? 
        </p>

        <p>The answer is the binomial coefficient:</p>

        <div className="code center" style={{ fontSize: "1.4rem", letterSpacing: "0.04em" }}>C(2n, n)</div>

        <p>
          So the number of shortest paths across an n×n grid is not just a count of routes. 
          It is a combinatorial structure, connected to Pascal’s Triangle, to binomial coefficients, 
          and to deeper patterns that appear across mathematics.
        </p>
      </section>

      {/* ── Navigation ────────────────────────────────────── */}
      <div className="next-link" style={{ marginTop: "16px" }}>
        <a href="/series/02" className="next-button" style={{ background: "transparent", color: "var(--text-primary)", border: "1px solid var(--border-strong)" }}>
          ← Back to Series 02: From Classification to Motion
        </a>
      </div>

    </main>
  )
}
