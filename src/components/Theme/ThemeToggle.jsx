import { useEffect, useState } from "react";
import { Toggle, Form } from "react-daisyui";

function ThemeToggle({
    light,
    dark,
    description
}) {
    const [theme, setTheme] = useState('light');
    const [checked, setChecked] = useState(true)

    // get the theme from local storage or use the default value
    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setTheme(storedTheme);
            setChecked(storedTheme === dark);
        }
    }, [dark]);

    // update the theme in local storage and on the document's html element
    const toggleTheme = () => {
        const newTheme = theme === light ? dark : light;
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        setChecked(newTheme === dark);
    };

    return (
        <Form className="form-control">
            <Form.Label title={description}>
                <Toggle onClick={toggleTheme} className="toggle toggle-primary toggle-sm" checked={checked} />
            </Form.Label>
        </Form>
    );
}

export default ThemeToggle;
