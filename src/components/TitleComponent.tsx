import { Title } from "../interfaces/title.interface";

export const TitleComponent = ({ title = "Welcome", description = "This is a example" }: Title) => {

    return (
        <>
            <div className="text-center">
                <h2 className="text-balance text-3xl font-bold tracking-tight text-black sm:text-4xl">
                    {title}</h2>
                <h4 className="font-mono mt-3">{description}</h4>
            </div>
        </>
    )
}
