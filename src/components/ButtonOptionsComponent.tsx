import { ButtonComponent } from './ButtonComponent';

export const ButtonOptionsComponent = () => {

    return (
        <>
            <div className="flex justify-center items-center"> {/* Asegúrate de que el contenedor ocupe al menos toda la pantalla */}
                <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 p-5">
                    <div className="flex flex-col-reverse gap-1">
                        <ButtonComponent name="Regions" option="region" />
                    </div>
                    <div className="flex flex-col-reverse gap-1">
                        <ButtonComponent name="Types" option="types" />
                    </div>
                    <div className="flex flex-col-reverse gap-1">
                        <ButtonComponent name="Moves" option="moves" />
                    </div>
                    <div className="flex flex-col-reverse gap-1">
                        <ButtonComponent name="Items" option="items" />
                    </div>
                </dl>
            </div>


        </>
    )
}