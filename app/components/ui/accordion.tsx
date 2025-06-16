'use client';
import * as React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const Accordion = ({ children }: { children: React.ReactNode }) => {
    return <div className="space-y-2">{children}</div>;
};

export const AccordionItem = ({
    title,
    children,
    defaultOpen = false,
}: {
    title: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
}) => {
    const [open, setOpen] = React.useState(defaultOpen);

    return (
        <div className="border rounded overflow-hidden transition-all duration-300">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between px-4 py-2 bg-[#1f2c42] text-white font-semibold cursor-pointer"
            >
                <span>{title}</span>
                {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>

            <div
                className={`transition-all duration-300 ease-in-out px-4 bg-white text-sm text-gray-700 ${open ? 'max-h-96 py-2 opacity-100' : 'max-h-0 opacity-0 py-0'
                    } overflow-hidden`}
            >
                {children}
            </div>
        </div>
    );
};
