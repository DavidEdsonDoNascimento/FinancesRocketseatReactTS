type BoxMovementProps = {
    title: string;
    imgSettings: {
        src: string;
        alt: string;
    },
    value: string;
    background?: string;
}
export const BoxMovement = ({ title, imgSettings, value, background }: BoxMovementProps) => {
    return (
        <div >
          <header>
            <p>{title}</p>
            <img src={imgSettings.src} alt={imgSettings.alt} />
          </header>
          <strong>R$ {value}</strong>
        </div>
    );
}