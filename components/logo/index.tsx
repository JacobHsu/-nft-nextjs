import Image from "next/image";

const Logo = ({ logo }) => (
    <div>
        {logo?.[0]?.src && (
            <Image
                src={logo[0].src}
                alt={logo[0]?.alt || "nft-logo"}
                width={106}
                height={35}
            />
        )}
    </div>
);

export default Logo;
