# qr-style

[🇨🇳 中文](https://github.com/hiNISAL/qr-style) | English

A QR code styling library.

## Install

```bash
npm install qr-style
```

## Usage

```ts
import QR from 'qr-style';

const qr = new QR({
  text: '996',
});

document.body.appendChild(qr.canvas);

qr.text = 'hi~';
document.body.appendChild(qr.canvas);

// -------------------------------------------------------------------------

const qr = new QR({
  text: 'sleep',
  onGenerated({ canvas }) {
    document.body.appendChild(canvas);
  },
});

qr.text = 'dinner';
qr.text = 'launch';
```

## APIs

### constructor

```ts
export type OnGenerated = (options: {
  qr: QR;
  canvas: HTMLCanvasElement;
  svg: SVGElement;
}) => void;

export interface QROptions {
  // QR code content
  text: string;
  // QR code type, default canvas
  type?: 'canvas' | 'svg';
  // QR code configuration, reference to the return value of the toJSON method
  config?: Partial<QR>;
  // QR code generated callback, any configuration changes will trigger re-generation
  onGenerated?: OnGenerated;
}
```

example:

```ts
const qr = new QR({
  text: '996',
  config: {
    // Background color related configuration
    backgroundColor: {
      color: '#ff0000',
    },
  },
  type: 'canvas',
  onGenerated: ({ canvas }) => {
    console.log('onGenerated');
    document.body.appendChild(canvas);
  },
});
```

### Properties

All properties set after will update QR code immediately.

```ts
const qr = new QR({
  text: 'foo',
});
```

#### text

The date will be encoded to the QR code

```ts
qr.text = 'bar';
```

#### errorCorrectionLevel

QR code error correction level, optional values:

- L
- M
- Q
- H

```ts
qr.errorCorrectionLevel = 'L';
```

#### version

QR code version, optional values:

- 0-40, 0 will be automatically calculated

```ts
qr.version = 0;
```

#### height

QR code image height

```ts
qr.height = 300;
```

#### width

QR code image width

```ts
qr.width = 300;
```

#### type

Generate element type, optional values:

- canvas
- svg

```ts
qr.type = 'svg';
```

#### mode

QR code encoding mode, optional values:

- Numeric
- Alphanumeric
- Byte
- Kanji

```ts
qr.mode = 'Numeric';
```

#### margin

QR code margin

```ts
qr.margin = 10;
```

#### image options

##### image

QR code image URL, will be placed in the center of the QR code by default

```ts
qr.image = 'https://example.com/image.png';
```

##### imageWidth

**Invalid, will be implemented later**

Image width, temporarily invalid, qr-code-styling provides 0-0.5, will be expanded to px later.

```ts
qr.imageWidth = 0.5;
```

##### imageMargin

Image margin

```ts
qr.imageMargin = 10;
```

##### imageStyle

**Invalid, will be implemented later**

Image style, optional values:

- normal
- circle
- rounded
- square

```ts
qr.imageStyle = 'circle';
```

##### imageShadow

**Invalid, will be implemented later**

Image shadow, optional values:

- none
- l1
- l2
- l3
- l4
- l5
- `CSS box-shadow` style

```ts
qr.imageShadow = 'l1';
```

##### imageShadowColor

**Invalid, will be implemented later**

Image shadow color

```ts
qr.imageShadowColor = '#ff0000';
```

##### hideBehindImageDots

Whether to hide the QR code points behind the image

```ts
qr.hideBehindImageDots = true;
```

##### saveImageAsBase64BlobWhenTypeIsSVG

Whether to save as base64 blob when type is svg, only works in nodejs environment.

```ts
qr.saveImageAsBase64BlobWhenTypeIsSVG = true;
```

##### imageCrossOrigin

Image cross-origin, default `anonymous`, optional values:

- anonymous
- use-credentials

```ts
qr.imageCrossOrigin = 'anonymous';
```

#### backgroundColor

QR code background color, support image, gradient, solid color, reference [ElementColor](#ElementColor).

```ts
qr.backgroundColor.color = '#ff0000';
```

#### dotsStyle

QR code dot style, optional values:

- square
- dots
- classy
- classy-rounded
- square
- extra-rounded

```ts
qr.dotsStyle = 'classy';
```

#### dotsColor

QR code dot color, reference [ElementColor](#ElementColor).

```ts
qr.dotsColor.color = '#ff0000';
```

#### cornersDotStyle

QR code corner dot style, optional values:

- square
- dot

```ts
qr.cornersDotStyle = 'dot';
```

#### cornersDotColor

QR code corner dot color, reference [ElementColor](#ElementColor).

```ts
qr.cornersDotColor.color = '#ff0000';
```

#### cornersSquareStyle

QR code corner square style, optional values:

- square
- dot
- extra-rounded

```ts
qr.cornersSquareStyle = 'square';
```

#### cornersSquareColor

QR code corner square color, reference [ElementColor](#ElementColor).

```ts
qr.cornersSquareColor.color = '#ff0000';
```

### Methods

#### getRawData

Return QR code image blob or buffer(nodejs).

```ts
// 'png' | 'jpeg' | 'webp' | 'svg'
qr.getRawData('png');
```

#### saveAs

Save QR code image to local.

```ts
// 'png' | 'jpeg' | 'webp' | 'svg'
qr.saveAs('qr');
qr.saveAs('qr', 'jpeg');
```

#### merge

Merge QR code configuration, will cover current QR code configuration and trigger re-generation.

```ts
qr.merge({
  text: 'foo',
});
```

#### toJSON

Return QR code configuration, can be used for `merge` method, also can be passed to `config` parameter when instantiating.

```ts
const config =qr.toJSON();
```

#### fromJSON

From QR code configuration to QR instance, same as `merge`.

```ts
qr.fromJSON({
  text: 'foo',
});
```

#### waitForSetting

will pause QR code generation process, and generate after setting.

recommend use this method when you want to set multiple properties.

```ts
// bad ways
qr.text = 'foo';
qr.errorCorrectionLevel = 'L';
qr.version = 0;
qr.height = 300;
qr.width = 300;
qr.type = 'svg';
qr.mode = 'Numeric';

// good ways
qr.waitForSetting((qr) => {
  qr.text = 'foo';
  qr.errorCorrectionLevel = 'L';
  qr.version = 0;
  qr.height = 300;
  qr.width = 300;
  qr.type = 'svg';
  qr.mode = 'Numeric';
});
```

Also can instead of `merge` method.

```ts
qr.merge({
  text: 'foo',
});
```

### getters

#### canvas

Render QR code canvas element.

```ts
const canvas = qr.canvas;
```

#### svg

Render QR code svg element.

```ts
const svg = qr.svg;
```

### Events

#### onGenerated

QR code generated callback, any configuration changes will trigger `onGenerated`.

```ts
qr.onGenerated = () => {
  console.log('onGenerated');
};

// after setting text, will call onGenerated
qr.text = 'foo';
```

### ElementColor

**Image is not supported yet, will be implemented later**

Used to maintain color information, support gradient, solid color, image.

```ts
interface ElementColor {
  colorType: 'solid' | 'gradient' | 'image';
  color: string;
  gradient: Gradient;
  image: string;
  imageOpacity: number;
}

interface Gradient {
  // from to
  gradientColor: [string, string];
  gradientDirection: 'toRight' | 'toLeft' | 'toTop' | 'toBottom' | 'toTopRight' | 'toTopLeft' | 'toBottomRight' | 'toBottomLeft';
  gradientType: 'linear' | 'radial';
}
```

Set color

```ts
qr.backgroundColor.color = '#ff0000';
```

Set gradient color

```ts
qr.backgroundColor.colorType = 'gradient';

qr.backgroundColor.gradient.gradientColor = ['#ff0000', '#00ff00'];
qr.backgroundColor.gradient.gradientDirection = 'toRight';
```

## TODOs

- [ ] Background support image
- [ ] More eye styles
- [ ] More dot styles
- [ ] Dot support image
- [ ] Support middle image size
- [ ] Support middle other styles (projection, clipping style, image position, etc.)
- [ ] Support adding border
- [ ] Support more multi-gradient layers
- [ ] Support middle text
- [ ] Support QR code rotation

## Thanks

This project is based on [qr-code-styling](https://github.com/kozakdenys/qr-code-styling).
