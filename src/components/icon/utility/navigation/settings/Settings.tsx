import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const settingsIcon = cva("", {
    variants: {
        state: {
            default: [
                "stroke-current", "fill-none", "stroke-1.5"
            ],
            selected: [
                "fill-current", "stroke-none"
            ]
        },
    },
    defaultVariants: {
        state: "default",
    },
});

type SettingsIconProps = VariantProps<typeof settingsIcon> & {
};

const SettingsIcon: React.FC<SettingsIconProps> = ({ state = "default" }: SettingsIconProps) => {

    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M11.8724 0.15224C11.4826 4.47035e-08 10.9884 0 9.99999 0C9.01157 0 8.51736 4.47035e-08 8.12757 0.15224C7.60778 0.35523 7.19482 0.74458 6.97953 1.23463C6.88124 1.45834 6.84278 1.7185 6.82773 2.09799C6.80561 2.65568 6.50226 3.17189 5.98964 3.45093C5.47702 3.72996 4.85119 3.71954 4.32788 3.45876C3.97176 3.2813 3.71356 3.18262 3.45893 3.15102C2.90114 3.08178 2.33703 3.22429 1.89069 3.5472C1.55593 3.78938 1.30883 4.1929 0.814628 4.99993C0.320429 5.80697 0.0733344 6.21048 0.0182607 6.60491C-0.0551813 7.1308 0.0959764 7.66266 0.438471 8.0835C0.594797 8.2756 0.814492 8.437 1.15547 8.639C1.65674 8.936 1.97928 9.4419 1.97925 10C1.97922 10.5581 1.65669 11.0639 1.15547 11.3608C0.814439 11.5629 0.594702 11.7244 0.438366 11.9165C0.0958712 12.3373 -0.0552759 12.8691 0.0181556 13.395C0.0732292 13.7894 0.320334 14.193 0.814523 15C1.30872 15.807 1.55583 16.2106 1.89059 16.4527C2.33692 16.7756 2.90104 16.9181 3.45883 16.8489C3.71345 16.8173 3.97163 16.7186 4.32771 16.5412C4.85107 16.2804 5.47694 16.27 5.98959 16.549C6.50224 16.8281 6.8056 17.3443 6.82773 17.9021C6.84278 18.2815 6.88124 18.5417 6.97953 18.7654C7.19482 19.2554 7.60778 19.6448 8.12757 19.8478C8.51736 20 9.01157 20 9.99999 20C10.9884 20 11.4826 20 11.8724 19.8478C12.3922 19.6448 12.8051 19.2554 13.0204 18.7654C13.1187 18.5417 13.1572 18.2815 13.1723 17.902C13.1944 17.3443 13.4977 16.8281 14.0103 16.549C14.5229 16.2699 15.1488 16.2804 15.6722 16.5412C16.0283 16.7186 16.2864 16.8172 16.541 16.8488C17.0988 16.9181 17.6629 16.7756 18.1092 16.4527C18.4441 16.2105 18.6911 15.807 19.1853 14.9999C19.6796 14.1929 19.9266 13.7894 19.9818 13.395C20.0551 12.8691 19.904 12.3372 19.5616 11.9164C19.4051 11.7243 19.1855 11.5628 18.8444 11.3608C18.3432 11.0639 18.0207 10.558 18.0207 9.9999C18.0207 9.4418 18.3432 8.9361 18.8444 8.6392C19.1856 8.4371 19.4052 8.2757 19.5617 8.0835C19.9041 7.66273 20.0552 7.13087 19.9819 6.60497C19.9267 6.21055 19.6797 5.80703 19.1855 5C18.6912 4.19297 18.4442 3.78945 18.1093 3.54727C17.663 3.22436 17.0989 3.08185 16.5411 3.15109C16.2865 3.18269 16.0283 3.28136 15.6723 3.4588C15.1489 3.71959 14.523 3.73002 14.0104 3.45096C13.4978 3.17191 13.1944 2.65566 13.1722 2.09794C13.1571 1.71848 13.1187 1.45833 13.0204 1.23463C12.8051 0.74458 12.3922 0.35523 11.8724 0.15224ZM9.99999 13C11.7574 13 13.1819 11.6569 13.1819 10C13.1819 8.3431 11.7574 7 9.99999 7C8.24262 7 6.81805 8.3431 6.81805 10C6.81805 11.6569 8.24262 13 9.99999 13Z"
                  className={settingsIcon({state})}/>
        </svg>

    );
};

export default SettingsIcon;