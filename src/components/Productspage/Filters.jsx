function Filters({setFilter}){

return(

<div className="filters">

<h3>FILTERS</h3>

<label>
<input
type="radio"
name="type"
onChange={()=>setFilter("")}
/>
All
</label>

<label>
<input
type="radio"
name="type"
onChange={()=>setFilter("egg")}
/>
Egg
</label>

<label>
<input
type="radio"
name="type"
onChange={()=>setFilter("eggless")}
/>
Eggless
</label>

</div>

)

}




export default Filters;