import React, { useState } from "react";

const Buttons = () => {

	// const buttons = [
	// 	{
	// 		name: "First",
	// 		id: "first",
	// 	},
	// 	{
	// 		name: "Second",
	// 		id: "second",
	// 	},
	// 	{
	// 		name: "Third",
	// 		id: "third",
	// 	},
	// ]

		const [count, setCount] = useState(0)

		const addCount = () => {
			console.log(count + 1)
		}


	return (
		<div className="body" >
				<label className="radio" key="first"  >
					<input type="radio" id="first" className="radio__input" name="selector" />
					<span className="radio__label" onClick={addCount}>First</span>
				</label>
				<label className="radio" key="second" >
					<input type="radio" id="second" className="radio__input" name="selector" />
					<span className="radio__label">Second</span>
				</label>
				<label className="radio" key="third" >
					<input type="radio" id="third" className="radio__input" name="selector" />
					<span className="radio__label">Third</span>
				</label>
		</div>
	)
}

export default Buttons;