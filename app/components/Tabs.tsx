import {FC} from "react";


export const Tabs: FC<{ options: { label: string, value: string }[], value: string, onChange: (value: string) => void }> = ({ options, value, onChange }) => {

    const selectedTab = options.find((option) => option.value === value) || options[0];

    return (
        <div
            className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px">
                {options.map((option) => (
                    <li key={option.value} className="me-2">
                        <a href="#"
                           className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${selectedTab.value === option.value ? 'text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500' : ''}`}
                           onClick={(e) => {
                               e.preventDefault();
                                 onChange(option.value);
                           }}>{option.label}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}