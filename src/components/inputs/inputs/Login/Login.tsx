import {cva, VariantProps} from "class-variance-authority";
import React, {FC} from "react";
import {IconInterface} from "../../../icon/IconProvider.tsx";
import Typography from "../../../typography/Typography.tsx";

const loginInput = cva("rounded-xl w-[288px] flex flex-row p-3 flex flex-row place-items-center gap-4", {
    variants: {
        color: {
            default: "bg-bg-bright-green outline outline-primary-900 text-primary-900",
            error: "bg-bg-bright-red outline outline-bg-colorful-red text-bg-colorful-red",
            disabled: "bg-secondary-500 outline outline-secondary-900 text-text-description-dark",
        }
    }
})

type LoginInputProps = VariantProps<typeof loginInput> & {
    text: string,
    icon: FC<IconInterface>,
    variant: "mail" | "lock",
}

export const Login: React.FC<LoginInputProps> = ({color, icon:Icon, variant, text}) => {

    return(
        <div className={loginInput({color})}>
            <div ><Icon size="medium" variant={variant} /></div>
            <div className={"overflow-scroll"}><Typography size={"p"} weight={"regular"}>{text}</Typography></div>
        </div>
    )
}