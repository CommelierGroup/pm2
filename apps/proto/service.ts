/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "service";

export interface Empty {
}

export interface Answer {
  answer: string;
}

function createBaseEmpty(): Empty {
  return {};
}

export const Empty = {
  encode(_: Empty, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Empty {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEmpty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): Empty {
    return {};
  },

  toJSON(_: Empty): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Empty>, I>>(base?: I): Empty {
    return Empty.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Empty>, I>>(_: I): Empty {
    const message = createBaseEmpty();
    return message;
  },
};

function createBaseAnswer(): Answer {
  return { answer: "" };
}

export const Answer = {
  encode(message: Answer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.answer !== "") {
      writer.uint32(10).string(message.answer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Answer {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnswer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.answer = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Answer {
    return { answer: isSet(object.answer) ? globalThis.String(object.answer) : "" };
  },

  toJSON(message: Answer): unknown {
    const obj: any = {};
    if (message.answer !== "") {
      obj.answer = message.answer;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Answer>, I>>(base?: I): Answer {
    return Answer.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Answer>, I>>(object: I): Answer {
    const message = createBaseAnswer();
    message.answer = object.answer ?? "";
    return message;
  },
};

export interface Service {
  Hello(request: Empty): Promise<Answer>;
}

export const ServiceServiceName = "service.Service";
export class ServiceClientImpl implements Service {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || ServiceServiceName;
    this.rpc = rpc;
    this.Hello = this.Hello.bind(this);
  }
  Hello(request: Empty): Promise<Answer> {
    const data = Empty.encode(request).finish();
    const promise = this.rpc.request(this.service, "Hello", data);
    return promise.then((data) => Answer.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
