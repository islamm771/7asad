import { InputHTMLAttributes } from "react"

interface IProps extends InputHTMLAttributes<HTMLInputElement> {

}

const Input = ({ ...rest }: IProps) => {

    return <input
        className="w-full rounded-lg border border-teal-700  bg-gray-50 text-teal-950 text-xl block p-2.5 focus:outline-none"
        min={rest.type === "number" ? 0 : undefined}
        {...rest}
    />
}


export default Input