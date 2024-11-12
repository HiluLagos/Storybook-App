import preview from './previewVideoImage.png';
import Description from "../../../inputs/reels/Description/Description.tsx";
import Typography from "../../../typography/basic/Typography.tsx";

const PreviewVideos = () => {
    return (
        <div className={"w-[156px] h-[298px] flex flex-col items-start justify-start bg-cover bg-center relative"}>
            <img src={preview} alt="preview" className={"w-[156px] h-[256px] object-cover"} />
            <div className={"absolute bottom-0 w-full"}>
                <Description tag="Pilates" />
                <div className={"w-full h-[42px] flex items-center justify-center text-primary-900"}>
                    <Typography
                        size={"m"}
                        weight={"regular"}
                        children={"When every symptom feels like a diagnosis!"}
                    />
                </div>
            </div>
        </div>
    );
}

export default PreviewVideos;
