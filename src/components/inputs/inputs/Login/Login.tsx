import { cva, VariantProps } from "class-variance-authority";
import React, { FC } from "react";
import { IconInterface } from "../../../icon/IconProvider.tsx";
import EditableTypography from "../../../typography/input/TypographyInput.tsx";
import Typography from "../../../typography/basic/Typography.tsx";

const loginInput = cva("rounded-xl flex flex-row p-3 items-center gap-4 w-[288px]", {
    variants: {
        color: {
            default: "bg-bg-bright-green outline outline-primary-900 text-primary-900",
            error: "bg-bg-bright-red outline outline-bg-colorful-red text-bg-colorful-red",
            disabled: "bg-secondary-500 outline outline-secondary-900 text-text-description-dark cursor-not-allowed pointer-events-none", // Add cursor and pointer-events for disabled state
        },
    },
});

type LoginInputProps = VariantProps<typeof loginInput> & {
    placeholder: string;
    icon: FC<IconInterface>;
    variant: "mail" | "lock"; // Assuming "mail" is for email input and "lock" for password
};

export const Login: React.FC<LoginInputProps> = ({ color, icon: Icon, variant, placeholder }) => {
    const isDisabled = color === "disabled"; // Check if the component is disabled

    return (
        <div className={loginInput({ color })}>
            <div>
                <Icon size="medium" variant={variant} />
            </div>
            <div className="overflow-scroll scrollbar-hide flex-grow">
                {isDisabled ? (
                    <Typography size={"p"} weight={"regular"}>{placeholder}</Typography> // Show a simple span when disabled
                ) : (
                    <EditableTypography
                        size="p"
                        weight="regular"
                        placeholder={placeholder}
                        isPassword={variant === "lock"} // Pass isPassword based on variant
                    />
                )}
            </div>
        </div>
    );
};
