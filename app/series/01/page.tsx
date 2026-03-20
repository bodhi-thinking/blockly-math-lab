import Image from "next/image"

export default function Series01() {
  return (
    <main className="page">

      <span className="series-label">Series 01</span>

      <h1 className="title">The Puzzle of Classification</h1>

      <blockquote className="quote">
        "Je le vois, mais je ne le crois pas."<br />
        I see it, but I do not believe it.<br />
        — Georg Cantor
      </blockquote>

      {/* ── Section 1 ─────────────────────────────────────── */}
      <section className="section">
        <h2>Can you count to infinity?</h2>

        <p>Let's begin with something simple.</p>
        <p>Try counting.</p>

        <div className="code">1 &nbsp; 2 &nbsp; 3 &nbsp; 4 &nbsp; 5 &nbsp; ...</div>

        <p>
          You don't really think about it. The next number just appears,
          and you can keep going for as long as you like.
        </p>

        <p>Now change the game.</p>
        <p>Instead of whole numbers, think of a number between 0 and 1.</p>

        <div className="code">0.5 &nbsp;&nbsp; 0.318 &nbsp;&nbsp; 0.777777...</div>

        <p>That still feels easy.</p>

        <p className="focus">But now try to list all of them.</p>

        <p>
          With counting numbers, you start at 1. But with decimals between 0 and 1?
        </p>

        <p>
          Is the first one 0.1?<br />
          But then what about 0.01?<br />
          Or 0.001?
        </p>

        <p>
          Every time you think you've found the smallest one,
          something slips in before it.
        </p>

        <p className="highlight">
          What felt endless now begins to feel impossible.
        </p>
      </section>

      <hr className="divider" />

      {/* ── Section 2 ─────────────────────────────────────── */}
      <section className="section">
        <p>
          In the late 1800s, Georg Cantor explored this question deeply.
          What he discovered surprised even him.
        </p>

        <p className="highlight">Not all infinities are the same size.</p>

        <div className="image">
          <Image
            src="/images/cantor-thinking.png"
            alt="Georg Cantor deep in thought"
            width={520}
            height={360}
            className="responsive-image"
          />
        </div>
      </section>

      {/* ── Section 3 ─────────────────────────────────────── */}
      <section className="section">
        <p>Cantor gave each infinity a name.</p>

        <div className="math-row">
          <div>
            <div className="math-symbol center">ℵ₀</div>
            <div className="math-label">counting numbers</div>
          </div>
          <div>
            <div className="math-symbol center" style={{ color: "var(--accent)" }}>&lt;</div>
          </div>
          <div>
            <div className="math-symbol center">𝔠</div>
            <div className="math-label">decimals between 0 and 1</div>
          </div>
        </div>

        <p className="subtle center">Both are infinite. But one is strictly larger.</p>
      </section>

      <hr className="divider" />

      {/* ── Think ─────────────────────────────────────────── */}
      <section className="think">
        <h3>Think</h3>
        <p>Imagine someone gives you an infinitely long list of decimal numbers.</p>
        <p>Can you construct a number that will never appear in that list?</p>
        <textarea placeholder="Write your idea here..." rows={4} />
      </section>

      {/* ── Section 4 ─────────────────────────────────────── */}
      <section className="section">
        <p>
          Cantor approached this differently. Instead of trying to understand
          the list as a whole, he looked at how each number could be slightly changed.
        </p>

        <p>
          By altering just one digit in each position, he could always construct
          a number that would not appear anywhere in the list.
        </p>

        <p>No matter how long the list is, something is always missing.</p>

        <p className="highlight">
          The question was not about numbers alone. It was about collections.
        </p>

        <div className="code">1, 2, 3, 4, ...</div>
        <div className="code">0.13729...&nbsp;&nbsp; 0.50013...&nbsp;&nbsp; 0.33333...</div>

        <p className="strong" style={{ marginTop: "22px" }}>Can we match them?</p>

        <div className="code">
          {`1 → 0.13729...
2 → 0.50013...
3 → 0.33333...`}
        </div>

        <p>
          If every element in one collection can be paired with exactly one
          in another, the collections are the same size. If not, one must be larger.
        </p>

        <p className="highlight">
          Mathematicians call such collections <em>sets</em>.
        </p>

        <p className="subtle">A set is a collection defined by a clear rule.</p>
      </section>

      <hr className="divider" />

      {/* ── Section 5 ─────────────────────────────────────── */}
      <section className="section">
        <p>You already use this idea naturally.</p>

        <div className="image">
          <Image
            src="/images/collection-set.png"
            alt="Animals sorted by shared features"
            width={520}
            height={360}
            className="responsive-image"
          />
        </div>

        <p>
          When you see a duck and a bee, you begin sorting —
          not randomly, but based on something you notice.
        </p>

        <p>Wings. Legs. Structure.</p>

        <p className="highlight">That is classification.</p>

        <p className="strong">Does this belong — or doesn't it?</p>
      </section>

      {/* ── Play ──────────────────────────────────────────── */}
      <section className="play">
        <h3>Play</h3>

        <iframe
          src="https://blockly.games/puzzle?lang=en"
          className="frame"
          title="Blockly Puzzle Game"
          sandbox="allow-scripts allow-same-origin allow-forms"
        />

        <div className="puzzle-footer">
          <p className="puzzle-credit">Puzzle powered by Blockly Games.</p>
          <a
            href="https://blockly.games/puzzle?lang=en"
            target="_blank"
            rel="noopener noreferrer"
            className="puzzle-link"
          >
            Launch in full screen →
          </a>
        </div>
      </section>

      {/* ── Observe ───────────────────────────────────────── */}
      <section className="observe">
        <h3>Observe</h3>
        <ul>
          <li>What rule decides where each animal goes?</li>
          <li>Could something belong to more than one group?</li>
          <li>What happens when the rule changes?</li>
        </ul>
        <textarea placeholder="Write your observations here..." rows={4} />
      </section>

      {/* ── Next ──────────────────────────────────────────── */}
      <div className="next-link">
        <a href="/series/02" className="next-button">
          Continue → Series 02: From Classification to Motion
        </a>
      </div>

    </main>
  )
}
