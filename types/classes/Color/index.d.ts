import type { Gradient as QRCodeStylingGradient } from 'qr-code-styling';
type GradientDirection = 'toRight' | 'toLeft' | 'toTop' | 'toBottom' | 'toTopRight' | 'toTopLeft' | 'toBottomRight' | 'toBottomLeft';
type GradientType = 'linear' | 'radial';
declare class Gradient {
    gradientColor: [string, string];
    gradientDirection: GradientDirection;
    gradientType: GradientType;
    toggleColorStops(): void;
    setFromColor(color: string): void;
    setToColor(color: string): void;
    toQRCodeStylingGradientOptions(): QRCodeStylingGradient;
}
type ColorType = 'solid' | 'gradient' | 'image';
interface ElementColorOptions {
    color?: string;
}
declare class ElementColor {
    colorType: ColorType;
    color: string;
    gradient: Gradient;
    image: string;
    imageOpacity: number;
    constructor(options?: ElementColorOptions);
    merge(options: Partial<ElementColor>): void;
}
export { ElementColor };
