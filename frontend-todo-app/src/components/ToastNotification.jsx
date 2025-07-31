import { useState, useEffect } from "react";
import { CheckCircle, XCircle, AlertCircle, X } from "lucide-react";
export default function Toast({ text, type = "success" }) {
    const [visible, setVisible] = useState(true);
    const icons = {
        success: <CheckCircle aria-hidden="true" className="text-black w-6 h-6" />,
        error: <XCircle aria-hidden="true" className="text-black w-6 h-6" />,
        warning: <AlertCircle aria-hidden="true" className="text-black w-6 h-6" />,
    };
    const bgColors = {
        success: "bg-emerald-500",
        error: "bg-rose-100",
        warning: "bg-yellow-100",
    };
    useEffect(() => {
        const timeout = setTimeout(() => setVisible(false), 5000);
        return () => clearTimeout(timeout);
    }, []);

    if (!visible) return null;

    return (
        <div aria-live="polite" role="alert" tabIndex={0} className={`toast fixed bottom-20 right-8 gap-4 w-[80vw] h-[9vh]  lg:w-[30vw] lg:h-[15vh] flex items-center justify-center  text-gray-800 shadow-lg rounded-lg ${bgColors[type]}`}>
            
            
            
            {icons[type]}
            <div className="flex items-center justify-between w-full">
                <p className="font-medium text-gray-700 text-sm">{text}</p>


                <button
                    onClick={() => setVisible(false)}
                    aria-label="Close the Toast Notification"
                    className="text-xl font-bold text-[#111827] hover:text-black"
                >
                    <X />
                </button>
                <div
                    className="absolute left-0 bottom-0 w-full h-1 bg-black animate-progress"
                ></div>

            </div>
        </div>

    );
}
