'use client';
import * as React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

type AccordionType = 'single' | 'multiple';

type AccordionContextValue = {
    type: AccordionType;
    activeIndex: number | null;
    setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>;
};

const AccordionContext = React.createContext<AccordionContextValue | null>(null);

export const Accordion = ({
    children,
    type = 'multiple',
    defaultIndex = 0,
}: {
    children: React.ReactNode;
    type?: AccordionType;
    defaultIndex?: number | null;
}) => {
    const [activeIndex, setActiveIndex] = React.useState<number | null>(
        type === 'single' ? (typeof defaultIndex === 'number' ? defaultIndex : null) : null
    );

    return (
        <AccordionContext.Provider value={{ type, activeIndex, setActiveIndex }}>
            <div className="space-y-3">{children}</div>
        </AccordionContext.Provider>
    );
};

export const AccordionItem = ({
    title,
    children,
    defaultOpen = false,
    index = 0,
}: {
    title: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
    index?: number;
}) => {
    const context = React.useContext(AccordionContext);
    const isSingle = context?.type === 'single';
    const [open, setOpen] = React.useState(defaultOpen);

    const isOpen = isSingle ? context?.activeIndex === index : open;

    const toggle = () => {
        if (isSingle) {
            context?.setActiveIndex(isOpen ? null : index);
            return;
        }
        setOpen((prev) => !prev);
    };

    return (
        <div className="border border-[#e6e0da] bg-white overflow-hidden transition-colors duration-300">
            <button
                onClick={toggle}
                className="w-full flex items-center justify-between px-5 py-4 text-[#1c2c34] font-semibold cursor-pointer"
            >
                <span>{title}</span>
                {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>

            <div
                className={`overflow-hidden transition-[max-height,opacity,padding] duration-500 ease-in-out px-5 text-sm text-[#1c2c34] ${isOpen ? 'max-h-[420px] py-3 opacity-100' : 'max-h-0 py-0 opacity-0'
                    }`}
            >
                {children}
            </div>
        </div>
    );
};
