<div className="first">

{switch1 === false ? (
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
)}

</div>
