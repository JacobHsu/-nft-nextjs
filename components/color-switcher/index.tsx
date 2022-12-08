import Image from "next/image";

import { useTheme } from "next-themes";

const ColorSwitcher = () => {
    const { setTheme } = useTheme();
    return (
        <div className="setColor">
            <button
                type="button"
                className={"light switch-btn"}
                onClick={() => setTheme("light")}
            >
                <Image
                    src="/images/icons/sun.svg"
                    alt="Sun images"
                    layout="fixed"
                    width={16}
                    height={16}
                />
            </button>
            <button
                type="button"
                className={"dark switch-btn"}
                onClick={() => setTheme("dark")}
            >
                <Image
                    src="/images/icons/vector.svg"
                    alt="Vector Images"
                    layout="fixed"
                    width={16}
                    height={16}
                />
            </button>
        </div>
    );
};

export default ColorSwitcher;
