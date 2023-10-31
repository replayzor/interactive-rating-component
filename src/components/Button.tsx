const commonButtonClass =
	"px-4 py-3 mt-8 rounded-full font-overpass font-400 text-neutral-lightGrey";
const primaryButtonClass = "bg-neutral-darkBlue text-neutral-lightGrey";
const hoverButtonClass = "hover:text-white hover:bg-primary-orange";
const activeButtonClass =
	"active:bg-neutral-lightGrey active:text-white focus:text-white focus:bg-neutral-lightGrey";

type Props = {
	text: string;
	onClick: () => void;
};

function Button({ text, onClick }: Props) {
	return (
		<button
			onClick={onClick}
			className={`${commonButtonClass} ${primaryButtonClass} ${hoverButtonClass} ${activeButtonClass}`}
		>
			{text}
		</button>
	);
}

export default Button;
