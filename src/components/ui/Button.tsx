import { ButtonHTMLAttributes, ReactNode } from 'react'

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode,
}

const Button = ({ children, ...rest }: IProps) => {
    return (
        <button className="px-16 py-2 bg-teal-700 text-white rounded-full font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed" {...rest}>
            {children}
        </button>
    )
}

export default Button