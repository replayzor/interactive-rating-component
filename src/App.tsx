import { useState } from "react";
import iconStar from "/images/icon-star.svg";
import ThankYou from "./components/ThankYou";
import Button from "./components/Button";

const buttons = [
	{
		id: 1,
		text: "1",
	},
	{
		id: 2,
		text: "2",
	},
	{
		id: 3,
		text: "3",
	},
	{
		id: 4,
		text: "4",
	},
	{
		id: 5,
		text: "5",
	},
];

function App() {
	const [selectedRating, setSelectedRating] = useState<number | null>(null);
	const [submitted, setSubmitted] = useState<boolean>(false);

	const handleRating = (rating: number) => {
		setSelectedRating(rating);
	};

	const handleClick = () => {
		setSubmitted(true);
	};

	if (submitted) {
		return <ThankYou rating={selectedRating} />;
	}

	return (
		<div className="flex items-center justify-center h-screen">
			<div className="max-w-sm p-6 shadow-2xl rounded-2xl bg-gradient-to-bl from-neutral-darkBlue to-neutral-veryDarkBlue">
				<div className="flex items-center justify-center w-10 h-10 rounded-full bg-neutral-darkBlue">
					<img src={iconStar} alt="" />
				</div>
				<h1 className="pt-8 text-white font-overpass">How did we do?</h1>
				<p className="pt-4 leading-6 font-400 text-neutral-mediumGrey font-overpass ">
					Please let us know how we did with your support request. All feedback
					is appreciated to help us improve our offering!
				</p>

				<div className="flex items-center justify-center gap-7">
					{buttons.map((button) => (
						<Button
							key={button.id}
							text={button.text}
							onClick={() => handleRating(button.id)}
						/>
					))}
				</div>
				<div className="flex items-center justify-center mt-8">
					<button
						type="submit"
						onClick={handleClick}
						className="w-full p-4 tracking-widest text-white uppercase rounded-full cursor-pointer bg-primary-orange font-overpass hover:bg-white hover:text-primary-orange"
					>
						Submit
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
