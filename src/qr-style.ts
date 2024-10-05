import { assign, cloneDeep } from 'lodash';
import QRCodeStyling from 'qr-code-styling-extra';
import { ElementColor } from './classes/Color';
import { QRImageStyle, QRImageShadow, QRDotStyle, QRCornerDotStyle, QRCornerSquareStyle, QRErrorCorrectionLevel, QRVersion, QROptions, OnGenerated, Extension, QRMode } from './type';
import { withProxy } from './withProxy';
import { propsToQRCodeStylingOptions } from './helpers';
class QR {
  // -------------------------------------------------------------------------
  private pause = false;

  // -------------------------------------------------------------------------
  // -------------------------------------------------------------------------
  // styled definitions
  // -------------------------------------------------------------------------
  // -------------------------------------------------------------------------

  // -------------------------------------------------------------------------
  // image styled
  public image: string = '';

  public imageWidth: number = 0;

  public imageMargin: number = 0;

  public imageStyle: QRImageStyle = 'normal';

  public imageShadow: QRImageShadow = 'none';

  public imageShadowColor: string = 'rgba(0, 0, 0, 0.1)';

  public hideBehindImageDots: boolean = false;

  public saveImageAsBase64BlobWhenTypeIsSVG: boolean = false;

  public imageCrossOrigin: 'anonymous' | 'use-credentials' = 'anonymous';

  // -------------------------------------------------------------------------
  // background color
  public backgroundColor: Partial<ElementColor> = new ElementColor({
    color: '#FFFFFF',
  });

  // -------------------------------------------------------------------------
  // dots
  public dotsStyle: QRDotStyle = 'square';

  public dotsColor: Partial<ElementColor> = new ElementColor();

  // -------------------------------------------------------------------------
  // corners dots
  public cornersDotStyle: QRCornerDotStyle = 'square';

  public cornersDotColor: Partial<ElementColor> = new ElementColor({
    color: '#000000',
  });

  // -------------------------------------------------------------------------
  // corners square
  public cornersSquareStyle: QRCornerSquareStyle = 'square';

  public cornersSquareColor: Partial<ElementColor> = new ElementColor();

  // -------------------------------------------------------------------------
  // -------------------------------------------------------------------------
  // qr code based settings definitions
  // -------------------------------------------------------------------------
  // -------------------------------------------------------------------------

  // -------------------------------------------------------------------------

  public text: string = '';

  public errorCorrectionLevel: QRErrorCorrectionLevel = 'M';

  // 0-40, got 0 will auto calculate
  public version: QRVersion = 0;

  public height: number = 300;

  public width: number = 300;

  public type: 'svg' | 'canvas' = 'canvas';

  public mode: QRMode = 'Numeric';

  public margin: number = 0;

  // -------------------------------------------------------------------------

  public qrCodeStyling: QRCodeStyling = null as any;

  public utf8Enabled = true;

  // -------------------------------------------------------------------------

  public onGenerated: OnGenerated = () => {};

  // -------------------------------------------------------------------------

  public generate() {
    if (this.pause) {
      return;
    }

    const options = propsToQRCodeStylingOptions(this);

    // fix: update method is not working when toggle gradient color to solid color
    // so we need to create new instance
    // -------------------------------------------------------------------------
    // if (this.qrCodeStyling) {
    //   this.qrCodeStyling.update(options);
    // } else {
    //   this.qrCodeStyling = new QRCodeStyling(options);
    // }
    // -------------------------------------------------------------------------

    this.qrCodeStyling = new QRCodeStyling(options);

    const canvas = this.qrCodeStyling._canvas?._canvas;
    const svg = this.qrCodeStyling._svg?._element as SVGElement;

    this.onGenerated({
      qr: this,
      canvas: canvas as HTMLCanvasElement,
      svg: svg as SVGElement,
    });
  }

  // -------------------------------------------------------------------------

  public getRawData(extension: Extension = 'png') {
    return this.qrCodeStyling.getRawData(extension);
  }

  // -------------------------------------------------------------------------

  public saveAs(filename: string, extension: Extension = 'png'): Promise<void> {
    return this.qrCodeStyling.download({
      name: filename,
      extension: extension,
    });
  }

  // -------------------------------------------------------------------------

  public merge(_options: Partial<QR>): QR {
    const options = cloneDeep(_options);

    this.backgroundColor!.merge!(options.backgroundColor || {});
    this.cornersDotColor!.merge!(options.cornersDotColor || {});
    this.cornersSquareColor!.merge!(options.cornersSquareColor || {});
    this.dotsColor!.merge!(options.dotsColor || {});

    delete options.backgroundColor;
    delete options.cornersDotColor;
    delete options.cornersSquareColor;
    delete options.dotsColor;

    assign(this, options);

    return this;
  }

  // -------------------------------------------------------------------------
  public fromJSON(options: Partial<QR>) {
    this.merge(options);
  }

  // -------------------------------------------------------------------------

  public toJSON(): Partial<this> {
    return JSON.parse(JSON.stringify({
      image: this.image,
      imageWidth: this.imageWidth,
      imageMargin: this.imageMargin,
      imageStyle: this.imageStyle,
      imageShadow: this.imageShadow,
      imageShadowColor: this.imageShadowColor,
      hideBehindImageDots: this.hideBehindImageDots,
      backgroundColor: this.backgroundColor,
      dotsStyle: this.dotsStyle,
      dotsColor: this.dotsColor,
      cornersDotStyle: this.cornersDotStyle,
      cornersDotColor: this.cornersDotColor,
      cornersSquareStyle: this.cornersSquareStyle,
      cornersSquareColor: this.cornersSquareColor,
      text: this.text,
      errorCorrectionLevel: this.errorCorrectionLevel,
      version: this.version,
      height: this.height,
      width: this.width,
      type: this.type,
      margin: this.margin,
      saveImageAsBase64BlobWhenTypeIsSVG: this.saveImageAsBase64BlobWhenTypeIsSVG,
      imageCrossOrigin: this.imageCrossOrigin,
      mode: this.mode,
    }));
  }

  // -------------------------------------------------------------------------
  public waitForSetting(callback: (qr: QR) => void) {
    this.pause = true;
    callback(this);
    this.pause = false;

    this.generate();
  }

  // -------------------------------------------------------------------------

  get canvas(): HTMLCanvasElement {
    return this.qrCodeStyling._canvas?._canvas as HTMLCanvasElement;
  }

  get svg(): SVGElement {
    return this.qrCodeStyling._svg?._element as SVGElement;
  }

  // -------------------------------------------------------------------------
  constructor(options: QROptions) {
    this.text = options.text || '';

    if (options.utf8Enabled) {
      this.utf8Enabled = options.utf8Enabled;
    }

    if (options.qrOptions) {
      this.merge(options.qrOptions);
    }

    if (options.onGenerated) {
      this.onGenerated = options.onGenerated;
    }

    if (options.type) {
      this.type = options.type;
    }

    this.generate();

    return withProxy(this);
  }
}

export default QR;
