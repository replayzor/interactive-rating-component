import thankyou from "/images/illustration-thank-you.svg";

type Props = {
	rating: number | null;
};

function ThankYou({ rating }: Props) {
	return (
		<div className="flex items-center justify-center h-screen">
			<div className="max-w-sm p-6 shadow-2xl rounded-2xl bg-gradient-to-bl from-neutral-darkBlue to-neutral-veryDarkBlue">
				<div className="flex items-center justify-center ">
					<img src={thankyou} alt="" />
				</div>
				<div className="flex items-center justify-center w-1/2 m-auto my-8 rounded-full bg-neutral-darkBlue">
					<p className="p-1 text-sm font-400 text-primary-orange">
						You selected {rating} out of 5
					</p>
				</div>
				<div className="flex items-center justify-center">
					<p className="text-2xl font-bold text-white font-overpass">
						Thank You!
					</p>
				</div>
				<p className="pt-4 leading-6 text-center font-400 text-neutral-lightGrey font-overpass">
					We appreciate you taking the time to give a rating. If you ever need
					more support, don't hesitate to get in touch!
				</p>
			</div>
		</div>
	);
}
export default ThankYou;
