import { TextareaHTMLAttributes } from "react"

interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {

}

const Textarea = ({ ...rest }: IProps) => {

    return <textarea
        className="w-full rounded-lg border border-teal-700  bg-gray-50 text-teal-950 text-xl block p-2.5 focus:outline-none resize-none"
        {...rest}
    />
}


export default Textarea