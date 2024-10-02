import { includes } from 'lodash';
import type QR from './qr-style';

// -------------------------------------------------------------------------

const PASS_PROPERTIES = ['qrCodeStyling', 'canvas', 'svg', 'onGenerated'];

// -------------------------------------------------------------------------

function createDeepProxy<T extends object>(
  obj: T,
  handler: ProxyHandler<T>
): T {
  const isObject = (val: any): val is object => val && typeof val === 'object';

  const proxyHandler: ProxyHandler<any> = {
    get(target, prop, receiver) {
      const value = Reflect.get(target, prop, receiver);

      if (includes(PASS_PROPERTIES, prop)) {
        return value;
      }

      if (isObject(value)) {
        return createDeepProxy(value, handler);
      }
      return value;
    },
    set(target, prop, value, receiver) {
      // 使用传入的 handler 的 set 方法
      if (handler.set) {
        return handler.set(target, prop, value, receiver);
      }
      return Reflect.set(target, prop, value, receiver);
    },
  };

  return new Proxy(obj, proxyHandler);
}

// -------------------------------------------------------------------------

export const withProxy = (qrInstance: QR) => {
  return createDeepProxy(qrInstance, {
    get(target, prop, receiver) {
      const value = Reflect.get(target, prop, receiver);

      if (includes(PASS_PROPERTIES, prop)) {
        return value;
      }

      if (typeof value === 'object' && value !== null) {
        return createDeepProxy(value, this);
      }
      return value;
    },
    set(target, prop, value, receiver) {
      const ref = Reflect.set(target, prop, value, receiver);

      qrInstance.generate();

      return ref;
    },
  });
};
