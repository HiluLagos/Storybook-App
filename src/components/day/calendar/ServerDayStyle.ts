import {cva} from "class-variance-authority";

export const dayColor = cva("rounded-lg font-montserrat text-p flex flex-col justify-end", {
    variants: {
        selected: {
            false: "",
            true: "bg-primary-100"
        },
        current: {
            false: "",
            true: "bg-primary-700 font-semibold text-white"
        },
        outsideMonth: {
            false: "",
            true: "text-secondary-500"
        }
    }
});

export const dot = cva("absolute top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full", {
    variants: {
        current: {
            false: "bg-primary-700",
            true: "bg-white"
        }
    }
});