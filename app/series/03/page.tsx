import Image from "next/image"
import CombinatoricsLab from "@/app/components/CombinatoricsLab"

export default function Series03() {

return (

<main
style={{
maxWidth: 820,
margin: "auto",
padding: "40px 20px",
fontFamily: "Georgia, serif",
lineHeight: 1.7
}}
>

<h1 className="text-3xl sm:text-4xl font-bold">
        Series 03 — From Manhattan distance to Pascal's Triangle
</h1>


{/* IMAGE 1 */}
<div style={{margin:"40px 0"}}>
<Image
src="/images/euclid-manhattan-dist.png"
alt="Euclidean vs Manhattan distance"
width={900}
height={450}
style={{width:"100%",height:"auto"}}
/>
</div>

<p>
In the maze puzzle, your character moved one square at a time.<br/>
Forward. Turn. Forward again.<br/>
Behind the scenes, every step happened on a grid.
</p>
<br/>
<p>
  Grids appear everywhere: city streets, spreadsheets, pixels on a screen, even chessboards. <br/>
  They are one of the simplest ways to organise space.<br/><br/>
  In ordinary geometry, the shortest path between two points is a straight line. 
  This idea comes from the geometry developed by Euclid, and it is called <strong>Euclidean distance</strong>.
  But movement on a grid works differently. <br/><br/>
  <strong>Imagine walking through a city where the streets form perfect squares. You cannot cut across buildings. 
  You must follow the streets. </strong>
  Cities like New York are famous for this layout, 
  which is why this way of measuring distance is often called<strong> Manhattan distance</strong>.
</p>

<br/>
<p>
Now imagine a slightly different challenge.
<strong>You are standing at one corner of a square grid. Your goal is to reach the opposite corner.</strong> <br/><br/>
You can only move <strong>right</strong> or <strong>down</strong>.
</p>

<p>
No diagonals. No shortcuts.
Each move takes you exactly one square.
Try sketching a small grid on paper.
Start at the <strong>top-left corner</strong> and move to the <strong>bottom-right corner</strong>.
</p>

<br/>
<p>
Found the shortest path? Great! But how many different paths are there? <br/>
</p>
<br/>

<p style={{fontSize:20,fontWeight:600}}>
How many shortest paths exist?
</p>
<br/>

<p>
If we start counting how many ways we can reach each point on the grid,
a pattern begins to appear.
</p>

<br/>
<p>
Try it out here and see. Click on the 'START' to begin.
</p>
<br/>
<div className="border rounded-xl p-4 bg-gray-50">
  <CombinatoricsLab />
</div>

<br/>
<br/>
<p>
Instead of counting entire paths, focus on a single point in the grid.<br/>
To reach that point, the path must come from either: <br/>

• the square directly to the left<br/>
• the square directly below<br/><br/>

There are no other possibilities.
</p>
<br/>
<p>
So the number of paths to a point is simply the sum of those two numbers.
</p>

<p>
That rule may look familiar.
</p>
<br/>
<p>
It is exactly the rule that generates <b>Pascal’s Triangle</b>.
Each number in Pascal’s triangle is the sum of the two numbers above it.
</p>
<br/>
<p>
The same numbers that appears in <strong>binomial expansions</strong> and <strong>probability theory.</strong>
</p>

<br/>

{/* THINK */}
      <section className="space-y-4 bg-yellow-50 p-6 rounded-lg max-w-2xl">

        <h2 className="text-xl font-semibold">
          Think
        </h2>

        <p>
          Let’s take the 3×3 grid. Every shortest path contains:<br/>
          3 right moves<br/>
          3 upward moves<br/>
          So the path is really just a sequence of six decisions.
        </p>
        <p>
          R R R U U U<br/>
          <strong>In how many ways can we arrange these six moves?</strong>
        </p>

        <textarea
          className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows={4}
          placeholder="Write your thoughts..."
        />

      </section>


<br/>
<p>
Mathematicians write this number as C(6,3).The number of ways to choose 3 objects from a set of 6.
</p>
<br/>

<p style={{fontSize:18,fontWeight:600}}>
To generalize, we write C(n, r)
</p>

<p>
which count the number of ways to choose <i>r objects</i> from <i>n objects</i>.
</p>
<br/>
<p>
Now return to the grid.
</p>

<p>
A shortest path across an <b>n × n</b> grid requires:
</p>

<p>
<b>n</b> moves to the right  
<br/>
<b>n</b> moves downwards.
</p>

<p>
That means the path contains <b>2n moves in total</b>.
</p>

<p>
The question becomes:
</p>

<p style={{fontWeight:500}}>
In how many ways can we choose which <b>n</b> of those moves are rightward? (try it out in the interactive above)
</p>
<br/>
<p>
The answer is the binomial coefficient:
</p>

<p style={{fontSize:18,fontWeight:700}}>
C(2n, n)
</p>
<br/>
<p>
So the number of shortest paths across an <b>n × n grid</b> is:
</p>

<p style={{fontSize:18,fontWeight:700}}>
C(2n, n)
</p>

<div style={{marginTop:40,textAlign:"center"}}>

<a
href="/series/01"
style={{
padding:"10px 18px",
border:"1px solid #ddd",
borderRadius:6,
textDecoration:"none"
}}
>

Back ← Series 01: The Puzzle of Classification

</a>

</div>

</main>

)

}