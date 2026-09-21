import React from "react";

export interface Icons8IconProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, "id"> {
  id: string | number;
  size?: number;
  color?: string; // Hex color code with or without '#'
  className?: string;
  alt?: string;
}

export function Icons8Icon({
  id,
  size = 24,
  color = "ef5b52",
  className = "",
  alt = "icon",
  style,
  ...props
}: Icons8IconProps) {
  const hex = color.replace("#", "");
  // Use higher resolution size for ultra-crisp retina displays
  const requestSize = Math.max(96, size * 2);
  const url = `https://img.icons8.com/?size=${requestSize}&id=${id}&format=png&color=${hex}`;

  return (
    <img
      src={url}
      width={size}
      height={size}
      alt={alt}
      className={`inline-block shrink-0 object-contain ${className}`}
      style={{ width: size, height: size, ...style }}
      loading="lazy"
      {...props}
    />
  );
}

// Common props interface for icon components
export interface IconProps extends Omit<Icons8IconProps, "id"> {}

// Verified Outline Icons (Matching user reference id=9659)
export const Icons8Phone = (props: IconProps) => <Icons8Icon id="9659" alt="Phone" {...props} />;
export const Icons8Mail = (props: IconProps) => <Icons8Icon id="63598" alt="Email" {...props} />;
export const Icons8MapPin = (props: IconProps) => <Icons8Icon id="3723" alt="Location" {...props} />;
export const Icons8BarChart = (props: IconProps) => <Icons8Icon id="15" alt="Analytics" {...props} />;
export const Icons8LineChart = (props: IconProps) => <Icons8Icon id="90" alt="Chart" {...props} />;
export const Icons8TrendingUp = (props: IconProps) => <Icons8Icon id="90" alt="Trending" {...props} />;
export const Icons8Brain = (props: IconProps) => <Icons8Icon id="2070" alt="Brain" {...props} />;
export const Icons8Zap = (props: IconProps) => <Icons8Icon id="16412" alt="Fast" {...props} />;
export const Icons8Search = (props: IconProps) => <Icons8Icon id="132" alt="Search" {...props} />;
export const Icons8Target = (props: IconProps) => <Icons8Icon id="1304" alt="Target" {...props} />;
export const Icons8Lock = (props: IconProps) => <Icons8Icon id="94" alt="Security" {...props} />;
export const Icons8Rocket = (props: IconProps) => <Icons8Icon id="999" alt="Growth" {...props} />;
export const Icons8Shield = (props: IconProps) => <Icons8Icon id="852" alt="Shield" {...props} />;
export const Icons8Cart = (props: IconProps) => <Icons8Icon id="9671" alt="Cart" {...props} />;
export const Icons8Handshake = (props: IconProps) => <Icons8Icon id="10993" alt="Partnership" {...props} />;
export const Icons8Code = (props: IconProps) => <Icons8Icon id="2778" alt="Code" {...props} />;
export const Icons8Bot = (props: IconProps) => <Icons8Icon id="37410" alt="Bot" {...props} />;
export const Icons8Building = (props: IconProps) => <Icons8Icon id="53373" alt="Building" {...props} />;
export const Icons8Cloud = (props: IconProps) => <Icons8Icon id="2854" alt="Cloud" {...props} />;
export const Icons8Smartphone = (props: IconProps) => <Icons8Icon id="ZwGNoFXGbt9n" alt="Mobile" {...props} />;
export const Icons8Chat = (props: IconProps) => <Icons8Icon id="143" alt="Chat" {...props} />;
export const Icons8Sync = (props: IconProps) => <Icons8Icon id="11680" alt="Sync" {...props} />;
export const Icons8Gear = (props: IconProps) => <Icons8Icon id="53375" alt="Settings" {...props} />;
export const Icons8Pencil = (props: IconProps) => <Icons8Icon id="11737" alt="Pencil" {...props} />;
export const Icons8Graduation = (props: IconProps) => <Icons8Icon id="11173" alt="Education" {...props} />;
export const Icons8Handbag = (props: IconProps) => <Icons8Icon id="21815" alt="Fashion" {...props} />;
export const Icons8Heart = (props: IconProps) => <Icons8Icon id="87" alt="Health" {...props} />;
export const Icons8Plug = (props: IconProps) => <Icons8Icon id="4052" alt="API" {...props} />;
export const Icons8Home = (props: IconProps) => <Icons8Icon id="73" alt="Home" {...props} />;
export const Icons8Medical = (props: IconProps) => <Icons8Icon id="14094" alt="Medical" {...props} />;
export const Icons8Email = (props: IconProps) => <Icons8Icon id="63598" alt="Email" {...props} />;
export const Icons8Globe = (props: IconProps) => <Icons8Icon id="3685" alt="Globe" {...props} />;
export const Icons8Share = (props: IconProps) => <Icons8Icon id="98958" alt="Share" {...props} />;
export const Icons8Camera = (props: IconProps) => <Icons8Icon id="85082" alt="Camera" {...props} />;

