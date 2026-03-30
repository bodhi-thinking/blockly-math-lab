import Image from "next/image"

export const metadata = {
  title: "Series 04 — From Direction to Motion",
};

export default function Series04() {
  return (
    <main className="page">

      <span className="series-label">Series 04</span>

      <h1 className="title">From Direction to Motion</h1>

      {/* ── Section 1 ─────────────────────────────────────── */}
      <section className="section">

        <blockquote className="quote">
          “Geometry is the art of correct reasoning from incorrectly drawn figures.”<br />
          — Henri Poincaré
        </blockquote>

        <p>
          When Henri Poincaré sat his entrance exam to one of France’s most prestigious mathematics schools, 
          he scored a perfect zero in the drawing test. Not low. Zero. And yet he was admitted — because everything 
          else he had written revealed a depth of understanding that could not be ignored.
        </p>

        <p>
          What Poincaré understood is that geometry is not about the drawings themselves, but about the relationships within them. 
          The lines may wobble, the proportions may look imperfect, and yet if the relationships hold — if one angle is larger than another, 
          if one side is longer than the other — the reasoning built on top of it remains intact.
        </p>

        <p className="highlight">
          The drawing may fail. The relationship does not.
        </p>

        <p>
          So with this in mind, let us rise above the maze for a moment — like a bird — and see what changes when we look at it from above. 
          From that height, the turns begin to fade, and the path simplifies into something quieter:
        </p>

        <div className="code">{`A starting point
An ending point
Distance and direction`}</div>

      </section>

      <hr className="divider" />

      {/* ── Play (Blockly Bird) ───────────────────────────── */}
      <section className="play">
        <h3>Play</h3>

        <iframe
          src="https://blockly.games/bird?lang=en"
          className="frame"
          title="Blockly Bird Game"
        />

        <div className="puzzle-footer">
          <p className="puzzle-credit">Puzzle powered by Blockly Games.</p>
          <a
            href="https://blockly.games/bird?lang=en"
            target="_blank"
            rel="noopener noreferrer"
            className="puzzle-link"
          >
            Launch in full screen →
          </a>
        </div>
      </section>

      {/* ── Section 2 ─────────────────────────────────────── */}
      <section className="section">

        <p>
          As you guide the bird, something subtle changes. You are no longer controlling movement directly. 
          Instead, you begin to reason about orientation.
        </p>

        <p>
          Is the bird facing the correct direction? How far must it turn? Once aligned, how far should it move?
        </p>

        <p>
          Movement becomes a consequence of direction.
        </p>

        <p className="focus">
          If you know how far the bird moves, and the direction it is facing, can you determine where it will be?
        </p>

        <p>
          One way to answer this is through <strong>Cartesian coordinates</strong>, where every position is described by how far it lies 
          along two perpendicular directions — horizontal and vertical.
        </p>

        <p>
          But there is another way to describe the same idea. Instead of measuring along axes, you can describe a point using 
          a distance from the origin and an angle.
        </p>

        <p className="highlight">
          A single distance. A single angle. This is the language of polar coordinates.
        </p>

      </section>

      <hr className="divider" />

      {/* ── Section 3 ─────────────────────────────────────── */}
      <section className="section">

        <h2>How angle becomes position</h2>

        <p>
          If a point lies at a distance <em>r</em> from the origin, and makes an angle <em>θ</em> with the horizontal axis, 
          its position can be expressed as:
        </p>

        <div className="code center">{`x = r cos(θ)
y = r sin(θ)`}</div>

        <p>
          These expressions do not merely calculate position. They translate direction into location.
        </p>

        {/* Image Placeholder */}
        <div className="image">
          <Image
            src="/images/polar-cartesian.png"
            alt="Polar to Cartesian conversion"
            width={600}
            height={400}
            className="responsive-image"
          />
        </div>

      </section>

      {/* ── p5 Interactive 1 ─────────────────────────────── */}
      <section className="section">

        <h2>Motion on a circle</h2>

        <div className="code" style={{ whiteSpace: "normal" }}>
          {/* Replace with your embed method */}
          <iframe
            src="/p5/rotation.html"
            className="frame"
            title="Sine Cosine Rotation"
            loading="lazy"
          />
        </div>

        <p>
          A point moves along a circle of fixed radius. Its distance from the centre does not change. Only its angle does.
          And yet, as the angle changes, both its horizontal and vertical positions vary continuously.
        </p>

      </section>

      {/* ── Observe ─────────────────────────────────────── */}
      <section className="observe">
        <h3>Observe</h3>

        <ul>
          <li>What is actually changing — the position or the angle?</li>
          <li>Why does circular motion appear as back-and-forth motion along each axis?</li>
          <li>If you observed only the horizontal motion, what shape would you see?</li>
        </ul>
      </section>

      {/* ── Think ───────────────────────────────────────── */}
      <section className="think">
        <h3>Think</h3>

        <p>
          If both the horizontal and vertical components are known at every moment, can the original motion be reconstructed?
        </p>

        <textarea placeholder="Write your thoughts here..." rows={5} />
      </section>

      <hr className="divider" />

      {/* ── Section 4 ─────────────────────────────────────── */}
      <section className="section">

        <h2>Many points, one motion</h2>

        <p>
          Now imagine not one point, but many. Each follows the same rule, but begins at a slightly different angle.
        </p>

        <div className="code center">{`xᵢ = r cos(θ + αᵢ)
yᵢ = r sin(θ + αᵢ)`}</div>

        <p>
          Each point traces the same circle, but shifted. The motion is identical. The starting point is not.
        </p>

      </section>

      {/* ── p5 Interactive 2 ─────────────────────────────── */}
      <section className="section">

        <div className="code" style={{ whiteSpace: "normal" }}>
          <iframe
            src="/p5/multiple-points.html"
            className="frame"
            title="Phase Shift Motion"
          />
        </div>

        <p>
          What appears as many independent motions is, in fact, one underlying rotation observed from different starting points.
        </p>

      </section>

      {/* ── Observe 2 ───────────────────────────────────── */}
      <section className="observe">
        <h3>Observe</h3>

        <ul>
          <li>Do the points ever collide?</li>
          <li>What keeps their spacing consistent?</li>
          <li>What changes — the rule, or the starting angle?</li>
        </ul>
      </section>

      {/* ── Think 2 ─────────────────────────────────────── */}
      <section className="think">
        <h3>Think</h3>

        <p>
          If every point follows the same equation, what creates the visible difference between them?
        </p>

        <textarea placeholder="Write your thoughts here..." rows={5} />
      </section>

      {/* ── Insight ─────────────────────────────────────── */}
      <section className="section">

        <h2>Insight</h2>

        <p>
          Rotation and oscillation are not separate phenomena. They are different expressions of the same relationship.
        </p>

        <p className="highlight">
          What appears as many motions is often a single rule, repeated with variation.
        </p>

        <p>
          This idea appears across mathematics, physics, and computation — wherever patterns emerge from simple rules.
        </p>

      </section>

      {/* ── Navigation ───────────────────────────────────── */}
      <div className="next-link" style={{ marginTop: "16px" }}>
        <a href="/series/03" className="next-button" style={{ background: "transparent", color: "var(--text-primary)", border: "1px solid var(--border-strong)" }}>
          ← Back to Series 03: From Manhattan Distance to Pascal's Triangle
        </a>
      </div>

    </main>
  )
}

