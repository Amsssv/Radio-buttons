import React, { useState } from "react";

const Buttons = () => {

	const buttons = [
		{
			name: "First",
			id: "ocean",
		},
		{
			name: "Second",
			id: "mountain",
		},
		{
			name: "Third",
			id: "desert",
		},
	]

	const setClass = (e) => {
		let images = document.querySelectorAll(".card__image");
		let buttons = document.querySelectorAll('.radio');

		for (let i = 0; i < buttons.length; i++) {
			if (images[i].id === e.currentTarget.id) {
				images[i].classList.add('card__image--active');
			} else {
				images[i].classList.remove('card__image--active');
			}	
		}
	}

	return (
		<div className="body" >
			{buttons.map((button) =>
				<label className="radio" key={button.id} id={button.id} onClick={setClass} >
					<input type="radio"  className="radio__input" name="selector" />
					<span className="radio__label" >{button.name}</span>
				</label>
			)}
		</div>
	)
}

export default Buttons;

