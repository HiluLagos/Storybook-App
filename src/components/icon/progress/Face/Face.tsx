import { cva } from "class-variance-authority";

interface FaceProps {
    state: "happy" | "neutral" | "sad";
}

const face = cva(
    "transform transition-transform", {
        variants: {
            state: {
                happy: {},
                neutral: {},
                sad: {},
            },
        },
        defaultVariants: {
            state: "neutral",
        },
    }
);

const Face: React.FC<FaceProps> = ({state = "neutral"}: FaceProps) => {
    const renderFace = () => {
        switch (state) {
            case "happy":
                return (
                    <path
                        d="M9.3322 20.1619C9.70691 19.8178 10.2626 19.8099 10.6415 20.1218L10.7335 20.221C11.7543 21.3224 13.5045 22.4999 16.0002 22.4999C18.4959 22.4999 20.246 21.3225 21.2668 20.2212C21.6449 19.8137 22.2788 19.7889 22.6789 20.1602C23.0864 20.5383 23.1112 21.1721 22.74 21.5723L22.7393 21.573C21.4345 22.9846 19.1847 24.4999 16.0065 24.4999C12.8272 24.4999 10.572 22.9898 9.27514 21.5746L9.27303 21.5723C8.8995 21.1697 8.9233 20.5374 9.3322 20.1619ZM29.5002 15.9999C29.5002 12.4195 28.0779 8.98568 25.5462 6.45394C23.0144 3.9222 19.5807 2.49988 16.0002 2.49988C12.4198 2.49988 8.98604 3.9222 6.4543 6.45394C3.92256 8.98568 2.50024 12.4195 2.50024 15.9999C2.50024 19.5803 3.92256 23.0141 6.4543 25.5458C8.98604 28.0776 12.4198 29.4999 16.0002 29.4999C19.5807 29.4999 23.0144 28.0776 25.5462 25.5458C28.0779 23.0141 29.5002 19.5803 29.5002 15.9999ZM0.500244 15.9999C0.500244 11.889 2.13328 7.94654 5.04009 5.03972C7.9469 2.13291 11.8894 0.499878 16.0002 0.499878C20.1111 0.499878 24.0536 2.13291 26.9604 5.03972C29.8672 7.94654 31.5002 11.889 31.5002 15.9999C31.5002 20.1107 29.8672 24.0532 26.9604 26.96C24.0536 29.8668 20.1111 31.4999 16.0002 31.4999C11.8894 31.4999 7.9469 29.8668 5.04009 26.96C2.13328 24.0532 0.500244 20.1107 0.500244 15.9999ZM9.52524 12.9999C9.52524 12.6021 9.68328 12.2205 9.96458 11.9392C10.2459 11.6579 10.6274 11.4999 11.0252 11.4999C11.4231 11.4999 11.8046 11.6579 12.0859 11.9392C12.3672 12.2205 12.5252 12.6021 12.5252 12.9999C12.5252 13.3977 12.3672 13.7792 12.0859 14.0605C11.8046 14.3418 11.4231 14.4999 11.0252 14.4999C10.6274 14.4999 10.2459 14.3418 9.96458 14.0605C9.68328 13.7792 9.52524 13.3977 9.52524 12.9999ZM21.0252 11.4999C21.4231 11.4999 21.8046 11.6579 22.0859 11.9392C22.3672 12.2205 22.5252 12.6021 22.5252 12.9999C22.5252 13.3977 22.3672 13.7792 22.0859 14.0605C21.8046 14.3418 21.4231 14.4999 21.0252 14.4999C20.6274 14.4999 20.2459 14.3418 19.9646 14.0605C19.6833 13.7792 19.5252 13.3977 19.5252 12.9999C19.5252 12.6021 19.6833 12.2205 19.9646 11.9392C20.2459 11.6579 20.6274 11.4999 21.0252 11.4999Z"
                        fill="currentColor"
                    />
                );
            case "neutral":
                return (
                    <path
                        d="M25.5462 25.5458C28.0779 23.0141 29.5002 19.5803 29.5002 15.9999C29.5002 12.4195 28.0779 8.98568 25.5462 6.45394C23.0144 3.9222 19.5807 2.49988 16.0002 2.49988C12.4198 2.49988 8.98604 3.9222 6.4543 6.45394C3.92256 8.98568 2.50024 12.4195 2.50024 15.9999C2.50024 19.5803 3.92256 23.0141 6.4543 25.5458C8.98604 28.0776 12.4198 29.4999 16.0002 29.4999C19.5807 29.4999 23.0144 28.0776 25.5462 25.5458ZM5.04009 5.03972C7.9469 2.13291 11.8894 0.499878 16.0002 0.499878C20.1111 0.499878 24.0536 2.13291 26.9604 5.03972C29.8672 7.94654 31.5002 11.889 31.5002 15.9999C31.5002 20.1107 29.8672 24.0532 26.9604 26.96C24.0536 29.8668 20.1111 31.4999 16.0002 31.4999C11.8894 31.4999 7.9469 29.8668 5.04009 26.96C2.13328 24.0532 0.500244 20.1107 0.500244 15.9999C0.500244 11.889 2.13328 7.94654 5.04009 5.03972ZM12.0859 14.0605C11.8046 14.3418 11.4231 14.4999 11.0252 14.4999C10.6274 14.4999 10.2459 14.3418 9.96458 14.0605C9.68328 13.7792 9.52524 13.3977 9.52524 12.9999C9.52524 12.6021 9.68328 12.2205 9.96458 11.9392C10.2459 11.6579 10.6274 11.4999 11.0252 11.4999C11.4231 11.4999 11.8046 11.6579 12.0859 11.9392C12.3672 12.2205 12.5252 12.6021 12.5252 12.9999C12.5252 13.3977 12.3672 13.7792 12.0859 14.0605ZM22.0859 11.9392C22.3672 12.2205 22.5252 12.6021 22.5252 12.9999C22.5252 13.3977 22.3672 13.7792 22.0859 14.0605C21.8046 14.3418 21.4231 14.4999 21.0252 14.4999C20.6274 14.4999 20.2459 14.3418 19.9646 14.0605C19.6833 13.7792 19.5252 13.3977 19.5252 12.9999C19.5252 12.6021 19.6833 12.2205 19.9646 11.9392C20.2459 11.6579 20.6274 11.4999 21.0252 11.4999C21.4231 11.4999 21.8046 11.6579 22.0859 11.9392ZM10.5002 21.9999C10.5002 21.4448 10.9451 20.9999 11.5002 20.9999H20.5002C21.0554 20.9999 21.5002 21.4448 21.5002 21.9999C21.5002 22.555 21.0554 22.9999 20.5002 22.9999H11.5002C10.9451 22.9999 10.5002 22.555 10.5002 21.9999Z"
                        fill="currentColor"
                    />
                );
            case "sad":
                return (
                    <path
                        d="M8.56444 23.1567L8.56451 23.1565C9.56591 20.371 12.5952 18.4999 16.0002 18.4999C19.4047 18.4999 22.4345 20.3706 23.4423 23.163C23.6297 23.6837 23.3593 24.2547 22.8422 24.4424C22.3285 24.6288 21.752 24.359 21.5642 23.8422C20.8977 22.0006 18.743 20.4999 16.0002 20.4999C13.2583 20.4999 11.1024 22.0001 10.4422 23.837C10.255 24.3568 9.68624 24.6239 9.16335 24.4357C8.64346 24.2485 8.37617 23.6797 8.56444 23.1567ZM29.5002 15.9999C29.5002 12.4195 28.0779 8.98568 25.5462 6.45394C23.0144 3.9222 19.5807 2.49988 16.0002 2.49988C12.4198 2.49988 8.98604 3.9222 6.4543 6.45394C3.92256 8.98568 2.50024 12.4195 2.50024 15.9999C2.50024 19.5803 3.92256 23.0141 6.4543 25.5458C8.98604 28.0776 12.4198 29.4999 16.0002 29.4999C19.5807 29.4999 23.0144 28.0776 25.5462 25.5458C28.0779 23.0141 29.5002 19.5803 29.5002 15.9999ZM0.500244 15.9999C0.500244 11.889 2.13328 7.94654 5.04009 5.03972C7.9469 2.13291 11.8894 0.499878 16.0002 0.499878C20.1111 0.499878 24.0536 2.13291 26.9604 5.03972C29.8672 7.94654 31.5002 11.889 31.5002 15.9999C31.5002 20.1107 29.8672 24.0532 26.9604 26.96C24.0536 29.8668 20.1111 31.4999 16.0002 31.4999C11.8894 31.4999 7.9469 29.8668 5.04009 26.96C2.13328 24.0532 0.500244 20.1107 0.500244 15.9999ZM9.52524 12.9999C9.52524 12.6021 9.68328 12.2205 9.96458 11.9392C10.2459 11.6579 10.6274 11.4999 11.0252 11.4999C11.4231 11.4999 11.8046 11.6579 12.0859 11.9392C12.3672 12.2205 12.5252 12.6021 12.5252 12.9999C12.5252 13.3977 12.3672 13.7792 12.0859 14.0605C11.8046 14.3418 11.4231 14.4999 11.0252 14.4999C10.6274 14.4999 10.2459 14.3418 9.96458 14.0605C9.68328 13.7792 9.52524 13.3977 9.52524 12.9999ZM21.0252 11.4999C21.4231 11.4999 21.8046 11.6579 22.0859 11.9392C22.3672 12.2205 22.5252 12.6021 22.5252 12.9999C22.5252 13.3977 22.3672 13.7792 22.0859 14.0605C21.8046 14.3418 21.4231 14.4999 21.0252 14.4999C20.6274 14.4999 20.2459 14.3418 19.9646 14.0605C19.6833 13.7792 19.5252 13.3977 19.5252 12.9999C19.5252 12.6021 19.6833 12.2205 19.9646 11.9392C20.2459 11.6579 20.6274 11.4999 21.0252 11.4999Z"
                        fill="currentColor"
                    />
                );
            default:
                return null;
        }
    };

    return (
        <svg
            className={face({state})}
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
        >
            {renderFace()}
        </svg>
    );
};

export default Face;
