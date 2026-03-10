"use client"

import { useState } from "react"

const PATH_COLORS = [
  "#444","#666","#888","#222","#555","#777"
]

function binomial(n:number, k:number) {
  if (k < 0 || k > n) return 0
  if (k === 0 || k === n) return 1

  let r = 1
  for (let i = 0; i < Math.min(k, n - k); i++) {
    r = r * (n - i) / (i + 1)
  }

  return Math.round(r)
}

function ncrLabel(r:number,c:number){
  const n=r+c
  if(n===0) return "1"
  return `C(${n},${Math.min(r,c)})`
}

export default function CombinatoricsLab(){

const [gridSize,setGridSize]=useState(4)
const [tab,setTab]=useState("draw")
const [paths,setPaths]=useState<any[]>([])
const [currentPath,setCurrentPath]=useState<any>(null)
const [hovered,setHovered]=useState<any>(null)

const N=gridSize+1
const CELL = gridSize<=3?88:gridSize===4?75:gridSize===5?62:52
const PAD=40
const SVG=(N-1)*CELL+PAD*2
const R_NODE=9

const nx=(c:number)=>PAD+c*CELL
const ny=(r:number)=>PAD+r*CELL

const totalPaths=binomial(2*gridSize,gridSize)

function isNodeInPath(path:any,r:number,c:number){
return path.nodes.some(([nr,nc]:number[])=>nr===r&&nc===c)
}

function isEdgeInPath(path:any,r1:number,c1:number,r2:number,c2:number){

for(let i=0;i<path.nodes.length-1;i++){

const [a,b]=path.nodes[i]
const [d,e]=path.nodes[i+1]

if(a===r1&&b===c1&&d===r2&&e===c2)
return true

}

return false
}

function handleNodeClick(r:number,c:number){

if(tab!=="draw") return

if(!currentPath){

if(r===0&&c===0)
setCurrentPath({nodes:[[0,0]],colorIdx:paths.length%PATH_COLORS.length})

return
}

const [lr,lc]=currentPath.nodes[currentPath.nodes.length-1]

if(!((r===lr&&c===lc+1)||(r===lr+1&&c===lc))){

if(r===0&&c===0)
setCurrentPath({nodes:[[0,0]],colorIdx:paths.length%PATH_COLORS.length})

return
}

const newNodes=[...currentPath.nodes,[r,c]]

if(r===gridSize&&c===gridSize){

setPaths(p=>[...p,{...currentPath,nodes:newNodes}])
setCurrentPath(null)

}else{

setCurrentPath({...currentPath,nodes:newNodes})

}

}

function canClick(r:number,c:number){

if(tab!=="draw") return false

if(!currentPath) return r===0&&c===0

const [lr,lc]=currentPath.nodes[currentPath.nodes.length-1]

return (r===lr&&c===lc+1)||(r===lr+1&&c===lc)

}

function resetAll(){
setPaths([])
setCurrentPath(null)
}

function renderEdges(){

const els:any[]=[]

function addEdge(r1:number,c1:number,r2:number,c2:number,key:string){

const matched=paths.filter(p=>isEdgeInPath(p,r1,c1,r2,c2))
const inCur=currentPath&&isEdgeInPath(currentPath,r1,c1,r2,c2)

let stroke="#bbb"
let sw=1.5
let op=1

if(inCur){

stroke=PATH_COLORS[currentPath.colorIdx]
sw=4

}
else if(matched.length===1){

stroke=PATH_COLORS[matched[0].colorIdx]
sw=3.5

}
else if(matched.length>1){

stroke="#666"
sw=3.5

}

els.push(
<line
key={key}
x1={nx(c1)}
y1={ny(r1)}
x2={nx(c2)}
y2={ny(r2)}
stroke={stroke}
strokeWidth={sw}
strokeLinecap="round"
opacity={op}
/>
)

}

for(let r=0;r<N;r++)
for(let c=0;c<N-1;c++)
addEdge(r,c,r,c+1,`h${r}${c}`)

for(let r=0;r<N-1;r++)
for(let c=0;c<N;c++)
addEdge(r,c,r+1,c,`v${r}${c}`)

return els
}

function renderNodes(){

const els:any[]=[]

for(let r=0;r<N;r++)
for(let c=0;c<N;c++){

const isStart=r===0&&c===0
const isEnd=r===gridSize&&c===gridSize

const inCur=currentPath&&isNodeInPath(currentPath,r,c)

const isLast=currentPath&&
currentPath.nodes[currentPath.nodes.length-1][0]===r&&
currentPath.nodes[currentPath.nodes.length-1][1]===c

const clickable=canClick(r,c)

const isHov=hovered&&hovered[0]===r&&hovered[1]===c

let fill="#fff"
let strokeC="#333"

if(isStart||isEnd){
fill="#111"
strokeC="#111"
}
else if(isLast){
fill="#333"
strokeC="#333"
}
else if(inCur){
fill="#ddd"
strokeC="#333"
}
else if(clickable&&isHov){
fill="#eee"
strokeC="#333"
}

els.push(

<g
key={`n${r}${c}`}
onClick={()=>handleNodeClick(r,c)}
onMouseEnter={()=>setHovered([r,c])}
onMouseLeave={()=>setHovered(null)}
style={{cursor:clickable?"pointer":"default"}}
>

<circle
cx={nx(c)}
cy={ny(r)}
r={R_NODE}
fill={fill}
stroke={strokeC}
strokeWidth={1.5}
/>

{tab==="pascal" && (
<text
x={nx(c)}
y={ny(r)-15}
textAnchor="middle"
fill="#111"
fontSize={12}
fontFamily="Georgia, serif"
fontWeight="bold"
>
{binomial(r+c,r)}
</text>
)}

{tab==="ncr" && (
<text
x={nx(c)}
y={ny(r)-15}
textAnchor="middle"
fill="#111"
fontSize={11}
fontFamily="Georgia, serif"
fontWeight="bold"
>
{ncrLabel(r,c)}
</text>
)}

{isStart&&(
<text
x={nx(c)}
y={ny(r)+18}
textAnchor="middle"
fill="#111"
fontSize={9}
fontFamily="Georgia, serif"
>
START
</text>
)}

{isEnd&&(
<text
x={nx(c)}
y={ny(r)+18}
textAnchor="middle"
fill="#111"
fontSize={9}
fontFamily="Georgia, serif"
>
END
</text>
)}

</g>

)

}

return els
}

const tabs=[
["draw","Draw"],
["pascal","Pascal"],
["ncr","nCr"]
]

return(

<div
style={{
background:"#fff",
color:"#111",
fontFamily:"Georgia, serif",
padding:"30px 20px",
display:"flex",
flexDirection:"column",
alignItems:"center"
}}
>

<h2 style={{fontSize:22,marginBottom:4}}>
Grid Paths Explorer
</h2>

<p style={{color:"#666",marginBottom:24}}>
Paths · Pascal's Triangle · Binomial Coefficients
</p>

<div style={{display:"flex",gap:6,marginBottom:20}}>

{[2,3,4,5,6].map(s=>(

<button
key={s}
onClick={()=>{setGridSize(s);resetAll()}}
style={{
padding:"6px 12px",
border:"1px solid #ddd",
background:gridSize===s?"#f3f3f3":"#fff",
cursor:"pointer"
}}
>
{s}
</button>

))}

</div>

<div style={{display:"flex",gap:6,marginBottom:20}}>

{tabs.map(([key,label])=>(

<button
key={key}
onClick={()=>setTab(key)}
style={{
padding:"6px 14px",
border:"1px solid #ddd",
background:tab===key?"#f3f3f3":"#fff",
cursor:"pointer"
}}
>
{label}
</button>

))}

</div>

<div style={{border:"1px solid #e5e5e5",padding:12}}>

<svg width={SVG} height={SVG}>

{renderEdges()}
{renderNodes()}

</svg>

</div>

<div style={{marginTop:20,fontSize:14}}>

Paths in {gridSize}×{gridSize} grid =

<strong style={{marginLeft:6}}>
C({2*gridSize},{gridSize}) = {totalPaths}
</strong>

</div>

</div>

)

}