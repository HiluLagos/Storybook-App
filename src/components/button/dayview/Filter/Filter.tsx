import Text from "../Text/Text.tsx"
import {useState} from "react";

const Filter = () => {
    const [clicked, setClicked] = useState(true);

    return (
        <div className={"flex flex-row bg-primary-500 p-[4px] gap-[4px] rounded-lg"}>
            <Text text={"Category"} state={clicked ? "selected" : "default"} onClick={() => setClicked(true)} />
            <Text text={"Time"} state={clicked ? "default" : "selected"} onClick={() => setClicked(false)}/>
        </div>
    );
}

export default Filter;