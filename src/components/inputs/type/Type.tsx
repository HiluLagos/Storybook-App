import TypographyInput from "../../typography/input/TypographyInput.tsx";
import SendIcon from "../../icon/tech/log/send/SendIcon.tsx";

const Type = () => {
  return (
    <div className="w-[300px] h-10 rounded-xl border-2 border-primary-900 bg-bg-bright-green space-x-3 p-4 flex flex-row items-center justify-center text-primary-900">
      <TypographyInput
          size="p"
          weight="regular"
          placeholder={"Comment"}
      />
      <SendIcon pressed={false} color={"green"} />
    </div>
  );
};

export default Type;