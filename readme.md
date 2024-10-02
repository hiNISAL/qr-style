# qr-style

生成二维码、设置二维码样式。

## 安装

```bash
npm install qr-style
```

## 使用

```ts
import QR from 'qr-style';

const qr = new QR({
  text: '996',
});

const canvas = qr.canvas;

document.body.appendChild(canvas);
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
  // 二维码编码内容
  text: string;
  // 二维码类型，默认 canvas
  type?: 'canvas' | 'svg';
  // 二维码配置，参考 toJSON 方法的返回值
  config?: Partial<QR>;
  // 二维码生成后回调，任意配置被修改都会重新生成二维码
  onGenerated?: OnGenerated;
}
```

示例：

```ts
const qr = new QR({
  text: '996',
  config: {
    // 背景色相关配置
    backgroundColor: {
      color: '#ff0000',
    },
  },
  type: 'canvas',
  onGenerated: () => {
    console.log('onGenerated');
  },
});

const canvas = qr.canvas;

document.body.appendChild(canvas);
```

### 属性

所有属性设置后会直接重新生成二维码。

```ts
const qr = new QR({
  text: 'foo',
});
```

#### text

二维码编码内容

```ts
qr.text = 'bar';
```

#### errorCorrectionLevel

二维码错误纠正等级，可选值：

- L
- M
- Q
- H

```ts
qr.errorCorrectionLevel = 'L';
```

#### typeNumber

码等级，可选值：

- 0-40，0 会自动计算

```ts
qr.typeNumber = 0;
```

#### height

二维码高度

```ts
qr.height = 300;
```

#### width

二维码宽度

```ts
qr.width = 300;
```

#### type

二维码类型，可选值：

- canvas
- svg

```ts
qr.type = 'svg';
```

#### mode

编码类型，可选值：

- Numeric
- Alphanumeric
- Byte
- Kanji

```ts
qr.mode = 'Numeric';
```

#### margin

二维码边距

```ts
qr.margin = 10;
```

#### image 中间图相关

##### image

中间图URL，默认会放在正中间

```ts
qr.image = 'https://example.com/image.png';
```

##### *imageWidth

**无效，后续实现**

图片宽度，暂时无效，qr-code-styling 提供的宽度是0-0.5，后续会扩展成px。

##### imageMargin

图片边距。

```ts
qr.imageMargin = 10;
```

##### *imageStyle

**无效，后续实现**

图片样式，可选值：

- normal
- circle
- rounded
- square

```ts
qr.imageStyle = 'rounded';
```

##### *imageShadow

**无效，后续实现**

图片阴影，可选值：

- none
- l1
- l2
- l3
- l4
- l5
- `CSS box-shadow` 样式

```ts
qr.imageShadow = 'l1';
```

##### *imageShadowColor

**无效，后续实现**

图片阴影颜色

```ts
qr.imageShadowColor = '#ff0000';
```

##### hideBehindImageDots

是否隐藏图片背后的码点

```ts
qr.hideBehindImageDots = true;
```

##### saveImageAsBase64BlobWhenTypeIsSVG

二维码类型为 svg 时，是否保存为 base64 blob，nodejs环境下生效。

```ts
qr.saveImageAsBase64BlobWhenTypeIsSVG = true;
```

##### imageCrossOrigin

图片跨域，默认 `anonymous`，可选值：

- anonymous
- use-credentials

```ts
qr.imageCrossOrigin = 'anonymous';
```

#### backgroundColor

二维码背景色，支持图片、渐变、纯色，参考 [ElementColor](#ElementColor)。

```ts
qr.backgroundColor.color = '#ff0000';
```

#### dotsStyle

码点样式，可选值：

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

码点颜色，参考 [ElementColor](#ElementColor)。

```ts
qr.dotsColor.color = '#ff0000';
```

#### cornersDotStyle

码眼样式，可选值：

- square
- dot

```ts
qr.cornersDotStyle = 'dot';
```

#### cornersDotColor

码眼颜色，参考 [ElementColor](#ElementColor)。

```ts
qr.cornersDotColor.color = '#ff0000';
```

#### cornersSquareStyle

码眼样式，可选值：

- square
- dot
- extra-rounded

```ts
qr.cornersSquareStyle = 'square';
```

#### cornersSquareColor

码眼颜色，参考 [ElementColor](#ElementColor)。

```ts
qr.cornersSquareColor.color = '#ff0000';
```

### 方法

#### getRawData

返回二维码图片的 blob 或者 buffer(nodejs)。

```ts
// 'png' | 'jpeg' | 'webp' | 'svg'
qr.getRawData('png');
```

#### saveAs

保存二维码图片到本地。

```ts
// 'png' | 'jpeg' | 'webp' | 'svg'
qr.saveAs('qr.png');
```

#### merge

合并二维码配置，会覆盖当前二维码配置，并重新生成二维码。

```ts
qr.merge({
  text: 'foo',
});
```

#### toJSON

返回二维码配置，可以用于 `merge` 方法，也可以在实例化时传给 `config` 参数。

```ts
const config =qr.toJSON();
```

#### fromJSON

从二维码配置中恢复二维码实例，和merge的作用一致，只是个别名。

```ts
qr.fromJSON({
  text: 'foo',
});
```

#### waitForSetting

适用于要设置一批配置的场景，过程中会暂停生成。

```ts
// bad ways
qr.text = 'foo';
qr.errorCorrectionLevel = 'L';
qr.typeNumber = 0;
qr.height = 300;
qr.width = 300;
qr.type = 'svg';
qr.mode = 'Numeric';

// good ways
qr.waitForSetting((qr) => {
  qr.text = 'foo';
  qr.errorCorrectionLevel = 'L';
  qr.typeNumber = 0;
  qr.height = 300;
  qr.width = 300;
  qr.type = 'svg';
  qr.mode = 'Numeric';
});
```

也可以用merge代替

```ts
qr.merge({
  text: 'foo',
  errorCorrectionLevel: 'L',
  typeNumber: 0,
  height: 300,
  width: 300,
  type: 'svg',
  mode: 'Numeric',
});
```

### getters

#### canvas

渲染二维码的canvas元素，任意属性变化，该元素的引用不会改变，会在原来的基础上覆盖新的样式。

```ts
const canvas = qr.canvas;
```

#### svg

渲染二维吗的svg元素，任意属性变化，该元素的引用不会改变，会在原来的基础上覆盖新的样式。

```ts
const svg = qr.svg;
```

### 事件

#### onGenerated

二维码生成后回调，任意配置被修改都会重新生成二维码。

```ts
qr.onGenerated = () => {
  console.log('onGenerated');
};

// after setting text, will call onGenerated
qr.text = 'foo';
```

### ElementColor

**图片暂不支持，后续实现**

用于维护颜色信息，支持渐变、纯色、图片。

```ts
// 签名
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

设置颜色

```ts
qr.backgroundColor.color = '#ff0000';
```

设置渐变色

```ts
qr.backgroundColor.colorType = 'gradient';

qr.backgroundColor.gradient.gradientType = 'linear';
qr.backgroundColor.gradient.gradientColor = ['#ff0000', '#00ff00'];
qr.backgroundColor.gradient.gradientDirection = 'toRight';
```

## TODOs

- [ ] 背景支持图片
- [ ] 更多码眼样式
- [ ] 更多码点样式
- [ ] 码点支持图片
- [ ] 支持中间图尺寸
- [ ] 支持中间其他样式（投影、裁剪样式、图片位置等）
- [ ] 支持添加边框
- [ ] 支持更多层渐变色
- [ ] 支持中间文字
- [ ] 支持二维码旋转

## 鸣谢

本项目基于 [qr-code-styling](https://github.com/fedeci/qr-code-styling) 二次开发，后续会扩展 qr-code-styling ，提供更多码点、码眼样式、背景图片等能力。
