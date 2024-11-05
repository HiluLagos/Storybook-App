import React, {useState} from "react";
import Typography from "../basic/Typography.tsx";

interface ExpandTypographyProps {
  weight: "regular" | "semiBold" | "extraBold";
  size: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "m";
  children: string;
}

const ExpandTypography: React.FC<ExpandTypographyProps> = ({weight = "regular", size = "p", children = "Sample text"}) => {
  const [expanded, setExpanded] = useState(false);

  const changeExpanded = () => {
    setExpanded(!expanded);
  }

  const limit: number = 58;
  const hasReadMore: boolean = children.length > limit;

    return (
      <div className="flex flex-col relative">
          <Typography size={size} weight={weight}>
              {expanded ? children : children.slice(0, limit)}
          </Typography>
          {hasReadMore &&
              <div className="flex justify-end items-end flex-grow">
                  <button className="bg-transparent text-text-description-dark" onClick={changeExpanded}>
                      {expanded ? "Read Less" : "Read More"}
                  </button>
              </div>
          }
      </div>
  )
}

export default ExpandTypography;
