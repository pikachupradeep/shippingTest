import { button } from 'framer-motion/client'
import './button.css'
import { motion } from 'framer-motion';

interface ButtonProps {
    children: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => {
    return (
        <div className="button-wrapper">
            <div className="border-animation" />
            <button className="solid-button flex items-center gap-2">
                {children}
            </button>
        </div>
    );
};

export default Button;