import type { Options, CornerDotType, CornerSquareType, DotType } from 'qr-code-styling-extra';
import type QR from './qr-style';
import type { ElementColor } from './classes/Color';
import type { QRCornerDotStyle, QRCornerSquareStyle } from './type';

const noneToUndefined = <T>(value: QRCornerDotStyle | QRCornerSquareStyle | DotType): T | undefined => {
  if (value === '' || value === 'none') {
    return undefined;
  }

  return value as T;
};

const withColor = (
  key: 'backgroundOptions' | 'cornersDotOptions' | 'cornersSquareOptions' | 'dotsOptions',
  options: Options,
  color: ElementColor,
) => {
  if (color.colorType === 'solid') {
    if (color.color) {
      options[key]!.color = color.color;
    }
  } else if (color.colorType === 'gradient') {
    options[key]!.gradient = color.gradient.toQRCodeStylingGradientOptions();
  }
};

export const propsToQRCodeStylingOptions = (qr: QR): Options => {
  const options: Options = {
    width: qr.width,
    height: qr.height,
    type: qr.type,
    margin: qr.margin,
    data: qr.utf8Enabled ? unescape(encodeURIComponent(qr.text)) : qr.text,
    image: qr.image,
    updateAtCreatedCanvas: qr.canvasInstance ? true : false,
    canvas: qr.canvasInstance || undefined,
    qrOptions: {
      errorCorrectionLevel: qr.errorCorrectionLevel,
      typeNumber: qr.version,
    },
    dotsOptions: {
      type: noneToUndefined<DotType>(qr.dotsStyle),
    },
    backgroundOptions: {},
    cornersDotOptions: {
      type: noneToUndefined<CornerDotType>(qr.cornersDotStyle),
    },
    cornersSquareOptions: {
      type: noneToUndefined<CornerSquareType>(qr.cornersSquareStyle),
    },
    imageOptions: {
      hideBackgroundDots: qr.hideBehindImageDots,
      margin: qr.imageMargin,
      // @ts-ignore
      saveAsBlob: qr.saveImageAsBase64BlobWhenTypeIsSVG,
      crossOrigin: qr.imageCrossOrigin,
    },
  };

  withColor('backgroundOptions', options, qr.backgroundColor as ElementColor);
  withColor('cornersDotOptions', options, qr.cornersDotColor as ElementColor);
  withColor('cornersSquareOptions', options, qr.cornersSquareColor as ElementColor);
  withColor('dotsOptions', options, qr.dotsColor as ElementColor);

  return options;
};
