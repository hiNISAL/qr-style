import type QR from "./qr-style";

// -------------------------------------------------------------------------

export type QRImageStyle = 'normal' | 'circle' | 'rounded' | 'square';

export type QRImageShadow = 'none' | 'l1' | 'l2' | 'l3' | 'l4' | 'l5';

export type QRDotStyle = 'square' | 'dots' | 'classy' | 'classy-rounded' | 'rounded' | 'extra-rounded';

export  type QRCornerDotStyle = 'square' | 'dot';

export type QRCornerSquareStyle = 'square' | 'dot' | 'extra-rounded';

export type QRErrorCorrectionLevel = 'L' | 'M' | 'Q' | 'H';

export type QRVersion = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40;

export type Extension = 'png' | 'jpeg' | 'webp' | 'svg';

export type QRMode = 'Numeric' | 'Alphanumeric' | 'Byte' | 'Kanji';

// -------------------------------------------------------------------------

export type OnGenerated = (options: {
  qr: QR;
  canvas: HTMLCanvasElement;
  svg: SVGElement;
}) => void;

export interface QROptions {
  text?: string;
  type?: 'canvas' | 'svg';
  utf8Enabled?: boolean;
  qrOptions?: Partial<QR>;
  onGenerated?: OnGenerated;
}
