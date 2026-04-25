import { IconProps } from "@/utils/interfaces";


export default function RovnoLogotypeIcon({ width = 62, height = 62, style }: IconProps) {
  return (
    <svg style={style} width={width} height={height} viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M62 0H0V62H62V0Z" className="fill-accent" />
      <path d="M36.1611 49.7383V48.3944H38.7723V15.1029H36.1611V13.7383H40.1611V49.7383H36.1611Z"
        className="fill-accent" />
      <path d="M25.3975 49.7383V48.3944H22.7863V15.1029H25.3975V13.7383H21.3975V49.7383H25.3975Z"
        className="fill-accent" />
    </svg>
  );
}
