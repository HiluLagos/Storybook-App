import ConfettiTop from "./ConfettiTop.tsx";
import ConfettiRight from "./ConfettiRight.tsx";
import ConfettiLeft from "./ConfettiLeft.tsx";

const ConfettiDisplay = () => {
    return (
        <div>
            <ConfettiTop/>
            <div className="flex" >
                <div>
                    <ConfettiLeft/>
                </div>
                <div >
                    <ConfettiRight/>
                </div>
            </div>
        </div>
    );
}

export default ConfettiDisplay;