import type { Options } from 'qr-code-styling';
import type QR from './qr-style';

export const propsToQRCodeStylingOptions = (qr: QR): Options => {
  const options: Options = {
    width: qr.width,
    height: qr.height,
    type: qr.type,
    margin: qr.margin,
    data: qr.text,
    image: qr.image,
    qrOptions: {
      errorCorrectionLevel: qr.errorCorrectionLevel,
      typeNumber: qr.typeNumber,
    },
    dotsOptions: {
      type: qr.dotsStyle,
    },
    backgroundOptions: {},
    cornersDotOptions: {
      type: qr.cornersDotStyle,
    },
    cornersSquareOptions: {
      type: qr.cornersSquareStyle,
    },
    imageOptions: {
      hideBackgroundDots: qr.hideBehindImageDots,
      margin: qr.imageMargin,
      // @ts-ignore
      saveAsBlob: qr.saveImageAsBase64BlobWhenTypeIsSVG,
      crossOrigin: qr.imageCrossOrigin,
    },
  };

  if (qr.backgroundColor.colorType === 'solid') {
    options.backgroundOptions!.color = qr.backgroundColor.color;
  } else if (qr.backgroundColor.colorType === 'gradient') {
    options.backgroundOptions!.gradient = qr!
      .backgroundColor!
      .gradient!
      .toQRCodeStylingGradientOptions();
  }

  if (qr.cornersDotColor.colorType === 'solid') {
    options.cornersDotOptions!.color = qr.cornersDotColor.color;
  } else if (qr.cornersDotColor.colorType === 'gradient') {
    options.cornersDotOptions!.gradient = qr!
      .cornersDotColor!
      .gradient!
      .toQRCodeStylingGradientOptions();
  }

  if (qr.cornersSquareColor.colorType === 'solid') {
    options.cornersSquareOptions!.color = qr.cornersSquareColor.color;
  } else if (qr.cornersSquareColor.colorType === 'gradient') {
    options.cornersSquareOptions!.gradient = qr!
      .cornersSquareColor!
      .gradient!
      .toQRCodeStylingGradientOptions();
  }

  if (qr.dotsColor.colorType === 'solid') {
    options.dotsOptions!.color = qr.dotsColor.color;
  } else if (qr.dotsColor.colorType === 'gradient') {
    options.dotsOptions!.gradient = qr!
      .dotsColor!
      .gradient!
      .toQRCodeStylingGradientOptions();
  }

  return options;
};
