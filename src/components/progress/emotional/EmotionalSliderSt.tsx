import { cva, VariantProps } from "class-variance-authority";
import Face from "../../icon/progress/Face/Face.tsx";

type SliderType = "default" | "happy" | "neutral" | "sad";

const background = cva("rounded-full p-2 flex flex-row justify-between items-center", {
    variants: {
        color: {
            default: "",
            happy: "bg-green-200",
            neutral: "bg-yellow-200",
            sad: "bg-red-200",
        }
    },
    defaultVariants: {
        color: "default",
    }
});

type EmotionalSliderProps = VariantProps<typeof background> & {
    state?: SliderType;
};

const EmotionalSlider: React.FC<EmotionalSliderProps> = ({ state = "default" }) => {
    return (
        <div className={background({ color: state })} style={{ width: "300px", height: "48px", padding: "8px 0" }}>
            <div>
                <Face state="sad" color={state === "sad" ? "red" : "grey"} />
            </div>
            <div>
                <Face state="neutral" color={state === "neutral" ? "yellow" : "grey"} />
            </div>
            <div>
                <Face state="happy" color={state === "happy" ? "green" : "grey"} />
            </div>
        </div>
    );
};

export default EmotionalSlider;
