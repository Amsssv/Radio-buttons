import React, { useState } from "react";

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

	const setClass = (e) => {
		let images = document.querySelectorAll(".card__image");
		let buttons = document.querySelectorAll('.radio__label');

		const indexOf = element => Array.from(buttons).indexOf(element);

		const buttonIndex = indexOf(e.currentTarget);

		for (let i = 0; i < buttons.length; i++) {
			images[i].classList.remove('card__image--active');
		}
		images[buttonIndex].classList.add('card__image--active');


	}

	return (
		<div className="body" >
			{buttons.map((button) =>
				<label className="radio" key={button.id}  >
					<input type="radio" id={button.id} className="radio__input" name="selector" />
					<span className="radio__label" onClick={setClass}>{button.name}</span>
				</label>
			)}
		</div>
	)
}

export default Buttons;

