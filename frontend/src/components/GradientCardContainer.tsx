import { ReactNode } from "react";

export function GradeintCardContainer({ children }: { children: ReactNode }) {
    return (
        <div className="relative h-[60vh] w-[60vh] ">
            <div
                className="absolute -inset-2 rounded-lg bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-emerald-600 via-green-600 to-indigo-600 opacity-50 blur-xl"
            ></div>
            {children}
        </div>
    )
}

