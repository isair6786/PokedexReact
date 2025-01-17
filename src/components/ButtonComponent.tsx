import { Button, ButtonOption} from '../interfaces/button.interface';

// Mapa de colores según el tipo
const colorMap: Record<ButtonOption, string> = {
    region: "bg-red-400", 
    items: "bg-amber-400", 
    moves: "bg-indigo-400",
    types:"bg-emerald-400"
};

export const ButtonComponent = ({ name = "Button",option="items" }: Button) => {

    const buttonColor = colorMap[option] || colorMap.items; // Usa el color por defecto "primary" si no se pasa color

    return (
        <>
            <button className={`${buttonColor} buttonOptions text-[20px] text-white font-bold  flex w-60 justify-center p-5`}>
                {name}
            </button>
        </>
    )
}