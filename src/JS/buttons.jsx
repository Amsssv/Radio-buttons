import React from "react";

const Buttons = () => {

	const buttons = [
		{
			name: "First",
			id: "first",
		},
		{
			name: "Second",
			id: "second",
		},
		{
			name: "Third",
			id: "third",
		},
	]

	return (
		<div className="body">
			{buttons.map((button) =>
				<label className="radio" key={button.id}>
					<input type="radio" id={button.id} className="radio__input" name="selector" />
					<span className="radio__label">{button.name}</span>
				</label>
			)}
		</div>
	)
}

export default Buttons;