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

<h1 style={{marginBottom:4}}>
Series 03 — Grid Paths
</h1>

<p style={{color:"#666",marginBottom:30}}>
From Manhattan distance to Pascal's Triangle
</p>


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
In ordinary geometry, the shortest path between two points is a straight line.
</p>

<p>
This is called <b>Euclidean distance</b>.
</p>
<br/>
<p>
But imagine walking through a city built like a grid.
</p>

<p>
You cannot move diagonally.  
You must follow the streets — right, left, up, or down.
</p>

<p>
This way of measuring distance is called <b>Manhattan distance</b>.
</p>
<br/>
<p>
Now something interesting happens.
</p>

<p>
Suppose you start at one corner of a square grid and want to reach the opposite corner.
</p>

<p>
You are allowed to move only <b>right</b> or <b>up</b>.
</p>

<p>
The number of steps in the shortest path is fixed.
</p>

<p>
But the <b>order of those steps</b> can change.
</p>

<p style={{fontWeight:500}}>
So a new question appears:
</p>
<br/>
<p style={{fontSize:20,fontWeight:600}}>
How many shortest paths exist?
</p>
<br/>
<p>
Try drawing a few paths on paper.
</p>

<p>
Every shortest path will contain the same number of moves.
</p>

<p>
But the sequence of moves can change.
</p>

<p>
Some paths go right first.  
Some go up first.
</p>

<p>
Others zig-zag between the two.
</p>

<p>
Even in a small grid, the number of possibilities grows quickly.
</p>

<p>
If we start counting how many ways we can reach each point on the grid,
a pattern begins to appear.
</p>

<br/>
<p>
Try it out here and see.
</p>
<br/>
<div className="border rounded-xl p-4 bg-gray-50">
  <CombinatoricsLab />
</div>

<br/>
<br/>
<p>
Each point can be reached either from the point to the left
or from the point below.
</p>

<p>
So the number of paths to a point is simply the sum of those two numbers.
</p>

<p>
That rule may look familiar.
</p>
<br/>
<p>
It is exactly the rule that generates <b>Pascal’s Triangle</b>.
</p>

<p>
The same triangle that appears in binomial expansions
is quietly hiding inside this grid.
</p>

<br/>
<p>
Pascal’s triangle is also a table of numbers that form the 
<b> binomial coefficients</b>.
</p>

<p>
Numbers of the form:
</p>

<p style={{fontSize:18,fontWeight:600}}>
C(n, r)
</p>

<p>
which count the number of ways to choose <i>r</i> objects from <i>n objects</i>.
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
In how many ways can we choose which <b>n</b> of those moves are rightward?
</p>
<br/>
<p>
The answer is the binomial coefficient:
</p>

<p style={{fontSize:18,fontWeight:700}}>
C(2n, n)
</p>

<p>
So the number of shortest paths across an <b>n × n grid</b> is:
</p>

<p style={{fontSize:18,fontWeight:700}}>
C(2n, n)
</p>



</main>

)

}