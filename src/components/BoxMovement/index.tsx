import { CoinFormat } from "../../helpers/CoinFormat";

type BoxMovementProps = {
  title: string;
  imgSettings: {
    src: string;
    alt: string;
  },
  value: number;
  background?: string;
}
export const BoxMovement = ({ title, imgSettings, value, background }: BoxMovementProps) => {
  return (
    <div >
      <header>
        <p>{title}</p>
        <img src={imgSettings.src} alt={imgSettings.alt} />
      </header>
      <strong>{CoinFormat.toBrazilian(value)}</strong>
    </div>
  );
}