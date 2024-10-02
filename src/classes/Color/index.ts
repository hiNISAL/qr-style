import { assign } from 'lodash';
import type { Gradient as QRCodeStylingGradient } from 'qr-code-styling';

// -------------------------------------------------------------------------

type GradientDirection = 'toRight' | 'toLeft' | 'toTop' | 'toBottom' | 'toTopRight' | 'toTopLeft' | 'toBottomRight' | 'toBottomLeft';

type GradientType = 'linear' | 'radial';

class Gradient {
  public gradientColor: [string, string] = ['#000000', '#ffffff'];

  public gradientDirection: GradientDirection = 'toRight';

  public gradientType: GradientType = 'linear';

  public toggleColorStops(): void {
    [this.gradientColor[0], this.gradientColor[1]] = [this.gradientColor[1], this.gradientColor[0]];
  }

  public setFromColor(color: string): void {
    this.gradientColor[0] = color;
  }

  public setToColor(color: string): void {
    this.gradientColor[1] = color;
  }

  public toQRCodeStylingGradientOptions(): QRCodeStylingGradient {
    const rotation = (() => {
      switch (this.gradientDirection) {
        case 'toRight':
          return 0;
        case 'toLeft':
          return 180;
        case 'toTop':
          return 270;
        case 'toBottom':
          return 90;
        case 'toTopRight':
          return 315;
        case 'toTopLeft':
          return 45;
        case 'toBottomRight':
          return 135;
        case 'toBottomLeft':
          return 225;
      }
    })();

    return {
      type: this.gradientType,
      rotation,
      colorStops: this.gradientColor.map((color, index) => ({
        offset: index,
        color,
      })),
    };
  }
}

// -------------------------------------------------------------------------

type ColorType = 'solid' | 'gradient' | 'image';

interface ElementColorOptions {
  color?: string;
}

class ElementColor {
  public colorType: ColorType = 'solid';

  public color: string = '#000000';

  public gradient: Gradient = new Gradient();

  public image: string = '';

  public imageOpacity: number = 0.5;

  constructor(options: ElementColorOptions = {}) {
    this.color = options.color || '#000000';
  }

  merge(options: Partial<ElementColor>): void {
    assign(this, options.gradient);

    // @ts-ignore
    delete options.gradient;

    assign(this, options);
  }
}

export { ElementColor };
