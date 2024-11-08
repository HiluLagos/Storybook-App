import SearchIcon from "../../icon/utility/searcher/SearchIcon.tsx";
import TypographyInput from "../../typography/input/TypographyInput.tsx";
import Cross from "../../icon/utility/cross/Cross.tsx";

const Searcher = () => {
    return (
        <>
            <div className="w-[300px] h-10 rounded-xl border-2 border-primary-500 bg-bg-bright-green space-x-3 p-4 flex flex-row items-center justify-center">
                <SearchIcon/>
                <TypographyInput placeholder={"Search for new tags"} size={"p"} weight={"regular"}/>
            </div>
            <div className="w-[300px] h-10 rounded-xl border-2 border-primary-500 bg-primary-700 space-x-3 p-4 flex flex-row items-center justify-center">
                <SearchIcon/>
                <TypographyInput placeholder={"Search for new tags"} size={"p"} weight={"regular"}/>
                <Cross color={"rgb(177 233 131 / var(--tw-bg-opacity))"}/>
            </div>
        </>
    )
}

export default Searcher;

