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

  return (
    <>
      <Typography size={size} weight={weight}>
        {expanded ? children : children.slice(0, 100)}
      </Typography>
      <button className={"bg-transparent text-text-description-dark"} onClick={changeExpanded}>
        {expanded ? "Read Less" : "Read More"}
      </button>
    </>
  )
}

export default ExpandTypography;
