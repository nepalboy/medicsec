import React from 'react';
import { Shield, Stethoscope } from 'lucide-react';

interface LogoProps {
    className?: string;
    iconClassName?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "", iconClassName = "h-10 w-10" }) => {
    return (
        <div className={`relative flex items-center justify-center ${className}`}>
            <Stethoscope className={`${iconClassName} text-red-300`} strokeWidth={2.5} />
            <div className="absolute -bottom-1 -right-1 bg-blue-600 rounded-full p-0.5 border-2 border-blue-900">
                <Shield size={16} className="text-yellow-500 fill-current" />
            </div>
        </div>
    );
};
