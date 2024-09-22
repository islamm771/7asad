import { InputHTMLAttributes } from "react";
import { FaCheck } from "react-icons/fa";

interface IProps extends InputHTMLAttributes<HTMLInputElement> { }

const InputCheckBox = ({ ...rest }: IProps) => {
    return (
        <div className="w-6 h-6 relative">
            <input
                type="radio"
                name="category"
                className="appearance-none w-full h-full border-2 border-teal-700 rounded cursor-pointer checked:bg-teal-700 dark-checked:border-teal-700 dark-focus:ring-offset-teal-700 dark:focus:ring-teal-700"
                {...rest}
            />
            {rest.checked && (
                <FaCheck
                    className="text-white absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 pointer-events-none"
                    size={12}
                />
            )}
        </div>
    );
};

export default InputCheckBox;
