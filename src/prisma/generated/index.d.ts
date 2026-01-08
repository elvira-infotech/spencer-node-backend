
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Folder
 * 
 */
export type Folder = $Result.DefaultSelection<Prisma.$FolderPayload>
/**
 * Model Image
 * 
 */
export type Image = $Result.DefaultSelection<Prisma.$ImagePayload>
/**
 * Model logs
 * 
 */
export type logs = $Result.DefaultSelection<Prisma.$logsPayload>
/**
 * Model history
 * 
 */
export type history = $Result.DefaultSelection<Prisma.$historyPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TwilioMessageStatus: {
  SENT: 'SENT',
  UNDELIVERED: 'UNDELIVERED',
  DELIVERED: 'DELIVERED',
  FAILED: 'FAILED'
};

export type TwilioMessageStatus = (typeof TwilioMessageStatus)[keyof typeof TwilioMessageStatus]

}

export type TwilioMessageStatus = $Enums.TwilioMessageStatus

export const TwilioMessageStatus: typeof $Enums.TwilioMessageStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Folders
 * const folders = await prisma.folder.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Folders
   * const folders = await prisma.folder.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.folder`: Exposes CRUD operations for the **Folder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Folders
    * const folders = await prisma.folder.findMany()
    * ```
    */
  get folder(): Prisma.FolderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.image`: Exposes CRUD operations for the **Image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.image.findMany()
    * ```
    */
  get image(): Prisma.ImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.logs`: Exposes CRUD operations for the **logs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Logs
    * const logs = await prisma.logs.findMany()
    * ```
    */
  get logs(): Prisma.logsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.history`: Exposes CRUD operations for the **history** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Histories
    * const histories = await prisma.history.findMany()
    * ```
    */
  get history(): Prisma.historyDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Folder: 'Folder',
    Image: 'Image',
    logs: 'logs',
    history: 'history'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "folder" | "image" | "logs" | "history"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Folder: {
        payload: Prisma.$FolderPayload<ExtArgs>
        fields: Prisma.FolderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FolderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FolderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>
          }
          findFirst: {
            args: Prisma.FolderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FolderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>
          }
          findMany: {
            args: Prisma.FolderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>[]
          }
          create: {
            args: Prisma.FolderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>
          }
          createMany: {
            args: Prisma.FolderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FolderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>[]
          }
          delete: {
            args: Prisma.FolderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>
          }
          update: {
            args: Prisma.FolderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>
          }
          deleteMany: {
            args: Prisma.FolderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FolderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FolderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>[]
          }
          upsert: {
            args: Prisma.FolderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>
          }
          aggregate: {
            args: Prisma.FolderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFolder>
          }
          groupBy: {
            args: Prisma.FolderGroupByArgs<ExtArgs>
            result: $Utils.Optional<FolderGroupByOutputType>[]
          }
          count: {
            args: Prisma.FolderCountArgs<ExtArgs>
            result: $Utils.Optional<FolderCountAggregateOutputType> | number
          }
        }
      }
      Image: {
        payload: Prisma.$ImagePayload<ExtArgs>
        fields: Prisma.ImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findFirst: {
            args: Prisma.ImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findMany: {
            args: Prisma.ImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          create: {
            args: Prisma.ImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          createMany: {
            args: Prisma.ImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          delete: {
            args: Prisma.ImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          update: {
            args: Prisma.ImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          deleteMany: {
            args: Prisma.ImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          upsert: {
            args: Prisma.ImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          aggregate: {
            args: Prisma.ImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImage>
          }
          groupBy: {
            args: Prisma.ImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImageCountArgs<ExtArgs>
            result: $Utils.Optional<ImageCountAggregateOutputType> | number
          }
        }
      }
      logs: {
        payload: Prisma.$logsPayload<ExtArgs>
        fields: Prisma.logsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.logsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.logsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload>
          }
          findFirst: {
            args: Prisma.logsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.logsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload>
          }
          findMany: {
            args: Prisma.logsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload>[]
          }
          create: {
            args: Prisma.logsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload>
          }
          createMany: {
            args: Prisma.logsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.logsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload>[]
          }
          delete: {
            args: Prisma.logsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload>
          }
          update: {
            args: Prisma.logsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload>
          }
          deleteMany: {
            args: Prisma.logsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.logsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.logsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload>[]
          }
          upsert: {
            args: Prisma.logsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload>
          }
          aggregate: {
            args: Prisma.LogsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLogs>
          }
          groupBy: {
            args: Prisma.logsGroupByArgs<ExtArgs>
            result: $Utils.Optional<LogsGroupByOutputType>[]
          }
          count: {
            args: Prisma.logsCountArgs<ExtArgs>
            result: $Utils.Optional<LogsCountAggregateOutputType> | number
          }
        }
      }
      history: {
        payload: Prisma.$historyPayload<ExtArgs>
        fields: Prisma.historyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.historyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.historyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historyPayload>
          }
          findFirst: {
            args: Prisma.historyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.historyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historyPayload>
          }
          findMany: {
            args: Prisma.historyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historyPayload>[]
          }
          create: {
            args: Prisma.historyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historyPayload>
          }
          createMany: {
            args: Prisma.historyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.historyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historyPayload>[]
          }
          delete: {
            args: Prisma.historyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historyPayload>
          }
          update: {
            args: Prisma.historyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historyPayload>
          }
          deleteMany: {
            args: Prisma.historyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.historyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.historyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historyPayload>[]
          }
          upsert: {
            args: Prisma.historyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historyPayload>
          }
          aggregate: {
            args: Prisma.HistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistory>
          }
          groupBy: {
            args: Prisma.historyGroupByArgs<ExtArgs>
            result: $Utils.Optional<HistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.historyCountArgs<ExtArgs>
            result: $Utils.Optional<HistoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    folder?: FolderOmit
    image?: ImageOmit
    logs?: logsOmit
    history?: historyOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type FolderCountOutputType
   */

  export type FolderCountOutputType = {
    images: number
  }

  export type FolderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | FolderCountOutputTypeCountImagesArgs
  }

  // Custom InputTypes
  /**
   * FolderCountOutputType without action
   */
  export type FolderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FolderCountOutputType
     */
    select?: FolderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FolderCountOutputType without action
   */
  export type FolderCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
  }


  /**
   * Count Type ImageCountOutputType
   */

  export type ImageCountOutputType = {
    histories: number
    logs: number
  }

  export type ImageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    histories?: boolean | ImageCountOutputTypeCountHistoriesArgs
    logs?: boolean | ImageCountOutputTypeCountLogsArgs
  }

  // Custom InputTypes
  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageCountOutputType
     */
    select?: ImageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeCountHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: historyWhereInput
  }

  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: logsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Folder
   */

  export type AggregateFolder = {
    _count: FolderCountAggregateOutputType | null
    _avg: FolderAvgAggregateOutputType | null
    _sum: FolderSumAggregateOutputType | null
    _min: FolderMinAggregateOutputType | null
    _max: FolderMaxAggregateOutputType | null
  }

  export type FolderAvgAggregateOutputType = {
    id: number | null
  }

  export type FolderSumAggregateOutputType = {
    id: number | null
  }

  export type FolderMinAggregateOutputType = {
    id: number | null
    name: string | null
    dropboxPath: string | null
  }

  export type FolderMaxAggregateOutputType = {
    id: number | null
    name: string | null
    dropboxPath: string | null
  }

  export type FolderCountAggregateOutputType = {
    id: number
    name: number
    dropboxPath: number
    _all: number
  }


  export type FolderAvgAggregateInputType = {
    id?: true
  }

  export type FolderSumAggregateInputType = {
    id?: true
  }

  export type FolderMinAggregateInputType = {
    id?: true
    name?: true
    dropboxPath?: true
  }

  export type FolderMaxAggregateInputType = {
    id?: true
    name?: true
    dropboxPath?: true
  }

  export type FolderCountAggregateInputType = {
    id?: true
    name?: true
    dropboxPath?: true
    _all?: true
  }

  export type FolderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Folder to aggregate.
     */
    where?: FolderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Folders to fetch.
     */
    orderBy?: FolderOrderByWithRelationInput | FolderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FolderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Folders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Folders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Folders
    **/
    _count?: true | FolderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FolderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FolderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FolderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FolderMaxAggregateInputType
  }

  export type GetFolderAggregateType<T extends FolderAggregateArgs> = {
        [P in keyof T & keyof AggregateFolder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFolder[P]>
      : GetScalarType<T[P], AggregateFolder[P]>
  }




  export type FolderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FolderWhereInput
    orderBy?: FolderOrderByWithAggregationInput | FolderOrderByWithAggregationInput[]
    by: FolderScalarFieldEnum[] | FolderScalarFieldEnum
    having?: FolderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FolderCountAggregateInputType | true
    _avg?: FolderAvgAggregateInputType
    _sum?: FolderSumAggregateInputType
    _min?: FolderMinAggregateInputType
    _max?: FolderMaxAggregateInputType
  }

  export type FolderGroupByOutputType = {
    id: number
    name: string
    dropboxPath: string
    _count: FolderCountAggregateOutputType | null
    _avg: FolderAvgAggregateOutputType | null
    _sum: FolderSumAggregateOutputType | null
    _min: FolderMinAggregateOutputType | null
    _max: FolderMaxAggregateOutputType | null
  }

  type GetFolderGroupByPayload<T extends FolderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FolderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FolderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FolderGroupByOutputType[P]>
            : GetScalarType<T[P], FolderGroupByOutputType[P]>
        }
      >
    >


  export type FolderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    dropboxPath?: boolean
    images?: boolean | Folder$imagesArgs<ExtArgs>
    _count?: boolean | FolderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["folder"]>

  export type FolderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    dropboxPath?: boolean
  }, ExtArgs["result"]["folder"]>

  export type FolderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    dropboxPath?: boolean
  }, ExtArgs["result"]["folder"]>

  export type FolderSelectScalar = {
    id?: boolean
    name?: boolean
    dropboxPath?: boolean
  }

  export type FolderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "dropboxPath", ExtArgs["result"]["folder"]>
  export type FolderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | Folder$imagesArgs<ExtArgs>
    _count?: boolean | FolderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FolderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FolderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FolderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Folder"
    objects: {
      images: Prisma.$ImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      dropboxPath: string
    }, ExtArgs["result"]["folder"]>
    composites: {}
  }

  type FolderGetPayload<S extends boolean | null | undefined | FolderDefaultArgs> = $Result.GetResult<Prisma.$FolderPayload, S>

  type FolderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FolderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FolderCountAggregateInputType | true
    }

  export interface FolderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Folder'], meta: { name: 'Folder' } }
    /**
     * Find zero or one Folder that matches the filter.
     * @param {FolderFindUniqueArgs} args - Arguments to find a Folder
     * @example
     * // Get one Folder
     * const folder = await prisma.folder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FolderFindUniqueArgs>(args: SelectSubset<T, FolderFindUniqueArgs<ExtArgs>>): Prisma__FolderClient<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Folder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FolderFindUniqueOrThrowArgs} args - Arguments to find a Folder
     * @example
     * // Get one Folder
     * const folder = await prisma.folder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FolderFindUniqueOrThrowArgs>(args: SelectSubset<T, FolderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FolderClient<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Folder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolderFindFirstArgs} args - Arguments to find a Folder
     * @example
     * // Get one Folder
     * const folder = await prisma.folder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FolderFindFirstArgs>(args?: SelectSubset<T, FolderFindFirstArgs<ExtArgs>>): Prisma__FolderClient<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Folder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolderFindFirstOrThrowArgs} args - Arguments to find a Folder
     * @example
     * // Get one Folder
     * const folder = await prisma.folder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FolderFindFirstOrThrowArgs>(args?: SelectSubset<T, FolderFindFirstOrThrowArgs<ExtArgs>>): Prisma__FolderClient<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Folders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Folders
     * const folders = await prisma.folder.findMany()
     * 
     * // Get first 10 Folders
     * const folders = await prisma.folder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const folderWithIdOnly = await prisma.folder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FolderFindManyArgs>(args?: SelectSubset<T, FolderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Folder.
     * @param {FolderCreateArgs} args - Arguments to create a Folder.
     * @example
     * // Create one Folder
     * const Folder = await prisma.folder.create({
     *   data: {
     *     // ... data to create a Folder
     *   }
     * })
     * 
     */
    create<T extends FolderCreateArgs>(args: SelectSubset<T, FolderCreateArgs<ExtArgs>>): Prisma__FolderClient<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Folders.
     * @param {FolderCreateManyArgs} args - Arguments to create many Folders.
     * @example
     * // Create many Folders
     * const folder = await prisma.folder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FolderCreateManyArgs>(args?: SelectSubset<T, FolderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Folders and returns the data saved in the database.
     * @param {FolderCreateManyAndReturnArgs} args - Arguments to create many Folders.
     * @example
     * // Create many Folders
     * const folder = await prisma.folder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Folders and only return the `id`
     * const folderWithIdOnly = await prisma.folder.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FolderCreateManyAndReturnArgs>(args?: SelectSubset<T, FolderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Folder.
     * @param {FolderDeleteArgs} args - Arguments to delete one Folder.
     * @example
     * // Delete one Folder
     * const Folder = await prisma.folder.delete({
     *   where: {
     *     // ... filter to delete one Folder
     *   }
     * })
     * 
     */
    delete<T extends FolderDeleteArgs>(args: SelectSubset<T, FolderDeleteArgs<ExtArgs>>): Prisma__FolderClient<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Folder.
     * @param {FolderUpdateArgs} args - Arguments to update one Folder.
     * @example
     * // Update one Folder
     * const folder = await prisma.folder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FolderUpdateArgs>(args: SelectSubset<T, FolderUpdateArgs<ExtArgs>>): Prisma__FolderClient<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Folders.
     * @param {FolderDeleteManyArgs} args - Arguments to filter Folders to delete.
     * @example
     * // Delete a few Folders
     * const { count } = await prisma.folder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FolderDeleteManyArgs>(args?: SelectSubset<T, FolderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Folders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Folders
     * const folder = await prisma.folder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FolderUpdateManyArgs>(args: SelectSubset<T, FolderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Folders and returns the data updated in the database.
     * @param {FolderUpdateManyAndReturnArgs} args - Arguments to update many Folders.
     * @example
     * // Update many Folders
     * const folder = await prisma.folder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Folders and only return the `id`
     * const folderWithIdOnly = await prisma.folder.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FolderUpdateManyAndReturnArgs>(args: SelectSubset<T, FolderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Folder.
     * @param {FolderUpsertArgs} args - Arguments to update or create a Folder.
     * @example
     * // Update or create a Folder
     * const folder = await prisma.folder.upsert({
     *   create: {
     *     // ... data to create a Folder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Folder we want to update
     *   }
     * })
     */
    upsert<T extends FolderUpsertArgs>(args: SelectSubset<T, FolderUpsertArgs<ExtArgs>>): Prisma__FolderClient<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Folders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolderCountArgs} args - Arguments to filter Folders to count.
     * @example
     * // Count the number of Folders
     * const count = await prisma.folder.count({
     *   where: {
     *     // ... the filter for the Folders we want to count
     *   }
     * })
    **/
    count<T extends FolderCountArgs>(
      args?: Subset<T, FolderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FolderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Folder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FolderAggregateArgs>(args: Subset<T, FolderAggregateArgs>): Prisma.PrismaPromise<GetFolderAggregateType<T>>

    /**
     * Group by Folder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FolderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FolderGroupByArgs['orderBy'] }
        : { orderBy?: FolderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FolderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFolderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Folder model
   */
  readonly fields: FolderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Folder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FolderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    images<T extends Folder$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Folder$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Folder model
   */
  interface FolderFieldRefs {
    readonly id: FieldRef<"Folder", 'Int'>
    readonly name: FieldRef<"Folder", 'String'>
    readonly dropboxPath: FieldRef<"Folder", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Folder findUnique
   */
  export type FolderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    /**
     * Filter, which Folder to fetch.
     */
    where: FolderWhereUniqueInput
  }

  /**
   * Folder findUniqueOrThrow
   */
  export type FolderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    /**
     * Filter, which Folder to fetch.
     */
    where: FolderWhereUniqueInput
  }

  /**
   * Folder findFirst
   */
  export type FolderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    /**
     * Filter, which Folder to fetch.
     */
    where?: FolderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Folders to fetch.
     */
    orderBy?: FolderOrderByWithRelationInput | FolderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Folders.
     */
    cursor?: FolderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Folders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Folders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Folders.
     */
    distinct?: FolderScalarFieldEnum | FolderScalarFieldEnum[]
  }

  /**
   * Folder findFirstOrThrow
   */
  export type FolderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    /**
     * Filter, which Folder to fetch.
     */
    where?: FolderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Folders to fetch.
     */
    orderBy?: FolderOrderByWithRelationInput | FolderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Folders.
     */
    cursor?: FolderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Folders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Folders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Folders.
     */
    distinct?: FolderScalarFieldEnum | FolderScalarFieldEnum[]
  }

  /**
   * Folder findMany
   */
  export type FolderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    /**
     * Filter, which Folders to fetch.
     */
    where?: FolderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Folders to fetch.
     */
    orderBy?: FolderOrderByWithRelationInput | FolderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Folders.
     */
    cursor?: FolderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Folders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Folders.
     */
    skip?: number
    distinct?: FolderScalarFieldEnum | FolderScalarFieldEnum[]
  }

  /**
   * Folder create
   */
  export type FolderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    /**
     * The data needed to create a Folder.
     */
    data: XOR<FolderCreateInput, FolderUncheckedCreateInput>
  }

  /**
   * Folder createMany
   */
  export type FolderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Folders.
     */
    data: FolderCreateManyInput | FolderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Folder createManyAndReturn
   */
  export type FolderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * The data used to create many Folders.
     */
    data: FolderCreateManyInput | FolderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Folder update
   */
  export type FolderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    /**
     * The data needed to update a Folder.
     */
    data: XOR<FolderUpdateInput, FolderUncheckedUpdateInput>
    /**
     * Choose, which Folder to update.
     */
    where: FolderWhereUniqueInput
  }

  /**
   * Folder updateMany
   */
  export type FolderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Folders.
     */
    data: XOR<FolderUpdateManyMutationInput, FolderUncheckedUpdateManyInput>
    /**
     * Filter which Folders to update
     */
    where?: FolderWhereInput
    /**
     * Limit how many Folders to update.
     */
    limit?: number
  }

  /**
   * Folder updateManyAndReturn
   */
  export type FolderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * The data used to update Folders.
     */
    data: XOR<FolderUpdateManyMutationInput, FolderUncheckedUpdateManyInput>
    /**
     * Filter which Folders to update
     */
    where?: FolderWhereInput
    /**
     * Limit how many Folders to update.
     */
    limit?: number
  }

  /**
   * Folder upsert
   */
  export type FolderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    /**
     * The filter to search for the Folder to update in case it exists.
     */
    where: FolderWhereUniqueInput
    /**
     * In case the Folder found by the `where` argument doesn't exist, create a new Folder with this data.
     */
    create: XOR<FolderCreateInput, FolderUncheckedCreateInput>
    /**
     * In case the Folder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FolderUpdateInput, FolderUncheckedUpdateInput>
  }

  /**
   * Folder delete
   */
  export type FolderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    /**
     * Filter which Folder to delete.
     */
    where: FolderWhereUniqueInput
  }

  /**
   * Folder deleteMany
   */
  export type FolderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Folders to delete
     */
    where?: FolderWhereInput
    /**
     * Limit how many Folders to delete.
     */
    limit?: number
  }

  /**
   * Folder.images
   */
  export type Folder$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    cursor?: ImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Folder without action
   */
  export type FolderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
  }


  /**
   * Model Image
   */

  export type AggregateImage = {
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  export type ImageAvgAggregateOutputType = {
    id: number | null
    folderId: number | null
  }

  export type ImageSumAggregateOutputType = {
    id: number | null
    folderId: number | null
  }

  export type ImageMinAggregateOutputType = {
    id: number | null
    dropboxPath: string | null
    url: string | null
    wasShown: boolean | null
    isTodaysPick: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    folderId: number | null
  }

  export type ImageMaxAggregateOutputType = {
    id: number | null
    dropboxPath: string | null
    url: string | null
    wasShown: boolean | null
    isTodaysPick: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    folderId: number | null
  }

  export type ImageCountAggregateOutputType = {
    id: number
    dropboxPath: number
    url: number
    wasShown: number
    isTodaysPick: number
    createdAt: number
    updatedAt: number
    folderId: number
    _all: number
  }


  export type ImageAvgAggregateInputType = {
    id?: true
    folderId?: true
  }

  export type ImageSumAggregateInputType = {
    id?: true
    folderId?: true
  }

  export type ImageMinAggregateInputType = {
    id?: true
    dropboxPath?: true
    url?: true
    wasShown?: true
    isTodaysPick?: true
    createdAt?: true
    updatedAt?: true
    folderId?: true
  }

  export type ImageMaxAggregateInputType = {
    id?: true
    dropboxPath?: true
    url?: true
    wasShown?: true
    isTodaysPick?: true
    createdAt?: true
    updatedAt?: true
    folderId?: true
  }

  export type ImageCountAggregateInputType = {
    id?: true
    dropboxPath?: true
    url?: true
    wasShown?: true
    isTodaysPick?: true
    createdAt?: true
    updatedAt?: true
    folderId?: true
    _all?: true
  }

  export type ImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Image to aggregate.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Images
    **/
    _count?: true | ImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageMaxAggregateInputType
  }

  export type GetImageAggregateType<T extends ImageAggregateArgs> = {
        [P in keyof T & keyof AggregateImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImage[P]>
      : GetScalarType<T[P], AggregateImage[P]>
  }




  export type ImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithAggregationInput | ImageOrderByWithAggregationInput[]
    by: ImageScalarFieldEnum[] | ImageScalarFieldEnum
    having?: ImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageCountAggregateInputType | true
    _avg?: ImageAvgAggregateInputType
    _sum?: ImageSumAggregateInputType
    _min?: ImageMinAggregateInputType
    _max?: ImageMaxAggregateInputType
  }

  export type ImageGroupByOutputType = {
    id: number
    dropboxPath: string
    url: string
    wasShown: boolean
    isTodaysPick: boolean
    createdAt: Date
    updatedAt: Date
    folderId: number
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  type GetImageGroupByPayload<T extends ImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageGroupByOutputType[P]>
            : GetScalarType<T[P], ImageGroupByOutputType[P]>
        }
      >
    >


  export type ImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dropboxPath?: boolean
    url?: boolean
    wasShown?: boolean
    isTodaysPick?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    folderId?: boolean
    folder?: boolean | FolderDefaultArgs<ExtArgs>
    histories?: boolean | Image$historiesArgs<ExtArgs>
    logs?: boolean | Image$logsArgs<ExtArgs>
    _count?: boolean | ImageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dropboxPath?: boolean
    url?: boolean
    wasShown?: boolean
    isTodaysPick?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    folderId?: boolean
    folder?: boolean | FolderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dropboxPath?: boolean
    url?: boolean
    wasShown?: boolean
    isTodaysPick?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    folderId?: boolean
    folder?: boolean | FolderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectScalar = {
    id?: boolean
    dropboxPath?: boolean
    url?: boolean
    wasShown?: boolean
    isTodaysPick?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    folderId?: boolean
  }

  export type ImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dropboxPath" | "url" | "wasShown" | "isTodaysPick" | "createdAt" | "updatedAt" | "folderId", ExtArgs["result"]["image"]>
  export type ImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    folder?: boolean | FolderDefaultArgs<ExtArgs>
    histories?: boolean | Image$historiesArgs<ExtArgs>
    logs?: boolean | Image$logsArgs<ExtArgs>
    _count?: boolean | ImageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    folder?: boolean | FolderDefaultArgs<ExtArgs>
  }
  export type ImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    folder?: boolean | FolderDefaultArgs<ExtArgs>
  }

  export type $ImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Image"
    objects: {
      folder: Prisma.$FolderPayload<ExtArgs>
      histories: Prisma.$historyPayload<ExtArgs>[]
      logs: Prisma.$logsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      dropboxPath: string
      url: string
      wasShown: boolean
      isTodaysPick: boolean
      createdAt: Date
      updatedAt: Date
      folderId: number
    }, ExtArgs["result"]["image"]>
    composites: {}
  }

  type ImageGetPayload<S extends boolean | null | undefined | ImageDefaultArgs> = $Result.GetResult<Prisma.$ImagePayload, S>

  type ImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImageCountAggregateInputType | true
    }

  export interface ImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Image'], meta: { name: 'Image' } }
    /**
     * Find zero or one Image that matches the filter.
     * @param {ImageFindUniqueArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImageFindUniqueArgs>(args: SelectSubset<T, ImageFindUniqueArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Image that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImageFindUniqueOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImageFindFirstArgs>(args?: SelectSubset<T, ImageFindFirstArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.image.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.image.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageWithIdOnly = await prisma.image.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImageFindManyArgs>(args?: SelectSubset<T, ImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Image.
     * @param {ImageCreateArgs} args - Arguments to create a Image.
     * @example
     * // Create one Image
     * const Image = await prisma.image.create({
     *   data: {
     *     // ... data to create a Image
     *   }
     * })
     * 
     */
    create<T extends ImageCreateArgs>(args: SelectSubset<T, ImageCreateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Images.
     * @param {ImageCreateManyArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImageCreateManyArgs>(args?: SelectSubset<T, ImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Images and returns the data saved in the database.
     * @param {ImageCreateManyAndReturnArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImageCreateManyAndReturnArgs>(args?: SelectSubset<T, ImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Image.
     * @param {ImageDeleteArgs} args - Arguments to delete one Image.
     * @example
     * // Delete one Image
     * const Image = await prisma.image.delete({
     *   where: {
     *     // ... filter to delete one Image
     *   }
     * })
     * 
     */
    delete<T extends ImageDeleteArgs>(args: SelectSubset<T, ImageDeleteArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Image.
     * @param {ImageUpdateArgs} args - Arguments to update one Image.
     * @example
     * // Update one Image
     * const image = await prisma.image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImageUpdateArgs>(args: SelectSubset<T, ImageUpdateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Images.
     * @param {ImageDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImageDeleteManyArgs>(args?: SelectSubset<T, ImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImageUpdateManyArgs>(args: SelectSubset<T, ImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images and returns the data updated in the database.
     * @param {ImageUpdateManyAndReturnArgs} args - Arguments to update many Images.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ImageUpdateManyAndReturnArgs>(args: SelectSubset<T, ImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Image.
     * @param {ImageUpsertArgs} args - Arguments to update or create a Image.
     * @example
     * // Update or create a Image
     * const image = await prisma.image.upsert({
     *   create: {
     *     // ... data to create a Image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Image we want to update
     *   }
     * })
     */
    upsert<T extends ImageUpsertArgs>(args: SelectSubset<T, ImageUpsertArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.image.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends ImageCountArgs>(
      args?: Subset<T, ImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImageAggregateArgs>(args: Subset<T, ImageAggregateArgs>): Prisma.PrismaPromise<GetImageAggregateType<T>>

    /**
     * Group by Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageGroupByArgs['orderBy'] }
        : { orderBy?: ImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Image model
   */
  readonly fields: ImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    folder<T extends FolderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FolderDefaultArgs<ExtArgs>>): Prisma__FolderClient<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    histories<T extends Image$historiesArgs<ExtArgs> = {}>(args?: Subset<T, Image$historiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$historyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    logs<T extends Image$logsArgs<ExtArgs> = {}>(args?: Subset<T, Image$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Image model
   */
  interface ImageFieldRefs {
    readonly id: FieldRef<"Image", 'Int'>
    readonly dropboxPath: FieldRef<"Image", 'String'>
    readonly url: FieldRef<"Image", 'String'>
    readonly wasShown: FieldRef<"Image", 'Boolean'>
    readonly isTodaysPick: FieldRef<"Image", 'Boolean'>
    readonly createdAt: FieldRef<"Image", 'DateTime'>
    readonly updatedAt: FieldRef<"Image", 'DateTime'>
    readonly folderId: FieldRef<"Image", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Image findUnique
   */
  export type ImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findUniqueOrThrow
   */
  export type ImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findFirst
   */
  export type ImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findFirstOrThrow
   */
  export type ImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findMany
   */
  export type ImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image create
   */
  export type ImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to create a Image.
     */
    data: XOR<ImageCreateInput, ImageUncheckedCreateInput>
  }

  /**
   * Image createMany
   */
  export type ImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Image createManyAndReturn
   */
  export type ImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Image update
   */
  export type ImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to update a Image.
     */
    data: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
    /**
     * Choose, which Image to update.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image updateMany
   */
  export type ImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
  }

  /**
   * Image updateManyAndReturn
   */
  export type ImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Image upsert
   */
  export type ImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The filter to search for the Image to update in case it exists.
     */
    where: ImageWhereUniqueInput
    /**
     * In case the Image found by the `where` argument doesn't exist, create a new Image with this data.
     */
    create: XOR<ImageCreateInput, ImageUncheckedCreateInput>
    /**
     * In case the Image was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
  }

  /**
   * Image delete
   */
  export type ImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter which Image to delete.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image deleteMany
   */
  export type ImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Images to delete
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to delete.
     */
    limit?: number
  }

  /**
   * Image.histories
   */
  export type Image$historiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the history
     */
    select?: historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the history
     */
    omit?: historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historyInclude<ExtArgs> | null
    where?: historyWhereInput
    orderBy?: historyOrderByWithRelationInput | historyOrderByWithRelationInput[]
    cursor?: historyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
  }

  /**
   * Image.logs
   */
  export type Image$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logsInclude<ExtArgs> | null
    where?: logsWhereInput
    orderBy?: logsOrderByWithRelationInput | logsOrderByWithRelationInput[]
    cursor?: logsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LogsScalarFieldEnum | LogsScalarFieldEnum[]
  }

  /**
   * Image without action
   */
  export type ImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
  }


  /**
   * Model logs
   */

  export type AggregateLogs = {
    _count: LogsCountAggregateOutputType | null
    _avg: LogsAvgAggregateOutputType | null
    _sum: LogsSumAggregateOutputType | null
    _min: LogsMinAggregateOutputType | null
    _max: LogsMaxAggregateOutputType | null
  }

  export type LogsAvgAggregateOutputType = {
    id: number | null
    imageId: number | null
  }

  export type LogsSumAggregateOutputType = {
    id: number | null
    imageId: number | null
  }

  export type LogsMinAggregateOutputType = {
    id: number | null
    action: string | null
    msgId: string | null
    imageId: number | null
    status: $Enums.TwilioMessageStatus | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type LogsMaxAggregateOutputType = {
    id: number | null
    action: string | null
    msgId: string | null
    imageId: number | null
    status: $Enums.TwilioMessageStatus | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type LogsCountAggregateOutputType = {
    id: number
    action: number
    msgId: number
    imageId: number
    status: number
    updatedAt: number
    createdAt: number
    _all: number
  }


  export type LogsAvgAggregateInputType = {
    id?: true
    imageId?: true
  }

  export type LogsSumAggregateInputType = {
    id?: true
    imageId?: true
  }

  export type LogsMinAggregateInputType = {
    id?: true
    action?: true
    msgId?: true
    imageId?: true
    status?: true
    updatedAt?: true
    createdAt?: true
  }

  export type LogsMaxAggregateInputType = {
    id?: true
    action?: true
    msgId?: true
    imageId?: true
    status?: true
    updatedAt?: true
    createdAt?: true
  }

  export type LogsCountAggregateInputType = {
    id?: true
    action?: true
    msgId?: true
    imageId?: true
    status?: true
    updatedAt?: true
    createdAt?: true
    _all?: true
  }

  export type LogsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which logs to aggregate.
     */
    where?: logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logs to fetch.
     */
    orderBy?: logsOrderByWithRelationInput | logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned logs
    **/
    _count?: true | LogsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LogsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LogsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogsMaxAggregateInputType
  }

  export type GetLogsAggregateType<T extends LogsAggregateArgs> = {
        [P in keyof T & keyof AggregateLogs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLogs[P]>
      : GetScalarType<T[P], AggregateLogs[P]>
  }




  export type logsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: logsWhereInput
    orderBy?: logsOrderByWithAggregationInput | logsOrderByWithAggregationInput[]
    by: LogsScalarFieldEnum[] | LogsScalarFieldEnum
    having?: logsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogsCountAggregateInputType | true
    _avg?: LogsAvgAggregateInputType
    _sum?: LogsSumAggregateInputType
    _min?: LogsMinAggregateInputType
    _max?: LogsMaxAggregateInputType
  }

  export type LogsGroupByOutputType = {
    id: number
    action: string
    msgId: string | null
    imageId: number
    status: $Enums.TwilioMessageStatus
    updatedAt: Date
    createdAt: Date
    _count: LogsCountAggregateOutputType | null
    _avg: LogsAvgAggregateOutputType | null
    _sum: LogsSumAggregateOutputType | null
    _min: LogsMinAggregateOutputType | null
    _max: LogsMaxAggregateOutputType | null
  }

  type GetLogsGroupByPayload<T extends logsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogsGroupByOutputType[P]>
            : GetScalarType<T[P], LogsGroupByOutputType[P]>
        }
      >
    >


  export type logsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    msgId?: boolean
    imageId?: boolean
    status?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    image?: boolean | ImageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["logs"]>

  export type logsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    msgId?: boolean
    imageId?: boolean
    status?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    image?: boolean | ImageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["logs"]>

  export type logsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    msgId?: boolean
    imageId?: boolean
    status?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    image?: boolean | ImageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["logs"]>

  export type logsSelectScalar = {
    id?: boolean
    action?: boolean
    msgId?: boolean
    imageId?: boolean
    status?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }

  export type logsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "action" | "msgId" | "imageId" | "status" | "updatedAt" | "createdAt", ExtArgs["result"]["logs"]>
  export type logsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    image?: boolean | ImageDefaultArgs<ExtArgs>
  }
  export type logsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    image?: boolean | ImageDefaultArgs<ExtArgs>
  }
  export type logsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    image?: boolean | ImageDefaultArgs<ExtArgs>
  }

  export type $logsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "logs"
    objects: {
      image: Prisma.$ImagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      action: string
      msgId: string | null
      imageId: number
      status: $Enums.TwilioMessageStatus
      updatedAt: Date
      createdAt: Date
    }, ExtArgs["result"]["logs"]>
    composites: {}
  }

  type logsGetPayload<S extends boolean | null | undefined | logsDefaultArgs> = $Result.GetResult<Prisma.$logsPayload, S>

  type logsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<logsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LogsCountAggregateInputType | true
    }

  export interface logsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['logs'], meta: { name: 'logs' } }
    /**
     * Find zero or one Logs that matches the filter.
     * @param {logsFindUniqueArgs} args - Arguments to find a Logs
     * @example
     * // Get one Logs
     * const logs = await prisma.logs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends logsFindUniqueArgs>(args: SelectSubset<T, logsFindUniqueArgs<ExtArgs>>): Prisma__logsClient<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Logs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {logsFindUniqueOrThrowArgs} args - Arguments to find a Logs
     * @example
     * // Get one Logs
     * const logs = await prisma.logs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends logsFindUniqueOrThrowArgs>(args: SelectSubset<T, logsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__logsClient<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logsFindFirstArgs} args - Arguments to find a Logs
     * @example
     * // Get one Logs
     * const logs = await prisma.logs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends logsFindFirstArgs>(args?: SelectSubset<T, logsFindFirstArgs<ExtArgs>>): Prisma__logsClient<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Logs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logsFindFirstOrThrowArgs} args - Arguments to find a Logs
     * @example
     * // Get one Logs
     * const logs = await prisma.logs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends logsFindFirstOrThrowArgs>(args?: SelectSubset<T, logsFindFirstOrThrowArgs<ExtArgs>>): Prisma__logsClient<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Logs
     * const logs = await prisma.logs.findMany()
     * 
     * // Get first 10 Logs
     * const logs = await prisma.logs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const logsWithIdOnly = await prisma.logs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends logsFindManyArgs>(args?: SelectSubset<T, logsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Logs.
     * @param {logsCreateArgs} args - Arguments to create a Logs.
     * @example
     * // Create one Logs
     * const Logs = await prisma.logs.create({
     *   data: {
     *     // ... data to create a Logs
     *   }
     * })
     * 
     */
    create<T extends logsCreateArgs>(args: SelectSubset<T, logsCreateArgs<ExtArgs>>): Prisma__logsClient<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Logs.
     * @param {logsCreateManyArgs} args - Arguments to create many Logs.
     * @example
     * // Create many Logs
     * const logs = await prisma.logs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends logsCreateManyArgs>(args?: SelectSubset<T, logsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Logs and returns the data saved in the database.
     * @param {logsCreateManyAndReturnArgs} args - Arguments to create many Logs.
     * @example
     * // Create many Logs
     * const logs = await prisma.logs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Logs and only return the `id`
     * const logsWithIdOnly = await prisma.logs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends logsCreateManyAndReturnArgs>(args?: SelectSubset<T, logsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Logs.
     * @param {logsDeleteArgs} args - Arguments to delete one Logs.
     * @example
     * // Delete one Logs
     * const Logs = await prisma.logs.delete({
     *   where: {
     *     // ... filter to delete one Logs
     *   }
     * })
     * 
     */
    delete<T extends logsDeleteArgs>(args: SelectSubset<T, logsDeleteArgs<ExtArgs>>): Prisma__logsClient<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Logs.
     * @param {logsUpdateArgs} args - Arguments to update one Logs.
     * @example
     * // Update one Logs
     * const logs = await prisma.logs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends logsUpdateArgs>(args: SelectSubset<T, logsUpdateArgs<ExtArgs>>): Prisma__logsClient<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Logs.
     * @param {logsDeleteManyArgs} args - Arguments to filter Logs to delete.
     * @example
     * // Delete a few Logs
     * const { count } = await prisma.logs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends logsDeleteManyArgs>(args?: SelectSubset<T, logsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Logs
     * const logs = await prisma.logs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends logsUpdateManyArgs>(args: SelectSubset<T, logsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logs and returns the data updated in the database.
     * @param {logsUpdateManyAndReturnArgs} args - Arguments to update many Logs.
     * @example
     * // Update many Logs
     * const logs = await prisma.logs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Logs and only return the `id`
     * const logsWithIdOnly = await prisma.logs.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends logsUpdateManyAndReturnArgs>(args: SelectSubset<T, logsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Logs.
     * @param {logsUpsertArgs} args - Arguments to update or create a Logs.
     * @example
     * // Update or create a Logs
     * const logs = await prisma.logs.upsert({
     *   create: {
     *     // ... data to create a Logs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Logs we want to update
     *   }
     * })
     */
    upsert<T extends logsUpsertArgs>(args: SelectSubset<T, logsUpsertArgs<ExtArgs>>): Prisma__logsClient<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logsCountArgs} args - Arguments to filter Logs to count.
     * @example
     * // Count the number of Logs
     * const count = await prisma.logs.count({
     *   where: {
     *     // ... the filter for the Logs we want to count
     *   }
     * })
    **/
    count<T extends logsCountArgs>(
      args?: Subset<T, logsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LogsAggregateArgs>(args: Subset<T, LogsAggregateArgs>): Prisma.PrismaPromise<GetLogsAggregateType<T>>

    /**
     * Group by Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends logsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: logsGroupByArgs['orderBy'] }
        : { orderBy?: logsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, logsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the logs model
   */
  readonly fields: logsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for logs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__logsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    image<T extends ImageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ImageDefaultArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the logs model
   */
  interface logsFieldRefs {
    readonly id: FieldRef<"logs", 'Int'>
    readonly action: FieldRef<"logs", 'String'>
    readonly msgId: FieldRef<"logs", 'String'>
    readonly imageId: FieldRef<"logs", 'Int'>
    readonly status: FieldRef<"logs", 'TwilioMessageStatus'>
    readonly updatedAt: FieldRef<"logs", 'DateTime'>
    readonly createdAt: FieldRef<"logs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * logs findUnique
   */
  export type logsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logsInclude<ExtArgs> | null
    /**
     * Filter, which logs to fetch.
     */
    where: logsWhereUniqueInput
  }

  /**
   * logs findUniqueOrThrow
   */
  export type logsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logsInclude<ExtArgs> | null
    /**
     * Filter, which logs to fetch.
     */
    where: logsWhereUniqueInput
  }

  /**
   * logs findFirst
   */
  export type logsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logsInclude<ExtArgs> | null
    /**
     * Filter, which logs to fetch.
     */
    where?: logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logs to fetch.
     */
    orderBy?: logsOrderByWithRelationInput | logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for logs.
     */
    cursor?: logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of logs.
     */
    distinct?: LogsScalarFieldEnum | LogsScalarFieldEnum[]
  }

  /**
   * logs findFirstOrThrow
   */
  export type logsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logsInclude<ExtArgs> | null
    /**
     * Filter, which logs to fetch.
     */
    where?: logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logs to fetch.
     */
    orderBy?: logsOrderByWithRelationInput | logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for logs.
     */
    cursor?: logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of logs.
     */
    distinct?: LogsScalarFieldEnum | LogsScalarFieldEnum[]
  }

  /**
   * logs findMany
   */
  export type logsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logsInclude<ExtArgs> | null
    /**
     * Filter, which logs to fetch.
     */
    where?: logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logs to fetch.
     */
    orderBy?: logsOrderByWithRelationInput | logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing logs.
     */
    cursor?: logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logs.
     */
    skip?: number
    distinct?: LogsScalarFieldEnum | LogsScalarFieldEnum[]
  }

  /**
   * logs create
   */
  export type logsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logsInclude<ExtArgs> | null
    /**
     * The data needed to create a logs.
     */
    data: XOR<logsCreateInput, logsUncheckedCreateInput>
  }

  /**
   * logs createMany
   */
  export type logsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many logs.
     */
    data: logsCreateManyInput | logsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * logs createManyAndReturn
   */
  export type logsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * The data used to create many logs.
     */
    data: logsCreateManyInput | logsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * logs update
   */
  export type logsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logsInclude<ExtArgs> | null
    /**
     * The data needed to update a logs.
     */
    data: XOR<logsUpdateInput, logsUncheckedUpdateInput>
    /**
     * Choose, which logs to update.
     */
    where: logsWhereUniqueInput
  }

  /**
   * logs updateMany
   */
  export type logsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update logs.
     */
    data: XOR<logsUpdateManyMutationInput, logsUncheckedUpdateManyInput>
    /**
     * Filter which logs to update
     */
    where?: logsWhereInput
    /**
     * Limit how many logs to update.
     */
    limit?: number
  }

  /**
   * logs updateManyAndReturn
   */
  export type logsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * The data used to update logs.
     */
    data: XOR<logsUpdateManyMutationInput, logsUncheckedUpdateManyInput>
    /**
     * Filter which logs to update
     */
    where?: logsWhereInput
    /**
     * Limit how many logs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * logs upsert
   */
  export type logsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logsInclude<ExtArgs> | null
    /**
     * The filter to search for the logs to update in case it exists.
     */
    where: logsWhereUniqueInput
    /**
     * In case the logs found by the `where` argument doesn't exist, create a new logs with this data.
     */
    create: XOR<logsCreateInput, logsUncheckedCreateInput>
    /**
     * In case the logs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<logsUpdateInput, logsUncheckedUpdateInput>
  }

  /**
   * logs delete
   */
  export type logsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logsInclude<ExtArgs> | null
    /**
     * Filter which logs to delete.
     */
    where: logsWhereUniqueInput
  }

  /**
   * logs deleteMany
   */
  export type logsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which logs to delete
     */
    where?: logsWhereInput
    /**
     * Limit how many logs to delete.
     */
    limit?: number
  }

  /**
   * logs without action
   */
  export type logsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logsInclude<ExtArgs> | null
  }


  /**
   * Model history
   */

  export type AggregateHistory = {
    _count: HistoryCountAggregateOutputType | null
    _avg: HistoryAvgAggregateOutputType | null
    _sum: HistorySumAggregateOutputType | null
    _min: HistoryMinAggregateOutputType | null
    _max: HistoryMaxAggregateOutputType | null
  }

  export type HistoryAvgAggregateOutputType = {
    id: number | null
    imageId: number | null
    count: number | null
    year: number | null
  }

  export type HistorySumAggregateOutputType = {
    id: number | null
    imageId: number | null
    count: number | null
    year: number | null
  }

  export type HistoryMinAggregateOutputType = {
    id: number | null
    imageId: number | null
    count: number | null
    month: string | null
    year: number | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type HistoryMaxAggregateOutputType = {
    id: number | null
    imageId: number | null
    count: number | null
    month: string | null
    year: number | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type HistoryCountAggregateOutputType = {
    id: number
    imageId: number
    count: number
    month: number
    year: number
    updatedAt: number
    createdAt: number
    _all: number
  }


  export type HistoryAvgAggregateInputType = {
    id?: true
    imageId?: true
    count?: true
    year?: true
  }

  export type HistorySumAggregateInputType = {
    id?: true
    imageId?: true
    count?: true
    year?: true
  }

  export type HistoryMinAggregateInputType = {
    id?: true
    imageId?: true
    count?: true
    month?: true
    year?: true
    updatedAt?: true
    createdAt?: true
  }

  export type HistoryMaxAggregateInputType = {
    id?: true
    imageId?: true
    count?: true
    month?: true
    year?: true
    updatedAt?: true
    createdAt?: true
  }

  export type HistoryCountAggregateInputType = {
    id?: true
    imageId?: true
    count?: true
    month?: true
    year?: true
    updatedAt?: true
    createdAt?: true
    _all?: true
  }

  export type HistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which history to aggregate.
     */
    where?: historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of histories to fetch.
     */
    orderBy?: historyOrderByWithRelationInput | historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned histories
    **/
    _count?: true | HistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HistoryMaxAggregateInputType
  }

  export type GetHistoryAggregateType<T extends HistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistory[P]>
      : GetScalarType<T[P], AggregateHistory[P]>
  }




  export type historyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: historyWhereInput
    orderBy?: historyOrderByWithAggregationInput | historyOrderByWithAggregationInput[]
    by: HistoryScalarFieldEnum[] | HistoryScalarFieldEnum
    having?: historyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HistoryCountAggregateInputType | true
    _avg?: HistoryAvgAggregateInputType
    _sum?: HistorySumAggregateInputType
    _min?: HistoryMinAggregateInputType
    _max?: HistoryMaxAggregateInputType
  }

  export type HistoryGroupByOutputType = {
    id: number
    imageId: number
    count: number
    month: string
    year: number
    updatedAt: Date
    createdAt: Date
    _count: HistoryCountAggregateOutputType | null
    _avg: HistoryAvgAggregateOutputType | null
    _sum: HistorySumAggregateOutputType | null
    _min: HistoryMinAggregateOutputType | null
    _max: HistoryMaxAggregateOutputType | null
  }

  type GetHistoryGroupByPayload<T extends historyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HistoryGroupByOutputType[P]>
            : GetScalarType<T[P], HistoryGroupByOutputType[P]>
        }
      >
    >


  export type historySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageId?: boolean
    count?: boolean
    month?: boolean
    year?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    image?: boolean | ImageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["history"]>

  export type historySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageId?: boolean
    count?: boolean
    month?: boolean
    year?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    image?: boolean | ImageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["history"]>

  export type historySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageId?: boolean
    count?: boolean
    month?: boolean
    year?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    image?: boolean | ImageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["history"]>

  export type historySelectScalar = {
    id?: boolean
    imageId?: boolean
    count?: boolean
    month?: boolean
    year?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }

  export type historyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "imageId" | "count" | "month" | "year" | "updatedAt" | "createdAt", ExtArgs["result"]["history"]>
  export type historyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    image?: boolean | ImageDefaultArgs<ExtArgs>
  }
  export type historyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    image?: boolean | ImageDefaultArgs<ExtArgs>
  }
  export type historyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    image?: boolean | ImageDefaultArgs<ExtArgs>
  }

  export type $historyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "history"
    objects: {
      image: Prisma.$ImagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      imageId: number
      count: number
      month: string
      year: number
      updatedAt: Date
      createdAt: Date
    }, ExtArgs["result"]["history"]>
    composites: {}
  }

  type historyGetPayload<S extends boolean | null | undefined | historyDefaultArgs> = $Result.GetResult<Prisma.$historyPayload, S>

  type historyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<historyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HistoryCountAggregateInputType | true
    }

  export interface historyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['history'], meta: { name: 'history' } }
    /**
     * Find zero or one History that matches the filter.
     * @param {historyFindUniqueArgs} args - Arguments to find a History
     * @example
     * // Get one History
     * const history = await prisma.history.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends historyFindUniqueArgs>(args: SelectSubset<T, historyFindUniqueArgs<ExtArgs>>): Prisma__historyClient<$Result.GetResult<Prisma.$historyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one History that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {historyFindUniqueOrThrowArgs} args - Arguments to find a History
     * @example
     * // Get one History
     * const history = await prisma.history.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends historyFindUniqueOrThrowArgs>(args: SelectSubset<T, historyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__historyClient<$Result.GetResult<Prisma.$historyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first History that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historyFindFirstArgs} args - Arguments to find a History
     * @example
     * // Get one History
     * const history = await prisma.history.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends historyFindFirstArgs>(args?: SelectSubset<T, historyFindFirstArgs<ExtArgs>>): Prisma__historyClient<$Result.GetResult<Prisma.$historyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first History that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historyFindFirstOrThrowArgs} args - Arguments to find a History
     * @example
     * // Get one History
     * const history = await prisma.history.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends historyFindFirstOrThrowArgs>(args?: SelectSubset<T, historyFindFirstOrThrowArgs<ExtArgs>>): Prisma__historyClient<$Result.GetResult<Prisma.$historyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Histories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Histories
     * const histories = await prisma.history.findMany()
     * 
     * // Get first 10 Histories
     * const histories = await prisma.history.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const historyWithIdOnly = await prisma.history.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends historyFindManyArgs>(args?: SelectSubset<T, historyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$historyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a History.
     * @param {historyCreateArgs} args - Arguments to create a History.
     * @example
     * // Create one History
     * const History = await prisma.history.create({
     *   data: {
     *     // ... data to create a History
     *   }
     * })
     * 
     */
    create<T extends historyCreateArgs>(args: SelectSubset<T, historyCreateArgs<ExtArgs>>): Prisma__historyClient<$Result.GetResult<Prisma.$historyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Histories.
     * @param {historyCreateManyArgs} args - Arguments to create many Histories.
     * @example
     * // Create many Histories
     * const history = await prisma.history.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends historyCreateManyArgs>(args?: SelectSubset<T, historyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Histories and returns the data saved in the database.
     * @param {historyCreateManyAndReturnArgs} args - Arguments to create many Histories.
     * @example
     * // Create many Histories
     * const history = await prisma.history.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Histories and only return the `id`
     * const historyWithIdOnly = await prisma.history.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends historyCreateManyAndReturnArgs>(args?: SelectSubset<T, historyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$historyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a History.
     * @param {historyDeleteArgs} args - Arguments to delete one History.
     * @example
     * // Delete one History
     * const History = await prisma.history.delete({
     *   where: {
     *     // ... filter to delete one History
     *   }
     * })
     * 
     */
    delete<T extends historyDeleteArgs>(args: SelectSubset<T, historyDeleteArgs<ExtArgs>>): Prisma__historyClient<$Result.GetResult<Prisma.$historyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one History.
     * @param {historyUpdateArgs} args - Arguments to update one History.
     * @example
     * // Update one History
     * const history = await prisma.history.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends historyUpdateArgs>(args: SelectSubset<T, historyUpdateArgs<ExtArgs>>): Prisma__historyClient<$Result.GetResult<Prisma.$historyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Histories.
     * @param {historyDeleteManyArgs} args - Arguments to filter Histories to delete.
     * @example
     * // Delete a few Histories
     * const { count } = await prisma.history.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends historyDeleteManyArgs>(args?: SelectSubset<T, historyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Histories
     * const history = await prisma.history.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends historyUpdateManyArgs>(args: SelectSubset<T, historyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Histories and returns the data updated in the database.
     * @param {historyUpdateManyAndReturnArgs} args - Arguments to update many Histories.
     * @example
     * // Update many Histories
     * const history = await prisma.history.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Histories and only return the `id`
     * const historyWithIdOnly = await prisma.history.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends historyUpdateManyAndReturnArgs>(args: SelectSubset<T, historyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$historyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one History.
     * @param {historyUpsertArgs} args - Arguments to update or create a History.
     * @example
     * // Update or create a History
     * const history = await prisma.history.upsert({
     *   create: {
     *     // ... data to create a History
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the History we want to update
     *   }
     * })
     */
    upsert<T extends historyUpsertArgs>(args: SelectSubset<T, historyUpsertArgs<ExtArgs>>): Prisma__historyClient<$Result.GetResult<Prisma.$historyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historyCountArgs} args - Arguments to filter Histories to count.
     * @example
     * // Count the number of Histories
     * const count = await prisma.history.count({
     *   where: {
     *     // ... the filter for the Histories we want to count
     *   }
     * })
    **/
    count<T extends historyCountArgs>(
      args?: Subset<T, historyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a History.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HistoryAggregateArgs>(args: Subset<T, HistoryAggregateArgs>): Prisma.PrismaPromise<GetHistoryAggregateType<T>>

    /**
     * Group by History.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends historyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: historyGroupByArgs['orderBy'] }
        : { orderBy?: historyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, historyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the history model
   */
  readonly fields: historyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for history.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__historyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    image<T extends ImageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ImageDefaultArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the history model
   */
  interface historyFieldRefs {
    readonly id: FieldRef<"history", 'Int'>
    readonly imageId: FieldRef<"history", 'Int'>
    readonly count: FieldRef<"history", 'Int'>
    readonly month: FieldRef<"history", 'String'>
    readonly year: FieldRef<"history", 'Int'>
    readonly updatedAt: FieldRef<"history", 'DateTime'>
    readonly createdAt: FieldRef<"history", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * history findUnique
   */
  export type historyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the history
     */
    select?: historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the history
     */
    omit?: historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historyInclude<ExtArgs> | null
    /**
     * Filter, which history to fetch.
     */
    where: historyWhereUniqueInput
  }

  /**
   * history findUniqueOrThrow
   */
  export type historyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the history
     */
    select?: historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the history
     */
    omit?: historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historyInclude<ExtArgs> | null
    /**
     * Filter, which history to fetch.
     */
    where: historyWhereUniqueInput
  }

  /**
   * history findFirst
   */
  export type historyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the history
     */
    select?: historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the history
     */
    omit?: historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historyInclude<ExtArgs> | null
    /**
     * Filter, which history to fetch.
     */
    where?: historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of histories to fetch.
     */
    orderBy?: historyOrderByWithRelationInput | historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for histories.
     */
    cursor?: historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of histories.
     */
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
  }

  /**
   * history findFirstOrThrow
   */
  export type historyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the history
     */
    select?: historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the history
     */
    omit?: historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historyInclude<ExtArgs> | null
    /**
     * Filter, which history to fetch.
     */
    where?: historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of histories to fetch.
     */
    orderBy?: historyOrderByWithRelationInput | historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for histories.
     */
    cursor?: historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of histories.
     */
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
  }

  /**
   * history findMany
   */
  export type historyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the history
     */
    select?: historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the history
     */
    omit?: historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historyInclude<ExtArgs> | null
    /**
     * Filter, which histories to fetch.
     */
    where?: historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of histories to fetch.
     */
    orderBy?: historyOrderByWithRelationInput | historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing histories.
     */
    cursor?: historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` histories.
     */
    skip?: number
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
  }

  /**
   * history create
   */
  export type historyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the history
     */
    select?: historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the history
     */
    omit?: historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historyInclude<ExtArgs> | null
    /**
     * The data needed to create a history.
     */
    data: XOR<historyCreateInput, historyUncheckedCreateInput>
  }

  /**
   * history createMany
   */
  export type historyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many histories.
     */
    data: historyCreateManyInput | historyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * history createManyAndReturn
   */
  export type historyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the history
     */
    select?: historySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the history
     */
    omit?: historyOmit<ExtArgs> | null
    /**
     * The data used to create many histories.
     */
    data: historyCreateManyInput | historyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * history update
   */
  export type historyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the history
     */
    select?: historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the history
     */
    omit?: historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historyInclude<ExtArgs> | null
    /**
     * The data needed to update a history.
     */
    data: XOR<historyUpdateInput, historyUncheckedUpdateInput>
    /**
     * Choose, which history to update.
     */
    where: historyWhereUniqueInput
  }

  /**
   * history updateMany
   */
  export type historyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update histories.
     */
    data: XOR<historyUpdateManyMutationInput, historyUncheckedUpdateManyInput>
    /**
     * Filter which histories to update
     */
    where?: historyWhereInput
    /**
     * Limit how many histories to update.
     */
    limit?: number
  }

  /**
   * history updateManyAndReturn
   */
  export type historyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the history
     */
    select?: historySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the history
     */
    omit?: historyOmit<ExtArgs> | null
    /**
     * The data used to update histories.
     */
    data: XOR<historyUpdateManyMutationInput, historyUncheckedUpdateManyInput>
    /**
     * Filter which histories to update
     */
    where?: historyWhereInput
    /**
     * Limit how many histories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * history upsert
   */
  export type historyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the history
     */
    select?: historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the history
     */
    omit?: historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historyInclude<ExtArgs> | null
    /**
     * The filter to search for the history to update in case it exists.
     */
    where: historyWhereUniqueInput
    /**
     * In case the history found by the `where` argument doesn't exist, create a new history with this data.
     */
    create: XOR<historyCreateInput, historyUncheckedCreateInput>
    /**
     * In case the history was found with the provided `where` argument, update it with this data.
     */
    update: XOR<historyUpdateInput, historyUncheckedUpdateInput>
  }

  /**
   * history delete
   */
  export type historyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the history
     */
    select?: historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the history
     */
    omit?: historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historyInclude<ExtArgs> | null
    /**
     * Filter which history to delete.
     */
    where: historyWhereUniqueInput
  }

  /**
   * history deleteMany
   */
  export type historyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which histories to delete
     */
    where?: historyWhereInput
    /**
     * Limit how many histories to delete.
     */
    limit?: number
  }

  /**
   * history without action
   */
  export type historyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the history
     */
    select?: historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the history
     */
    omit?: historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historyInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const FolderScalarFieldEnum: {
    id: 'id',
    name: 'name',
    dropboxPath: 'dropboxPath'
  };

  export type FolderScalarFieldEnum = (typeof FolderScalarFieldEnum)[keyof typeof FolderScalarFieldEnum]


  export const ImageScalarFieldEnum: {
    id: 'id',
    dropboxPath: 'dropboxPath',
    url: 'url',
    wasShown: 'wasShown',
    isTodaysPick: 'isTodaysPick',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    folderId: 'folderId'
  };

  export type ImageScalarFieldEnum = (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum]


  export const LogsScalarFieldEnum: {
    id: 'id',
    action: 'action',
    msgId: 'msgId',
    imageId: 'imageId',
    status: 'status',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt'
  };

  export type LogsScalarFieldEnum = (typeof LogsScalarFieldEnum)[keyof typeof LogsScalarFieldEnum]


  export const HistoryScalarFieldEnum: {
    id: 'id',
    imageId: 'imageId',
    count: 'count',
    month: 'month',
    year: 'year',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt'
  };

  export type HistoryScalarFieldEnum = (typeof HistoryScalarFieldEnum)[keyof typeof HistoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'TwilioMessageStatus'
   */
  export type EnumTwilioMessageStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TwilioMessageStatus'>
    


  /**
   * Reference to a field of type 'TwilioMessageStatus[]'
   */
  export type ListEnumTwilioMessageStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TwilioMessageStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type FolderWhereInput = {
    AND?: FolderWhereInput | FolderWhereInput[]
    OR?: FolderWhereInput[]
    NOT?: FolderWhereInput | FolderWhereInput[]
    id?: IntFilter<"Folder"> | number
    name?: StringFilter<"Folder"> | string
    dropboxPath?: StringFilter<"Folder"> | string
    images?: ImageListRelationFilter
  }

  export type FolderOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    dropboxPath?: SortOrder
    images?: ImageOrderByRelationAggregateInput
  }

  export type FolderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    dropboxPath?: string
    AND?: FolderWhereInput | FolderWhereInput[]
    OR?: FolderWhereInput[]
    NOT?: FolderWhereInput | FolderWhereInput[]
    name?: StringFilter<"Folder"> | string
    images?: ImageListRelationFilter
  }, "id" | "dropboxPath">

  export type FolderOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    dropboxPath?: SortOrder
    _count?: FolderCountOrderByAggregateInput
    _avg?: FolderAvgOrderByAggregateInput
    _max?: FolderMaxOrderByAggregateInput
    _min?: FolderMinOrderByAggregateInput
    _sum?: FolderSumOrderByAggregateInput
  }

  export type FolderScalarWhereWithAggregatesInput = {
    AND?: FolderScalarWhereWithAggregatesInput | FolderScalarWhereWithAggregatesInput[]
    OR?: FolderScalarWhereWithAggregatesInput[]
    NOT?: FolderScalarWhereWithAggregatesInput | FolderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Folder"> | number
    name?: StringWithAggregatesFilter<"Folder"> | string
    dropboxPath?: StringWithAggregatesFilter<"Folder"> | string
  }

  export type ImageWhereInput = {
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    id?: IntFilter<"Image"> | number
    dropboxPath?: StringFilter<"Image"> | string
    url?: StringFilter<"Image"> | string
    wasShown?: BoolFilter<"Image"> | boolean
    isTodaysPick?: BoolFilter<"Image"> | boolean
    createdAt?: DateTimeFilter<"Image"> | Date | string
    updatedAt?: DateTimeFilter<"Image"> | Date | string
    folderId?: IntFilter<"Image"> | number
    folder?: XOR<FolderScalarRelationFilter, FolderWhereInput>
    histories?: HistoryListRelationFilter
    logs?: LogsListRelationFilter
  }

  export type ImageOrderByWithRelationInput = {
    id?: SortOrder
    dropboxPath?: SortOrder
    url?: SortOrder
    wasShown?: SortOrder
    isTodaysPick?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    folderId?: SortOrder
    folder?: FolderOrderByWithRelationInput
    histories?: historyOrderByRelationAggregateInput
    logs?: logsOrderByRelationAggregateInput
  }

  export type ImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    dropboxPath?: string
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    url?: StringFilter<"Image"> | string
    wasShown?: BoolFilter<"Image"> | boolean
    isTodaysPick?: BoolFilter<"Image"> | boolean
    createdAt?: DateTimeFilter<"Image"> | Date | string
    updatedAt?: DateTimeFilter<"Image"> | Date | string
    folderId?: IntFilter<"Image"> | number
    folder?: XOR<FolderScalarRelationFilter, FolderWhereInput>
    histories?: HistoryListRelationFilter
    logs?: LogsListRelationFilter
  }, "id" | "dropboxPath">

  export type ImageOrderByWithAggregationInput = {
    id?: SortOrder
    dropboxPath?: SortOrder
    url?: SortOrder
    wasShown?: SortOrder
    isTodaysPick?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    folderId?: SortOrder
    _count?: ImageCountOrderByAggregateInput
    _avg?: ImageAvgOrderByAggregateInput
    _max?: ImageMaxOrderByAggregateInput
    _min?: ImageMinOrderByAggregateInput
    _sum?: ImageSumOrderByAggregateInput
  }

  export type ImageScalarWhereWithAggregatesInput = {
    AND?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    OR?: ImageScalarWhereWithAggregatesInput[]
    NOT?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Image"> | number
    dropboxPath?: StringWithAggregatesFilter<"Image"> | string
    url?: StringWithAggregatesFilter<"Image"> | string
    wasShown?: BoolWithAggregatesFilter<"Image"> | boolean
    isTodaysPick?: BoolWithAggregatesFilter<"Image"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Image"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Image"> | Date | string
    folderId?: IntWithAggregatesFilter<"Image"> | number
  }

  export type logsWhereInput = {
    AND?: logsWhereInput | logsWhereInput[]
    OR?: logsWhereInput[]
    NOT?: logsWhereInput | logsWhereInput[]
    id?: IntFilter<"logs"> | number
    action?: StringFilter<"logs"> | string
    msgId?: StringNullableFilter<"logs"> | string | null
    imageId?: IntFilter<"logs"> | number
    status?: EnumTwilioMessageStatusFilter<"logs"> | $Enums.TwilioMessageStatus
    updatedAt?: DateTimeFilter<"logs"> | Date | string
    createdAt?: DateTimeFilter<"logs"> | Date | string
    image?: XOR<ImageScalarRelationFilter, ImageWhereInput>
  }

  export type logsOrderByWithRelationInput = {
    id?: SortOrder
    action?: SortOrder
    msgId?: SortOrderInput | SortOrder
    imageId?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    image?: ImageOrderByWithRelationInput
  }

  export type logsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: logsWhereInput | logsWhereInput[]
    OR?: logsWhereInput[]
    NOT?: logsWhereInput | logsWhereInput[]
    action?: StringFilter<"logs"> | string
    msgId?: StringNullableFilter<"logs"> | string | null
    imageId?: IntFilter<"logs"> | number
    status?: EnumTwilioMessageStatusFilter<"logs"> | $Enums.TwilioMessageStatus
    updatedAt?: DateTimeFilter<"logs"> | Date | string
    createdAt?: DateTimeFilter<"logs"> | Date | string
    image?: XOR<ImageScalarRelationFilter, ImageWhereInput>
  }, "id">

  export type logsOrderByWithAggregationInput = {
    id?: SortOrder
    action?: SortOrder
    msgId?: SortOrderInput | SortOrder
    imageId?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    _count?: logsCountOrderByAggregateInput
    _avg?: logsAvgOrderByAggregateInput
    _max?: logsMaxOrderByAggregateInput
    _min?: logsMinOrderByAggregateInput
    _sum?: logsSumOrderByAggregateInput
  }

  export type logsScalarWhereWithAggregatesInput = {
    AND?: logsScalarWhereWithAggregatesInput | logsScalarWhereWithAggregatesInput[]
    OR?: logsScalarWhereWithAggregatesInput[]
    NOT?: logsScalarWhereWithAggregatesInput | logsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"logs"> | number
    action?: StringWithAggregatesFilter<"logs"> | string
    msgId?: StringNullableWithAggregatesFilter<"logs"> | string | null
    imageId?: IntWithAggregatesFilter<"logs"> | number
    status?: EnumTwilioMessageStatusWithAggregatesFilter<"logs"> | $Enums.TwilioMessageStatus
    updatedAt?: DateTimeWithAggregatesFilter<"logs"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"logs"> | Date | string
  }

  export type historyWhereInput = {
    AND?: historyWhereInput | historyWhereInput[]
    OR?: historyWhereInput[]
    NOT?: historyWhereInput | historyWhereInput[]
    id?: IntFilter<"history"> | number
    imageId?: IntFilter<"history"> | number
    count?: IntFilter<"history"> | number
    month?: StringFilter<"history"> | string
    year?: IntFilter<"history"> | number
    updatedAt?: DateTimeFilter<"history"> | Date | string
    createdAt?: DateTimeFilter<"history"> | Date | string
    image?: XOR<ImageScalarRelationFilter, ImageWhereInput>
  }

  export type historyOrderByWithRelationInput = {
    id?: SortOrder
    imageId?: SortOrder
    count?: SortOrder
    month?: SortOrder
    year?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    image?: ImageOrderByWithRelationInput
  }

  export type historyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: historyWhereInput | historyWhereInput[]
    OR?: historyWhereInput[]
    NOT?: historyWhereInput | historyWhereInput[]
    imageId?: IntFilter<"history"> | number
    count?: IntFilter<"history"> | number
    month?: StringFilter<"history"> | string
    year?: IntFilter<"history"> | number
    updatedAt?: DateTimeFilter<"history"> | Date | string
    createdAt?: DateTimeFilter<"history"> | Date | string
    image?: XOR<ImageScalarRelationFilter, ImageWhereInput>
  }, "id">

  export type historyOrderByWithAggregationInput = {
    id?: SortOrder
    imageId?: SortOrder
    count?: SortOrder
    month?: SortOrder
    year?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    _count?: historyCountOrderByAggregateInput
    _avg?: historyAvgOrderByAggregateInput
    _max?: historyMaxOrderByAggregateInput
    _min?: historyMinOrderByAggregateInput
    _sum?: historySumOrderByAggregateInput
  }

  export type historyScalarWhereWithAggregatesInput = {
    AND?: historyScalarWhereWithAggregatesInput | historyScalarWhereWithAggregatesInput[]
    OR?: historyScalarWhereWithAggregatesInput[]
    NOT?: historyScalarWhereWithAggregatesInput | historyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"history"> | number
    imageId?: IntWithAggregatesFilter<"history"> | number
    count?: IntWithAggregatesFilter<"history"> | number
    month?: StringWithAggregatesFilter<"history"> | string
    year?: IntWithAggregatesFilter<"history"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"history"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"history"> | Date | string
  }

  export type FolderCreateInput = {
    name: string
    dropboxPath: string
    images?: ImageCreateNestedManyWithoutFolderInput
  }

  export type FolderUncheckedCreateInput = {
    id?: number
    name: string
    dropboxPath: string
    images?: ImageUncheckedCreateNestedManyWithoutFolderInput
  }

  export type FolderUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    dropboxPath?: StringFieldUpdateOperationsInput | string
    images?: ImageUpdateManyWithoutFolderNestedInput
  }

  export type FolderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    dropboxPath?: StringFieldUpdateOperationsInput | string
    images?: ImageUncheckedUpdateManyWithoutFolderNestedInput
  }

  export type FolderCreateManyInput = {
    id?: number
    name: string
    dropboxPath: string
  }

  export type FolderUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    dropboxPath?: StringFieldUpdateOperationsInput | string
  }

  export type FolderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    dropboxPath?: StringFieldUpdateOperationsInput | string
  }

  export type ImageCreateInput = {
    dropboxPath: string
    url: string
    wasShown?: boolean
    isTodaysPick?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    folder: FolderCreateNestedOneWithoutImagesInput
    histories?: historyCreateNestedManyWithoutImageInput
    logs?: logsCreateNestedManyWithoutImageInput
  }

  export type ImageUncheckedCreateInput = {
    id?: number
    dropboxPath: string
    url: string
    wasShown?: boolean
    isTodaysPick?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    folderId: number
    histories?: historyUncheckedCreateNestedManyWithoutImageInput
    logs?: logsUncheckedCreateNestedManyWithoutImageInput
  }

  export type ImageUpdateInput = {
    dropboxPath?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    wasShown?: BoolFieldUpdateOperationsInput | boolean
    isTodaysPick?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folder?: FolderUpdateOneRequiredWithoutImagesNestedInput
    histories?: historyUpdateManyWithoutImageNestedInput
    logs?: logsUpdateManyWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dropboxPath?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    wasShown?: BoolFieldUpdateOperationsInput | boolean
    isTodaysPick?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folderId?: IntFieldUpdateOperationsInput | number
    histories?: historyUncheckedUpdateManyWithoutImageNestedInput
    logs?: logsUncheckedUpdateManyWithoutImageNestedInput
  }

  export type ImageCreateManyInput = {
    id?: number
    dropboxPath: string
    url: string
    wasShown?: boolean
    isTodaysPick?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    folderId: number
  }

  export type ImageUpdateManyMutationInput = {
    dropboxPath?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    wasShown?: BoolFieldUpdateOperationsInput | boolean
    isTodaysPick?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    dropboxPath?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    wasShown?: BoolFieldUpdateOperationsInput | boolean
    isTodaysPick?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folderId?: IntFieldUpdateOperationsInput | number
  }

  export type logsCreateInput = {
    action: string
    msgId?: string | null
    status: $Enums.TwilioMessageStatus
    updatedAt?: Date | string
    createdAt?: Date | string
    image: ImageCreateNestedOneWithoutLogsInput
  }

  export type logsUncheckedCreateInput = {
    id?: number
    action: string
    msgId?: string | null
    imageId: number
    status: $Enums.TwilioMessageStatus
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type logsUpdateInput = {
    action?: StringFieldUpdateOperationsInput | string
    msgId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTwilioMessageStatusFieldUpdateOperationsInput | $Enums.TwilioMessageStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: ImageUpdateOneRequiredWithoutLogsNestedInput
  }

  export type logsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    msgId?: NullableStringFieldUpdateOperationsInput | string | null
    imageId?: IntFieldUpdateOperationsInput | number
    status?: EnumTwilioMessageStatusFieldUpdateOperationsInput | $Enums.TwilioMessageStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type logsCreateManyInput = {
    id?: number
    action: string
    msgId?: string | null
    imageId: number
    status: $Enums.TwilioMessageStatus
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type logsUpdateManyMutationInput = {
    action?: StringFieldUpdateOperationsInput | string
    msgId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTwilioMessageStatusFieldUpdateOperationsInput | $Enums.TwilioMessageStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type logsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    msgId?: NullableStringFieldUpdateOperationsInput | string | null
    imageId?: IntFieldUpdateOperationsInput | number
    status?: EnumTwilioMessageStatusFieldUpdateOperationsInput | $Enums.TwilioMessageStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type historyCreateInput = {
    count: number
    month: string
    year: number
    updatedAt?: Date | string
    createdAt?: Date | string
    image: ImageCreateNestedOneWithoutHistoriesInput
  }

  export type historyUncheckedCreateInput = {
    id?: number
    imageId: number
    count: number
    month: string
    year: number
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type historyUpdateInput = {
    count?: IntFieldUpdateOperationsInput | number
    month?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: ImageUpdateOneRequiredWithoutHistoriesNestedInput
  }

  export type historyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageId?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    month?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type historyCreateManyInput = {
    id?: number
    imageId: number
    count: number
    month: string
    year: number
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type historyUpdateManyMutationInput = {
    count?: IntFieldUpdateOperationsInput | number
    month?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type historyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageId?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    month?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ImageListRelationFilter = {
    every?: ImageWhereInput
    some?: ImageWhereInput
    none?: ImageWhereInput
  }

  export type ImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FolderCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    dropboxPath?: SortOrder
  }

  export type FolderAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FolderMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    dropboxPath?: SortOrder
  }

  export type FolderMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    dropboxPath?: SortOrder
  }

  export type FolderSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FolderScalarRelationFilter = {
    is?: FolderWhereInput
    isNot?: FolderWhereInput
  }

  export type HistoryListRelationFilter = {
    every?: historyWhereInput
    some?: historyWhereInput
    none?: historyWhereInput
  }

  export type LogsListRelationFilter = {
    every?: logsWhereInput
    some?: logsWhereInput
    none?: logsWhereInput
  }

  export type historyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type logsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ImageCountOrderByAggregateInput = {
    id?: SortOrder
    dropboxPath?: SortOrder
    url?: SortOrder
    wasShown?: SortOrder
    isTodaysPick?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    folderId?: SortOrder
  }

  export type ImageAvgOrderByAggregateInput = {
    id?: SortOrder
    folderId?: SortOrder
  }

  export type ImageMaxOrderByAggregateInput = {
    id?: SortOrder
    dropboxPath?: SortOrder
    url?: SortOrder
    wasShown?: SortOrder
    isTodaysPick?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    folderId?: SortOrder
  }

  export type ImageMinOrderByAggregateInput = {
    id?: SortOrder
    dropboxPath?: SortOrder
    url?: SortOrder
    wasShown?: SortOrder
    isTodaysPick?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    folderId?: SortOrder
  }

  export type ImageSumOrderByAggregateInput = {
    id?: SortOrder
    folderId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumTwilioMessageStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TwilioMessageStatus | EnumTwilioMessageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TwilioMessageStatus[] | ListEnumTwilioMessageStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TwilioMessageStatus[] | ListEnumTwilioMessageStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTwilioMessageStatusFilter<$PrismaModel> | $Enums.TwilioMessageStatus
  }

  export type ImageScalarRelationFilter = {
    is?: ImageWhereInput
    isNot?: ImageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type logsCountOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    msgId?: SortOrder
    imageId?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type logsAvgOrderByAggregateInput = {
    id?: SortOrder
    imageId?: SortOrder
  }

  export type logsMaxOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    msgId?: SortOrder
    imageId?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type logsMinOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    msgId?: SortOrder
    imageId?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type logsSumOrderByAggregateInput = {
    id?: SortOrder
    imageId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumTwilioMessageStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TwilioMessageStatus | EnumTwilioMessageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TwilioMessageStatus[] | ListEnumTwilioMessageStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TwilioMessageStatus[] | ListEnumTwilioMessageStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTwilioMessageStatusWithAggregatesFilter<$PrismaModel> | $Enums.TwilioMessageStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTwilioMessageStatusFilter<$PrismaModel>
    _max?: NestedEnumTwilioMessageStatusFilter<$PrismaModel>
  }

  export type historyCountOrderByAggregateInput = {
    id?: SortOrder
    imageId?: SortOrder
    count?: SortOrder
    month?: SortOrder
    year?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type historyAvgOrderByAggregateInput = {
    id?: SortOrder
    imageId?: SortOrder
    count?: SortOrder
    year?: SortOrder
  }

  export type historyMaxOrderByAggregateInput = {
    id?: SortOrder
    imageId?: SortOrder
    count?: SortOrder
    month?: SortOrder
    year?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type historyMinOrderByAggregateInput = {
    id?: SortOrder
    imageId?: SortOrder
    count?: SortOrder
    month?: SortOrder
    year?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type historySumOrderByAggregateInput = {
    id?: SortOrder
    imageId?: SortOrder
    count?: SortOrder
    year?: SortOrder
  }

  export type ImageCreateNestedManyWithoutFolderInput = {
    create?: XOR<ImageCreateWithoutFolderInput, ImageUncheckedCreateWithoutFolderInput> | ImageCreateWithoutFolderInput[] | ImageUncheckedCreateWithoutFolderInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutFolderInput | ImageCreateOrConnectWithoutFolderInput[]
    createMany?: ImageCreateManyFolderInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type ImageUncheckedCreateNestedManyWithoutFolderInput = {
    create?: XOR<ImageCreateWithoutFolderInput, ImageUncheckedCreateWithoutFolderInput> | ImageCreateWithoutFolderInput[] | ImageUncheckedCreateWithoutFolderInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutFolderInput | ImageCreateOrConnectWithoutFolderInput[]
    createMany?: ImageCreateManyFolderInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ImageUpdateManyWithoutFolderNestedInput = {
    create?: XOR<ImageCreateWithoutFolderInput, ImageUncheckedCreateWithoutFolderInput> | ImageCreateWithoutFolderInput[] | ImageUncheckedCreateWithoutFolderInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutFolderInput | ImageCreateOrConnectWithoutFolderInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutFolderInput | ImageUpsertWithWhereUniqueWithoutFolderInput[]
    createMany?: ImageCreateManyFolderInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutFolderInput | ImageUpdateWithWhereUniqueWithoutFolderInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutFolderInput | ImageUpdateManyWithWhereWithoutFolderInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ImageUncheckedUpdateManyWithoutFolderNestedInput = {
    create?: XOR<ImageCreateWithoutFolderInput, ImageUncheckedCreateWithoutFolderInput> | ImageCreateWithoutFolderInput[] | ImageUncheckedCreateWithoutFolderInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutFolderInput | ImageCreateOrConnectWithoutFolderInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutFolderInput | ImageUpsertWithWhereUniqueWithoutFolderInput[]
    createMany?: ImageCreateManyFolderInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutFolderInput | ImageUpdateWithWhereUniqueWithoutFolderInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutFolderInput | ImageUpdateManyWithWhereWithoutFolderInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type FolderCreateNestedOneWithoutImagesInput = {
    create?: XOR<FolderCreateWithoutImagesInput, FolderUncheckedCreateWithoutImagesInput>
    connectOrCreate?: FolderCreateOrConnectWithoutImagesInput
    connect?: FolderWhereUniqueInput
  }

  export type historyCreateNestedManyWithoutImageInput = {
    create?: XOR<historyCreateWithoutImageInput, historyUncheckedCreateWithoutImageInput> | historyCreateWithoutImageInput[] | historyUncheckedCreateWithoutImageInput[]
    connectOrCreate?: historyCreateOrConnectWithoutImageInput | historyCreateOrConnectWithoutImageInput[]
    createMany?: historyCreateManyImageInputEnvelope
    connect?: historyWhereUniqueInput | historyWhereUniqueInput[]
  }

  export type logsCreateNestedManyWithoutImageInput = {
    create?: XOR<logsCreateWithoutImageInput, logsUncheckedCreateWithoutImageInput> | logsCreateWithoutImageInput[] | logsUncheckedCreateWithoutImageInput[]
    connectOrCreate?: logsCreateOrConnectWithoutImageInput | logsCreateOrConnectWithoutImageInput[]
    createMany?: logsCreateManyImageInputEnvelope
    connect?: logsWhereUniqueInput | logsWhereUniqueInput[]
  }

  export type historyUncheckedCreateNestedManyWithoutImageInput = {
    create?: XOR<historyCreateWithoutImageInput, historyUncheckedCreateWithoutImageInput> | historyCreateWithoutImageInput[] | historyUncheckedCreateWithoutImageInput[]
    connectOrCreate?: historyCreateOrConnectWithoutImageInput | historyCreateOrConnectWithoutImageInput[]
    createMany?: historyCreateManyImageInputEnvelope
    connect?: historyWhereUniqueInput | historyWhereUniqueInput[]
  }

  export type logsUncheckedCreateNestedManyWithoutImageInput = {
    create?: XOR<logsCreateWithoutImageInput, logsUncheckedCreateWithoutImageInput> | logsCreateWithoutImageInput[] | logsUncheckedCreateWithoutImageInput[]
    connectOrCreate?: logsCreateOrConnectWithoutImageInput | logsCreateOrConnectWithoutImageInput[]
    createMany?: logsCreateManyImageInputEnvelope
    connect?: logsWhereUniqueInput | logsWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FolderUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<FolderCreateWithoutImagesInput, FolderUncheckedCreateWithoutImagesInput>
    connectOrCreate?: FolderCreateOrConnectWithoutImagesInput
    upsert?: FolderUpsertWithoutImagesInput
    connect?: FolderWhereUniqueInput
    update?: XOR<XOR<FolderUpdateToOneWithWhereWithoutImagesInput, FolderUpdateWithoutImagesInput>, FolderUncheckedUpdateWithoutImagesInput>
  }

  export type historyUpdateManyWithoutImageNestedInput = {
    create?: XOR<historyCreateWithoutImageInput, historyUncheckedCreateWithoutImageInput> | historyCreateWithoutImageInput[] | historyUncheckedCreateWithoutImageInput[]
    connectOrCreate?: historyCreateOrConnectWithoutImageInput | historyCreateOrConnectWithoutImageInput[]
    upsert?: historyUpsertWithWhereUniqueWithoutImageInput | historyUpsertWithWhereUniqueWithoutImageInput[]
    createMany?: historyCreateManyImageInputEnvelope
    set?: historyWhereUniqueInput | historyWhereUniqueInput[]
    disconnect?: historyWhereUniqueInput | historyWhereUniqueInput[]
    delete?: historyWhereUniqueInput | historyWhereUniqueInput[]
    connect?: historyWhereUniqueInput | historyWhereUniqueInput[]
    update?: historyUpdateWithWhereUniqueWithoutImageInput | historyUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: historyUpdateManyWithWhereWithoutImageInput | historyUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: historyScalarWhereInput | historyScalarWhereInput[]
  }

  export type logsUpdateManyWithoutImageNestedInput = {
    create?: XOR<logsCreateWithoutImageInput, logsUncheckedCreateWithoutImageInput> | logsCreateWithoutImageInput[] | logsUncheckedCreateWithoutImageInput[]
    connectOrCreate?: logsCreateOrConnectWithoutImageInput | logsCreateOrConnectWithoutImageInput[]
    upsert?: logsUpsertWithWhereUniqueWithoutImageInput | logsUpsertWithWhereUniqueWithoutImageInput[]
    createMany?: logsCreateManyImageInputEnvelope
    set?: logsWhereUniqueInput | logsWhereUniqueInput[]
    disconnect?: logsWhereUniqueInput | logsWhereUniqueInput[]
    delete?: logsWhereUniqueInput | logsWhereUniqueInput[]
    connect?: logsWhereUniqueInput | logsWhereUniqueInput[]
    update?: logsUpdateWithWhereUniqueWithoutImageInput | logsUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: logsUpdateManyWithWhereWithoutImageInput | logsUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: logsScalarWhereInput | logsScalarWhereInput[]
  }

  export type historyUncheckedUpdateManyWithoutImageNestedInput = {
    create?: XOR<historyCreateWithoutImageInput, historyUncheckedCreateWithoutImageInput> | historyCreateWithoutImageInput[] | historyUncheckedCreateWithoutImageInput[]
    connectOrCreate?: historyCreateOrConnectWithoutImageInput | historyCreateOrConnectWithoutImageInput[]
    upsert?: historyUpsertWithWhereUniqueWithoutImageInput | historyUpsertWithWhereUniqueWithoutImageInput[]
    createMany?: historyCreateManyImageInputEnvelope
    set?: historyWhereUniqueInput | historyWhereUniqueInput[]
    disconnect?: historyWhereUniqueInput | historyWhereUniqueInput[]
    delete?: historyWhereUniqueInput | historyWhereUniqueInput[]
    connect?: historyWhereUniqueInput | historyWhereUniqueInput[]
    update?: historyUpdateWithWhereUniqueWithoutImageInput | historyUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: historyUpdateManyWithWhereWithoutImageInput | historyUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: historyScalarWhereInput | historyScalarWhereInput[]
  }

  export type logsUncheckedUpdateManyWithoutImageNestedInput = {
    create?: XOR<logsCreateWithoutImageInput, logsUncheckedCreateWithoutImageInput> | logsCreateWithoutImageInput[] | logsUncheckedCreateWithoutImageInput[]
    connectOrCreate?: logsCreateOrConnectWithoutImageInput | logsCreateOrConnectWithoutImageInput[]
    upsert?: logsUpsertWithWhereUniqueWithoutImageInput | logsUpsertWithWhereUniqueWithoutImageInput[]
    createMany?: logsCreateManyImageInputEnvelope
    set?: logsWhereUniqueInput | logsWhereUniqueInput[]
    disconnect?: logsWhereUniqueInput | logsWhereUniqueInput[]
    delete?: logsWhereUniqueInput | logsWhereUniqueInput[]
    connect?: logsWhereUniqueInput | logsWhereUniqueInput[]
    update?: logsUpdateWithWhereUniqueWithoutImageInput | logsUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: logsUpdateManyWithWhereWithoutImageInput | logsUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: logsScalarWhereInput | logsScalarWhereInput[]
  }

  export type ImageCreateNestedOneWithoutLogsInput = {
    create?: XOR<ImageCreateWithoutLogsInput, ImageUncheckedCreateWithoutLogsInput>
    connectOrCreate?: ImageCreateOrConnectWithoutLogsInput
    connect?: ImageWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumTwilioMessageStatusFieldUpdateOperationsInput = {
    set?: $Enums.TwilioMessageStatus
  }

  export type ImageUpdateOneRequiredWithoutLogsNestedInput = {
    create?: XOR<ImageCreateWithoutLogsInput, ImageUncheckedCreateWithoutLogsInput>
    connectOrCreate?: ImageCreateOrConnectWithoutLogsInput
    upsert?: ImageUpsertWithoutLogsInput
    connect?: ImageWhereUniqueInput
    update?: XOR<XOR<ImageUpdateToOneWithWhereWithoutLogsInput, ImageUpdateWithoutLogsInput>, ImageUncheckedUpdateWithoutLogsInput>
  }

  export type ImageCreateNestedOneWithoutHistoriesInput = {
    create?: XOR<ImageCreateWithoutHistoriesInput, ImageUncheckedCreateWithoutHistoriesInput>
    connectOrCreate?: ImageCreateOrConnectWithoutHistoriesInput
    connect?: ImageWhereUniqueInput
  }

  export type ImageUpdateOneRequiredWithoutHistoriesNestedInput = {
    create?: XOR<ImageCreateWithoutHistoriesInput, ImageUncheckedCreateWithoutHistoriesInput>
    connectOrCreate?: ImageCreateOrConnectWithoutHistoriesInput
    upsert?: ImageUpsertWithoutHistoriesInput
    connect?: ImageWhereUniqueInput
    update?: XOR<XOR<ImageUpdateToOneWithWhereWithoutHistoriesInput, ImageUpdateWithoutHistoriesInput>, ImageUncheckedUpdateWithoutHistoriesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumTwilioMessageStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TwilioMessageStatus | EnumTwilioMessageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TwilioMessageStatus[] | ListEnumTwilioMessageStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TwilioMessageStatus[] | ListEnumTwilioMessageStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTwilioMessageStatusFilter<$PrismaModel> | $Enums.TwilioMessageStatus
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumTwilioMessageStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TwilioMessageStatus | EnumTwilioMessageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TwilioMessageStatus[] | ListEnumTwilioMessageStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TwilioMessageStatus[] | ListEnumTwilioMessageStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTwilioMessageStatusWithAggregatesFilter<$PrismaModel> | $Enums.TwilioMessageStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTwilioMessageStatusFilter<$PrismaModel>
    _max?: NestedEnumTwilioMessageStatusFilter<$PrismaModel>
  }

  export type ImageCreateWithoutFolderInput = {
    dropboxPath: string
    url: string
    wasShown?: boolean
    isTodaysPick?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    histories?: historyCreateNestedManyWithoutImageInput
    logs?: logsCreateNestedManyWithoutImageInput
  }

  export type ImageUncheckedCreateWithoutFolderInput = {
    id?: number
    dropboxPath: string
    url: string
    wasShown?: boolean
    isTodaysPick?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    histories?: historyUncheckedCreateNestedManyWithoutImageInput
    logs?: logsUncheckedCreateNestedManyWithoutImageInput
  }

  export type ImageCreateOrConnectWithoutFolderInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutFolderInput, ImageUncheckedCreateWithoutFolderInput>
  }

  export type ImageCreateManyFolderInputEnvelope = {
    data: ImageCreateManyFolderInput | ImageCreateManyFolderInput[]
    skipDuplicates?: boolean
  }

  export type ImageUpsertWithWhereUniqueWithoutFolderInput = {
    where: ImageWhereUniqueInput
    update: XOR<ImageUpdateWithoutFolderInput, ImageUncheckedUpdateWithoutFolderInput>
    create: XOR<ImageCreateWithoutFolderInput, ImageUncheckedCreateWithoutFolderInput>
  }

  export type ImageUpdateWithWhereUniqueWithoutFolderInput = {
    where: ImageWhereUniqueInput
    data: XOR<ImageUpdateWithoutFolderInput, ImageUncheckedUpdateWithoutFolderInput>
  }

  export type ImageUpdateManyWithWhereWithoutFolderInput = {
    where: ImageScalarWhereInput
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyWithoutFolderInput>
  }

  export type ImageScalarWhereInput = {
    AND?: ImageScalarWhereInput | ImageScalarWhereInput[]
    OR?: ImageScalarWhereInput[]
    NOT?: ImageScalarWhereInput | ImageScalarWhereInput[]
    id?: IntFilter<"Image"> | number
    dropboxPath?: StringFilter<"Image"> | string
    url?: StringFilter<"Image"> | string
    wasShown?: BoolFilter<"Image"> | boolean
    isTodaysPick?: BoolFilter<"Image"> | boolean
    createdAt?: DateTimeFilter<"Image"> | Date | string
    updatedAt?: DateTimeFilter<"Image"> | Date | string
    folderId?: IntFilter<"Image"> | number
  }

  export type FolderCreateWithoutImagesInput = {
    name: string
    dropboxPath: string
  }

  export type FolderUncheckedCreateWithoutImagesInput = {
    id?: number
    name: string
    dropboxPath: string
  }

  export type FolderCreateOrConnectWithoutImagesInput = {
    where: FolderWhereUniqueInput
    create: XOR<FolderCreateWithoutImagesInput, FolderUncheckedCreateWithoutImagesInput>
  }

  export type historyCreateWithoutImageInput = {
    count: number
    month: string
    year: number
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type historyUncheckedCreateWithoutImageInput = {
    id?: number
    count: number
    month: string
    year: number
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type historyCreateOrConnectWithoutImageInput = {
    where: historyWhereUniqueInput
    create: XOR<historyCreateWithoutImageInput, historyUncheckedCreateWithoutImageInput>
  }

  export type historyCreateManyImageInputEnvelope = {
    data: historyCreateManyImageInput | historyCreateManyImageInput[]
    skipDuplicates?: boolean
  }

  export type logsCreateWithoutImageInput = {
    action: string
    msgId?: string | null
    status: $Enums.TwilioMessageStatus
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type logsUncheckedCreateWithoutImageInput = {
    id?: number
    action: string
    msgId?: string | null
    status: $Enums.TwilioMessageStatus
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type logsCreateOrConnectWithoutImageInput = {
    where: logsWhereUniqueInput
    create: XOR<logsCreateWithoutImageInput, logsUncheckedCreateWithoutImageInput>
  }

  export type logsCreateManyImageInputEnvelope = {
    data: logsCreateManyImageInput | logsCreateManyImageInput[]
    skipDuplicates?: boolean
  }

  export type FolderUpsertWithoutImagesInput = {
    update: XOR<FolderUpdateWithoutImagesInput, FolderUncheckedUpdateWithoutImagesInput>
    create: XOR<FolderCreateWithoutImagesInput, FolderUncheckedCreateWithoutImagesInput>
    where?: FolderWhereInput
  }

  export type FolderUpdateToOneWithWhereWithoutImagesInput = {
    where?: FolderWhereInput
    data: XOR<FolderUpdateWithoutImagesInput, FolderUncheckedUpdateWithoutImagesInput>
  }

  export type FolderUpdateWithoutImagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    dropboxPath?: StringFieldUpdateOperationsInput | string
  }

  export type FolderUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    dropboxPath?: StringFieldUpdateOperationsInput | string
  }

  export type historyUpsertWithWhereUniqueWithoutImageInput = {
    where: historyWhereUniqueInput
    update: XOR<historyUpdateWithoutImageInput, historyUncheckedUpdateWithoutImageInput>
    create: XOR<historyCreateWithoutImageInput, historyUncheckedCreateWithoutImageInput>
  }

  export type historyUpdateWithWhereUniqueWithoutImageInput = {
    where: historyWhereUniqueInput
    data: XOR<historyUpdateWithoutImageInput, historyUncheckedUpdateWithoutImageInput>
  }

  export type historyUpdateManyWithWhereWithoutImageInput = {
    where: historyScalarWhereInput
    data: XOR<historyUpdateManyMutationInput, historyUncheckedUpdateManyWithoutImageInput>
  }

  export type historyScalarWhereInput = {
    AND?: historyScalarWhereInput | historyScalarWhereInput[]
    OR?: historyScalarWhereInput[]
    NOT?: historyScalarWhereInput | historyScalarWhereInput[]
    id?: IntFilter<"history"> | number
    imageId?: IntFilter<"history"> | number
    count?: IntFilter<"history"> | number
    month?: StringFilter<"history"> | string
    year?: IntFilter<"history"> | number
    updatedAt?: DateTimeFilter<"history"> | Date | string
    createdAt?: DateTimeFilter<"history"> | Date | string
  }

  export type logsUpsertWithWhereUniqueWithoutImageInput = {
    where: logsWhereUniqueInput
    update: XOR<logsUpdateWithoutImageInput, logsUncheckedUpdateWithoutImageInput>
    create: XOR<logsCreateWithoutImageInput, logsUncheckedCreateWithoutImageInput>
  }

  export type logsUpdateWithWhereUniqueWithoutImageInput = {
    where: logsWhereUniqueInput
    data: XOR<logsUpdateWithoutImageInput, logsUncheckedUpdateWithoutImageInput>
  }

  export type logsUpdateManyWithWhereWithoutImageInput = {
    where: logsScalarWhereInput
    data: XOR<logsUpdateManyMutationInput, logsUncheckedUpdateManyWithoutImageInput>
  }

  export type logsScalarWhereInput = {
    AND?: logsScalarWhereInput | logsScalarWhereInput[]
    OR?: logsScalarWhereInput[]
    NOT?: logsScalarWhereInput | logsScalarWhereInput[]
    id?: IntFilter<"logs"> | number
    action?: StringFilter<"logs"> | string
    msgId?: StringNullableFilter<"logs"> | string | null
    imageId?: IntFilter<"logs"> | number
    status?: EnumTwilioMessageStatusFilter<"logs"> | $Enums.TwilioMessageStatus
    updatedAt?: DateTimeFilter<"logs"> | Date | string
    createdAt?: DateTimeFilter<"logs"> | Date | string
  }

  export type ImageCreateWithoutLogsInput = {
    dropboxPath: string
    url: string
    wasShown?: boolean
    isTodaysPick?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    folder: FolderCreateNestedOneWithoutImagesInput
    histories?: historyCreateNestedManyWithoutImageInput
  }

  export type ImageUncheckedCreateWithoutLogsInput = {
    id?: number
    dropboxPath: string
    url: string
    wasShown?: boolean
    isTodaysPick?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    folderId: number
    histories?: historyUncheckedCreateNestedManyWithoutImageInput
  }

  export type ImageCreateOrConnectWithoutLogsInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutLogsInput, ImageUncheckedCreateWithoutLogsInput>
  }

  export type ImageUpsertWithoutLogsInput = {
    update: XOR<ImageUpdateWithoutLogsInput, ImageUncheckedUpdateWithoutLogsInput>
    create: XOR<ImageCreateWithoutLogsInput, ImageUncheckedCreateWithoutLogsInput>
    where?: ImageWhereInput
  }

  export type ImageUpdateToOneWithWhereWithoutLogsInput = {
    where?: ImageWhereInput
    data: XOR<ImageUpdateWithoutLogsInput, ImageUncheckedUpdateWithoutLogsInput>
  }

  export type ImageUpdateWithoutLogsInput = {
    dropboxPath?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    wasShown?: BoolFieldUpdateOperationsInput | boolean
    isTodaysPick?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folder?: FolderUpdateOneRequiredWithoutImagesNestedInput
    histories?: historyUpdateManyWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateWithoutLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    dropboxPath?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    wasShown?: BoolFieldUpdateOperationsInput | boolean
    isTodaysPick?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folderId?: IntFieldUpdateOperationsInput | number
    histories?: historyUncheckedUpdateManyWithoutImageNestedInput
  }

  export type ImageCreateWithoutHistoriesInput = {
    dropboxPath: string
    url: string
    wasShown?: boolean
    isTodaysPick?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    folder: FolderCreateNestedOneWithoutImagesInput
    logs?: logsCreateNestedManyWithoutImageInput
  }

  export type ImageUncheckedCreateWithoutHistoriesInput = {
    id?: number
    dropboxPath: string
    url: string
    wasShown?: boolean
    isTodaysPick?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    folderId: number
    logs?: logsUncheckedCreateNestedManyWithoutImageInput
  }

  export type ImageCreateOrConnectWithoutHistoriesInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutHistoriesInput, ImageUncheckedCreateWithoutHistoriesInput>
  }

  export type ImageUpsertWithoutHistoriesInput = {
    update: XOR<ImageUpdateWithoutHistoriesInput, ImageUncheckedUpdateWithoutHistoriesInput>
    create: XOR<ImageCreateWithoutHistoriesInput, ImageUncheckedCreateWithoutHistoriesInput>
    where?: ImageWhereInput
  }

  export type ImageUpdateToOneWithWhereWithoutHistoriesInput = {
    where?: ImageWhereInput
    data: XOR<ImageUpdateWithoutHistoriesInput, ImageUncheckedUpdateWithoutHistoriesInput>
  }

  export type ImageUpdateWithoutHistoriesInput = {
    dropboxPath?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    wasShown?: BoolFieldUpdateOperationsInput | boolean
    isTodaysPick?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folder?: FolderUpdateOneRequiredWithoutImagesNestedInput
    logs?: logsUpdateManyWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateWithoutHistoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    dropboxPath?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    wasShown?: BoolFieldUpdateOperationsInput | boolean
    isTodaysPick?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folderId?: IntFieldUpdateOperationsInput | number
    logs?: logsUncheckedUpdateManyWithoutImageNestedInput
  }

  export type ImageCreateManyFolderInput = {
    id?: number
    dropboxPath: string
    url: string
    wasShown?: boolean
    isTodaysPick?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageUpdateWithoutFolderInput = {
    dropboxPath?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    wasShown?: BoolFieldUpdateOperationsInput | boolean
    isTodaysPick?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    histories?: historyUpdateManyWithoutImageNestedInput
    logs?: logsUpdateManyWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateWithoutFolderInput = {
    id?: IntFieldUpdateOperationsInput | number
    dropboxPath?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    wasShown?: BoolFieldUpdateOperationsInput | boolean
    isTodaysPick?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    histories?: historyUncheckedUpdateManyWithoutImageNestedInput
    logs?: logsUncheckedUpdateManyWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateManyWithoutFolderInput = {
    id?: IntFieldUpdateOperationsInput | number
    dropboxPath?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    wasShown?: BoolFieldUpdateOperationsInput | boolean
    isTodaysPick?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type historyCreateManyImageInput = {
    id?: number
    count: number
    month: string
    year: number
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type logsCreateManyImageInput = {
    id?: number
    action: string
    msgId?: string | null
    status: $Enums.TwilioMessageStatus
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type historyUpdateWithoutImageInput = {
    count?: IntFieldUpdateOperationsInput | number
    month?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type historyUncheckedUpdateWithoutImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    month?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type historyUncheckedUpdateManyWithoutImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    month?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type logsUpdateWithoutImageInput = {
    action?: StringFieldUpdateOperationsInput | string
    msgId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTwilioMessageStatusFieldUpdateOperationsInput | $Enums.TwilioMessageStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type logsUncheckedUpdateWithoutImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    msgId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTwilioMessageStatusFieldUpdateOperationsInput | $Enums.TwilioMessageStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type logsUncheckedUpdateManyWithoutImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    msgId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTwilioMessageStatusFieldUpdateOperationsInput | $Enums.TwilioMessageStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}