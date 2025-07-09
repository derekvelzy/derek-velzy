export type PolyData = {
    points: number[][];
    color: string;
    stroke?: string;
    hoverEffect?: boolean;
    theme?: "dark" | "light";
};

export type Boundary = {
    inside: number[][] | null;
    outside: number[][];
};