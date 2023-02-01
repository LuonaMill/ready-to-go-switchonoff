{switch1 === false && (
<div>
<button
className={switch1 ? "purple" : ""}
onClick={() => {
setSwitch1(!switch1);
}} >
ON
</button>
<button className="purple">OFF</button>
</div>
)}
{switch1 === true && switch2 === false ? (
<div>
<button
onClick={() => {
setSwitch1(switch1);
}} >
ON
</button>
<button
onClick={() => {
setSwitch2(!switch2);
}} >
OFF
</button>
</div>
) : (
<div>
<button
onClick={() => {
setSwitch1(!switch1);
}} >
ON
</button>
<button
onClick={() => {
setSwitch2(switch2);
}} >
OFF
</button>
</div>
)}

2e essai pas réussi
{/_ {switch1 === false ? (
<div>
<button
className={switch1 ? "purple" : ""}
onClick={() => {
setSwitch1(!switch1);
}} >
On
</button>
<button
className={switch2 ? "" : "purple"}
onClick={() => {
setSwitch2(!switch2);
}} >
Off
</button>
</div>
) : (
<div>
<button
className={switch1 ? "purple" : ""}
onClick={() => {
setSwitch1(!switch1);
}} >
On
</button>
<button
className={switch2 ? "purple" : ""}
onClick={() => {
setSwitch2(!switch2);
}} >
Off
</button>
</div>
)} _/}
