// src/components/inputs/searcher/Searcher.tsx
import React, { useRef } from "react";
import SearchIcon from "../../icon/utility/searcher/SearchIcon.tsx";
import TypographyInput, { TypographyInputHandle } from "../../typography/input/TypographyInput.tsx";

type SearcherProps = {
    // If the user presses a key, this function will be called (useful for when an external calling needed)
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    color?: string;
};

const Searcher: React.FC<SearcherProps> = ({ onKeyDown, color= "primary-900" }) => {
  const inputRef = useRef<TypographyInputHandle>(null);

  return (
    <>
      <div className="w-[300px] h-10 rounded-xl border-2 border-primary-900 bg-bg-bright-green space-x-3 p-4 flex flex-row items-center justify-center">
        <div className="flex-shrink-0">
          <SearchIcon color={"primary-900"} />
        </div>
        <TypographyInput
          ref={inputRef}
          placeholder={"Search for new tags"}
          size={"p"}
          weight={"regular"}
          color={color}
          onKeyDown={onKeyDown}
        />
      </div>
    </>
  );
};

export default Searcher;