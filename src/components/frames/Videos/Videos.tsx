import pilates from './pilates.png';
import Interactions from "../../button/helpTalks/Interactions.tsx";
import Caption from "../../inputs/reels/Caption/Caption.tsx";

const Videos = () => {
    return (
        <div className={"w-[360px] h-[800px] bg-teal-500 flex flex-col justify-end bg-cover bg-center"} style={{ backgroundImage: `url(${pilates})` }}>
            <div className={"flex flex-col gap-2"}>
                <div className={"flex justify-end mr-2"}>
                    <Interactions/>
                </div>
                <Caption
                    title={"Pilates for Core Strength"}
                    description={"Build a strong core, build a strong body"}
                />
            </div>
        </div>
    )
}

export default Videos;
