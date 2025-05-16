
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Module
 * 
 */
export type Module = $Result.DefaultSelection<Prisma.$ModulePayload>
/**
 * Model ModuleTier
 * 
 */
export type ModuleTier = $Result.DefaultSelection<Prisma.$ModuleTierPayload>
/**
 * Model Package
 * 
 */
export type Package = $Result.DefaultSelection<Prisma.$PackagePayload>
/**
 * Model PackageModule
 * 
 */
export type PackageModule = $Result.DefaultSelection<Prisma.$PackageModulePayload>
/**
 * Model UserModule
 * 
 */
export type UserModule = $Result.DefaultSelection<Prisma.$UserModulePayload>
/**
 * Model UserPackage
 * 
 */
export type UserPackage = $Result.DefaultSelection<Prisma.$UserPackagePayload>
/**
 * Model ModuleUsage
 * 
 */
export type ModuleUsage = $Result.DefaultSelection<Prisma.$ModuleUsagePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.module`: Exposes CRUD operations for the **Module** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Modules
    * const modules = await prisma.module.findMany()
    * ```
    */
  get module(): Prisma.ModuleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.moduleTier`: Exposes CRUD operations for the **ModuleTier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ModuleTiers
    * const moduleTiers = await prisma.moduleTier.findMany()
    * ```
    */
  get moduleTier(): Prisma.ModuleTierDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.package`: Exposes CRUD operations for the **Package** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Packages
    * const packages = await prisma.package.findMany()
    * ```
    */
  get package(): Prisma.PackageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.packageModule`: Exposes CRUD operations for the **PackageModule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PackageModules
    * const packageModules = await prisma.packageModule.findMany()
    * ```
    */
  get packageModule(): Prisma.PackageModuleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userModule`: Exposes CRUD operations for the **UserModule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserModules
    * const userModules = await prisma.userModule.findMany()
    * ```
    */
  get userModule(): Prisma.UserModuleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userPackage`: Exposes CRUD operations for the **UserPackage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserPackages
    * const userPackages = await prisma.userPackage.findMany()
    * ```
    */
  get userPackage(): Prisma.UserPackageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.moduleUsage`: Exposes CRUD operations for the **ModuleUsage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ModuleUsages
    * const moduleUsages = await prisma.moduleUsage.findMany()
    * ```
    */
  get moduleUsage(): Prisma.ModuleUsageDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    User: 'User',
    Module: 'Module',
    ModuleTier: 'ModuleTier',
    Package: 'Package',
    PackageModule: 'PackageModule',
    UserModule: 'UserModule',
    UserPackage: 'UserPackage',
    ModuleUsage: 'ModuleUsage'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "module" | "moduleTier" | "package" | "packageModule" | "userModule" | "userPackage" | "moduleUsage"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Module: {
        payload: Prisma.$ModulePayload<ExtArgs>
        fields: Prisma.ModuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          findFirst: {
            args: Prisma.ModuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          findMany: {
            args: Prisma.ModuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>[]
          }
          create: {
            args: Prisma.ModuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          createMany: {
            args: Prisma.ModuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ModuleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>[]
          }
          delete: {
            args: Prisma.ModuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          update: {
            args: Prisma.ModuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          deleteMany: {
            args: Prisma.ModuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ModuleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>[]
          }
          upsert: {
            args: Prisma.ModuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          aggregate: {
            args: Prisma.ModuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModule>
          }
          groupBy: {
            args: Prisma.ModuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModuleCountArgs<ExtArgs>
            result: $Utils.Optional<ModuleCountAggregateOutputType> | number
          }
        }
      }
      ModuleTier: {
        payload: Prisma.$ModuleTierPayload<ExtArgs>
        fields: Prisma.ModuleTierFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModuleTierFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuleTierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModuleTierFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuleTierPayload>
          }
          findFirst: {
            args: Prisma.ModuleTierFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuleTierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModuleTierFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuleTierPayload>
          }
          findMany: {
            args: Prisma.ModuleTierFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuleTierPayload>[]
          }
          create: {
            args: Prisma.ModuleTierCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuleTierPayload>
          }
          createMany: {
            args: Prisma.ModuleTierCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ModuleTierCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuleTierPayload>[]
          }
          delete: {
            args: Prisma.ModuleTierDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuleTierPayload>
          }
          update: {
            args: Prisma.ModuleTierUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuleTierPayload>
          }
          deleteMany: {
            args: Prisma.ModuleTierDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModuleTierUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ModuleTierUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuleTierPayload>[]
          }
          upsert: {
            args: Prisma.ModuleTierUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuleTierPayload>
          }
          aggregate: {
            args: Prisma.ModuleTierAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModuleTier>
          }
          groupBy: {
            args: Prisma.ModuleTierGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModuleTierGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModuleTierCountArgs<ExtArgs>
            result: $Utils.Optional<ModuleTierCountAggregateOutputType> | number
          }
        }
      }
      Package: {
        payload: Prisma.$PackagePayload<ExtArgs>
        fields: Prisma.PackageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PackageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PackageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          findFirst: {
            args: Prisma.PackageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PackageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          findMany: {
            args: Prisma.PackageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>[]
          }
          create: {
            args: Prisma.PackageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          createMany: {
            args: Prisma.PackageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PackageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>[]
          }
          delete: {
            args: Prisma.PackageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          update: {
            args: Prisma.PackageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          deleteMany: {
            args: Prisma.PackageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PackageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PackageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>[]
          }
          upsert: {
            args: Prisma.PackageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          aggregate: {
            args: Prisma.PackageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePackage>
          }
          groupBy: {
            args: Prisma.PackageGroupByArgs<ExtArgs>
            result: $Utils.Optional<PackageGroupByOutputType>[]
          }
          count: {
            args: Prisma.PackageCountArgs<ExtArgs>
            result: $Utils.Optional<PackageCountAggregateOutputType> | number
          }
        }
      }
      PackageModule: {
        payload: Prisma.$PackageModulePayload<ExtArgs>
        fields: Prisma.PackageModuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PackageModuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageModulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PackageModuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageModulePayload>
          }
          findFirst: {
            args: Prisma.PackageModuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageModulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PackageModuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageModulePayload>
          }
          findMany: {
            args: Prisma.PackageModuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageModulePayload>[]
          }
          create: {
            args: Prisma.PackageModuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageModulePayload>
          }
          createMany: {
            args: Prisma.PackageModuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PackageModuleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageModulePayload>[]
          }
          delete: {
            args: Prisma.PackageModuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageModulePayload>
          }
          update: {
            args: Prisma.PackageModuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageModulePayload>
          }
          deleteMany: {
            args: Prisma.PackageModuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PackageModuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PackageModuleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageModulePayload>[]
          }
          upsert: {
            args: Prisma.PackageModuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageModulePayload>
          }
          aggregate: {
            args: Prisma.PackageModuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePackageModule>
          }
          groupBy: {
            args: Prisma.PackageModuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<PackageModuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.PackageModuleCountArgs<ExtArgs>
            result: $Utils.Optional<PackageModuleCountAggregateOutputType> | number
          }
        }
      }
      UserModule: {
        payload: Prisma.$UserModulePayload<ExtArgs>
        fields: Prisma.UserModuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserModuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserModulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserModuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserModulePayload>
          }
          findFirst: {
            args: Prisma.UserModuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserModulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserModuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserModulePayload>
          }
          findMany: {
            args: Prisma.UserModuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserModulePayload>[]
          }
          create: {
            args: Prisma.UserModuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserModulePayload>
          }
          createMany: {
            args: Prisma.UserModuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserModuleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserModulePayload>[]
          }
          delete: {
            args: Prisma.UserModuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserModulePayload>
          }
          update: {
            args: Prisma.UserModuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserModulePayload>
          }
          deleteMany: {
            args: Prisma.UserModuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserModuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserModuleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserModulePayload>[]
          }
          upsert: {
            args: Prisma.UserModuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserModulePayload>
          }
          aggregate: {
            args: Prisma.UserModuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserModule>
          }
          groupBy: {
            args: Prisma.UserModuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserModuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserModuleCountArgs<ExtArgs>
            result: $Utils.Optional<UserModuleCountAggregateOutputType> | number
          }
        }
      }
      UserPackage: {
        payload: Prisma.$UserPackagePayload<ExtArgs>
        fields: Prisma.UserPackageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserPackageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPackagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserPackageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPackagePayload>
          }
          findFirst: {
            args: Prisma.UserPackageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPackagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserPackageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPackagePayload>
          }
          findMany: {
            args: Prisma.UserPackageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPackagePayload>[]
          }
          create: {
            args: Prisma.UserPackageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPackagePayload>
          }
          createMany: {
            args: Prisma.UserPackageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserPackageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPackagePayload>[]
          }
          delete: {
            args: Prisma.UserPackageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPackagePayload>
          }
          update: {
            args: Prisma.UserPackageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPackagePayload>
          }
          deleteMany: {
            args: Prisma.UserPackageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserPackageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserPackageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPackagePayload>[]
          }
          upsert: {
            args: Prisma.UserPackageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPackagePayload>
          }
          aggregate: {
            args: Prisma.UserPackageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserPackage>
          }
          groupBy: {
            args: Prisma.UserPackageGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserPackageGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserPackageCountArgs<ExtArgs>
            result: $Utils.Optional<UserPackageCountAggregateOutputType> | number
          }
        }
      }
      ModuleUsage: {
        payload: Prisma.$ModuleUsagePayload<ExtArgs>
        fields: Prisma.ModuleUsageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModuleUsageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuleUsagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModuleUsageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuleUsagePayload>
          }
          findFirst: {
            args: Prisma.ModuleUsageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuleUsagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModuleUsageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuleUsagePayload>
          }
          findMany: {
            args: Prisma.ModuleUsageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuleUsagePayload>[]
          }
          create: {
            args: Prisma.ModuleUsageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuleUsagePayload>
          }
          createMany: {
            args: Prisma.ModuleUsageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ModuleUsageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuleUsagePayload>[]
          }
          delete: {
            args: Prisma.ModuleUsageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuleUsagePayload>
          }
          update: {
            args: Prisma.ModuleUsageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuleUsagePayload>
          }
          deleteMany: {
            args: Prisma.ModuleUsageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModuleUsageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ModuleUsageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuleUsagePayload>[]
          }
          upsert: {
            args: Prisma.ModuleUsageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuleUsagePayload>
          }
          aggregate: {
            args: Prisma.ModuleUsageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModuleUsage>
          }
          groupBy: {
            args: Prisma.ModuleUsageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModuleUsageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModuleUsageCountArgs<ExtArgs>
            result: $Utils.Optional<ModuleUsageCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    module?: ModuleOmit
    moduleTier?: ModuleTierOmit
    package?: PackageOmit
    packageModule?: PackageModuleOmit
    userModule?: UserModuleOmit
    userPackage?: UserPackageOmit
    moduleUsage?: ModuleUsageOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    userModules: number
    userPackages: number
    moduleUsage: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userModules?: boolean | UserCountOutputTypeCountUserModulesArgs
    userPackages?: boolean | UserCountOutputTypeCountUserPackagesArgs
    moduleUsage?: boolean | UserCountOutputTypeCountModuleUsageArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserModulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserModuleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserPackagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPackageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountModuleUsageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModuleUsageWhereInput
  }


  /**
   * Count Type ModuleCountOutputType
   */

  export type ModuleCountOutputType = {
    tiers: number
    userModules: number
    packageModules: number
    moduleUsage: number
  }

  export type ModuleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tiers?: boolean | ModuleCountOutputTypeCountTiersArgs
    userModules?: boolean | ModuleCountOutputTypeCountUserModulesArgs
    packageModules?: boolean | ModuleCountOutputTypeCountPackageModulesArgs
    moduleUsage?: boolean | ModuleCountOutputTypeCountModuleUsageArgs
  }

  // Custom InputTypes
  /**
   * ModuleCountOutputType without action
   */
  export type ModuleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleCountOutputType
     */
    select?: ModuleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ModuleCountOutputType without action
   */
  export type ModuleCountOutputTypeCountTiersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModuleTierWhereInput
  }

  /**
   * ModuleCountOutputType without action
   */
  export type ModuleCountOutputTypeCountUserModulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserModuleWhereInput
  }

  /**
   * ModuleCountOutputType without action
   */
  export type ModuleCountOutputTypeCountPackageModulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PackageModuleWhereInput
  }

  /**
   * ModuleCountOutputType without action
   */
  export type ModuleCountOutputTypeCountModuleUsageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModuleUsageWhereInput
  }


  /**
   * Count Type PackageCountOutputType
   */

  export type PackageCountOutputType = {
    packageModules: number
    userPackages: number
  }

  export type PackageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    packageModules?: boolean | PackageCountOutputTypeCountPackageModulesArgs
    userPackages?: boolean | PackageCountOutputTypeCountUserPackagesArgs
  }

  // Custom InputTypes
  /**
   * PackageCountOutputType without action
   */
  export type PackageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageCountOutputType
     */
    select?: PackageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PackageCountOutputType without action
   */
  export type PackageCountOutputTypeCountPackageModulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PackageModuleWhereInput
  }

  /**
   * PackageCountOutputType without action
   */
  export type PackageCountOutputTypeCountUserPackagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPackageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    password: string | null
    profession: string | null
    country: string | null
    city: string | null
    deviceId: string | null
    isAdmin: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    lastLoginAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    password: string | null
    profession: string | null
    country: string | null
    city: string | null
    deviceId: string | null
    isAdmin: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    lastLoginAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    fullName: number
    email: number
    password: number
    profession: number
    country: number
    city: number
    deviceId: number
    isAdmin: number
    createdAt: number
    updatedAt: number
    lastLoginAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    password?: true
    profession?: true
    country?: true
    city?: true
    deviceId?: true
    isAdmin?: true
    createdAt?: true
    updatedAt?: true
    lastLoginAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    password?: true
    profession?: true
    country?: true
    city?: true
    deviceId?: true
    isAdmin?: true
    createdAt?: true
    updatedAt?: true
    lastLoginAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    password?: true
    profession?: true
    country?: true
    city?: true
    deviceId?: true
    isAdmin?: true
    createdAt?: true
    updatedAt?: true
    lastLoginAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    fullName: string
    email: string
    password: string
    profession: string | null
    country: string | null
    city: string | null
    deviceId: string | null
    isAdmin: boolean
    createdAt: Date
    updatedAt: Date
    lastLoginAt: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    profession?: boolean
    country?: boolean
    city?: boolean
    deviceId?: boolean
    isAdmin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLoginAt?: boolean
    userModules?: boolean | User$userModulesArgs<ExtArgs>
    userPackages?: boolean | User$userPackagesArgs<ExtArgs>
    moduleUsage?: boolean | User$moduleUsageArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    profession?: boolean
    country?: boolean
    city?: boolean
    deviceId?: boolean
    isAdmin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLoginAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    profession?: boolean
    country?: boolean
    city?: boolean
    deviceId?: boolean
    isAdmin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLoginAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    profession?: boolean
    country?: boolean
    city?: boolean
    deviceId?: boolean
    isAdmin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLoginAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "email" | "password" | "profession" | "country" | "city" | "deviceId" | "isAdmin" | "createdAt" | "updatedAt" | "lastLoginAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userModules?: boolean | User$userModulesArgs<ExtArgs>
    userPackages?: boolean | User$userPackagesArgs<ExtArgs>
    moduleUsage?: boolean | User$moduleUsageArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      userModules: Prisma.$UserModulePayload<ExtArgs>[]
      userPackages: Prisma.$UserPackagePayload<ExtArgs>[]
      moduleUsage: Prisma.$ModuleUsagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      email: string
      password: string
      profession: string | null
      country: string | null
      city: string | null
      deviceId: string | null
      isAdmin: boolean
      createdAt: Date
      updatedAt: Date
      lastLoginAt: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userModules<T extends User$userModulesArgs<ExtArgs> = {}>(args?: Subset<T, User$userModulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserModulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userPackages<T extends User$userPackagesArgs<ExtArgs> = {}>(args?: Subset<T, User$userPackagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPackagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    moduleUsage<T extends User$moduleUsageArgs<ExtArgs> = {}>(args?: Subset<T, User$moduleUsageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModuleUsagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly profession: FieldRef<"User", 'String'>
    readonly country: FieldRef<"User", 'String'>
    readonly city: FieldRef<"User", 'String'>
    readonly deviceId: FieldRef<"User", 'String'>
    readonly isAdmin: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly lastLoginAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.userModules
   */
  export type User$userModulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModule
     */
    select?: UserModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserModule
     */
    omit?: UserModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModuleInclude<ExtArgs> | null
    where?: UserModuleWhereInput
    orderBy?: UserModuleOrderByWithRelationInput | UserModuleOrderByWithRelationInput[]
    cursor?: UserModuleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserModuleScalarFieldEnum | UserModuleScalarFieldEnum[]
  }

  /**
   * User.userPackages
   */
  export type User$userPackagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPackage
     */
    select?: UserPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPackage
     */
    omit?: UserPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPackageInclude<ExtArgs> | null
    where?: UserPackageWhereInput
    orderBy?: UserPackageOrderByWithRelationInput | UserPackageOrderByWithRelationInput[]
    cursor?: UserPackageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserPackageScalarFieldEnum | UserPackageScalarFieldEnum[]
  }

  /**
   * User.moduleUsage
   */
  export type User$moduleUsageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleUsage
     */
    select?: ModuleUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleUsage
     */
    omit?: ModuleUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleUsageInclude<ExtArgs> | null
    where?: ModuleUsageWhereInput
    orderBy?: ModuleUsageOrderByWithRelationInput | ModuleUsageOrderByWithRelationInput[]
    cursor?: ModuleUsageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModuleUsageScalarFieldEnum | ModuleUsageScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Module
   */

  export type AggregateModule = {
    _count: ModuleCountAggregateOutputType | null
    _min: ModuleMinAggregateOutputType | null
    _max: ModuleMaxAggregateOutputType | null
  }

  export type ModuleMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ModuleMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ModuleCountAggregateOutputType = {
    id: number
    name: number
    description: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ModuleMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ModuleMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ModuleCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ModuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Module to aggregate.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Modules
    **/
    _count?: true | ModuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModuleMaxAggregateInputType
  }

  export type GetModuleAggregateType<T extends ModuleAggregateArgs> = {
        [P in keyof T & keyof AggregateModule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModule[P]>
      : GetScalarType<T[P], AggregateModule[P]>
  }




  export type ModuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModuleWhereInput
    orderBy?: ModuleOrderByWithAggregationInput | ModuleOrderByWithAggregationInput[]
    by: ModuleScalarFieldEnum[] | ModuleScalarFieldEnum
    having?: ModuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModuleCountAggregateInputType | true
    _min?: ModuleMinAggregateInputType
    _max?: ModuleMaxAggregateInputType
  }

  export type ModuleGroupByOutputType = {
    id: string
    name: string
    description: string | null
    status: string
    createdAt: Date
    updatedAt: Date
    _count: ModuleCountAggregateOutputType | null
    _min: ModuleMinAggregateOutputType | null
    _max: ModuleMaxAggregateOutputType | null
  }

  type GetModuleGroupByPayload<T extends ModuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModuleGroupByOutputType[P]>
            : GetScalarType<T[P], ModuleGroupByOutputType[P]>
        }
      >
    >


  export type ModuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tiers?: boolean | Module$tiersArgs<ExtArgs>
    userModules?: boolean | Module$userModulesArgs<ExtArgs>
    packageModules?: boolean | Module$packageModulesArgs<ExtArgs>
    moduleUsage?: boolean | Module$moduleUsageArgs<ExtArgs>
    _count?: boolean | ModuleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["module"]>

  export type ModuleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["module"]>

  export type ModuleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["module"]>

  export type ModuleSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ModuleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["module"]>
  export type ModuleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tiers?: boolean | Module$tiersArgs<ExtArgs>
    userModules?: boolean | Module$userModulesArgs<ExtArgs>
    packageModules?: boolean | Module$packageModulesArgs<ExtArgs>
    moduleUsage?: boolean | Module$moduleUsageArgs<ExtArgs>
    _count?: boolean | ModuleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ModuleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ModuleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ModulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Module"
    objects: {
      tiers: Prisma.$ModuleTierPayload<ExtArgs>[]
      userModules: Prisma.$UserModulePayload<ExtArgs>[]
      packageModules: Prisma.$PackageModulePayload<ExtArgs>[]
      moduleUsage: Prisma.$ModuleUsagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["module"]>
    composites: {}
  }

  type ModuleGetPayload<S extends boolean | null | undefined | ModuleDefaultArgs> = $Result.GetResult<Prisma.$ModulePayload, S>

  type ModuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ModuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModuleCountAggregateInputType | true
    }

  export interface ModuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Module'], meta: { name: 'Module' } }
    /**
     * Find zero or one Module that matches the filter.
     * @param {ModuleFindUniqueArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModuleFindUniqueArgs>(args: SelectSubset<T, ModuleFindUniqueArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Module that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ModuleFindUniqueOrThrowArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModuleFindUniqueOrThrowArgs>(args: SelectSubset<T, ModuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Module that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleFindFirstArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModuleFindFirstArgs>(args?: SelectSubset<T, ModuleFindFirstArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Module that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleFindFirstOrThrowArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModuleFindFirstOrThrowArgs>(args?: SelectSubset<T, ModuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Modules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Modules
     * const modules = await prisma.module.findMany()
     * 
     * // Get first 10 Modules
     * const modules = await prisma.module.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moduleWithIdOnly = await prisma.module.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ModuleFindManyArgs>(args?: SelectSubset<T, ModuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Module.
     * @param {ModuleCreateArgs} args - Arguments to create a Module.
     * @example
     * // Create one Module
     * const Module = await prisma.module.create({
     *   data: {
     *     // ... data to create a Module
     *   }
     * })
     * 
     */
    create<T extends ModuleCreateArgs>(args: SelectSubset<T, ModuleCreateArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Modules.
     * @param {ModuleCreateManyArgs} args - Arguments to create many Modules.
     * @example
     * // Create many Modules
     * const module = await prisma.module.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModuleCreateManyArgs>(args?: SelectSubset<T, ModuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Modules and returns the data saved in the database.
     * @param {ModuleCreateManyAndReturnArgs} args - Arguments to create many Modules.
     * @example
     * // Create many Modules
     * const module = await prisma.module.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Modules and only return the `id`
     * const moduleWithIdOnly = await prisma.module.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ModuleCreateManyAndReturnArgs>(args?: SelectSubset<T, ModuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Module.
     * @param {ModuleDeleteArgs} args - Arguments to delete one Module.
     * @example
     * // Delete one Module
     * const Module = await prisma.module.delete({
     *   where: {
     *     // ... filter to delete one Module
     *   }
     * })
     * 
     */
    delete<T extends ModuleDeleteArgs>(args: SelectSubset<T, ModuleDeleteArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Module.
     * @param {ModuleUpdateArgs} args - Arguments to update one Module.
     * @example
     * // Update one Module
     * const module = await prisma.module.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModuleUpdateArgs>(args: SelectSubset<T, ModuleUpdateArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Modules.
     * @param {ModuleDeleteManyArgs} args - Arguments to filter Modules to delete.
     * @example
     * // Delete a few Modules
     * const { count } = await prisma.module.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModuleDeleteManyArgs>(args?: SelectSubset<T, ModuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Modules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Modules
     * const module = await prisma.module.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModuleUpdateManyArgs>(args: SelectSubset<T, ModuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Modules and returns the data updated in the database.
     * @param {ModuleUpdateManyAndReturnArgs} args - Arguments to update many Modules.
     * @example
     * // Update many Modules
     * const module = await prisma.module.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Modules and only return the `id`
     * const moduleWithIdOnly = await prisma.module.updateManyAndReturn({
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
    updateManyAndReturn<T extends ModuleUpdateManyAndReturnArgs>(args: SelectSubset<T, ModuleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Module.
     * @param {ModuleUpsertArgs} args - Arguments to update or create a Module.
     * @example
     * // Update or create a Module
     * const module = await prisma.module.upsert({
     *   create: {
     *     // ... data to create a Module
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Module we want to update
     *   }
     * })
     */
    upsert<T extends ModuleUpsertArgs>(args: SelectSubset<T, ModuleUpsertArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Modules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleCountArgs} args - Arguments to filter Modules to count.
     * @example
     * // Count the number of Modules
     * const count = await prisma.module.count({
     *   where: {
     *     // ... the filter for the Modules we want to count
     *   }
     * })
    **/
    count<T extends ModuleCountArgs>(
      args?: Subset<T, ModuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Module.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ModuleAggregateArgs>(args: Subset<T, ModuleAggregateArgs>): Prisma.PrismaPromise<GetModuleAggregateType<T>>

    /**
     * Group by Module.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleGroupByArgs} args - Group by arguments.
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
      T extends ModuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModuleGroupByArgs['orderBy'] }
        : { orderBy?: ModuleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ModuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Module model
   */
  readonly fields: ModuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Module.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tiers<T extends Module$tiersArgs<ExtArgs> = {}>(args?: Subset<T, Module$tiersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModuleTierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userModules<T extends Module$userModulesArgs<ExtArgs> = {}>(args?: Subset<T, Module$userModulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserModulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    packageModules<T extends Module$packageModulesArgs<ExtArgs> = {}>(args?: Subset<T, Module$packageModulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackageModulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    moduleUsage<T extends Module$moduleUsageArgs<ExtArgs> = {}>(args?: Subset<T, Module$moduleUsageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModuleUsagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Module model
   */
  interface ModuleFieldRefs {
    readonly id: FieldRef<"Module", 'String'>
    readonly name: FieldRef<"Module", 'String'>
    readonly description: FieldRef<"Module", 'String'>
    readonly status: FieldRef<"Module", 'String'>
    readonly createdAt: FieldRef<"Module", 'DateTime'>
    readonly updatedAt: FieldRef<"Module", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Module findUnique
   */
  export type ModuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Module to fetch.
     */
    where: ModuleWhereUniqueInput
  }

  /**
   * Module findUniqueOrThrow
   */
  export type ModuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Module to fetch.
     */
    where: ModuleWhereUniqueInput
  }

  /**
   * Module findFirst
   */
  export type ModuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Module to fetch.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Modules.
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Modules.
     */
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * Module findFirstOrThrow
   */
  export type ModuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Module to fetch.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Modules.
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Modules.
     */
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * Module findMany
   */
  export type ModuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Modules to fetch.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Modules.
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * Module create
   */
  export type ModuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * The data needed to create a Module.
     */
    data: XOR<ModuleCreateInput, ModuleUncheckedCreateInput>
  }

  /**
   * Module createMany
   */
  export type ModuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Modules.
     */
    data: ModuleCreateManyInput | ModuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Module createManyAndReturn
   */
  export type ModuleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * The data used to create many Modules.
     */
    data: ModuleCreateManyInput | ModuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Module update
   */
  export type ModuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * The data needed to update a Module.
     */
    data: XOR<ModuleUpdateInput, ModuleUncheckedUpdateInput>
    /**
     * Choose, which Module to update.
     */
    where: ModuleWhereUniqueInput
  }

  /**
   * Module updateMany
   */
  export type ModuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Modules.
     */
    data: XOR<ModuleUpdateManyMutationInput, ModuleUncheckedUpdateManyInput>
    /**
     * Filter which Modules to update
     */
    where?: ModuleWhereInput
    /**
     * Limit how many Modules to update.
     */
    limit?: number
  }

  /**
   * Module updateManyAndReturn
   */
  export type ModuleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * The data used to update Modules.
     */
    data: XOR<ModuleUpdateManyMutationInput, ModuleUncheckedUpdateManyInput>
    /**
     * Filter which Modules to update
     */
    where?: ModuleWhereInput
    /**
     * Limit how many Modules to update.
     */
    limit?: number
  }

  /**
   * Module upsert
   */
  export type ModuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * The filter to search for the Module to update in case it exists.
     */
    where: ModuleWhereUniqueInput
    /**
     * In case the Module found by the `where` argument doesn't exist, create a new Module with this data.
     */
    create: XOR<ModuleCreateInput, ModuleUncheckedCreateInput>
    /**
     * In case the Module was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModuleUpdateInput, ModuleUncheckedUpdateInput>
  }

  /**
   * Module delete
   */
  export type ModuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter which Module to delete.
     */
    where: ModuleWhereUniqueInput
  }

  /**
   * Module deleteMany
   */
  export type ModuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Modules to delete
     */
    where?: ModuleWhereInput
    /**
     * Limit how many Modules to delete.
     */
    limit?: number
  }

  /**
   * Module.tiers
   */
  export type Module$tiersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleTier
     */
    select?: ModuleTierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleTier
     */
    omit?: ModuleTierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleTierInclude<ExtArgs> | null
    where?: ModuleTierWhereInput
    orderBy?: ModuleTierOrderByWithRelationInput | ModuleTierOrderByWithRelationInput[]
    cursor?: ModuleTierWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModuleTierScalarFieldEnum | ModuleTierScalarFieldEnum[]
  }

  /**
   * Module.userModules
   */
  export type Module$userModulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModule
     */
    select?: UserModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserModule
     */
    omit?: UserModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModuleInclude<ExtArgs> | null
    where?: UserModuleWhereInput
    orderBy?: UserModuleOrderByWithRelationInput | UserModuleOrderByWithRelationInput[]
    cursor?: UserModuleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserModuleScalarFieldEnum | UserModuleScalarFieldEnum[]
  }

  /**
   * Module.packageModules
   */
  export type Module$packageModulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageModule
     */
    select?: PackageModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageModule
     */
    omit?: PackageModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageModuleInclude<ExtArgs> | null
    where?: PackageModuleWhereInput
    orderBy?: PackageModuleOrderByWithRelationInput | PackageModuleOrderByWithRelationInput[]
    cursor?: PackageModuleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PackageModuleScalarFieldEnum | PackageModuleScalarFieldEnum[]
  }

  /**
   * Module.moduleUsage
   */
  export type Module$moduleUsageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleUsage
     */
    select?: ModuleUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleUsage
     */
    omit?: ModuleUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleUsageInclude<ExtArgs> | null
    where?: ModuleUsageWhereInput
    orderBy?: ModuleUsageOrderByWithRelationInput | ModuleUsageOrderByWithRelationInput[]
    cursor?: ModuleUsageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModuleUsageScalarFieldEnum | ModuleUsageScalarFieldEnum[]
  }

  /**
   * Module without action
   */
  export type ModuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
  }


  /**
   * Model ModuleTier
   */

  export type AggregateModuleTier = {
    _count: ModuleTierCountAggregateOutputType | null
    _avg: ModuleTierAvgAggregateOutputType | null
    _sum: ModuleTierSumAggregateOutputType | null
    _min: ModuleTierMinAggregateOutputType | null
    _max: ModuleTierMaxAggregateOutputType | null
  }

  export type ModuleTierAvgAggregateOutputType = {
    price: Decimal | null
    usageLimit: number | null
  }

  export type ModuleTierSumAggregateOutputType = {
    price: Decimal | null
    usageLimit: number | null
  }

  export type ModuleTierMinAggregateOutputType = {
    id: string | null
    moduleId: string | null
    tier: string | null
    entitlementName: string | null
    revCatEntitlementName: string | null
    webviewUrl: string | null
    zipFileUrl: string | null
    iconUrl: string | null
    hasTextProduction: boolean | null
    hasConclusion: boolean | null
    hasMap: boolean | null
    price: Decimal | null
    usageLimit: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ModuleTierMaxAggregateOutputType = {
    id: string | null
    moduleId: string | null
    tier: string | null
    entitlementName: string | null
    revCatEntitlementName: string | null
    webviewUrl: string | null
    zipFileUrl: string | null
    iconUrl: string | null
    hasTextProduction: boolean | null
    hasConclusion: boolean | null
    hasMap: boolean | null
    price: Decimal | null
    usageLimit: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ModuleTierCountAggregateOutputType = {
    id: number
    moduleId: number
    tier: number
    entitlementName: number
    revCatEntitlementName: number
    webviewUrl: number
    zipFileUrl: number
    iconUrl: number
    hasTextProduction: number
    hasConclusion: number
    hasMap: number
    price: number
    usageLimit: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ModuleTierAvgAggregateInputType = {
    price?: true
    usageLimit?: true
  }

  export type ModuleTierSumAggregateInputType = {
    price?: true
    usageLimit?: true
  }

  export type ModuleTierMinAggregateInputType = {
    id?: true
    moduleId?: true
    tier?: true
    entitlementName?: true
    revCatEntitlementName?: true
    webviewUrl?: true
    zipFileUrl?: true
    iconUrl?: true
    hasTextProduction?: true
    hasConclusion?: true
    hasMap?: true
    price?: true
    usageLimit?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ModuleTierMaxAggregateInputType = {
    id?: true
    moduleId?: true
    tier?: true
    entitlementName?: true
    revCatEntitlementName?: true
    webviewUrl?: true
    zipFileUrl?: true
    iconUrl?: true
    hasTextProduction?: true
    hasConclusion?: true
    hasMap?: true
    price?: true
    usageLimit?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ModuleTierCountAggregateInputType = {
    id?: true
    moduleId?: true
    tier?: true
    entitlementName?: true
    revCatEntitlementName?: true
    webviewUrl?: true
    zipFileUrl?: true
    iconUrl?: true
    hasTextProduction?: true
    hasConclusion?: true
    hasMap?: true
    price?: true
    usageLimit?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ModuleTierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModuleTier to aggregate.
     */
    where?: ModuleTierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModuleTiers to fetch.
     */
    orderBy?: ModuleTierOrderByWithRelationInput | ModuleTierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModuleTierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModuleTiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModuleTiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ModuleTiers
    **/
    _count?: true | ModuleTierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModuleTierAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModuleTierSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModuleTierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModuleTierMaxAggregateInputType
  }

  export type GetModuleTierAggregateType<T extends ModuleTierAggregateArgs> = {
        [P in keyof T & keyof AggregateModuleTier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModuleTier[P]>
      : GetScalarType<T[P], AggregateModuleTier[P]>
  }




  export type ModuleTierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModuleTierWhereInput
    orderBy?: ModuleTierOrderByWithAggregationInput | ModuleTierOrderByWithAggregationInput[]
    by: ModuleTierScalarFieldEnum[] | ModuleTierScalarFieldEnum
    having?: ModuleTierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModuleTierCountAggregateInputType | true
    _avg?: ModuleTierAvgAggregateInputType
    _sum?: ModuleTierSumAggregateInputType
    _min?: ModuleTierMinAggregateInputType
    _max?: ModuleTierMaxAggregateInputType
  }

  export type ModuleTierGroupByOutputType = {
    id: string
    moduleId: string
    tier: string
    entitlementName: string
    revCatEntitlementName: string
    webviewUrl: string | null
    zipFileUrl: string | null
    iconUrl: string | null
    hasTextProduction: boolean
    hasConclusion: boolean
    hasMap: boolean
    price: Decimal | null
    usageLimit: number
    createdAt: Date
    updatedAt: Date
    _count: ModuleTierCountAggregateOutputType | null
    _avg: ModuleTierAvgAggregateOutputType | null
    _sum: ModuleTierSumAggregateOutputType | null
    _min: ModuleTierMinAggregateOutputType | null
    _max: ModuleTierMaxAggregateOutputType | null
  }

  type GetModuleTierGroupByPayload<T extends ModuleTierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModuleTierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModuleTierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModuleTierGroupByOutputType[P]>
            : GetScalarType<T[P], ModuleTierGroupByOutputType[P]>
        }
      >
    >


  export type ModuleTierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    moduleId?: boolean
    tier?: boolean
    entitlementName?: boolean
    revCatEntitlementName?: boolean
    webviewUrl?: boolean
    zipFileUrl?: boolean
    iconUrl?: boolean
    hasTextProduction?: boolean
    hasConclusion?: boolean
    hasMap?: boolean
    price?: boolean
    usageLimit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["moduleTier"]>

  export type ModuleTierSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    moduleId?: boolean
    tier?: boolean
    entitlementName?: boolean
    revCatEntitlementName?: boolean
    webviewUrl?: boolean
    zipFileUrl?: boolean
    iconUrl?: boolean
    hasTextProduction?: boolean
    hasConclusion?: boolean
    hasMap?: boolean
    price?: boolean
    usageLimit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["moduleTier"]>

  export type ModuleTierSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    moduleId?: boolean
    tier?: boolean
    entitlementName?: boolean
    revCatEntitlementName?: boolean
    webviewUrl?: boolean
    zipFileUrl?: boolean
    iconUrl?: boolean
    hasTextProduction?: boolean
    hasConclusion?: boolean
    hasMap?: boolean
    price?: boolean
    usageLimit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["moduleTier"]>

  export type ModuleTierSelectScalar = {
    id?: boolean
    moduleId?: boolean
    tier?: boolean
    entitlementName?: boolean
    revCatEntitlementName?: boolean
    webviewUrl?: boolean
    zipFileUrl?: boolean
    iconUrl?: boolean
    hasTextProduction?: boolean
    hasConclusion?: boolean
    hasMap?: boolean
    price?: boolean
    usageLimit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ModuleTierOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "moduleId" | "tier" | "entitlementName" | "revCatEntitlementName" | "webviewUrl" | "zipFileUrl" | "iconUrl" | "hasTextProduction" | "hasConclusion" | "hasMap" | "price" | "usageLimit" | "createdAt" | "updatedAt", ExtArgs["result"]["moduleTier"]>
  export type ModuleTierInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }
  export type ModuleTierIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }
  export type ModuleTierIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }

  export type $ModuleTierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ModuleTier"
    objects: {
      module: Prisma.$ModulePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      moduleId: string
      tier: string
      entitlementName: string
      revCatEntitlementName: string
      webviewUrl: string | null
      zipFileUrl: string | null
      iconUrl: string | null
      hasTextProduction: boolean
      hasConclusion: boolean
      hasMap: boolean
      price: Prisma.Decimal | null
      usageLimit: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["moduleTier"]>
    composites: {}
  }

  type ModuleTierGetPayload<S extends boolean | null | undefined | ModuleTierDefaultArgs> = $Result.GetResult<Prisma.$ModuleTierPayload, S>

  type ModuleTierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ModuleTierFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModuleTierCountAggregateInputType | true
    }

  export interface ModuleTierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ModuleTier'], meta: { name: 'ModuleTier' } }
    /**
     * Find zero or one ModuleTier that matches the filter.
     * @param {ModuleTierFindUniqueArgs} args - Arguments to find a ModuleTier
     * @example
     * // Get one ModuleTier
     * const moduleTier = await prisma.moduleTier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModuleTierFindUniqueArgs>(args: SelectSubset<T, ModuleTierFindUniqueArgs<ExtArgs>>): Prisma__ModuleTierClient<$Result.GetResult<Prisma.$ModuleTierPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ModuleTier that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ModuleTierFindUniqueOrThrowArgs} args - Arguments to find a ModuleTier
     * @example
     * // Get one ModuleTier
     * const moduleTier = await prisma.moduleTier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModuleTierFindUniqueOrThrowArgs>(args: SelectSubset<T, ModuleTierFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModuleTierClient<$Result.GetResult<Prisma.$ModuleTierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ModuleTier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleTierFindFirstArgs} args - Arguments to find a ModuleTier
     * @example
     * // Get one ModuleTier
     * const moduleTier = await prisma.moduleTier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModuleTierFindFirstArgs>(args?: SelectSubset<T, ModuleTierFindFirstArgs<ExtArgs>>): Prisma__ModuleTierClient<$Result.GetResult<Prisma.$ModuleTierPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ModuleTier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleTierFindFirstOrThrowArgs} args - Arguments to find a ModuleTier
     * @example
     * // Get one ModuleTier
     * const moduleTier = await prisma.moduleTier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModuleTierFindFirstOrThrowArgs>(args?: SelectSubset<T, ModuleTierFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModuleTierClient<$Result.GetResult<Prisma.$ModuleTierPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ModuleTiers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleTierFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ModuleTiers
     * const moduleTiers = await prisma.moduleTier.findMany()
     * 
     * // Get first 10 ModuleTiers
     * const moduleTiers = await prisma.moduleTier.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moduleTierWithIdOnly = await prisma.moduleTier.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ModuleTierFindManyArgs>(args?: SelectSubset<T, ModuleTierFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModuleTierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ModuleTier.
     * @param {ModuleTierCreateArgs} args - Arguments to create a ModuleTier.
     * @example
     * // Create one ModuleTier
     * const ModuleTier = await prisma.moduleTier.create({
     *   data: {
     *     // ... data to create a ModuleTier
     *   }
     * })
     * 
     */
    create<T extends ModuleTierCreateArgs>(args: SelectSubset<T, ModuleTierCreateArgs<ExtArgs>>): Prisma__ModuleTierClient<$Result.GetResult<Prisma.$ModuleTierPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ModuleTiers.
     * @param {ModuleTierCreateManyArgs} args - Arguments to create many ModuleTiers.
     * @example
     * // Create many ModuleTiers
     * const moduleTier = await prisma.moduleTier.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModuleTierCreateManyArgs>(args?: SelectSubset<T, ModuleTierCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ModuleTiers and returns the data saved in the database.
     * @param {ModuleTierCreateManyAndReturnArgs} args - Arguments to create many ModuleTiers.
     * @example
     * // Create many ModuleTiers
     * const moduleTier = await prisma.moduleTier.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ModuleTiers and only return the `id`
     * const moduleTierWithIdOnly = await prisma.moduleTier.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ModuleTierCreateManyAndReturnArgs>(args?: SelectSubset<T, ModuleTierCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModuleTierPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ModuleTier.
     * @param {ModuleTierDeleteArgs} args - Arguments to delete one ModuleTier.
     * @example
     * // Delete one ModuleTier
     * const ModuleTier = await prisma.moduleTier.delete({
     *   where: {
     *     // ... filter to delete one ModuleTier
     *   }
     * })
     * 
     */
    delete<T extends ModuleTierDeleteArgs>(args: SelectSubset<T, ModuleTierDeleteArgs<ExtArgs>>): Prisma__ModuleTierClient<$Result.GetResult<Prisma.$ModuleTierPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ModuleTier.
     * @param {ModuleTierUpdateArgs} args - Arguments to update one ModuleTier.
     * @example
     * // Update one ModuleTier
     * const moduleTier = await prisma.moduleTier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModuleTierUpdateArgs>(args: SelectSubset<T, ModuleTierUpdateArgs<ExtArgs>>): Prisma__ModuleTierClient<$Result.GetResult<Prisma.$ModuleTierPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ModuleTiers.
     * @param {ModuleTierDeleteManyArgs} args - Arguments to filter ModuleTiers to delete.
     * @example
     * // Delete a few ModuleTiers
     * const { count } = await prisma.moduleTier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModuleTierDeleteManyArgs>(args?: SelectSubset<T, ModuleTierDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModuleTiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleTierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ModuleTiers
     * const moduleTier = await prisma.moduleTier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModuleTierUpdateManyArgs>(args: SelectSubset<T, ModuleTierUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModuleTiers and returns the data updated in the database.
     * @param {ModuleTierUpdateManyAndReturnArgs} args - Arguments to update many ModuleTiers.
     * @example
     * // Update many ModuleTiers
     * const moduleTier = await prisma.moduleTier.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ModuleTiers and only return the `id`
     * const moduleTierWithIdOnly = await prisma.moduleTier.updateManyAndReturn({
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
    updateManyAndReturn<T extends ModuleTierUpdateManyAndReturnArgs>(args: SelectSubset<T, ModuleTierUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModuleTierPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ModuleTier.
     * @param {ModuleTierUpsertArgs} args - Arguments to update or create a ModuleTier.
     * @example
     * // Update or create a ModuleTier
     * const moduleTier = await prisma.moduleTier.upsert({
     *   create: {
     *     // ... data to create a ModuleTier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ModuleTier we want to update
     *   }
     * })
     */
    upsert<T extends ModuleTierUpsertArgs>(args: SelectSubset<T, ModuleTierUpsertArgs<ExtArgs>>): Prisma__ModuleTierClient<$Result.GetResult<Prisma.$ModuleTierPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ModuleTiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleTierCountArgs} args - Arguments to filter ModuleTiers to count.
     * @example
     * // Count the number of ModuleTiers
     * const count = await prisma.moduleTier.count({
     *   where: {
     *     // ... the filter for the ModuleTiers we want to count
     *   }
     * })
    **/
    count<T extends ModuleTierCountArgs>(
      args?: Subset<T, ModuleTierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModuleTierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ModuleTier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleTierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ModuleTierAggregateArgs>(args: Subset<T, ModuleTierAggregateArgs>): Prisma.PrismaPromise<GetModuleTierAggregateType<T>>

    /**
     * Group by ModuleTier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleTierGroupByArgs} args - Group by arguments.
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
      T extends ModuleTierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModuleTierGroupByArgs['orderBy'] }
        : { orderBy?: ModuleTierGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ModuleTierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModuleTierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ModuleTier model
   */
  readonly fields: ModuleTierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ModuleTier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModuleTierClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    module<T extends ModuleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModuleDefaultArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ModuleTier model
   */
  interface ModuleTierFieldRefs {
    readonly id: FieldRef<"ModuleTier", 'String'>
    readonly moduleId: FieldRef<"ModuleTier", 'String'>
    readonly tier: FieldRef<"ModuleTier", 'String'>
    readonly entitlementName: FieldRef<"ModuleTier", 'String'>
    readonly revCatEntitlementName: FieldRef<"ModuleTier", 'String'>
    readonly webviewUrl: FieldRef<"ModuleTier", 'String'>
    readonly zipFileUrl: FieldRef<"ModuleTier", 'String'>
    readonly iconUrl: FieldRef<"ModuleTier", 'String'>
    readonly hasTextProduction: FieldRef<"ModuleTier", 'Boolean'>
    readonly hasConclusion: FieldRef<"ModuleTier", 'Boolean'>
    readonly hasMap: FieldRef<"ModuleTier", 'Boolean'>
    readonly price: FieldRef<"ModuleTier", 'Decimal'>
    readonly usageLimit: FieldRef<"ModuleTier", 'Int'>
    readonly createdAt: FieldRef<"ModuleTier", 'DateTime'>
    readonly updatedAt: FieldRef<"ModuleTier", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ModuleTier findUnique
   */
  export type ModuleTierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleTier
     */
    select?: ModuleTierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleTier
     */
    omit?: ModuleTierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleTierInclude<ExtArgs> | null
    /**
     * Filter, which ModuleTier to fetch.
     */
    where: ModuleTierWhereUniqueInput
  }

  /**
   * ModuleTier findUniqueOrThrow
   */
  export type ModuleTierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleTier
     */
    select?: ModuleTierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleTier
     */
    omit?: ModuleTierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleTierInclude<ExtArgs> | null
    /**
     * Filter, which ModuleTier to fetch.
     */
    where: ModuleTierWhereUniqueInput
  }

  /**
   * ModuleTier findFirst
   */
  export type ModuleTierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleTier
     */
    select?: ModuleTierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleTier
     */
    omit?: ModuleTierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleTierInclude<ExtArgs> | null
    /**
     * Filter, which ModuleTier to fetch.
     */
    where?: ModuleTierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModuleTiers to fetch.
     */
    orderBy?: ModuleTierOrderByWithRelationInput | ModuleTierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModuleTiers.
     */
    cursor?: ModuleTierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModuleTiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModuleTiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModuleTiers.
     */
    distinct?: ModuleTierScalarFieldEnum | ModuleTierScalarFieldEnum[]
  }

  /**
   * ModuleTier findFirstOrThrow
   */
  export type ModuleTierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleTier
     */
    select?: ModuleTierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleTier
     */
    omit?: ModuleTierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleTierInclude<ExtArgs> | null
    /**
     * Filter, which ModuleTier to fetch.
     */
    where?: ModuleTierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModuleTiers to fetch.
     */
    orderBy?: ModuleTierOrderByWithRelationInput | ModuleTierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModuleTiers.
     */
    cursor?: ModuleTierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModuleTiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModuleTiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModuleTiers.
     */
    distinct?: ModuleTierScalarFieldEnum | ModuleTierScalarFieldEnum[]
  }

  /**
   * ModuleTier findMany
   */
  export type ModuleTierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleTier
     */
    select?: ModuleTierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleTier
     */
    omit?: ModuleTierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleTierInclude<ExtArgs> | null
    /**
     * Filter, which ModuleTiers to fetch.
     */
    where?: ModuleTierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModuleTiers to fetch.
     */
    orderBy?: ModuleTierOrderByWithRelationInput | ModuleTierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ModuleTiers.
     */
    cursor?: ModuleTierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModuleTiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModuleTiers.
     */
    skip?: number
    distinct?: ModuleTierScalarFieldEnum | ModuleTierScalarFieldEnum[]
  }

  /**
   * ModuleTier create
   */
  export type ModuleTierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleTier
     */
    select?: ModuleTierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleTier
     */
    omit?: ModuleTierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleTierInclude<ExtArgs> | null
    /**
     * The data needed to create a ModuleTier.
     */
    data: XOR<ModuleTierCreateInput, ModuleTierUncheckedCreateInput>
  }

  /**
   * ModuleTier createMany
   */
  export type ModuleTierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ModuleTiers.
     */
    data: ModuleTierCreateManyInput | ModuleTierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ModuleTier createManyAndReturn
   */
  export type ModuleTierCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleTier
     */
    select?: ModuleTierSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleTier
     */
    omit?: ModuleTierOmit<ExtArgs> | null
    /**
     * The data used to create many ModuleTiers.
     */
    data: ModuleTierCreateManyInput | ModuleTierCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleTierIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ModuleTier update
   */
  export type ModuleTierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleTier
     */
    select?: ModuleTierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleTier
     */
    omit?: ModuleTierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleTierInclude<ExtArgs> | null
    /**
     * The data needed to update a ModuleTier.
     */
    data: XOR<ModuleTierUpdateInput, ModuleTierUncheckedUpdateInput>
    /**
     * Choose, which ModuleTier to update.
     */
    where: ModuleTierWhereUniqueInput
  }

  /**
   * ModuleTier updateMany
   */
  export type ModuleTierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ModuleTiers.
     */
    data: XOR<ModuleTierUpdateManyMutationInput, ModuleTierUncheckedUpdateManyInput>
    /**
     * Filter which ModuleTiers to update
     */
    where?: ModuleTierWhereInput
    /**
     * Limit how many ModuleTiers to update.
     */
    limit?: number
  }

  /**
   * ModuleTier updateManyAndReturn
   */
  export type ModuleTierUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleTier
     */
    select?: ModuleTierSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleTier
     */
    omit?: ModuleTierOmit<ExtArgs> | null
    /**
     * The data used to update ModuleTiers.
     */
    data: XOR<ModuleTierUpdateManyMutationInput, ModuleTierUncheckedUpdateManyInput>
    /**
     * Filter which ModuleTiers to update
     */
    where?: ModuleTierWhereInput
    /**
     * Limit how many ModuleTiers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleTierIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ModuleTier upsert
   */
  export type ModuleTierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleTier
     */
    select?: ModuleTierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleTier
     */
    omit?: ModuleTierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleTierInclude<ExtArgs> | null
    /**
     * The filter to search for the ModuleTier to update in case it exists.
     */
    where: ModuleTierWhereUniqueInput
    /**
     * In case the ModuleTier found by the `where` argument doesn't exist, create a new ModuleTier with this data.
     */
    create: XOR<ModuleTierCreateInput, ModuleTierUncheckedCreateInput>
    /**
     * In case the ModuleTier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModuleTierUpdateInput, ModuleTierUncheckedUpdateInput>
  }

  /**
   * ModuleTier delete
   */
  export type ModuleTierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleTier
     */
    select?: ModuleTierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleTier
     */
    omit?: ModuleTierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleTierInclude<ExtArgs> | null
    /**
     * Filter which ModuleTier to delete.
     */
    where: ModuleTierWhereUniqueInput
  }

  /**
   * ModuleTier deleteMany
   */
  export type ModuleTierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModuleTiers to delete
     */
    where?: ModuleTierWhereInput
    /**
     * Limit how many ModuleTiers to delete.
     */
    limit?: number
  }

  /**
   * ModuleTier without action
   */
  export type ModuleTierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleTier
     */
    select?: ModuleTierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleTier
     */
    omit?: ModuleTierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleTierInclude<ExtArgs> | null
  }


  /**
   * Model Package
   */

  export type AggregatePackage = {
    _count: PackageCountAggregateOutputType | null
    _min: PackageMinAggregateOutputType | null
    _max: PackageMaxAggregateOutputType | null
  }

  export type PackageMinAggregateOutputType = {
    id: string | null
    entitlementName: string | null
    name: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PackageMaxAggregateOutputType = {
    id: string | null
    entitlementName: string | null
    name: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PackageCountAggregateOutputType = {
    id: number
    entitlementName: number
    name: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PackageMinAggregateInputType = {
    id?: true
    entitlementName?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PackageMaxAggregateInputType = {
    id?: true
    entitlementName?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PackageCountAggregateInputType = {
    id?: true
    entitlementName?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PackageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Package to aggregate.
     */
    where?: PackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packages to fetch.
     */
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Packages
    **/
    _count?: true | PackageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PackageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PackageMaxAggregateInputType
  }

  export type GetPackageAggregateType<T extends PackageAggregateArgs> = {
        [P in keyof T & keyof AggregatePackage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePackage[P]>
      : GetScalarType<T[P], AggregatePackage[P]>
  }




  export type PackageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PackageWhereInput
    orderBy?: PackageOrderByWithAggregationInput | PackageOrderByWithAggregationInput[]
    by: PackageScalarFieldEnum[] | PackageScalarFieldEnum
    having?: PackageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PackageCountAggregateInputType | true
    _min?: PackageMinAggregateInputType
    _max?: PackageMaxAggregateInputType
  }

  export type PackageGroupByOutputType = {
    id: string
    entitlementName: string
    name: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: PackageCountAggregateOutputType | null
    _min: PackageMinAggregateOutputType | null
    _max: PackageMaxAggregateOutputType | null
  }

  type GetPackageGroupByPayload<T extends PackageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PackageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PackageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PackageGroupByOutputType[P]>
            : GetScalarType<T[P], PackageGroupByOutputType[P]>
        }
      >
    >


  export type PackageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entitlementName?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    packageModules?: boolean | Package$packageModulesArgs<ExtArgs>
    userPackages?: boolean | Package$userPackagesArgs<ExtArgs>
    _count?: boolean | PackageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["package"]>

  export type PackageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entitlementName?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["package"]>

  export type PackageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entitlementName?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["package"]>

  export type PackageSelectScalar = {
    id?: boolean
    entitlementName?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PackageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "entitlementName" | "name" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["package"]>
  export type PackageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    packageModules?: boolean | Package$packageModulesArgs<ExtArgs>
    userPackages?: boolean | Package$userPackagesArgs<ExtArgs>
    _count?: boolean | PackageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PackageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PackageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PackagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Package"
    objects: {
      packageModules: Prisma.$PackageModulePayload<ExtArgs>[]
      userPackages: Prisma.$UserPackagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      entitlementName: string
      name: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["package"]>
    composites: {}
  }

  type PackageGetPayload<S extends boolean | null | undefined | PackageDefaultArgs> = $Result.GetResult<Prisma.$PackagePayload, S>

  type PackageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PackageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PackageCountAggregateInputType | true
    }

  export interface PackageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Package'], meta: { name: 'Package' } }
    /**
     * Find zero or one Package that matches the filter.
     * @param {PackageFindUniqueArgs} args - Arguments to find a Package
     * @example
     * // Get one Package
     * const package = await prisma.package.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PackageFindUniqueArgs>(args: SelectSubset<T, PackageFindUniqueArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Package that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PackageFindUniqueOrThrowArgs} args - Arguments to find a Package
     * @example
     * // Get one Package
     * const package = await prisma.package.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PackageFindUniqueOrThrowArgs>(args: SelectSubset<T, PackageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Package that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageFindFirstArgs} args - Arguments to find a Package
     * @example
     * // Get one Package
     * const package = await prisma.package.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PackageFindFirstArgs>(args?: SelectSubset<T, PackageFindFirstArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Package that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageFindFirstOrThrowArgs} args - Arguments to find a Package
     * @example
     * // Get one Package
     * const package = await prisma.package.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PackageFindFirstOrThrowArgs>(args?: SelectSubset<T, PackageFindFirstOrThrowArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Packages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Packages
     * const packages = await prisma.package.findMany()
     * 
     * // Get first 10 Packages
     * const packages = await prisma.package.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const packageWithIdOnly = await prisma.package.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PackageFindManyArgs>(args?: SelectSubset<T, PackageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Package.
     * @param {PackageCreateArgs} args - Arguments to create a Package.
     * @example
     * // Create one Package
     * const Package = await prisma.package.create({
     *   data: {
     *     // ... data to create a Package
     *   }
     * })
     * 
     */
    create<T extends PackageCreateArgs>(args: SelectSubset<T, PackageCreateArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Packages.
     * @param {PackageCreateManyArgs} args - Arguments to create many Packages.
     * @example
     * // Create many Packages
     * const package = await prisma.package.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PackageCreateManyArgs>(args?: SelectSubset<T, PackageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Packages and returns the data saved in the database.
     * @param {PackageCreateManyAndReturnArgs} args - Arguments to create many Packages.
     * @example
     * // Create many Packages
     * const package = await prisma.package.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Packages and only return the `id`
     * const packageWithIdOnly = await prisma.package.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PackageCreateManyAndReturnArgs>(args?: SelectSubset<T, PackageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Package.
     * @param {PackageDeleteArgs} args - Arguments to delete one Package.
     * @example
     * // Delete one Package
     * const Package = await prisma.package.delete({
     *   where: {
     *     // ... filter to delete one Package
     *   }
     * })
     * 
     */
    delete<T extends PackageDeleteArgs>(args: SelectSubset<T, PackageDeleteArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Package.
     * @param {PackageUpdateArgs} args - Arguments to update one Package.
     * @example
     * // Update one Package
     * const package = await prisma.package.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PackageUpdateArgs>(args: SelectSubset<T, PackageUpdateArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Packages.
     * @param {PackageDeleteManyArgs} args - Arguments to filter Packages to delete.
     * @example
     * // Delete a few Packages
     * const { count } = await prisma.package.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PackageDeleteManyArgs>(args?: SelectSubset<T, PackageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Packages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Packages
     * const package = await prisma.package.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PackageUpdateManyArgs>(args: SelectSubset<T, PackageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Packages and returns the data updated in the database.
     * @param {PackageUpdateManyAndReturnArgs} args - Arguments to update many Packages.
     * @example
     * // Update many Packages
     * const package = await prisma.package.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Packages and only return the `id`
     * const packageWithIdOnly = await prisma.package.updateManyAndReturn({
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
    updateManyAndReturn<T extends PackageUpdateManyAndReturnArgs>(args: SelectSubset<T, PackageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Package.
     * @param {PackageUpsertArgs} args - Arguments to update or create a Package.
     * @example
     * // Update or create a Package
     * const package = await prisma.package.upsert({
     *   create: {
     *     // ... data to create a Package
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Package we want to update
     *   }
     * })
     */
    upsert<T extends PackageUpsertArgs>(args: SelectSubset<T, PackageUpsertArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Packages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageCountArgs} args - Arguments to filter Packages to count.
     * @example
     * // Count the number of Packages
     * const count = await prisma.package.count({
     *   where: {
     *     // ... the filter for the Packages we want to count
     *   }
     * })
    **/
    count<T extends PackageCountArgs>(
      args?: Subset<T, PackageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PackageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Package.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PackageAggregateArgs>(args: Subset<T, PackageAggregateArgs>): Prisma.PrismaPromise<GetPackageAggregateType<T>>

    /**
     * Group by Package.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageGroupByArgs} args - Group by arguments.
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
      T extends PackageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PackageGroupByArgs['orderBy'] }
        : { orderBy?: PackageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PackageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPackageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Package model
   */
  readonly fields: PackageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Package.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PackageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    packageModules<T extends Package$packageModulesArgs<ExtArgs> = {}>(args?: Subset<T, Package$packageModulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackageModulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userPackages<T extends Package$userPackagesArgs<ExtArgs> = {}>(args?: Subset<T, Package$userPackagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPackagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Package model
   */
  interface PackageFieldRefs {
    readonly id: FieldRef<"Package", 'String'>
    readonly entitlementName: FieldRef<"Package", 'String'>
    readonly name: FieldRef<"Package", 'String'>
    readonly isActive: FieldRef<"Package", 'Boolean'>
    readonly createdAt: FieldRef<"Package", 'DateTime'>
    readonly updatedAt: FieldRef<"Package", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Package findUnique
   */
  export type PackageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter, which Package to fetch.
     */
    where: PackageWhereUniqueInput
  }

  /**
   * Package findUniqueOrThrow
   */
  export type PackageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter, which Package to fetch.
     */
    where: PackageWhereUniqueInput
  }

  /**
   * Package findFirst
   */
  export type PackageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter, which Package to fetch.
     */
    where?: PackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packages to fetch.
     */
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Packages.
     */
    cursor?: PackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Packages.
     */
    distinct?: PackageScalarFieldEnum | PackageScalarFieldEnum[]
  }

  /**
   * Package findFirstOrThrow
   */
  export type PackageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter, which Package to fetch.
     */
    where?: PackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packages to fetch.
     */
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Packages.
     */
    cursor?: PackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Packages.
     */
    distinct?: PackageScalarFieldEnum | PackageScalarFieldEnum[]
  }

  /**
   * Package findMany
   */
  export type PackageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter, which Packages to fetch.
     */
    where?: PackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packages to fetch.
     */
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Packages.
     */
    cursor?: PackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packages.
     */
    skip?: number
    distinct?: PackageScalarFieldEnum | PackageScalarFieldEnum[]
  }

  /**
   * Package create
   */
  export type PackageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * The data needed to create a Package.
     */
    data: XOR<PackageCreateInput, PackageUncheckedCreateInput>
  }

  /**
   * Package createMany
   */
  export type PackageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Packages.
     */
    data: PackageCreateManyInput | PackageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Package createManyAndReturn
   */
  export type PackageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * The data used to create many Packages.
     */
    data: PackageCreateManyInput | PackageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Package update
   */
  export type PackageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * The data needed to update a Package.
     */
    data: XOR<PackageUpdateInput, PackageUncheckedUpdateInput>
    /**
     * Choose, which Package to update.
     */
    where: PackageWhereUniqueInput
  }

  /**
   * Package updateMany
   */
  export type PackageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Packages.
     */
    data: XOR<PackageUpdateManyMutationInput, PackageUncheckedUpdateManyInput>
    /**
     * Filter which Packages to update
     */
    where?: PackageWhereInput
    /**
     * Limit how many Packages to update.
     */
    limit?: number
  }

  /**
   * Package updateManyAndReturn
   */
  export type PackageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * The data used to update Packages.
     */
    data: XOR<PackageUpdateManyMutationInput, PackageUncheckedUpdateManyInput>
    /**
     * Filter which Packages to update
     */
    where?: PackageWhereInput
    /**
     * Limit how many Packages to update.
     */
    limit?: number
  }

  /**
   * Package upsert
   */
  export type PackageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * The filter to search for the Package to update in case it exists.
     */
    where: PackageWhereUniqueInput
    /**
     * In case the Package found by the `where` argument doesn't exist, create a new Package with this data.
     */
    create: XOR<PackageCreateInput, PackageUncheckedCreateInput>
    /**
     * In case the Package was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PackageUpdateInput, PackageUncheckedUpdateInput>
  }

  /**
   * Package delete
   */
  export type PackageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter which Package to delete.
     */
    where: PackageWhereUniqueInput
  }

  /**
   * Package deleteMany
   */
  export type PackageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Packages to delete
     */
    where?: PackageWhereInput
    /**
     * Limit how many Packages to delete.
     */
    limit?: number
  }

  /**
   * Package.packageModules
   */
  export type Package$packageModulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageModule
     */
    select?: PackageModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageModule
     */
    omit?: PackageModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageModuleInclude<ExtArgs> | null
    where?: PackageModuleWhereInput
    orderBy?: PackageModuleOrderByWithRelationInput | PackageModuleOrderByWithRelationInput[]
    cursor?: PackageModuleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PackageModuleScalarFieldEnum | PackageModuleScalarFieldEnum[]
  }

  /**
   * Package.userPackages
   */
  export type Package$userPackagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPackage
     */
    select?: UserPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPackage
     */
    omit?: UserPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPackageInclude<ExtArgs> | null
    where?: UserPackageWhereInput
    orderBy?: UserPackageOrderByWithRelationInput | UserPackageOrderByWithRelationInput[]
    cursor?: UserPackageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserPackageScalarFieldEnum | UserPackageScalarFieldEnum[]
  }

  /**
   * Package without action
   */
  export type PackageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
  }


  /**
   * Model PackageModule
   */

  export type AggregatePackageModule = {
    _count: PackageModuleCountAggregateOutputType | null
    _min: PackageModuleMinAggregateOutputType | null
    _max: PackageModuleMaxAggregateOutputType | null
  }

  export type PackageModuleMinAggregateOutputType = {
    id: string | null
    packageId: string | null
    moduleId: string | null
    createdAt: Date | null
  }

  export type PackageModuleMaxAggregateOutputType = {
    id: string | null
    packageId: string | null
    moduleId: string | null
    createdAt: Date | null
  }

  export type PackageModuleCountAggregateOutputType = {
    id: number
    packageId: number
    moduleId: number
    createdAt: number
    _all: number
  }


  export type PackageModuleMinAggregateInputType = {
    id?: true
    packageId?: true
    moduleId?: true
    createdAt?: true
  }

  export type PackageModuleMaxAggregateInputType = {
    id?: true
    packageId?: true
    moduleId?: true
    createdAt?: true
  }

  export type PackageModuleCountAggregateInputType = {
    id?: true
    packageId?: true
    moduleId?: true
    createdAt?: true
    _all?: true
  }

  export type PackageModuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PackageModule to aggregate.
     */
    where?: PackageModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PackageModules to fetch.
     */
    orderBy?: PackageModuleOrderByWithRelationInput | PackageModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PackageModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PackageModules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PackageModules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PackageModules
    **/
    _count?: true | PackageModuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PackageModuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PackageModuleMaxAggregateInputType
  }

  export type GetPackageModuleAggregateType<T extends PackageModuleAggregateArgs> = {
        [P in keyof T & keyof AggregatePackageModule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePackageModule[P]>
      : GetScalarType<T[P], AggregatePackageModule[P]>
  }




  export type PackageModuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PackageModuleWhereInput
    orderBy?: PackageModuleOrderByWithAggregationInput | PackageModuleOrderByWithAggregationInput[]
    by: PackageModuleScalarFieldEnum[] | PackageModuleScalarFieldEnum
    having?: PackageModuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PackageModuleCountAggregateInputType | true
    _min?: PackageModuleMinAggregateInputType
    _max?: PackageModuleMaxAggregateInputType
  }

  export type PackageModuleGroupByOutputType = {
    id: string
    packageId: string
    moduleId: string
    createdAt: Date
    _count: PackageModuleCountAggregateOutputType | null
    _min: PackageModuleMinAggregateOutputType | null
    _max: PackageModuleMaxAggregateOutputType | null
  }

  type GetPackageModuleGroupByPayload<T extends PackageModuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PackageModuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PackageModuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PackageModuleGroupByOutputType[P]>
            : GetScalarType<T[P], PackageModuleGroupByOutputType[P]>
        }
      >
    >


  export type PackageModuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    packageId?: boolean
    moduleId?: boolean
    createdAt?: boolean
    package?: boolean | PackageDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["packageModule"]>

  export type PackageModuleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    packageId?: boolean
    moduleId?: boolean
    createdAt?: boolean
    package?: boolean | PackageDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["packageModule"]>

  export type PackageModuleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    packageId?: boolean
    moduleId?: boolean
    createdAt?: boolean
    package?: boolean | PackageDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["packageModule"]>

  export type PackageModuleSelectScalar = {
    id?: boolean
    packageId?: boolean
    moduleId?: boolean
    createdAt?: boolean
  }

  export type PackageModuleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "packageId" | "moduleId" | "createdAt", ExtArgs["result"]["packageModule"]>
  export type PackageModuleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    package?: boolean | PackageDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }
  export type PackageModuleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    package?: boolean | PackageDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }
  export type PackageModuleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    package?: boolean | PackageDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }

  export type $PackageModulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PackageModule"
    objects: {
      package: Prisma.$PackagePayload<ExtArgs>
      module: Prisma.$ModulePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      packageId: string
      moduleId: string
      createdAt: Date
    }, ExtArgs["result"]["packageModule"]>
    composites: {}
  }

  type PackageModuleGetPayload<S extends boolean | null | undefined | PackageModuleDefaultArgs> = $Result.GetResult<Prisma.$PackageModulePayload, S>

  type PackageModuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PackageModuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PackageModuleCountAggregateInputType | true
    }

  export interface PackageModuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PackageModule'], meta: { name: 'PackageModule' } }
    /**
     * Find zero or one PackageModule that matches the filter.
     * @param {PackageModuleFindUniqueArgs} args - Arguments to find a PackageModule
     * @example
     * // Get one PackageModule
     * const packageModule = await prisma.packageModule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PackageModuleFindUniqueArgs>(args: SelectSubset<T, PackageModuleFindUniqueArgs<ExtArgs>>): Prisma__PackageModuleClient<$Result.GetResult<Prisma.$PackageModulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PackageModule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PackageModuleFindUniqueOrThrowArgs} args - Arguments to find a PackageModule
     * @example
     * // Get one PackageModule
     * const packageModule = await prisma.packageModule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PackageModuleFindUniqueOrThrowArgs>(args: SelectSubset<T, PackageModuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PackageModuleClient<$Result.GetResult<Prisma.$PackageModulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PackageModule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageModuleFindFirstArgs} args - Arguments to find a PackageModule
     * @example
     * // Get one PackageModule
     * const packageModule = await prisma.packageModule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PackageModuleFindFirstArgs>(args?: SelectSubset<T, PackageModuleFindFirstArgs<ExtArgs>>): Prisma__PackageModuleClient<$Result.GetResult<Prisma.$PackageModulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PackageModule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageModuleFindFirstOrThrowArgs} args - Arguments to find a PackageModule
     * @example
     * // Get one PackageModule
     * const packageModule = await prisma.packageModule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PackageModuleFindFirstOrThrowArgs>(args?: SelectSubset<T, PackageModuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__PackageModuleClient<$Result.GetResult<Prisma.$PackageModulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PackageModules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageModuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PackageModules
     * const packageModules = await prisma.packageModule.findMany()
     * 
     * // Get first 10 PackageModules
     * const packageModules = await prisma.packageModule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const packageModuleWithIdOnly = await prisma.packageModule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PackageModuleFindManyArgs>(args?: SelectSubset<T, PackageModuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackageModulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PackageModule.
     * @param {PackageModuleCreateArgs} args - Arguments to create a PackageModule.
     * @example
     * // Create one PackageModule
     * const PackageModule = await prisma.packageModule.create({
     *   data: {
     *     // ... data to create a PackageModule
     *   }
     * })
     * 
     */
    create<T extends PackageModuleCreateArgs>(args: SelectSubset<T, PackageModuleCreateArgs<ExtArgs>>): Prisma__PackageModuleClient<$Result.GetResult<Prisma.$PackageModulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PackageModules.
     * @param {PackageModuleCreateManyArgs} args - Arguments to create many PackageModules.
     * @example
     * // Create many PackageModules
     * const packageModule = await prisma.packageModule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PackageModuleCreateManyArgs>(args?: SelectSubset<T, PackageModuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PackageModules and returns the data saved in the database.
     * @param {PackageModuleCreateManyAndReturnArgs} args - Arguments to create many PackageModules.
     * @example
     * // Create many PackageModules
     * const packageModule = await prisma.packageModule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PackageModules and only return the `id`
     * const packageModuleWithIdOnly = await prisma.packageModule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PackageModuleCreateManyAndReturnArgs>(args?: SelectSubset<T, PackageModuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackageModulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PackageModule.
     * @param {PackageModuleDeleteArgs} args - Arguments to delete one PackageModule.
     * @example
     * // Delete one PackageModule
     * const PackageModule = await prisma.packageModule.delete({
     *   where: {
     *     // ... filter to delete one PackageModule
     *   }
     * })
     * 
     */
    delete<T extends PackageModuleDeleteArgs>(args: SelectSubset<T, PackageModuleDeleteArgs<ExtArgs>>): Prisma__PackageModuleClient<$Result.GetResult<Prisma.$PackageModulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PackageModule.
     * @param {PackageModuleUpdateArgs} args - Arguments to update one PackageModule.
     * @example
     * // Update one PackageModule
     * const packageModule = await prisma.packageModule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PackageModuleUpdateArgs>(args: SelectSubset<T, PackageModuleUpdateArgs<ExtArgs>>): Prisma__PackageModuleClient<$Result.GetResult<Prisma.$PackageModulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PackageModules.
     * @param {PackageModuleDeleteManyArgs} args - Arguments to filter PackageModules to delete.
     * @example
     * // Delete a few PackageModules
     * const { count } = await prisma.packageModule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PackageModuleDeleteManyArgs>(args?: SelectSubset<T, PackageModuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PackageModules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageModuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PackageModules
     * const packageModule = await prisma.packageModule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PackageModuleUpdateManyArgs>(args: SelectSubset<T, PackageModuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PackageModules and returns the data updated in the database.
     * @param {PackageModuleUpdateManyAndReturnArgs} args - Arguments to update many PackageModules.
     * @example
     * // Update many PackageModules
     * const packageModule = await prisma.packageModule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PackageModules and only return the `id`
     * const packageModuleWithIdOnly = await prisma.packageModule.updateManyAndReturn({
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
    updateManyAndReturn<T extends PackageModuleUpdateManyAndReturnArgs>(args: SelectSubset<T, PackageModuleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackageModulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PackageModule.
     * @param {PackageModuleUpsertArgs} args - Arguments to update or create a PackageModule.
     * @example
     * // Update or create a PackageModule
     * const packageModule = await prisma.packageModule.upsert({
     *   create: {
     *     // ... data to create a PackageModule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PackageModule we want to update
     *   }
     * })
     */
    upsert<T extends PackageModuleUpsertArgs>(args: SelectSubset<T, PackageModuleUpsertArgs<ExtArgs>>): Prisma__PackageModuleClient<$Result.GetResult<Prisma.$PackageModulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PackageModules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageModuleCountArgs} args - Arguments to filter PackageModules to count.
     * @example
     * // Count the number of PackageModules
     * const count = await prisma.packageModule.count({
     *   where: {
     *     // ... the filter for the PackageModules we want to count
     *   }
     * })
    **/
    count<T extends PackageModuleCountArgs>(
      args?: Subset<T, PackageModuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PackageModuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PackageModule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageModuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PackageModuleAggregateArgs>(args: Subset<T, PackageModuleAggregateArgs>): Prisma.PrismaPromise<GetPackageModuleAggregateType<T>>

    /**
     * Group by PackageModule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageModuleGroupByArgs} args - Group by arguments.
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
      T extends PackageModuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PackageModuleGroupByArgs['orderBy'] }
        : { orderBy?: PackageModuleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PackageModuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPackageModuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PackageModule model
   */
  readonly fields: PackageModuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PackageModule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PackageModuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    package<T extends PackageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PackageDefaultArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    module<T extends ModuleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModuleDefaultArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PackageModule model
   */
  interface PackageModuleFieldRefs {
    readonly id: FieldRef<"PackageModule", 'String'>
    readonly packageId: FieldRef<"PackageModule", 'String'>
    readonly moduleId: FieldRef<"PackageModule", 'String'>
    readonly createdAt: FieldRef<"PackageModule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PackageModule findUnique
   */
  export type PackageModuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageModule
     */
    select?: PackageModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageModule
     */
    omit?: PackageModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageModuleInclude<ExtArgs> | null
    /**
     * Filter, which PackageModule to fetch.
     */
    where: PackageModuleWhereUniqueInput
  }

  /**
   * PackageModule findUniqueOrThrow
   */
  export type PackageModuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageModule
     */
    select?: PackageModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageModule
     */
    omit?: PackageModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageModuleInclude<ExtArgs> | null
    /**
     * Filter, which PackageModule to fetch.
     */
    where: PackageModuleWhereUniqueInput
  }

  /**
   * PackageModule findFirst
   */
  export type PackageModuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageModule
     */
    select?: PackageModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageModule
     */
    omit?: PackageModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageModuleInclude<ExtArgs> | null
    /**
     * Filter, which PackageModule to fetch.
     */
    where?: PackageModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PackageModules to fetch.
     */
    orderBy?: PackageModuleOrderByWithRelationInput | PackageModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PackageModules.
     */
    cursor?: PackageModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PackageModules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PackageModules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PackageModules.
     */
    distinct?: PackageModuleScalarFieldEnum | PackageModuleScalarFieldEnum[]
  }

  /**
   * PackageModule findFirstOrThrow
   */
  export type PackageModuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageModule
     */
    select?: PackageModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageModule
     */
    omit?: PackageModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageModuleInclude<ExtArgs> | null
    /**
     * Filter, which PackageModule to fetch.
     */
    where?: PackageModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PackageModules to fetch.
     */
    orderBy?: PackageModuleOrderByWithRelationInput | PackageModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PackageModules.
     */
    cursor?: PackageModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PackageModules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PackageModules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PackageModules.
     */
    distinct?: PackageModuleScalarFieldEnum | PackageModuleScalarFieldEnum[]
  }

  /**
   * PackageModule findMany
   */
  export type PackageModuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageModule
     */
    select?: PackageModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageModule
     */
    omit?: PackageModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageModuleInclude<ExtArgs> | null
    /**
     * Filter, which PackageModules to fetch.
     */
    where?: PackageModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PackageModules to fetch.
     */
    orderBy?: PackageModuleOrderByWithRelationInput | PackageModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PackageModules.
     */
    cursor?: PackageModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PackageModules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PackageModules.
     */
    skip?: number
    distinct?: PackageModuleScalarFieldEnum | PackageModuleScalarFieldEnum[]
  }

  /**
   * PackageModule create
   */
  export type PackageModuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageModule
     */
    select?: PackageModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageModule
     */
    omit?: PackageModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageModuleInclude<ExtArgs> | null
    /**
     * The data needed to create a PackageModule.
     */
    data: XOR<PackageModuleCreateInput, PackageModuleUncheckedCreateInput>
  }

  /**
   * PackageModule createMany
   */
  export type PackageModuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PackageModules.
     */
    data: PackageModuleCreateManyInput | PackageModuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PackageModule createManyAndReturn
   */
  export type PackageModuleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageModule
     */
    select?: PackageModuleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PackageModule
     */
    omit?: PackageModuleOmit<ExtArgs> | null
    /**
     * The data used to create many PackageModules.
     */
    data: PackageModuleCreateManyInput | PackageModuleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageModuleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PackageModule update
   */
  export type PackageModuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageModule
     */
    select?: PackageModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageModule
     */
    omit?: PackageModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageModuleInclude<ExtArgs> | null
    /**
     * The data needed to update a PackageModule.
     */
    data: XOR<PackageModuleUpdateInput, PackageModuleUncheckedUpdateInput>
    /**
     * Choose, which PackageModule to update.
     */
    where: PackageModuleWhereUniqueInput
  }

  /**
   * PackageModule updateMany
   */
  export type PackageModuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PackageModules.
     */
    data: XOR<PackageModuleUpdateManyMutationInput, PackageModuleUncheckedUpdateManyInput>
    /**
     * Filter which PackageModules to update
     */
    where?: PackageModuleWhereInput
    /**
     * Limit how many PackageModules to update.
     */
    limit?: number
  }

  /**
   * PackageModule updateManyAndReturn
   */
  export type PackageModuleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageModule
     */
    select?: PackageModuleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PackageModule
     */
    omit?: PackageModuleOmit<ExtArgs> | null
    /**
     * The data used to update PackageModules.
     */
    data: XOR<PackageModuleUpdateManyMutationInput, PackageModuleUncheckedUpdateManyInput>
    /**
     * Filter which PackageModules to update
     */
    where?: PackageModuleWhereInput
    /**
     * Limit how many PackageModules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageModuleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PackageModule upsert
   */
  export type PackageModuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageModule
     */
    select?: PackageModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageModule
     */
    omit?: PackageModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageModuleInclude<ExtArgs> | null
    /**
     * The filter to search for the PackageModule to update in case it exists.
     */
    where: PackageModuleWhereUniqueInput
    /**
     * In case the PackageModule found by the `where` argument doesn't exist, create a new PackageModule with this data.
     */
    create: XOR<PackageModuleCreateInput, PackageModuleUncheckedCreateInput>
    /**
     * In case the PackageModule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PackageModuleUpdateInput, PackageModuleUncheckedUpdateInput>
  }

  /**
   * PackageModule delete
   */
  export type PackageModuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageModule
     */
    select?: PackageModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageModule
     */
    omit?: PackageModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageModuleInclude<ExtArgs> | null
    /**
     * Filter which PackageModule to delete.
     */
    where: PackageModuleWhereUniqueInput
  }

  /**
   * PackageModule deleteMany
   */
  export type PackageModuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PackageModules to delete
     */
    where?: PackageModuleWhereInput
    /**
     * Limit how many PackageModules to delete.
     */
    limit?: number
  }

  /**
   * PackageModule without action
   */
  export type PackageModuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageModule
     */
    select?: PackageModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageModule
     */
    omit?: PackageModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageModuleInclude<ExtArgs> | null
  }


  /**
   * Model UserModule
   */

  export type AggregateUserModule = {
    _count: UserModuleCountAggregateOutputType | null
    _min: UserModuleMinAggregateOutputType | null
    _max: UserModuleMaxAggregateOutputType | null
  }

  export type UserModuleMinAggregateOutputType = {
    id: string | null
    userId: string | null
    moduleId: string | null
    assignedAt: Date | null
    expiresAt: Date | null
  }

  export type UserModuleMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    moduleId: string | null
    assignedAt: Date | null
    expiresAt: Date | null
  }

  export type UserModuleCountAggregateOutputType = {
    id: number
    userId: number
    moduleId: number
    assignedAt: number
    expiresAt: number
    _all: number
  }


  export type UserModuleMinAggregateInputType = {
    id?: true
    userId?: true
    moduleId?: true
    assignedAt?: true
    expiresAt?: true
  }

  export type UserModuleMaxAggregateInputType = {
    id?: true
    userId?: true
    moduleId?: true
    assignedAt?: true
    expiresAt?: true
  }

  export type UserModuleCountAggregateInputType = {
    id?: true
    userId?: true
    moduleId?: true
    assignedAt?: true
    expiresAt?: true
    _all?: true
  }

  export type UserModuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserModule to aggregate.
     */
    where?: UserModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserModules to fetch.
     */
    orderBy?: UserModuleOrderByWithRelationInput | UserModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserModules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserModules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserModules
    **/
    _count?: true | UserModuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserModuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserModuleMaxAggregateInputType
  }

  export type GetUserModuleAggregateType<T extends UserModuleAggregateArgs> = {
        [P in keyof T & keyof AggregateUserModule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserModule[P]>
      : GetScalarType<T[P], AggregateUserModule[P]>
  }




  export type UserModuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserModuleWhereInput
    orderBy?: UserModuleOrderByWithAggregationInput | UserModuleOrderByWithAggregationInput[]
    by: UserModuleScalarFieldEnum[] | UserModuleScalarFieldEnum
    having?: UserModuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserModuleCountAggregateInputType | true
    _min?: UserModuleMinAggregateInputType
    _max?: UserModuleMaxAggregateInputType
  }

  export type UserModuleGroupByOutputType = {
    id: string
    userId: string
    moduleId: string
    assignedAt: Date
    expiresAt: Date | null
    _count: UserModuleCountAggregateOutputType | null
    _min: UserModuleMinAggregateOutputType | null
    _max: UserModuleMaxAggregateOutputType | null
  }

  type GetUserModuleGroupByPayload<T extends UserModuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserModuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserModuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserModuleGroupByOutputType[P]>
            : GetScalarType<T[P], UserModuleGroupByOutputType[P]>
        }
      >
    >


  export type UserModuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    moduleId?: boolean
    assignedAt?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userModule"]>

  export type UserModuleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    moduleId?: boolean
    assignedAt?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userModule"]>

  export type UserModuleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    moduleId?: boolean
    assignedAt?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userModule"]>

  export type UserModuleSelectScalar = {
    id?: boolean
    userId?: boolean
    moduleId?: boolean
    assignedAt?: boolean
    expiresAt?: boolean
  }

  export type UserModuleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "moduleId" | "assignedAt" | "expiresAt", ExtArgs["result"]["userModule"]>
  export type UserModuleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }
  export type UserModuleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }
  export type UserModuleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }

  export type $UserModulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserModule"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      module: Prisma.$ModulePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      moduleId: string
      assignedAt: Date
      expiresAt: Date | null
    }, ExtArgs["result"]["userModule"]>
    composites: {}
  }

  type UserModuleGetPayload<S extends boolean | null | undefined | UserModuleDefaultArgs> = $Result.GetResult<Prisma.$UserModulePayload, S>

  type UserModuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserModuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserModuleCountAggregateInputType | true
    }

  export interface UserModuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserModule'], meta: { name: 'UserModule' } }
    /**
     * Find zero or one UserModule that matches the filter.
     * @param {UserModuleFindUniqueArgs} args - Arguments to find a UserModule
     * @example
     * // Get one UserModule
     * const userModule = await prisma.userModule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserModuleFindUniqueArgs>(args: SelectSubset<T, UserModuleFindUniqueArgs<ExtArgs>>): Prisma__UserModuleClient<$Result.GetResult<Prisma.$UserModulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserModule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserModuleFindUniqueOrThrowArgs} args - Arguments to find a UserModule
     * @example
     * // Get one UserModule
     * const userModule = await prisma.userModule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserModuleFindUniqueOrThrowArgs>(args: SelectSubset<T, UserModuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserModuleClient<$Result.GetResult<Prisma.$UserModulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserModule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModuleFindFirstArgs} args - Arguments to find a UserModule
     * @example
     * // Get one UserModule
     * const userModule = await prisma.userModule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserModuleFindFirstArgs>(args?: SelectSubset<T, UserModuleFindFirstArgs<ExtArgs>>): Prisma__UserModuleClient<$Result.GetResult<Prisma.$UserModulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserModule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModuleFindFirstOrThrowArgs} args - Arguments to find a UserModule
     * @example
     * // Get one UserModule
     * const userModule = await prisma.userModule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserModuleFindFirstOrThrowArgs>(args?: SelectSubset<T, UserModuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserModuleClient<$Result.GetResult<Prisma.$UserModulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserModules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserModules
     * const userModules = await prisma.userModule.findMany()
     * 
     * // Get first 10 UserModules
     * const userModules = await prisma.userModule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userModuleWithIdOnly = await prisma.userModule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserModuleFindManyArgs>(args?: SelectSubset<T, UserModuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserModulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserModule.
     * @param {UserModuleCreateArgs} args - Arguments to create a UserModule.
     * @example
     * // Create one UserModule
     * const UserModule = await prisma.userModule.create({
     *   data: {
     *     // ... data to create a UserModule
     *   }
     * })
     * 
     */
    create<T extends UserModuleCreateArgs>(args: SelectSubset<T, UserModuleCreateArgs<ExtArgs>>): Prisma__UserModuleClient<$Result.GetResult<Prisma.$UserModulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserModules.
     * @param {UserModuleCreateManyArgs} args - Arguments to create many UserModules.
     * @example
     * // Create many UserModules
     * const userModule = await prisma.userModule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserModuleCreateManyArgs>(args?: SelectSubset<T, UserModuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserModules and returns the data saved in the database.
     * @param {UserModuleCreateManyAndReturnArgs} args - Arguments to create many UserModules.
     * @example
     * // Create many UserModules
     * const userModule = await prisma.userModule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserModules and only return the `id`
     * const userModuleWithIdOnly = await prisma.userModule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserModuleCreateManyAndReturnArgs>(args?: SelectSubset<T, UserModuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserModulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserModule.
     * @param {UserModuleDeleteArgs} args - Arguments to delete one UserModule.
     * @example
     * // Delete one UserModule
     * const UserModule = await prisma.userModule.delete({
     *   where: {
     *     // ... filter to delete one UserModule
     *   }
     * })
     * 
     */
    delete<T extends UserModuleDeleteArgs>(args: SelectSubset<T, UserModuleDeleteArgs<ExtArgs>>): Prisma__UserModuleClient<$Result.GetResult<Prisma.$UserModulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserModule.
     * @param {UserModuleUpdateArgs} args - Arguments to update one UserModule.
     * @example
     * // Update one UserModule
     * const userModule = await prisma.userModule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserModuleUpdateArgs>(args: SelectSubset<T, UserModuleUpdateArgs<ExtArgs>>): Prisma__UserModuleClient<$Result.GetResult<Prisma.$UserModulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserModules.
     * @param {UserModuleDeleteManyArgs} args - Arguments to filter UserModules to delete.
     * @example
     * // Delete a few UserModules
     * const { count } = await prisma.userModule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserModuleDeleteManyArgs>(args?: SelectSubset<T, UserModuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserModules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserModules
     * const userModule = await prisma.userModule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserModuleUpdateManyArgs>(args: SelectSubset<T, UserModuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserModules and returns the data updated in the database.
     * @param {UserModuleUpdateManyAndReturnArgs} args - Arguments to update many UserModules.
     * @example
     * // Update many UserModules
     * const userModule = await prisma.userModule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserModules and only return the `id`
     * const userModuleWithIdOnly = await prisma.userModule.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserModuleUpdateManyAndReturnArgs>(args: SelectSubset<T, UserModuleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserModulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserModule.
     * @param {UserModuleUpsertArgs} args - Arguments to update or create a UserModule.
     * @example
     * // Update or create a UserModule
     * const userModule = await prisma.userModule.upsert({
     *   create: {
     *     // ... data to create a UserModule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserModule we want to update
     *   }
     * })
     */
    upsert<T extends UserModuleUpsertArgs>(args: SelectSubset<T, UserModuleUpsertArgs<ExtArgs>>): Prisma__UserModuleClient<$Result.GetResult<Prisma.$UserModulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserModules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModuleCountArgs} args - Arguments to filter UserModules to count.
     * @example
     * // Count the number of UserModules
     * const count = await prisma.userModule.count({
     *   where: {
     *     // ... the filter for the UserModules we want to count
     *   }
     * })
    **/
    count<T extends UserModuleCountArgs>(
      args?: Subset<T, UserModuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserModuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserModule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserModuleAggregateArgs>(args: Subset<T, UserModuleAggregateArgs>): Prisma.PrismaPromise<GetUserModuleAggregateType<T>>

    /**
     * Group by UserModule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModuleGroupByArgs} args - Group by arguments.
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
      T extends UserModuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserModuleGroupByArgs['orderBy'] }
        : { orderBy?: UserModuleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserModuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserModuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserModule model
   */
  readonly fields: UserModuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserModule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserModuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    module<T extends ModuleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModuleDefaultArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserModule model
   */
  interface UserModuleFieldRefs {
    readonly id: FieldRef<"UserModule", 'String'>
    readonly userId: FieldRef<"UserModule", 'String'>
    readonly moduleId: FieldRef<"UserModule", 'String'>
    readonly assignedAt: FieldRef<"UserModule", 'DateTime'>
    readonly expiresAt: FieldRef<"UserModule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserModule findUnique
   */
  export type UserModuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModule
     */
    select?: UserModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserModule
     */
    omit?: UserModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModuleInclude<ExtArgs> | null
    /**
     * Filter, which UserModule to fetch.
     */
    where: UserModuleWhereUniqueInput
  }

  /**
   * UserModule findUniqueOrThrow
   */
  export type UserModuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModule
     */
    select?: UserModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserModule
     */
    omit?: UserModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModuleInclude<ExtArgs> | null
    /**
     * Filter, which UserModule to fetch.
     */
    where: UserModuleWhereUniqueInput
  }

  /**
   * UserModule findFirst
   */
  export type UserModuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModule
     */
    select?: UserModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserModule
     */
    omit?: UserModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModuleInclude<ExtArgs> | null
    /**
     * Filter, which UserModule to fetch.
     */
    where?: UserModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserModules to fetch.
     */
    orderBy?: UserModuleOrderByWithRelationInput | UserModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserModules.
     */
    cursor?: UserModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserModules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserModules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserModules.
     */
    distinct?: UserModuleScalarFieldEnum | UserModuleScalarFieldEnum[]
  }

  /**
   * UserModule findFirstOrThrow
   */
  export type UserModuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModule
     */
    select?: UserModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserModule
     */
    omit?: UserModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModuleInclude<ExtArgs> | null
    /**
     * Filter, which UserModule to fetch.
     */
    where?: UserModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserModules to fetch.
     */
    orderBy?: UserModuleOrderByWithRelationInput | UserModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserModules.
     */
    cursor?: UserModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserModules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserModules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserModules.
     */
    distinct?: UserModuleScalarFieldEnum | UserModuleScalarFieldEnum[]
  }

  /**
   * UserModule findMany
   */
  export type UserModuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModule
     */
    select?: UserModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserModule
     */
    omit?: UserModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModuleInclude<ExtArgs> | null
    /**
     * Filter, which UserModules to fetch.
     */
    where?: UserModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserModules to fetch.
     */
    orderBy?: UserModuleOrderByWithRelationInput | UserModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserModules.
     */
    cursor?: UserModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserModules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserModules.
     */
    skip?: number
    distinct?: UserModuleScalarFieldEnum | UserModuleScalarFieldEnum[]
  }

  /**
   * UserModule create
   */
  export type UserModuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModule
     */
    select?: UserModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserModule
     */
    omit?: UserModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModuleInclude<ExtArgs> | null
    /**
     * The data needed to create a UserModule.
     */
    data: XOR<UserModuleCreateInput, UserModuleUncheckedCreateInput>
  }

  /**
   * UserModule createMany
   */
  export type UserModuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserModules.
     */
    data: UserModuleCreateManyInput | UserModuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserModule createManyAndReturn
   */
  export type UserModuleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModule
     */
    select?: UserModuleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserModule
     */
    omit?: UserModuleOmit<ExtArgs> | null
    /**
     * The data used to create many UserModules.
     */
    data: UserModuleCreateManyInput | UserModuleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModuleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserModule update
   */
  export type UserModuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModule
     */
    select?: UserModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserModule
     */
    omit?: UserModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModuleInclude<ExtArgs> | null
    /**
     * The data needed to update a UserModule.
     */
    data: XOR<UserModuleUpdateInput, UserModuleUncheckedUpdateInput>
    /**
     * Choose, which UserModule to update.
     */
    where: UserModuleWhereUniqueInput
  }

  /**
   * UserModule updateMany
   */
  export type UserModuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserModules.
     */
    data: XOR<UserModuleUpdateManyMutationInput, UserModuleUncheckedUpdateManyInput>
    /**
     * Filter which UserModules to update
     */
    where?: UserModuleWhereInput
    /**
     * Limit how many UserModules to update.
     */
    limit?: number
  }

  /**
   * UserModule updateManyAndReturn
   */
  export type UserModuleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModule
     */
    select?: UserModuleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserModule
     */
    omit?: UserModuleOmit<ExtArgs> | null
    /**
     * The data used to update UserModules.
     */
    data: XOR<UserModuleUpdateManyMutationInput, UserModuleUncheckedUpdateManyInput>
    /**
     * Filter which UserModules to update
     */
    where?: UserModuleWhereInput
    /**
     * Limit how many UserModules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModuleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserModule upsert
   */
  export type UserModuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModule
     */
    select?: UserModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserModule
     */
    omit?: UserModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModuleInclude<ExtArgs> | null
    /**
     * The filter to search for the UserModule to update in case it exists.
     */
    where: UserModuleWhereUniqueInput
    /**
     * In case the UserModule found by the `where` argument doesn't exist, create a new UserModule with this data.
     */
    create: XOR<UserModuleCreateInput, UserModuleUncheckedCreateInput>
    /**
     * In case the UserModule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserModuleUpdateInput, UserModuleUncheckedUpdateInput>
  }

  /**
   * UserModule delete
   */
  export type UserModuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModule
     */
    select?: UserModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserModule
     */
    omit?: UserModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModuleInclude<ExtArgs> | null
    /**
     * Filter which UserModule to delete.
     */
    where: UserModuleWhereUniqueInput
  }

  /**
   * UserModule deleteMany
   */
  export type UserModuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserModules to delete
     */
    where?: UserModuleWhereInput
    /**
     * Limit how many UserModules to delete.
     */
    limit?: number
  }

  /**
   * UserModule without action
   */
  export type UserModuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModule
     */
    select?: UserModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserModule
     */
    omit?: UserModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModuleInclude<ExtArgs> | null
  }


  /**
   * Model UserPackage
   */

  export type AggregateUserPackage = {
    _count: UserPackageCountAggregateOutputType | null
    _min: UserPackageMinAggregateOutputType | null
    _max: UserPackageMaxAggregateOutputType | null
  }

  export type UserPackageMinAggregateOutputType = {
    id: string | null
    userId: string | null
    packageId: string | null
    assignedAt: Date | null
    expiresAt: Date | null
  }

  export type UserPackageMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    packageId: string | null
    assignedAt: Date | null
    expiresAt: Date | null
  }

  export type UserPackageCountAggregateOutputType = {
    id: number
    userId: number
    packageId: number
    assignedAt: number
    expiresAt: number
    _all: number
  }


  export type UserPackageMinAggregateInputType = {
    id?: true
    userId?: true
    packageId?: true
    assignedAt?: true
    expiresAt?: true
  }

  export type UserPackageMaxAggregateInputType = {
    id?: true
    userId?: true
    packageId?: true
    assignedAt?: true
    expiresAt?: true
  }

  export type UserPackageCountAggregateInputType = {
    id?: true
    userId?: true
    packageId?: true
    assignedAt?: true
    expiresAt?: true
    _all?: true
  }

  export type UserPackageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPackage to aggregate.
     */
    where?: UserPackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPackages to fetch.
     */
    orderBy?: UserPackageOrderByWithRelationInput | UserPackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserPackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserPackages
    **/
    _count?: true | UserPackageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserPackageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserPackageMaxAggregateInputType
  }

  export type GetUserPackageAggregateType<T extends UserPackageAggregateArgs> = {
        [P in keyof T & keyof AggregateUserPackage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserPackage[P]>
      : GetScalarType<T[P], AggregateUserPackage[P]>
  }




  export type UserPackageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPackageWhereInput
    orderBy?: UserPackageOrderByWithAggregationInput | UserPackageOrderByWithAggregationInput[]
    by: UserPackageScalarFieldEnum[] | UserPackageScalarFieldEnum
    having?: UserPackageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserPackageCountAggregateInputType | true
    _min?: UserPackageMinAggregateInputType
    _max?: UserPackageMaxAggregateInputType
  }

  export type UserPackageGroupByOutputType = {
    id: string
    userId: string
    packageId: string
    assignedAt: Date
    expiresAt: Date | null
    _count: UserPackageCountAggregateOutputType | null
    _min: UserPackageMinAggregateOutputType | null
    _max: UserPackageMaxAggregateOutputType | null
  }

  type GetUserPackageGroupByPayload<T extends UserPackageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserPackageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserPackageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserPackageGroupByOutputType[P]>
            : GetScalarType<T[P], UserPackageGroupByOutputType[P]>
        }
      >
    >


  export type UserPackageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    packageId?: boolean
    assignedAt?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    package?: boolean | PackageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPackage"]>

  export type UserPackageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    packageId?: boolean
    assignedAt?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    package?: boolean | PackageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPackage"]>

  export type UserPackageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    packageId?: boolean
    assignedAt?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    package?: boolean | PackageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPackage"]>

  export type UserPackageSelectScalar = {
    id?: boolean
    userId?: boolean
    packageId?: boolean
    assignedAt?: boolean
    expiresAt?: boolean
  }

  export type UserPackageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "packageId" | "assignedAt" | "expiresAt", ExtArgs["result"]["userPackage"]>
  export type UserPackageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    package?: boolean | PackageDefaultArgs<ExtArgs>
  }
  export type UserPackageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    package?: boolean | PackageDefaultArgs<ExtArgs>
  }
  export type UserPackageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    package?: boolean | PackageDefaultArgs<ExtArgs>
  }

  export type $UserPackagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserPackage"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      package: Prisma.$PackagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      packageId: string
      assignedAt: Date
      expiresAt: Date | null
    }, ExtArgs["result"]["userPackage"]>
    composites: {}
  }

  type UserPackageGetPayload<S extends boolean | null | undefined | UserPackageDefaultArgs> = $Result.GetResult<Prisma.$UserPackagePayload, S>

  type UserPackageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserPackageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserPackageCountAggregateInputType | true
    }

  export interface UserPackageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserPackage'], meta: { name: 'UserPackage' } }
    /**
     * Find zero or one UserPackage that matches the filter.
     * @param {UserPackageFindUniqueArgs} args - Arguments to find a UserPackage
     * @example
     * // Get one UserPackage
     * const userPackage = await prisma.userPackage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserPackageFindUniqueArgs>(args: SelectSubset<T, UserPackageFindUniqueArgs<ExtArgs>>): Prisma__UserPackageClient<$Result.GetResult<Prisma.$UserPackagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserPackage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserPackageFindUniqueOrThrowArgs} args - Arguments to find a UserPackage
     * @example
     * // Get one UserPackage
     * const userPackage = await prisma.userPackage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserPackageFindUniqueOrThrowArgs>(args: SelectSubset<T, UserPackageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserPackageClient<$Result.GetResult<Prisma.$UserPackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPackage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPackageFindFirstArgs} args - Arguments to find a UserPackage
     * @example
     * // Get one UserPackage
     * const userPackage = await prisma.userPackage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserPackageFindFirstArgs>(args?: SelectSubset<T, UserPackageFindFirstArgs<ExtArgs>>): Prisma__UserPackageClient<$Result.GetResult<Prisma.$UserPackagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPackage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPackageFindFirstOrThrowArgs} args - Arguments to find a UserPackage
     * @example
     * // Get one UserPackage
     * const userPackage = await prisma.userPackage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserPackageFindFirstOrThrowArgs>(args?: SelectSubset<T, UserPackageFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserPackageClient<$Result.GetResult<Prisma.$UserPackagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserPackages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPackageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserPackages
     * const userPackages = await prisma.userPackage.findMany()
     * 
     * // Get first 10 UserPackages
     * const userPackages = await prisma.userPackage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userPackageWithIdOnly = await prisma.userPackage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserPackageFindManyArgs>(args?: SelectSubset<T, UserPackageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPackagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserPackage.
     * @param {UserPackageCreateArgs} args - Arguments to create a UserPackage.
     * @example
     * // Create one UserPackage
     * const UserPackage = await prisma.userPackage.create({
     *   data: {
     *     // ... data to create a UserPackage
     *   }
     * })
     * 
     */
    create<T extends UserPackageCreateArgs>(args: SelectSubset<T, UserPackageCreateArgs<ExtArgs>>): Prisma__UserPackageClient<$Result.GetResult<Prisma.$UserPackagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserPackages.
     * @param {UserPackageCreateManyArgs} args - Arguments to create many UserPackages.
     * @example
     * // Create many UserPackages
     * const userPackage = await prisma.userPackage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserPackageCreateManyArgs>(args?: SelectSubset<T, UserPackageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserPackages and returns the data saved in the database.
     * @param {UserPackageCreateManyAndReturnArgs} args - Arguments to create many UserPackages.
     * @example
     * // Create many UserPackages
     * const userPackage = await prisma.userPackage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserPackages and only return the `id`
     * const userPackageWithIdOnly = await prisma.userPackage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserPackageCreateManyAndReturnArgs>(args?: SelectSubset<T, UserPackageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPackagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserPackage.
     * @param {UserPackageDeleteArgs} args - Arguments to delete one UserPackage.
     * @example
     * // Delete one UserPackage
     * const UserPackage = await prisma.userPackage.delete({
     *   where: {
     *     // ... filter to delete one UserPackage
     *   }
     * })
     * 
     */
    delete<T extends UserPackageDeleteArgs>(args: SelectSubset<T, UserPackageDeleteArgs<ExtArgs>>): Prisma__UserPackageClient<$Result.GetResult<Prisma.$UserPackagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserPackage.
     * @param {UserPackageUpdateArgs} args - Arguments to update one UserPackage.
     * @example
     * // Update one UserPackage
     * const userPackage = await prisma.userPackage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserPackageUpdateArgs>(args: SelectSubset<T, UserPackageUpdateArgs<ExtArgs>>): Prisma__UserPackageClient<$Result.GetResult<Prisma.$UserPackagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserPackages.
     * @param {UserPackageDeleteManyArgs} args - Arguments to filter UserPackages to delete.
     * @example
     * // Delete a few UserPackages
     * const { count } = await prisma.userPackage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserPackageDeleteManyArgs>(args?: SelectSubset<T, UserPackageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPackages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPackageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserPackages
     * const userPackage = await prisma.userPackage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserPackageUpdateManyArgs>(args: SelectSubset<T, UserPackageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPackages and returns the data updated in the database.
     * @param {UserPackageUpdateManyAndReturnArgs} args - Arguments to update many UserPackages.
     * @example
     * // Update many UserPackages
     * const userPackage = await prisma.userPackage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserPackages and only return the `id`
     * const userPackageWithIdOnly = await prisma.userPackage.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserPackageUpdateManyAndReturnArgs>(args: SelectSubset<T, UserPackageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPackagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserPackage.
     * @param {UserPackageUpsertArgs} args - Arguments to update or create a UserPackage.
     * @example
     * // Update or create a UserPackage
     * const userPackage = await prisma.userPackage.upsert({
     *   create: {
     *     // ... data to create a UserPackage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserPackage we want to update
     *   }
     * })
     */
    upsert<T extends UserPackageUpsertArgs>(args: SelectSubset<T, UserPackageUpsertArgs<ExtArgs>>): Prisma__UserPackageClient<$Result.GetResult<Prisma.$UserPackagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserPackages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPackageCountArgs} args - Arguments to filter UserPackages to count.
     * @example
     * // Count the number of UserPackages
     * const count = await prisma.userPackage.count({
     *   where: {
     *     // ... the filter for the UserPackages we want to count
     *   }
     * })
    **/
    count<T extends UserPackageCountArgs>(
      args?: Subset<T, UserPackageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserPackageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserPackage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPackageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserPackageAggregateArgs>(args: Subset<T, UserPackageAggregateArgs>): Prisma.PrismaPromise<GetUserPackageAggregateType<T>>

    /**
     * Group by UserPackage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPackageGroupByArgs} args - Group by arguments.
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
      T extends UserPackageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserPackageGroupByArgs['orderBy'] }
        : { orderBy?: UserPackageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserPackageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserPackageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserPackage model
   */
  readonly fields: UserPackageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserPackage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserPackageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    package<T extends PackageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PackageDefaultArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserPackage model
   */
  interface UserPackageFieldRefs {
    readonly id: FieldRef<"UserPackage", 'String'>
    readonly userId: FieldRef<"UserPackage", 'String'>
    readonly packageId: FieldRef<"UserPackage", 'String'>
    readonly assignedAt: FieldRef<"UserPackage", 'DateTime'>
    readonly expiresAt: FieldRef<"UserPackage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserPackage findUnique
   */
  export type UserPackageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPackage
     */
    select?: UserPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPackage
     */
    omit?: UserPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPackageInclude<ExtArgs> | null
    /**
     * Filter, which UserPackage to fetch.
     */
    where: UserPackageWhereUniqueInput
  }

  /**
   * UserPackage findUniqueOrThrow
   */
  export type UserPackageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPackage
     */
    select?: UserPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPackage
     */
    omit?: UserPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPackageInclude<ExtArgs> | null
    /**
     * Filter, which UserPackage to fetch.
     */
    where: UserPackageWhereUniqueInput
  }

  /**
   * UserPackage findFirst
   */
  export type UserPackageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPackage
     */
    select?: UserPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPackage
     */
    omit?: UserPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPackageInclude<ExtArgs> | null
    /**
     * Filter, which UserPackage to fetch.
     */
    where?: UserPackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPackages to fetch.
     */
    orderBy?: UserPackageOrderByWithRelationInput | UserPackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPackages.
     */
    cursor?: UserPackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPackages.
     */
    distinct?: UserPackageScalarFieldEnum | UserPackageScalarFieldEnum[]
  }

  /**
   * UserPackage findFirstOrThrow
   */
  export type UserPackageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPackage
     */
    select?: UserPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPackage
     */
    omit?: UserPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPackageInclude<ExtArgs> | null
    /**
     * Filter, which UserPackage to fetch.
     */
    where?: UserPackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPackages to fetch.
     */
    orderBy?: UserPackageOrderByWithRelationInput | UserPackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPackages.
     */
    cursor?: UserPackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPackages.
     */
    distinct?: UserPackageScalarFieldEnum | UserPackageScalarFieldEnum[]
  }

  /**
   * UserPackage findMany
   */
  export type UserPackageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPackage
     */
    select?: UserPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPackage
     */
    omit?: UserPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPackageInclude<ExtArgs> | null
    /**
     * Filter, which UserPackages to fetch.
     */
    where?: UserPackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPackages to fetch.
     */
    orderBy?: UserPackageOrderByWithRelationInput | UserPackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserPackages.
     */
    cursor?: UserPackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPackages.
     */
    skip?: number
    distinct?: UserPackageScalarFieldEnum | UserPackageScalarFieldEnum[]
  }

  /**
   * UserPackage create
   */
  export type UserPackageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPackage
     */
    select?: UserPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPackage
     */
    omit?: UserPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPackageInclude<ExtArgs> | null
    /**
     * The data needed to create a UserPackage.
     */
    data: XOR<UserPackageCreateInput, UserPackageUncheckedCreateInput>
  }

  /**
   * UserPackage createMany
   */
  export type UserPackageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserPackages.
     */
    data: UserPackageCreateManyInput | UserPackageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserPackage createManyAndReturn
   */
  export type UserPackageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPackage
     */
    select?: UserPackageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserPackage
     */
    omit?: UserPackageOmit<ExtArgs> | null
    /**
     * The data used to create many UserPackages.
     */
    data: UserPackageCreateManyInput | UserPackageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPackageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPackage update
   */
  export type UserPackageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPackage
     */
    select?: UserPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPackage
     */
    omit?: UserPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPackageInclude<ExtArgs> | null
    /**
     * The data needed to update a UserPackage.
     */
    data: XOR<UserPackageUpdateInput, UserPackageUncheckedUpdateInput>
    /**
     * Choose, which UserPackage to update.
     */
    where: UserPackageWhereUniqueInput
  }

  /**
   * UserPackage updateMany
   */
  export type UserPackageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserPackages.
     */
    data: XOR<UserPackageUpdateManyMutationInput, UserPackageUncheckedUpdateManyInput>
    /**
     * Filter which UserPackages to update
     */
    where?: UserPackageWhereInput
    /**
     * Limit how many UserPackages to update.
     */
    limit?: number
  }

  /**
   * UserPackage updateManyAndReturn
   */
  export type UserPackageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPackage
     */
    select?: UserPackageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserPackage
     */
    omit?: UserPackageOmit<ExtArgs> | null
    /**
     * The data used to update UserPackages.
     */
    data: XOR<UserPackageUpdateManyMutationInput, UserPackageUncheckedUpdateManyInput>
    /**
     * Filter which UserPackages to update
     */
    where?: UserPackageWhereInput
    /**
     * Limit how many UserPackages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPackageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPackage upsert
   */
  export type UserPackageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPackage
     */
    select?: UserPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPackage
     */
    omit?: UserPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPackageInclude<ExtArgs> | null
    /**
     * The filter to search for the UserPackage to update in case it exists.
     */
    where: UserPackageWhereUniqueInput
    /**
     * In case the UserPackage found by the `where` argument doesn't exist, create a new UserPackage with this data.
     */
    create: XOR<UserPackageCreateInput, UserPackageUncheckedCreateInput>
    /**
     * In case the UserPackage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserPackageUpdateInput, UserPackageUncheckedUpdateInput>
  }

  /**
   * UserPackage delete
   */
  export type UserPackageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPackage
     */
    select?: UserPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPackage
     */
    omit?: UserPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPackageInclude<ExtArgs> | null
    /**
     * Filter which UserPackage to delete.
     */
    where: UserPackageWhereUniqueInput
  }

  /**
   * UserPackage deleteMany
   */
  export type UserPackageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPackages to delete
     */
    where?: UserPackageWhereInput
    /**
     * Limit how many UserPackages to delete.
     */
    limit?: number
  }

  /**
   * UserPackage without action
   */
  export type UserPackageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPackage
     */
    select?: UserPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPackage
     */
    omit?: UserPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPackageInclude<ExtArgs> | null
  }


  /**
   * Model ModuleUsage
   */

  export type AggregateModuleUsage = {
    _count: ModuleUsageCountAggregateOutputType | null
    _avg: ModuleUsageAvgAggregateOutputType | null
    _sum: ModuleUsageSumAggregateOutputType | null
    _min: ModuleUsageMinAggregateOutputType | null
    _max: ModuleUsageMaxAggregateOutputType | null
  }

  export type ModuleUsageAvgAggregateOutputType = {
    usageCount: number | null
  }

  export type ModuleUsageSumAggregateOutputType = {
    usageCount: number | null
  }

  export type ModuleUsageMinAggregateOutputType = {
    id: string | null
    userId: string | null
    moduleId: string | null
    usageCount: number | null
    lastUpdated: Date | null
  }

  export type ModuleUsageMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    moduleId: string | null
    usageCount: number | null
    lastUpdated: Date | null
  }

  export type ModuleUsageCountAggregateOutputType = {
    id: number
    userId: number
    moduleId: number
    usageCount: number
    lastUpdated: number
    _all: number
  }


  export type ModuleUsageAvgAggregateInputType = {
    usageCount?: true
  }

  export type ModuleUsageSumAggregateInputType = {
    usageCount?: true
  }

  export type ModuleUsageMinAggregateInputType = {
    id?: true
    userId?: true
    moduleId?: true
    usageCount?: true
    lastUpdated?: true
  }

  export type ModuleUsageMaxAggregateInputType = {
    id?: true
    userId?: true
    moduleId?: true
    usageCount?: true
    lastUpdated?: true
  }

  export type ModuleUsageCountAggregateInputType = {
    id?: true
    userId?: true
    moduleId?: true
    usageCount?: true
    lastUpdated?: true
    _all?: true
  }

  export type ModuleUsageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModuleUsage to aggregate.
     */
    where?: ModuleUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModuleUsages to fetch.
     */
    orderBy?: ModuleUsageOrderByWithRelationInput | ModuleUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModuleUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModuleUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModuleUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ModuleUsages
    **/
    _count?: true | ModuleUsageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModuleUsageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModuleUsageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModuleUsageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModuleUsageMaxAggregateInputType
  }

  export type GetModuleUsageAggregateType<T extends ModuleUsageAggregateArgs> = {
        [P in keyof T & keyof AggregateModuleUsage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModuleUsage[P]>
      : GetScalarType<T[P], AggregateModuleUsage[P]>
  }




  export type ModuleUsageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModuleUsageWhereInput
    orderBy?: ModuleUsageOrderByWithAggregationInput | ModuleUsageOrderByWithAggregationInput[]
    by: ModuleUsageScalarFieldEnum[] | ModuleUsageScalarFieldEnum
    having?: ModuleUsageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModuleUsageCountAggregateInputType | true
    _avg?: ModuleUsageAvgAggregateInputType
    _sum?: ModuleUsageSumAggregateInputType
    _min?: ModuleUsageMinAggregateInputType
    _max?: ModuleUsageMaxAggregateInputType
  }

  export type ModuleUsageGroupByOutputType = {
    id: string
    userId: string
    moduleId: string
    usageCount: number
    lastUpdated: Date
    _count: ModuleUsageCountAggregateOutputType | null
    _avg: ModuleUsageAvgAggregateOutputType | null
    _sum: ModuleUsageSumAggregateOutputType | null
    _min: ModuleUsageMinAggregateOutputType | null
    _max: ModuleUsageMaxAggregateOutputType | null
  }

  type GetModuleUsageGroupByPayload<T extends ModuleUsageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModuleUsageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModuleUsageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModuleUsageGroupByOutputType[P]>
            : GetScalarType<T[P], ModuleUsageGroupByOutputType[P]>
        }
      >
    >


  export type ModuleUsageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    moduleId?: boolean
    usageCount?: boolean
    lastUpdated?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["moduleUsage"]>

  export type ModuleUsageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    moduleId?: boolean
    usageCount?: boolean
    lastUpdated?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["moduleUsage"]>

  export type ModuleUsageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    moduleId?: boolean
    usageCount?: boolean
    lastUpdated?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["moduleUsage"]>

  export type ModuleUsageSelectScalar = {
    id?: boolean
    userId?: boolean
    moduleId?: boolean
    usageCount?: boolean
    lastUpdated?: boolean
  }

  export type ModuleUsageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "moduleId" | "usageCount" | "lastUpdated", ExtArgs["result"]["moduleUsage"]>
  export type ModuleUsageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }
  export type ModuleUsageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }
  export type ModuleUsageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }

  export type $ModuleUsagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ModuleUsage"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      module: Prisma.$ModulePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      moduleId: string
      usageCount: number
      lastUpdated: Date
    }, ExtArgs["result"]["moduleUsage"]>
    composites: {}
  }

  type ModuleUsageGetPayload<S extends boolean | null | undefined | ModuleUsageDefaultArgs> = $Result.GetResult<Prisma.$ModuleUsagePayload, S>

  type ModuleUsageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ModuleUsageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModuleUsageCountAggregateInputType | true
    }

  export interface ModuleUsageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ModuleUsage'], meta: { name: 'ModuleUsage' } }
    /**
     * Find zero or one ModuleUsage that matches the filter.
     * @param {ModuleUsageFindUniqueArgs} args - Arguments to find a ModuleUsage
     * @example
     * // Get one ModuleUsage
     * const moduleUsage = await prisma.moduleUsage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModuleUsageFindUniqueArgs>(args: SelectSubset<T, ModuleUsageFindUniqueArgs<ExtArgs>>): Prisma__ModuleUsageClient<$Result.GetResult<Prisma.$ModuleUsagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ModuleUsage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ModuleUsageFindUniqueOrThrowArgs} args - Arguments to find a ModuleUsage
     * @example
     * // Get one ModuleUsage
     * const moduleUsage = await prisma.moduleUsage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModuleUsageFindUniqueOrThrowArgs>(args: SelectSubset<T, ModuleUsageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModuleUsageClient<$Result.GetResult<Prisma.$ModuleUsagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ModuleUsage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleUsageFindFirstArgs} args - Arguments to find a ModuleUsage
     * @example
     * // Get one ModuleUsage
     * const moduleUsage = await prisma.moduleUsage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModuleUsageFindFirstArgs>(args?: SelectSubset<T, ModuleUsageFindFirstArgs<ExtArgs>>): Prisma__ModuleUsageClient<$Result.GetResult<Prisma.$ModuleUsagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ModuleUsage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleUsageFindFirstOrThrowArgs} args - Arguments to find a ModuleUsage
     * @example
     * // Get one ModuleUsage
     * const moduleUsage = await prisma.moduleUsage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModuleUsageFindFirstOrThrowArgs>(args?: SelectSubset<T, ModuleUsageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModuleUsageClient<$Result.GetResult<Prisma.$ModuleUsagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ModuleUsages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleUsageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ModuleUsages
     * const moduleUsages = await prisma.moduleUsage.findMany()
     * 
     * // Get first 10 ModuleUsages
     * const moduleUsages = await prisma.moduleUsage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moduleUsageWithIdOnly = await prisma.moduleUsage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ModuleUsageFindManyArgs>(args?: SelectSubset<T, ModuleUsageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModuleUsagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ModuleUsage.
     * @param {ModuleUsageCreateArgs} args - Arguments to create a ModuleUsage.
     * @example
     * // Create one ModuleUsage
     * const ModuleUsage = await prisma.moduleUsage.create({
     *   data: {
     *     // ... data to create a ModuleUsage
     *   }
     * })
     * 
     */
    create<T extends ModuleUsageCreateArgs>(args: SelectSubset<T, ModuleUsageCreateArgs<ExtArgs>>): Prisma__ModuleUsageClient<$Result.GetResult<Prisma.$ModuleUsagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ModuleUsages.
     * @param {ModuleUsageCreateManyArgs} args - Arguments to create many ModuleUsages.
     * @example
     * // Create many ModuleUsages
     * const moduleUsage = await prisma.moduleUsage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModuleUsageCreateManyArgs>(args?: SelectSubset<T, ModuleUsageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ModuleUsages and returns the data saved in the database.
     * @param {ModuleUsageCreateManyAndReturnArgs} args - Arguments to create many ModuleUsages.
     * @example
     * // Create many ModuleUsages
     * const moduleUsage = await prisma.moduleUsage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ModuleUsages and only return the `id`
     * const moduleUsageWithIdOnly = await prisma.moduleUsage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ModuleUsageCreateManyAndReturnArgs>(args?: SelectSubset<T, ModuleUsageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModuleUsagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ModuleUsage.
     * @param {ModuleUsageDeleteArgs} args - Arguments to delete one ModuleUsage.
     * @example
     * // Delete one ModuleUsage
     * const ModuleUsage = await prisma.moduleUsage.delete({
     *   where: {
     *     // ... filter to delete one ModuleUsage
     *   }
     * })
     * 
     */
    delete<T extends ModuleUsageDeleteArgs>(args: SelectSubset<T, ModuleUsageDeleteArgs<ExtArgs>>): Prisma__ModuleUsageClient<$Result.GetResult<Prisma.$ModuleUsagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ModuleUsage.
     * @param {ModuleUsageUpdateArgs} args - Arguments to update one ModuleUsage.
     * @example
     * // Update one ModuleUsage
     * const moduleUsage = await prisma.moduleUsage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModuleUsageUpdateArgs>(args: SelectSubset<T, ModuleUsageUpdateArgs<ExtArgs>>): Prisma__ModuleUsageClient<$Result.GetResult<Prisma.$ModuleUsagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ModuleUsages.
     * @param {ModuleUsageDeleteManyArgs} args - Arguments to filter ModuleUsages to delete.
     * @example
     * // Delete a few ModuleUsages
     * const { count } = await prisma.moduleUsage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModuleUsageDeleteManyArgs>(args?: SelectSubset<T, ModuleUsageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModuleUsages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleUsageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ModuleUsages
     * const moduleUsage = await prisma.moduleUsage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModuleUsageUpdateManyArgs>(args: SelectSubset<T, ModuleUsageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModuleUsages and returns the data updated in the database.
     * @param {ModuleUsageUpdateManyAndReturnArgs} args - Arguments to update many ModuleUsages.
     * @example
     * // Update many ModuleUsages
     * const moduleUsage = await prisma.moduleUsage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ModuleUsages and only return the `id`
     * const moduleUsageWithIdOnly = await prisma.moduleUsage.updateManyAndReturn({
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
    updateManyAndReturn<T extends ModuleUsageUpdateManyAndReturnArgs>(args: SelectSubset<T, ModuleUsageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModuleUsagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ModuleUsage.
     * @param {ModuleUsageUpsertArgs} args - Arguments to update or create a ModuleUsage.
     * @example
     * // Update or create a ModuleUsage
     * const moduleUsage = await prisma.moduleUsage.upsert({
     *   create: {
     *     // ... data to create a ModuleUsage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ModuleUsage we want to update
     *   }
     * })
     */
    upsert<T extends ModuleUsageUpsertArgs>(args: SelectSubset<T, ModuleUsageUpsertArgs<ExtArgs>>): Prisma__ModuleUsageClient<$Result.GetResult<Prisma.$ModuleUsagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ModuleUsages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleUsageCountArgs} args - Arguments to filter ModuleUsages to count.
     * @example
     * // Count the number of ModuleUsages
     * const count = await prisma.moduleUsage.count({
     *   where: {
     *     // ... the filter for the ModuleUsages we want to count
     *   }
     * })
    **/
    count<T extends ModuleUsageCountArgs>(
      args?: Subset<T, ModuleUsageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModuleUsageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ModuleUsage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleUsageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ModuleUsageAggregateArgs>(args: Subset<T, ModuleUsageAggregateArgs>): Prisma.PrismaPromise<GetModuleUsageAggregateType<T>>

    /**
     * Group by ModuleUsage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleUsageGroupByArgs} args - Group by arguments.
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
      T extends ModuleUsageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModuleUsageGroupByArgs['orderBy'] }
        : { orderBy?: ModuleUsageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ModuleUsageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModuleUsageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ModuleUsage model
   */
  readonly fields: ModuleUsageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ModuleUsage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModuleUsageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    module<T extends ModuleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModuleDefaultArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ModuleUsage model
   */
  interface ModuleUsageFieldRefs {
    readonly id: FieldRef<"ModuleUsage", 'String'>
    readonly userId: FieldRef<"ModuleUsage", 'String'>
    readonly moduleId: FieldRef<"ModuleUsage", 'String'>
    readonly usageCount: FieldRef<"ModuleUsage", 'Int'>
    readonly lastUpdated: FieldRef<"ModuleUsage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ModuleUsage findUnique
   */
  export type ModuleUsageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleUsage
     */
    select?: ModuleUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleUsage
     */
    omit?: ModuleUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleUsageInclude<ExtArgs> | null
    /**
     * Filter, which ModuleUsage to fetch.
     */
    where: ModuleUsageWhereUniqueInput
  }

  /**
   * ModuleUsage findUniqueOrThrow
   */
  export type ModuleUsageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleUsage
     */
    select?: ModuleUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleUsage
     */
    omit?: ModuleUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleUsageInclude<ExtArgs> | null
    /**
     * Filter, which ModuleUsage to fetch.
     */
    where: ModuleUsageWhereUniqueInput
  }

  /**
   * ModuleUsage findFirst
   */
  export type ModuleUsageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleUsage
     */
    select?: ModuleUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleUsage
     */
    omit?: ModuleUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleUsageInclude<ExtArgs> | null
    /**
     * Filter, which ModuleUsage to fetch.
     */
    where?: ModuleUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModuleUsages to fetch.
     */
    orderBy?: ModuleUsageOrderByWithRelationInput | ModuleUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModuleUsages.
     */
    cursor?: ModuleUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModuleUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModuleUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModuleUsages.
     */
    distinct?: ModuleUsageScalarFieldEnum | ModuleUsageScalarFieldEnum[]
  }

  /**
   * ModuleUsage findFirstOrThrow
   */
  export type ModuleUsageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleUsage
     */
    select?: ModuleUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleUsage
     */
    omit?: ModuleUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleUsageInclude<ExtArgs> | null
    /**
     * Filter, which ModuleUsage to fetch.
     */
    where?: ModuleUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModuleUsages to fetch.
     */
    orderBy?: ModuleUsageOrderByWithRelationInput | ModuleUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModuleUsages.
     */
    cursor?: ModuleUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModuleUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModuleUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModuleUsages.
     */
    distinct?: ModuleUsageScalarFieldEnum | ModuleUsageScalarFieldEnum[]
  }

  /**
   * ModuleUsage findMany
   */
  export type ModuleUsageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleUsage
     */
    select?: ModuleUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleUsage
     */
    omit?: ModuleUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleUsageInclude<ExtArgs> | null
    /**
     * Filter, which ModuleUsages to fetch.
     */
    where?: ModuleUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModuleUsages to fetch.
     */
    orderBy?: ModuleUsageOrderByWithRelationInput | ModuleUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ModuleUsages.
     */
    cursor?: ModuleUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModuleUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModuleUsages.
     */
    skip?: number
    distinct?: ModuleUsageScalarFieldEnum | ModuleUsageScalarFieldEnum[]
  }

  /**
   * ModuleUsage create
   */
  export type ModuleUsageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleUsage
     */
    select?: ModuleUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleUsage
     */
    omit?: ModuleUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleUsageInclude<ExtArgs> | null
    /**
     * The data needed to create a ModuleUsage.
     */
    data: XOR<ModuleUsageCreateInput, ModuleUsageUncheckedCreateInput>
  }

  /**
   * ModuleUsage createMany
   */
  export type ModuleUsageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ModuleUsages.
     */
    data: ModuleUsageCreateManyInput | ModuleUsageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ModuleUsage createManyAndReturn
   */
  export type ModuleUsageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleUsage
     */
    select?: ModuleUsageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleUsage
     */
    omit?: ModuleUsageOmit<ExtArgs> | null
    /**
     * The data used to create many ModuleUsages.
     */
    data: ModuleUsageCreateManyInput | ModuleUsageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleUsageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ModuleUsage update
   */
  export type ModuleUsageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleUsage
     */
    select?: ModuleUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleUsage
     */
    omit?: ModuleUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleUsageInclude<ExtArgs> | null
    /**
     * The data needed to update a ModuleUsage.
     */
    data: XOR<ModuleUsageUpdateInput, ModuleUsageUncheckedUpdateInput>
    /**
     * Choose, which ModuleUsage to update.
     */
    where: ModuleUsageWhereUniqueInput
  }

  /**
   * ModuleUsage updateMany
   */
  export type ModuleUsageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ModuleUsages.
     */
    data: XOR<ModuleUsageUpdateManyMutationInput, ModuleUsageUncheckedUpdateManyInput>
    /**
     * Filter which ModuleUsages to update
     */
    where?: ModuleUsageWhereInput
    /**
     * Limit how many ModuleUsages to update.
     */
    limit?: number
  }

  /**
   * ModuleUsage updateManyAndReturn
   */
  export type ModuleUsageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleUsage
     */
    select?: ModuleUsageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleUsage
     */
    omit?: ModuleUsageOmit<ExtArgs> | null
    /**
     * The data used to update ModuleUsages.
     */
    data: XOR<ModuleUsageUpdateManyMutationInput, ModuleUsageUncheckedUpdateManyInput>
    /**
     * Filter which ModuleUsages to update
     */
    where?: ModuleUsageWhereInput
    /**
     * Limit how many ModuleUsages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleUsageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ModuleUsage upsert
   */
  export type ModuleUsageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleUsage
     */
    select?: ModuleUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleUsage
     */
    omit?: ModuleUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleUsageInclude<ExtArgs> | null
    /**
     * The filter to search for the ModuleUsage to update in case it exists.
     */
    where: ModuleUsageWhereUniqueInput
    /**
     * In case the ModuleUsage found by the `where` argument doesn't exist, create a new ModuleUsage with this data.
     */
    create: XOR<ModuleUsageCreateInput, ModuleUsageUncheckedCreateInput>
    /**
     * In case the ModuleUsage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModuleUsageUpdateInput, ModuleUsageUncheckedUpdateInput>
  }

  /**
   * ModuleUsage delete
   */
  export type ModuleUsageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleUsage
     */
    select?: ModuleUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleUsage
     */
    omit?: ModuleUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleUsageInclude<ExtArgs> | null
    /**
     * Filter which ModuleUsage to delete.
     */
    where: ModuleUsageWhereUniqueInput
  }

  /**
   * ModuleUsage deleteMany
   */
  export type ModuleUsageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModuleUsages to delete
     */
    where?: ModuleUsageWhereInput
    /**
     * Limit how many ModuleUsages to delete.
     */
    limit?: number
  }

  /**
   * ModuleUsage without action
   */
  export type ModuleUsageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleUsage
     */
    select?: ModuleUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModuleUsage
     */
    omit?: ModuleUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleUsageInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    email: 'email',
    password: 'password',
    profession: 'profession',
    country: 'country',
    city: 'city',
    deviceId: 'deviceId',
    isAdmin: 'isAdmin',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    lastLoginAt: 'lastLoginAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ModuleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ModuleScalarFieldEnum = (typeof ModuleScalarFieldEnum)[keyof typeof ModuleScalarFieldEnum]


  export const ModuleTierScalarFieldEnum: {
    id: 'id',
    moduleId: 'moduleId',
    tier: 'tier',
    entitlementName: 'entitlementName',
    revCatEntitlementName: 'revCatEntitlementName',
    webviewUrl: 'webviewUrl',
    zipFileUrl: 'zipFileUrl',
    iconUrl: 'iconUrl',
    hasTextProduction: 'hasTextProduction',
    hasConclusion: 'hasConclusion',
    hasMap: 'hasMap',
    price: 'price',
    usageLimit: 'usageLimit',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ModuleTierScalarFieldEnum = (typeof ModuleTierScalarFieldEnum)[keyof typeof ModuleTierScalarFieldEnum]


  export const PackageScalarFieldEnum: {
    id: 'id',
    entitlementName: 'entitlementName',
    name: 'name',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PackageScalarFieldEnum = (typeof PackageScalarFieldEnum)[keyof typeof PackageScalarFieldEnum]


  export const PackageModuleScalarFieldEnum: {
    id: 'id',
    packageId: 'packageId',
    moduleId: 'moduleId',
    createdAt: 'createdAt'
  };

  export type PackageModuleScalarFieldEnum = (typeof PackageModuleScalarFieldEnum)[keyof typeof PackageModuleScalarFieldEnum]


  export const UserModuleScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    moduleId: 'moduleId',
    assignedAt: 'assignedAt',
    expiresAt: 'expiresAt'
  };

  export type UserModuleScalarFieldEnum = (typeof UserModuleScalarFieldEnum)[keyof typeof UserModuleScalarFieldEnum]


  export const UserPackageScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    packageId: 'packageId',
    assignedAt: 'assignedAt',
    expiresAt: 'expiresAt'
  };

  export type UserPackageScalarFieldEnum = (typeof UserPackageScalarFieldEnum)[keyof typeof UserPackageScalarFieldEnum]


  export const ModuleUsageScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    moduleId: 'moduleId',
    usageCount: 'usageCount',
    lastUpdated: 'lastUpdated'
  };

  export type ModuleUsageScalarFieldEnum = (typeof ModuleUsageScalarFieldEnum)[keyof typeof ModuleUsageScalarFieldEnum]


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
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    profession?: StringNullableFilter<"User"> | string | null
    country?: StringNullableFilter<"User"> | string | null
    city?: StringNullableFilter<"User"> | string | null
    deviceId?: StringNullableFilter<"User"> | string | null
    isAdmin?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    userModules?: UserModuleListRelationFilter
    userPackages?: UserPackageListRelationFilter
    moduleUsage?: ModuleUsageListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profession?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    deviceId?: SortOrderInput | SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    userModules?: UserModuleOrderByRelationAggregateInput
    userPackages?: UserPackageOrderByRelationAggregateInput
    moduleUsage?: ModuleUsageOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    profession?: StringNullableFilter<"User"> | string | null
    country?: StringNullableFilter<"User"> | string | null
    city?: StringNullableFilter<"User"> | string | null
    deviceId?: StringNullableFilter<"User"> | string | null
    isAdmin?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    userModules?: UserModuleListRelationFilter
    userPackages?: UserPackageListRelationFilter
    moduleUsage?: ModuleUsageListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profession?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    deviceId?: SortOrderInput | SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    fullName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    profession?: StringNullableWithAggregatesFilter<"User"> | string | null
    country?: StringNullableWithAggregatesFilter<"User"> | string | null
    city?: StringNullableWithAggregatesFilter<"User"> | string | null
    deviceId?: StringNullableWithAggregatesFilter<"User"> | string | null
    isAdmin?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    lastLoginAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type ModuleWhereInput = {
    AND?: ModuleWhereInput | ModuleWhereInput[]
    OR?: ModuleWhereInput[]
    NOT?: ModuleWhereInput | ModuleWhereInput[]
    id?: StringFilter<"Module"> | string
    name?: StringFilter<"Module"> | string
    description?: StringNullableFilter<"Module"> | string | null
    status?: StringFilter<"Module"> | string
    createdAt?: DateTimeFilter<"Module"> | Date | string
    updatedAt?: DateTimeFilter<"Module"> | Date | string
    tiers?: ModuleTierListRelationFilter
    userModules?: UserModuleListRelationFilter
    packageModules?: PackageModuleListRelationFilter
    moduleUsage?: ModuleUsageListRelationFilter
  }

  export type ModuleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tiers?: ModuleTierOrderByRelationAggregateInput
    userModules?: UserModuleOrderByRelationAggregateInput
    packageModules?: PackageModuleOrderByRelationAggregateInput
    moduleUsage?: ModuleUsageOrderByRelationAggregateInput
  }

  export type ModuleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ModuleWhereInput | ModuleWhereInput[]
    OR?: ModuleWhereInput[]
    NOT?: ModuleWhereInput | ModuleWhereInput[]
    name?: StringFilter<"Module"> | string
    description?: StringNullableFilter<"Module"> | string | null
    status?: StringFilter<"Module"> | string
    createdAt?: DateTimeFilter<"Module"> | Date | string
    updatedAt?: DateTimeFilter<"Module"> | Date | string
    tiers?: ModuleTierListRelationFilter
    userModules?: UserModuleListRelationFilter
    packageModules?: PackageModuleListRelationFilter
    moduleUsage?: ModuleUsageListRelationFilter
  }, "id">

  export type ModuleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ModuleCountOrderByAggregateInput
    _max?: ModuleMaxOrderByAggregateInput
    _min?: ModuleMinOrderByAggregateInput
  }

  export type ModuleScalarWhereWithAggregatesInput = {
    AND?: ModuleScalarWhereWithAggregatesInput | ModuleScalarWhereWithAggregatesInput[]
    OR?: ModuleScalarWhereWithAggregatesInput[]
    NOT?: ModuleScalarWhereWithAggregatesInput | ModuleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Module"> | string
    name?: StringWithAggregatesFilter<"Module"> | string
    description?: StringNullableWithAggregatesFilter<"Module"> | string | null
    status?: StringWithAggregatesFilter<"Module"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Module"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Module"> | Date | string
  }

  export type ModuleTierWhereInput = {
    AND?: ModuleTierWhereInput | ModuleTierWhereInput[]
    OR?: ModuleTierWhereInput[]
    NOT?: ModuleTierWhereInput | ModuleTierWhereInput[]
    id?: StringFilter<"ModuleTier"> | string
    moduleId?: StringFilter<"ModuleTier"> | string
    tier?: StringFilter<"ModuleTier"> | string
    entitlementName?: StringFilter<"ModuleTier"> | string
    revCatEntitlementName?: StringFilter<"ModuleTier"> | string
    webviewUrl?: StringNullableFilter<"ModuleTier"> | string | null
    zipFileUrl?: StringNullableFilter<"ModuleTier"> | string | null
    iconUrl?: StringNullableFilter<"ModuleTier"> | string | null
    hasTextProduction?: BoolFilter<"ModuleTier"> | boolean
    hasConclusion?: BoolFilter<"ModuleTier"> | boolean
    hasMap?: BoolFilter<"ModuleTier"> | boolean
    price?: DecimalNullableFilter<"ModuleTier"> | Decimal | DecimalJsLike | number | string | null
    usageLimit?: IntFilter<"ModuleTier"> | number
    createdAt?: DateTimeFilter<"ModuleTier"> | Date | string
    updatedAt?: DateTimeFilter<"ModuleTier"> | Date | string
    module?: XOR<ModuleScalarRelationFilter, ModuleWhereInput>
  }

  export type ModuleTierOrderByWithRelationInput = {
    id?: SortOrder
    moduleId?: SortOrder
    tier?: SortOrder
    entitlementName?: SortOrder
    revCatEntitlementName?: SortOrder
    webviewUrl?: SortOrderInput | SortOrder
    zipFileUrl?: SortOrderInput | SortOrder
    iconUrl?: SortOrderInput | SortOrder
    hasTextProduction?: SortOrder
    hasConclusion?: SortOrder
    hasMap?: SortOrder
    price?: SortOrderInput | SortOrder
    usageLimit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    module?: ModuleOrderByWithRelationInput
  }

  export type ModuleTierWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    entitlementName?: string
    AND?: ModuleTierWhereInput | ModuleTierWhereInput[]
    OR?: ModuleTierWhereInput[]
    NOT?: ModuleTierWhereInput | ModuleTierWhereInput[]
    moduleId?: StringFilter<"ModuleTier"> | string
    tier?: StringFilter<"ModuleTier"> | string
    revCatEntitlementName?: StringFilter<"ModuleTier"> | string
    webviewUrl?: StringNullableFilter<"ModuleTier"> | string | null
    zipFileUrl?: StringNullableFilter<"ModuleTier"> | string | null
    iconUrl?: StringNullableFilter<"ModuleTier"> | string | null
    hasTextProduction?: BoolFilter<"ModuleTier"> | boolean
    hasConclusion?: BoolFilter<"ModuleTier"> | boolean
    hasMap?: BoolFilter<"ModuleTier"> | boolean
    price?: DecimalNullableFilter<"ModuleTier"> | Decimal | DecimalJsLike | number | string | null
    usageLimit?: IntFilter<"ModuleTier"> | number
    createdAt?: DateTimeFilter<"ModuleTier"> | Date | string
    updatedAt?: DateTimeFilter<"ModuleTier"> | Date | string
    module?: XOR<ModuleScalarRelationFilter, ModuleWhereInput>
  }, "id" | "entitlementName">

  export type ModuleTierOrderByWithAggregationInput = {
    id?: SortOrder
    moduleId?: SortOrder
    tier?: SortOrder
    entitlementName?: SortOrder
    revCatEntitlementName?: SortOrder
    webviewUrl?: SortOrderInput | SortOrder
    zipFileUrl?: SortOrderInput | SortOrder
    iconUrl?: SortOrderInput | SortOrder
    hasTextProduction?: SortOrder
    hasConclusion?: SortOrder
    hasMap?: SortOrder
    price?: SortOrderInput | SortOrder
    usageLimit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ModuleTierCountOrderByAggregateInput
    _avg?: ModuleTierAvgOrderByAggregateInput
    _max?: ModuleTierMaxOrderByAggregateInput
    _min?: ModuleTierMinOrderByAggregateInput
    _sum?: ModuleTierSumOrderByAggregateInput
  }

  export type ModuleTierScalarWhereWithAggregatesInput = {
    AND?: ModuleTierScalarWhereWithAggregatesInput | ModuleTierScalarWhereWithAggregatesInput[]
    OR?: ModuleTierScalarWhereWithAggregatesInput[]
    NOT?: ModuleTierScalarWhereWithAggregatesInput | ModuleTierScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ModuleTier"> | string
    moduleId?: StringWithAggregatesFilter<"ModuleTier"> | string
    tier?: StringWithAggregatesFilter<"ModuleTier"> | string
    entitlementName?: StringWithAggregatesFilter<"ModuleTier"> | string
    revCatEntitlementName?: StringWithAggregatesFilter<"ModuleTier"> | string
    webviewUrl?: StringNullableWithAggregatesFilter<"ModuleTier"> | string | null
    zipFileUrl?: StringNullableWithAggregatesFilter<"ModuleTier"> | string | null
    iconUrl?: StringNullableWithAggregatesFilter<"ModuleTier"> | string | null
    hasTextProduction?: BoolWithAggregatesFilter<"ModuleTier"> | boolean
    hasConclusion?: BoolWithAggregatesFilter<"ModuleTier"> | boolean
    hasMap?: BoolWithAggregatesFilter<"ModuleTier"> | boolean
    price?: DecimalNullableWithAggregatesFilter<"ModuleTier"> | Decimal | DecimalJsLike | number | string | null
    usageLimit?: IntWithAggregatesFilter<"ModuleTier"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ModuleTier"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ModuleTier"> | Date | string
  }

  export type PackageWhereInput = {
    AND?: PackageWhereInput | PackageWhereInput[]
    OR?: PackageWhereInput[]
    NOT?: PackageWhereInput | PackageWhereInput[]
    id?: StringFilter<"Package"> | string
    entitlementName?: StringFilter<"Package"> | string
    name?: StringFilter<"Package"> | string
    isActive?: BoolFilter<"Package"> | boolean
    createdAt?: DateTimeFilter<"Package"> | Date | string
    updatedAt?: DateTimeFilter<"Package"> | Date | string
    packageModules?: PackageModuleListRelationFilter
    userPackages?: UserPackageListRelationFilter
  }

  export type PackageOrderByWithRelationInput = {
    id?: SortOrder
    entitlementName?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    packageModules?: PackageModuleOrderByRelationAggregateInput
    userPackages?: UserPackageOrderByRelationAggregateInput
  }

  export type PackageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    entitlementName?: string
    AND?: PackageWhereInput | PackageWhereInput[]
    OR?: PackageWhereInput[]
    NOT?: PackageWhereInput | PackageWhereInput[]
    name?: StringFilter<"Package"> | string
    isActive?: BoolFilter<"Package"> | boolean
    createdAt?: DateTimeFilter<"Package"> | Date | string
    updatedAt?: DateTimeFilter<"Package"> | Date | string
    packageModules?: PackageModuleListRelationFilter
    userPackages?: UserPackageListRelationFilter
  }, "id" | "entitlementName">

  export type PackageOrderByWithAggregationInput = {
    id?: SortOrder
    entitlementName?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PackageCountOrderByAggregateInput
    _max?: PackageMaxOrderByAggregateInput
    _min?: PackageMinOrderByAggregateInput
  }

  export type PackageScalarWhereWithAggregatesInput = {
    AND?: PackageScalarWhereWithAggregatesInput | PackageScalarWhereWithAggregatesInput[]
    OR?: PackageScalarWhereWithAggregatesInput[]
    NOT?: PackageScalarWhereWithAggregatesInput | PackageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Package"> | string
    entitlementName?: StringWithAggregatesFilter<"Package"> | string
    name?: StringWithAggregatesFilter<"Package"> | string
    isActive?: BoolWithAggregatesFilter<"Package"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Package"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Package"> | Date | string
  }

  export type PackageModuleWhereInput = {
    AND?: PackageModuleWhereInput | PackageModuleWhereInput[]
    OR?: PackageModuleWhereInput[]
    NOT?: PackageModuleWhereInput | PackageModuleWhereInput[]
    id?: StringFilter<"PackageModule"> | string
    packageId?: StringFilter<"PackageModule"> | string
    moduleId?: StringFilter<"PackageModule"> | string
    createdAt?: DateTimeFilter<"PackageModule"> | Date | string
    package?: XOR<PackageScalarRelationFilter, PackageWhereInput>
    module?: XOR<ModuleScalarRelationFilter, ModuleWhereInput>
  }

  export type PackageModuleOrderByWithRelationInput = {
    id?: SortOrder
    packageId?: SortOrder
    moduleId?: SortOrder
    createdAt?: SortOrder
    package?: PackageOrderByWithRelationInput
    module?: ModuleOrderByWithRelationInput
  }

  export type PackageModuleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    packageId_moduleId?: PackageModulePackageIdModuleIdCompoundUniqueInput
    AND?: PackageModuleWhereInput | PackageModuleWhereInput[]
    OR?: PackageModuleWhereInput[]
    NOT?: PackageModuleWhereInput | PackageModuleWhereInput[]
    packageId?: StringFilter<"PackageModule"> | string
    moduleId?: StringFilter<"PackageModule"> | string
    createdAt?: DateTimeFilter<"PackageModule"> | Date | string
    package?: XOR<PackageScalarRelationFilter, PackageWhereInput>
    module?: XOR<ModuleScalarRelationFilter, ModuleWhereInput>
  }, "id" | "packageId_moduleId">

  export type PackageModuleOrderByWithAggregationInput = {
    id?: SortOrder
    packageId?: SortOrder
    moduleId?: SortOrder
    createdAt?: SortOrder
    _count?: PackageModuleCountOrderByAggregateInput
    _max?: PackageModuleMaxOrderByAggregateInput
    _min?: PackageModuleMinOrderByAggregateInput
  }

  export type PackageModuleScalarWhereWithAggregatesInput = {
    AND?: PackageModuleScalarWhereWithAggregatesInput | PackageModuleScalarWhereWithAggregatesInput[]
    OR?: PackageModuleScalarWhereWithAggregatesInput[]
    NOT?: PackageModuleScalarWhereWithAggregatesInput | PackageModuleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PackageModule"> | string
    packageId?: StringWithAggregatesFilter<"PackageModule"> | string
    moduleId?: StringWithAggregatesFilter<"PackageModule"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PackageModule"> | Date | string
  }

  export type UserModuleWhereInput = {
    AND?: UserModuleWhereInput | UserModuleWhereInput[]
    OR?: UserModuleWhereInput[]
    NOT?: UserModuleWhereInput | UserModuleWhereInput[]
    id?: StringFilter<"UserModule"> | string
    userId?: StringFilter<"UserModule"> | string
    moduleId?: StringFilter<"UserModule"> | string
    assignedAt?: DateTimeFilter<"UserModule"> | Date | string
    expiresAt?: DateTimeNullableFilter<"UserModule"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    module?: XOR<ModuleScalarRelationFilter, ModuleWhereInput>
  }

  export type UserModuleOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    moduleId?: SortOrder
    assignedAt?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    module?: ModuleOrderByWithRelationInput
  }

  export type UserModuleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_moduleId?: UserModuleUserIdModuleIdCompoundUniqueInput
    AND?: UserModuleWhereInput | UserModuleWhereInput[]
    OR?: UserModuleWhereInput[]
    NOT?: UserModuleWhereInput | UserModuleWhereInput[]
    userId?: StringFilter<"UserModule"> | string
    moduleId?: StringFilter<"UserModule"> | string
    assignedAt?: DateTimeFilter<"UserModule"> | Date | string
    expiresAt?: DateTimeNullableFilter<"UserModule"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    module?: XOR<ModuleScalarRelationFilter, ModuleWhereInput>
  }, "id" | "userId_moduleId">

  export type UserModuleOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    moduleId?: SortOrder
    assignedAt?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    _count?: UserModuleCountOrderByAggregateInput
    _max?: UserModuleMaxOrderByAggregateInput
    _min?: UserModuleMinOrderByAggregateInput
  }

  export type UserModuleScalarWhereWithAggregatesInput = {
    AND?: UserModuleScalarWhereWithAggregatesInput | UserModuleScalarWhereWithAggregatesInput[]
    OR?: UserModuleScalarWhereWithAggregatesInput[]
    NOT?: UserModuleScalarWhereWithAggregatesInput | UserModuleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserModule"> | string
    userId?: StringWithAggregatesFilter<"UserModule"> | string
    moduleId?: StringWithAggregatesFilter<"UserModule"> | string
    assignedAt?: DateTimeWithAggregatesFilter<"UserModule"> | Date | string
    expiresAt?: DateTimeNullableWithAggregatesFilter<"UserModule"> | Date | string | null
  }

  export type UserPackageWhereInput = {
    AND?: UserPackageWhereInput | UserPackageWhereInput[]
    OR?: UserPackageWhereInput[]
    NOT?: UserPackageWhereInput | UserPackageWhereInput[]
    id?: StringFilter<"UserPackage"> | string
    userId?: StringFilter<"UserPackage"> | string
    packageId?: StringFilter<"UserPackage"> | string
    assignedAt?: DateTimeFilter<"UserPackage"> | Date | string
    expiresAt?: DateTimeNullableFilter<"UserPackage"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    package?: XOR<PackageScalarRelationFilter, PackageWhereInput>
  }

  export type UserPackageOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    packageId?: SortOrder
    assignedAt?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    package?: PackageOrderByWithRelationInput
  }

  export type UserPackageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_packageId?: UserPackageUserIdPackageIdCompoundUniqueInput
    AND?: UserPackageWhereInput | UserPackageWhereInput[]
    OR?: UserPackageWhereInput[]
    NOT?: UserPackageWhereInput | UserPackageWhereInput[]
    userId?: StringFilter<"UserPackage"> | string
    packageId?: StringFilter<"UserPackage"> | string
    assignedAt?: DateTimeFilter<"UserPackage"> | Date | string
    expiresAt?: DateTimeNullableFilter<"UserPackage"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    package?: XOR<PackageScalarRelationFilter, PackageWhereInput>
  }, "id" | "userId_packageId">

  export type UserPackageOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    packageId?: SortOrder
    assignedAt?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    _count?: UserPackageCountOrderByAggregateInput
    _max?: UserPackageMaxOrderByAggregateInput
    _min?: UserPackageMinOrderByAggregateInput
  }

  export type UserPackageScalarWhereWithAggregatesInput = {
    AND?: UserPackageScalarWhereWithAggregatesInput | UserPackageScalarWhereWithAggregatesInput[]
    OR?: UserPackageScalarWhereWithAggregatesInput[]
    NOT?: UserPackageScalarWhereWithAggregatesInput | UserPackageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserPackage"> | string
    userId?: StringWithAggregatesFilter<"UserPackage"> | string
    packageId?: StringWithAggregatesFilter<"UserPackage"> | string
    assignedAt?: DateTimeWithAggregatesFilter<"UserPackage"> | Date | string
    expiresAt?: DateTimeNullableWithAggregatesFilter<"UserPackage"> | Date | string | null
  }

  export type ModuleUsageWhereInput = {
    AND?: ModuleUsageWhereInput | ModuleUsageWhereInput[]
    OR?: ModuleUsageWhereInput[]
    NOT?: ModuleUsageWhereInput | ModuleUsageWhereInput[]
    id?: StringFilter<"ModuleUsage"> | string
    userId?: StringFilter<"ModuleUsage"> | string
    moduleId?: StringFilter<"ModuleUsage"> | string
    usageCount?: IntFilter<"ModuleUsage"> | number
    lastUpdated?: DateTimeFilter<"ModuleUsage"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    module?: XOR<ModuleScalarRelationFilter, ModuleWhereInput>
  }

  export type ModuleUsageOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    moduleId?: SortOrder
    usageCount?: SortOrder
    lastUpdated?: SortOrder
    user?: UserOrderByWithRelationInput
    module?: ModuleOrderByWithRelationInput
  }

  export type ModuleUsageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ModuleUsageWhereInput | ModuleUsageWhereInput[]
    OR?: ModuleUsageWhereInput[]
    NOT?: ModuleUsageWhereInput | ModuleUsageWhereInput[]
    userId?: StringFilter<"ModuleUsage"> | string
    moduleId?: StringFilter<"ModuleUsage"> | string
    usageCount?: IntFilter<"ModuleUsage"> | number
    lastUpdated?: DateTimeFilter<"ModuleUsage"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    module?: XOR<ModuleScalarRelationFilter, ModuleWhereInput>
  }, "id">

  export type ModuleUsageOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    moduleId?: SortOrder
    usageCount?: SortOrder
    lastUpdated?: SortOrder
    _count?: ModuleUsageCountOrderByAggregateInput
    _avg?: ModuleUsageAvgOrderByAggregateInput
    _max?: ModuleUsageMaxOrderByAggregateInput
    _min?: ModuleUsageMinOrderByAggregateInput
    _sum?: ModuleUsageSumOrderByAggregateInput
  }

  export type ModuleUsageScalarWhereWithAggregatesInput = {
    AND?: ModuleUsageScalarWhereWithAggregatesInput | ModuleUsageScalarWhereWithAggregatesInput[]
    OR?: ModuleUsageScalarWhereWithAggregatesInput[]
    NOT?: ModuleUsageScalarWhereWithAggregatesInput | ModuleUsageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ModuleUsage"> | string
    userId?: StringWithAggregatesFilter<"ModuleUsage"> | string
    moduleId?: StringWithAggregatesFilter<"ModuleUsage"> | string
    usageCount?: IntWithAggregatesFilter<"ModuleUsage"> | number
    lastUpdated?: DateTimeWithAggregatesFilter<"ModuleUsage"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    fullName: string
    email: string
    password: string
    profession?: string | null
    country?: string | null
    city?: string | null
    deviceId?: string | null
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    userModules?: UserModuleCreateNestedManyWithoutUserInput
    userPackages?: UserPackageCreateNestedManyWithoutUserInput
    moduleUsage?: ModuleUsageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    fullName: string
    email: string
    password: string
    profession?: string | null
    country?: string | null
    city?: string | null
    deviceId?: string | null
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    userModules?: UserModuleUncheckedCreateNestedManyWithoutUserInput
    userPackages?: UserPackageUncheckedCreateNestedManyWithoutUserInput
    moduleUsage?: ModuleUsageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profession?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userModules?: UserModuleUpdateManyWithoutUserNestedInput
    userPackages?: UserPackageUpdateManyWithoutUserNestedInput
    moduleUsage?: ModuleUsageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profession?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userModules?: UserModuleUncheckedUpdateManyWithoutUserNestedInput
    userPackages?: UserPackageUncheckedUpdateManyWithoutUserNestedInput
    moduleUsage?: ModuleUsageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    fullName: string
    email: string
    password: string
    profession?: string | null
    country?: string | null
    city?: string | null
    deviceId?: string | null
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profession?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profession?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ModuleCreateInput = {
    id?: string
    name: string
    description?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tiers?: ModuleTierCreateNestedManyWithoutModuleInput
    userModules?: UserModuleCreateNestedManyWithoutModuleInput
    packageModules?: PackageModuleCreateNestedManyWithoutModuleInput
    moduleUsage?: ModuleUsageCreateNestedManyWithoutModuleInput
  }

  export type ModuleUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tiers?: ModuleTierUncheckedCreateNestedManyWithoutModuleInput
    userModules?: UserModuleUncheckedCreateNestedManyWithoutModuleInput
    packageModules?: PackageModuleUncheckedCreateNestedManyWithoutModuleInput
    moduleUsage?: ModuleUsageUncheckedCreateNestedManyWithoutModuleInput
  }

  export type ModuleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tiers?: ModuleTierUpdateManyWithoutModuleNestedInput
    userModules?: UserModuleUpdateManyWithoutModuleNestedInput
    packageModules?: PackageModuleUpdateManyWithoutModuleNestedInput
    moduleUsage?: ModuleUsageUpdateManyWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tiers?: ModuleTierUncheckedUpdateManyWithoutModuleNestedInput
    userModules?: UserModuleUncheckedUpdateManyWithoutModuleNestedInput
    packageModules?: PackageModuleUncheckedUpdateManyWithoutModuleNestedInput
    moduleUsage?: ModuleUsageUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type ModuleCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModuleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModuleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModuleTierCreateInput = {
    id?: string
    tier: string
    entitlementName: string
    revCatEntitlementName: string
    webviewUrl?: string | null
    zipFileUrl?: string | null
    iconUrl?: string | null
    hasTextProduction?: boolean
    hasConclusion?: boolean
    hasMap?: boolean
    price?: Decimal | DecimalJsLike | number | string | null
    usageLimit?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    module: ModuleCreateNestedOneWithoutTiersInput
  }

  export type ModuleTierUncheckedCreateInput = {
    id?: string
    moduleId: string
    tier: string
    entitlementName: string
    revCatEntitlementName: string
    webviewUrl?: string | null
    zipFileUrl?: string | null
    iconUrl?: string | null
    hasTextProduction?: boolean
    hasConclusion?: boolean
    hasMap?: boolean
    price?: Decimal | DecimalJsLike | number | string | null
    usageLimit?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModuleTierUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tier?: StringFieldUpdateOperationsInput | string
    entitlementName?: StringFieldUpdateOperationsInput | string
    revCatEntitlementName?: StringFieldUpdateOperationsInput | string
    webviewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    zipFileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hasTextProduction?: BoolFieldUpdateOperationsInput | boolean
    hasConclusion?: BoolFieldUpdateOperationsInput | boolean
    hasMap?: BoolFieldUpdateOperationsInput | boolean
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    usageLimit?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    module?: ModuleUpdateOneRequiredWithoutTiersNestedInput
  }

  export type ModuleTierUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    tier?: StringFieldUpdateOperationsInput | string
    entitlementName?: StringFieldUpdateOperationsInput | string
    revCatEntitlementName?: StringFieldUpdateOperationsInput | string
    webviewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    zipFileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hasTextProduction?: BoolFieldUpdateOperationsInput | boolean
    hasConclusion?: BoolFieldUpdateOperationsInput | boolean
    hasMap?: BoolFieldUpdateOperationsInput | boolean
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    usageLimit?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModuleTierCreateManyInput = {
    id?: string
    moduleId: string
    tier: string
    entitlementName: string
    revCatEntitlementName: string
    webviewUrl?: string | null
    zipFileUrl?: string | null
    iconUrl?: string | null
    hasTextProduction?: boolean
    hasConclusion?: boolean
    hasMap?: boolean
    price?: Decimal | DecimalJsLike | number | string | null
    usageLimit?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModuleTierUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tier?: StringFieldUpdateOperationsInput | string
    entitlementName?: StringFieldUpdateOperationsInput | string
    revCatEntitlementName?: StringFieldUpdateOperationsInput | string
    webviewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    zipFileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hasTextProduction?: BoolFieldUpdateOperationsInput | boolean
    hasConclusion?: BoolFieldUpdateOperationsInput | boolean
    hasMap?: BoolFieldUpdateOperationsInput | boolean
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    usageLimit?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModuleTierUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    tier?: StringFieldUpdateOperationsInput | string
    entitlementName?: StringFieldUpdateOperationsInput | string
    revCatEntitlementName?: StringFieldUpdateOperationsInput | string
    webviewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    zipFileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hasTextProduction?: BoolFieldUpdateOperationsInput | boolean
    hasConclusion?: BoolFieldUpdateOperationsInput | boolean
    hasMap?: BoolFieldUpdateOperationsInput | boolean
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    usageLimit?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PackageCreateInput = {
    id?: string
    entitlementName: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    packageModules?: PackageModuleCreateNestedManyWithoutPackageInput
    userPackages?: UserPackageCreateNestedManyWithoutPackageInput
  }

  export type PackageUncheckedCreateInput = {
    id?: string
    entitlementName: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    packageModules?: PackageModuleUncheckedCreateNestedManyWithoutPackageInput
    userPackages?: UserPackageUncheckedCreateNestedManyWithoutPackageInput
  }

  export type PackageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    entitlementName?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    packageModules?: PackageModuleUpdateManyWithoutPackageNestedInput
    userPackages?: UserPackageUpdateManyWithoutPackageNestedInput
  }

  export type PackageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    entitlementName?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    packageModules?: PackageModuleUncheckedUpdateManyWithoutPackageNestedInput
    userPackages?: UserPackageUncheckedUpdateManyWithoutPackageNestedInput
  }

  export type PackageCreateManyInput = {
    id?: string
    entitlementName: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PackageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    entitlementName?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PackageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    entitlementName?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PackageModuleCreateInput = {
    id?: string
    createdAt?: Date | string
    package: PackageCreateNestedOneWithoutPackageModulesInput
    module: ModuleCreateNestedOneWithoutPackageModulesInput
  }

  export type PackageModuleUncheckedCreateInput = {
    id?: string
    packageId: string
    moduleId: string
    createdAt?: Date | string
  }

  export type PackageModuleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    package?: PackageUpdateOneRequiredWithoutPackageModulesNestedInput
    module?: ModuleUpdateOneRequiredWithoutPackageModulesNestedInput
  }

  export type PackageModuleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    packageId?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PackageModuleCreateManyInput = {
    id?: string
    packageId: string
    moduleId: string
    createdAt?: Date | string
  }

  export type PackageModuleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PackageModuleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    packageId?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserModuleCreateInput = {
    id?: string
    assignedAt?: Date | string
    expiresAt?: Date | string | null
    user: UserCreateNestedOneWithoutUserModulesInput
    module: ModuleCreateNestedOneWithoutUserModulesInput
  }

  export type UserModuleUncheckedCreateInput = {
    id?: string
    userId: string
    moduleId: string
    assignedAt?: Date | string
    expiresAt?: Date | string | null
  }

  export type UserModuleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutUserModulesNestedInput
    module?: ModuleUpdateOneRequiredWithoutUserModulesNestedInput
  }

  export type UserModuleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserModuleCreateManyInput = {
    id?: string
    userId: string
    moduleId: string
    assignedAt?: Date | string
    expiresAt?: Date | string | null
  }

  export type UserModuleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserModuleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserPackageCreateInput = {
    id?: string
    assignedAt?: Date | string
    expiresAt?: Date | string | null
    user: UserCreateNestedOneWithoutUserPackagesInput
    package: PackageCreateNestedOneWithoutUserPackagesInput
  }

  export type UserPackageUncheckedCreateInput = {
    id?: string
    userId: string
    packageId: string
    assignedAt?: Date | string
    expiresAt?: Date | string | null
  }

  export type UserPackageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutUserPackagesNestedInput
    package?: PackageUpdateOneRequiredWithoutUserPackagesNestedInput
  }

  export type UserPackageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    packageId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserPackageCreateManyInput = {
    id?: string
    userId: string
    packageId: string
    assignedAt?: Date | string
    expiresAt?: Date | string | null
  }

  export type UserPackageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserPackageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    packageId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ModuleUsageCreateInput = {
    id?: string
    usageCount?: number
    lastUpdated?: Date | string
    user: UserCreateNestedOneWithoutModuleUsageInput
    module: ModuleCreateNestedOneWithoutModuleUsageInput
  }

  export type ModuleUsageUncheckedCreateInput = {
    id?: string
    userId: string
    moduleId: string
    usageCount?: number
    lastUpdated?: Date | string
  }

  export type ModuleUsageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    usageCount?: IntFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutModuleUsageNestedInput
    module?: ModuleUpdateOneRequiredWithoutModuleUsageNestedInput
  }

  export type ModuleUsageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    usageCount?: IntFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModuleUsageCreateManyInput = {
    id?: string
    userId: string
    moduleId: string
    usageCount?: number
    lastUpdated?: Date | string
  }

  export type ModuleUsageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    usageCount?: IntFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModuleUsageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    usageCount?: IntFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserModuleListRelationFilter = {
    every?: UserModuleWhereInput
    some?: UserModuleWhereInput
    none?: UserModuleWhereInput
  }

  export type UserPackageListRelationFilter = {
    every?: UserPackageWhereInput
    some?: UserPackageWhereInput
    none?: UserPackageWhereInput
  }

  export type ModuleUsageListRelationFilter = {
    every?: ModuleUsageWhereInput
    some?: ModuleUsageWhereInput
    none?: ModuleUsageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserModuleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserPackageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ModuleUsageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profession?: SortOrder
    country?: SortOrder
    city?: SortOrder
    deviceId?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLoginAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profession?: SortOrder
    country?: SortOrder
    city?: SortOrder
    deviceId?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLoginAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profession?: SortOrder
    country?: SortOrder
    city?: SortOrder
    deviceId?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLoginAt?: SortOrder
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ModuleTierListRelationFilter = {
    every?: ModuleTierWhereInput
    some?: ModuleTierWhereInput
    none?: ModuleTierWhereInput
  }

  export type PackageModuleListRelationFilter = {
    every?: PackageModuleWhereInput
    some?: PackageModuleWhereInput
    none?: PackageModuleWhereInput
  }

  export type ModuleTierOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PackageModuleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ModuleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModuleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModuleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
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

  export type ModuleScalarRelationFilter = {
    is?: ModuleWhereInput
    isNot?: ModuleWhereInput
  }

  export type ModuleTierCountOrderByAggregateInput = {
    id?: SortOrder
    moduleId?: SortOrder
    tier?: SortOrder
    entitlementName?: SortOrder
    revCatEntitlementName?: SortOrder
    webviewUrl?: SortOrder
    zipFileUrl?: SortOrder
    iconUrl?: SortOrder
    hasTextProduction?: SortOrder
    hasConclusion?: SortOrder
    hasMap?: SortOrder
    price?: SortOrder
    usageLimit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModuleTierAvgOrderByAggregateInput = {
    price?: SortOrder
    usageLimit?: SortOrder
  }

  export type ModuleTierMaxOrderByAggregateInput = {
    id?: SortOrder
    moduleId?: SortOrder
    tier?: SortOrder
    entitlementName?: SortOrder
    revCatEntitlementName?: SortOrder
    webviewUrl?: SortOrder
    zipFileUrl?: SortOrder
    iconUrl?: SortOrder
    hasTextProduction?: SortOrder
    hasConclusion?: SortOrder
    hasMap?: SortOrder
    price?: SortOrder
    usageLimit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModuleTierMinOrderByAggregateInput = {
    id?: SortOrder
    moduleId?: SortOrder
    tier?: SortOrder
    entitlementName?: SortOrder
    revCatEntitlementName?: SortOrder
    webviewUrl?: SortOrder
    zipFileUrl?: SortOrder
    iconUrl?: SortOrder
    hasTextProduction?: SortOrder
    hasConclusion?: SortOrder
    hasMap?: SortOrder
    price?: SortOrder
    usageLimit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModuleTierSumOrderByAggregateInput = {
    price?: SortOrder
    usageLimit?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
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

  export type PackageCountOrderByAggregateInput = {
    id?: SortOrder
    entitlementName?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PackageMaxOrderByAggregateInput = {
    id?: SortOrder
    entitlementName?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PackageMinOrderByAggregateInput = {
    id?: SortOrder
    entitlementName?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PackageScalarRelationFilter = {
    is?: PackageWhereInput
    isNot?: PackageWhereInput
  }

  export type PackageModulePackageIdModuleIdCompoundUniqueInput = {
    packageId: string
    moduleId: string
  }

  export type PackageModuleCountOrderByAggregateInput = {
    id?: SortOrder
    packageId?: SortOrder
    moduleId?: SortOrder
    createdAt?: SortOrder
  }

  export type PackageModuleMaxOrderByAggregateInput = {
    id?: SortOrder
    packageId?: SortOrder
    moduleId?: SortOrder
    createdAt?: SortOrder
  }

  export type PackageModuleMinOrderByAggregateInput = {
    id?: SortOrder
    packageId?: SortOrder
    moduleId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserModuleUserIdModuleIdCompoundUniqueInput = {
    userId: string
    moduleId: string
  }

  export type UserModuleCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    moduleId?: SortOrder
    assignedAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type UserModuleMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    moduleId?: SortOrder
    assignedAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type UserModuleMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    moduleId?: SortOrder
    assignedAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type UserPackageUserIdPackageIdCompoundUniqueInput = {
    userId: string
    packageId: string
  }

  export type UserPackageCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    packageId?: SortOrder
    assignedAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type UserPackageMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    packageId?: SortOrder
    assignedAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type UserPackageMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    packageId?: SortOrder
    assignedAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type ModuleUsageCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    moduleId?: SortOrder
    usageCount?: SortOrder
    lastUpdated?: SortOrder
  }

  export type ModuleUsageAvgOrderByAggregateInput = {
    usageCount?: SortOrder
  }

  export type ModuleUsageMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    moduleId?: SortOrder
    usageCount?: SortOrder
    lastUpdated?: SortOrder
  }

  export type ModuleUsageMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    moduleId?: SortOrder
    usageCount?: SortOrder
    lastUpdated?: SortOrder
  }

  export type ModuleUsageSumOrderByAggregateInput = {
    usageCount?: SortOrder
  }

  export type UserModuleCreateNestedManyWithoutUserInput = {
    create?: XOR<UserModuleCreateWithoutUserInput, UserModuleUncheckedCreateWithoutUserInput> | UserModuleCreateWithoutUserInput[] | UserModuleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserModuleCreateOrConnectWithoutUserInput | UserModuleCreateOrConnectWithoutUserInput[]
    createMany?: UserModuleCreateManyUserInputEnvelope
    connect?: UserModuleWhereUniqueInput | UserModuleWhereUniqueInput[]
  }

  export type UserPackageCreateNestedManyWithoutUserInput = {
    create?: XOR<UserPackageCreateWithoutUserInput, UserPackageUncheckedCreateWithoutUserInput> | UserPackageCreateWithoutUserInput[] | UserPackageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPackageCreateOrConnectWithoutUserInput | UserPackageCreateOrConnectWithoutUserInput[]
    createMany?: UserPackageCreateManyUserInputEnvelope
    connect?: UserPackageWhereUniqueInput | UserPackageWhereUniqueInput[]
  }

  export type ModuleUsageCreateNestedManyWithoutUserInput = {
    create?: XOR<ModuleUsageCreateWithoutUserInput, ModuleUsageUncheckedCreateWithoutUserInput> | ModuleUsageCreateWithoutUserInput[] | ModuleUsageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ModuleUsageCreateOrConnectWithoutUserInput | ModuleUsageCreateOrConnectWithoutUserInput[]
    createMany?: ModuleUsageCreateManyUserInputEnvelope
    connect?: ModuleUsageWhereUniqueInput | ModuleUsageWhereUniqueInput[]
  }

  export type UserModuleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserModuleCreateWithoutUserInput, UserModuleUncheckedCreateWithoutUserInput> | UserModuleCreateWithoutUserInput[] | UserModuleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserModuleCreateOrConnectWithoutUserInput | UserModuleCreateOrConnectWithoutUserInput[]
    createMany?: UserModuleCreateManyUserInputEnvelope
    connect?: UserModuleWhereUniqueInput | UserModuleWhereUniqueInput[]
  }

  export type UserPackageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserPackageCreateWithoutUserInput, UserPackageUncheckedCreateWithoutUserInput> | UserPackageCreateWithoutUserInput[] | UserPackageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPackageCreateOrConnectWithoutUserInput | UserPackageCreateOrConnectWithoutUserInput[]
    createMany?: UserPackageCreateManyUserInputEnvelope
    connect?: UserPackageWhereUniqueInput | UserPackageWhereUniqueInput[]
  }

  export type ModuleUsageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ModuleUsageCreateWithoutUserInput, ModuleUsageUncheckedCreateWithoutUserInput> | ModuleUsageCreateWithoutUserInput[] | ModuleUsageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ModuleUsageCreateOrConnectWithoutUserInput | ModuleUsageCreateOrConnectWithoutUserInput[]
    createMany?: ModuleUsageCreateManyUserInputEnvelope
    connect?: ModuleUsageWhereUniqueInput | ModuleUsageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserModuleUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserModuleCreateWithoutUserInput, UserModuleUncheckedCreateWithoutUserInput> | UserModuleCreateWithoutUserInput[] | UserModuleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserModuleCreateOrConnectWithoutUserInput | UserModuleCreateOrConnectWithoutUserInput[]
    upsert?: UserModuleUpsertWithWhereUniqueWithoutUserInput | UserModuleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserModuleCreateManyUserInputEnvelope
    set?: UserModuleWhereUniqueInput | UserModuleWhereUniqueInput[]
    disconnect?: UserModuleWhereUniqueInput | UserModuleWhereUniqueInput[]
    delete?: UserModuleWhereUniqueInput | UserModuleWhereUniqueInput[]
    connect?: UserModuleWhereUniqueInput | UserModuleWhereUniqueInput[]
    update?: UserModuleUpdateWithWhereUniqueWithoutUserInput | UserModuleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserModuleUpdateManyWithWhereWithoutUserInput | UserModuleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserModuleScalarWhereInput | UserModuleScalarWhereInput[]
  }

  export type UserPackageUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserPackageCreateWithoutUserInput, UserPackageUncheckedCreateWithoutUserInput> | UserPackageCreateWithoutUserInput[] | UserPackageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPackageCreateOrConnectWithoutUserInput | UserPackageCreateOrConnectWithoutUserInput[]
    upsert?: UserPackageUpsertWithWhereUniqueWithoutUserInput | UserPackageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserPackageCreateManyUserInputEnvelope
    set?: UserPackageWhereUniqueInput | UserPackageWhereUniqueInput[]
    disconnect?: UserPackageWhereUniqueInput | UserPackageWhereUniqueInput[]
    delete?: UserPackageWhereUniqueInput | UserPackageWhereUniqueInput[]
    connect?: UserPackageWhereUniqueInput | UserPackageWhereUniqueInput[]
    update?: UserPackageUpdateWithWhereUniqueWithoutUserInput | UserPackageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserPackageUpdateManyWithWhereWithoutUserInput | UserPackageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserPackageScalarWhereInput | UserPackageScalarWhereInput[]
  }

  export type ModuleUsageUpdateManyWithoutUserNestedInput = {
    create?: XOR<ModuleUsageCreateWithoutUserInput, ModuleUsageUncheckedCreateWithoutUserInput> | ModuleUsageCreateWithoutUserInput[] | ModuleUsageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ModuleUsageCreateOrConnectWithoutUserInput | ModuleUsageCreateOrConnectWithoutUserInput[]
    upsert?: ModuleUsageUpsertWithWhereUniqueWithoutUserInput | ModuleUsageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ModuleUsageCreateManyUserInputEnvelope
    set?: ModuleUsageWhereUniqueInput | ModuleUsageWhereUniqueInput[]
    disconnect?: ModuleUsageWhereUniqueInput | ModuleUsageWhereUniqueInput[]
    delete?: ModuleUsageWhereUniqueInput | ModuleUsageWhereUniqueInput[]
    connect?: ModuleUsageWhereUniqueInput | ModuleUsageWhereUniqueInput[]
    update?: ModuleUsageUpdateWithWhereUniqueWithoutUserInput | ModuleUsageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ModuleUsageUpdateManyWithWhereWithoutUserInput | ModuleUsageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ModuleUsageScalarWhereInput | ModuleUsageScalarWhereInput[]
  }

  export type UserModuleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserModuleCreateWithoutUserInput, UserModuleUncheckedCreateWithoutUserInput> | UserModuleCreateWithoutUserInput[] | UserModuleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserModuleCreateOrConnectWithoutUserInput | UserModuleCreateOrConnectWithoutUserInput[]
    upsert?: UserModuleUpsertWithWhereUniqueWithoutUserInput | UserModuleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserModuleCreateManyUserInputEnvelope
    set?: UserModuleWhereUniqueInput | UserModuleWhereUniqueInput[]
    disconnect?: UserModuleWhereUniqueInput | UserModuleWhereUniqueInput[]
    delete?: UserModuleWhereUniqueInput | UserModuleWhereUniqueInput[]
    connect?: UserModuleWhereUniqueInput | UserModuleWhereUniqueInput[]
    update?: UserModuleUpdateWithWhereUniqueWithoutUserInput | UserModuleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserModuleUpdateManyWithWhereWithoutUserInput | UserModuleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserModuleScalarWhereInput | UserModuleScalarWhereInput[]
  }

  export type UserPackageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserPackageCreateWithoutUserInput, UserPackageUncheckedCreateWithoutUserInput> | UserPackageCreateWithoutUserInput[] | UserPackageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPackageCreateOrConnectWithoutUserInput | UserPackageCreateOrConnectWithoutUserInput[]
    upsert?: UserPackageUpsertWithWhereUniqueWithoutUserInput | UserPackageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserPackageCreateManyUserInputEnvelope
    set?: UserPackageWhereUniqueInput | UserPackageWhereUniqueInput[]
    disconnect?: UserPackageWhereUniqueInput | UserPackageWhereUniqueInput[]
    delete?: UserPackageWhereUniqueInput | UserPackageWhereUniqueInput[]
    connect?: UserPackageWhereUniqueInput | UserPackageWhereUniqueInput[]
    update?: UserPackageUpdateWithWhereUniqueWithoutUserInput | UserPackageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserPackageUpdateManyWithWhereWithoutUserInput | UserPackageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserPackageScalarWhereInput | UserPackageScalarWhereInput[]
  }

  export type ModuleUsageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ModuleUsageCreateWithoutUserInput, ModuleUsageUncheckedCreateWithoutUserInput> | ModuleUsageCreateWithoutUserInput[] | ModuleUsageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ModuleUsageCreateOrConnectWithoutUserInput | ModuleUsageCreateOrConnectWithoutUserInput[]
    upsert?: ModuleUsageUpsertWithWhereUniqueWithoutUserInput | ModuleUsageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ModuleUsageCreateManyUserInputEnvelope
    set?: ModuleUsageWhereUniqueInput | ModuleUsageWhereUniqueInput[]
    disconnect?: ModuleUsageWhereUniqueInput | ModuleUsageWhereUniqueInput[]
    delete?: ModuleUsageWhereUniqueInput | ModuleUsageWhereUniqueInput[]
    connect?: ModuleUsageWhereUniqueInput | ModuleUsageWhereUniqueInput[]
    update?: ModuleUsageUpdateWithWhereUniqueWithoutUserInput | ModuleUsageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ModuleUsageUpdateManyWithWhereWithoutUserInput | ModuleUsageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ModuleUsageScalarWhereInput | ModuleUsageScalarWhereInput[]
  }

  export type ModuleTierCreateNestedManyWithoutModuleInput = {
    create?: XOR<ModuleTierCreateWithoutModuleInput, ModuleTierUncheckedCreateWithoutModuleInput> | ModuleTierCreateWithoutModuleInput[] | ModuleTierUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: ModuleTierCreateOrConnectWithoutModuleInput | ModuleTierCreateOrConnectWithoutModuleInput[]
    createMany?: ModuleTierCreateManyModuleInputEnvelope
    connect?: ModuleTierWhereUniqueInput | ModuleTierWhereUniqueInput[]
  }

  export type UserModuleCreateNestedManyWithoutModuleInput = {
    create?: XOR<UserModuleCreateWithoutModuleInput, UserModuleUncheckedCreateWithoutModuleInput> | UserModuleCreateWithoutModuleInput[] | UserModuleUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: UserModuleCreateOrConnectWithoutModuleInput | UserModuleCreateOrConnectWithoutModuleInput[]
    createMany?: UserModuleCreateManyModuleInputEnvelope
    connect?: UserModuleWhereUniqueInput | UserModuleWhereUniqueInput[]
  }

  export type PackageModuleCreateNestedManyWithoutModuleInput = {
    create?: XOR<PackageModuleCreateWithoutModuleInput, PackageModuleUncheckedCreateWithoutModuleInput> | PackageModuleCreateWithoutModuleInput[] | PackageModuleUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: PackageModuleCreateOrConnectWithoutModuleInput | PackageModuleCreateOrConnectWithoutModuleInput[]
    createMany?: PackageModuleCreateManyModuleInputEnvelope
    connect?: PackageModuleWhereUniqueInput | PackageModuleWhereUniqueInput[]
  }

  export type ModuleUsageCreateNestedManyWithoutModuleInput = {
    create?: XOR<ModuleUsageCreateWithoutModuleInput, ModuleUsageUncheckedCreateWithoutModuleInput> | ModuleUsageCreateWithoutModuleInput[] | ModuleUsageUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: ModuleUsageCreateOrConnectWithoutModuleInput | ModuleUsageCreateOrConnectWithoutModuleInput[]
    createMany?: ModuleUsageCreateManyModuleInputEnvelope
    connect?: ModuleUsageWhereUniqueInput | ModuleUsageWhereUniqueInput[]
  }

  export type ModuleTierUncheckedCreateNestedManyWithoutModuleInput = {
    create?: XOR<ModuleTierCreateWithoutModuleInput, ModuleTierUncheckedCreateWithoutModuleInput> | ModuleTierCreateWithoutModuleInput[] | ModuleTierUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: ModuleTierCreateOrConnectWithoutModuleInput | ModuleTierCreateOrConnectWithoutModuleInput[]
    createMany?: ModuleTierCreateManyModuleInputEnvelope
    connect?: ModuleTierWhereUniqueInput | ModuleTierWhereUniqueInput[]
  }

  export type UserModuleUncheckedCreateNestedManyWithoutModuleInput = {
    create?: XOR<UserModuleCreateWithoutModuleInput, UserModuleUncheckedCreateWithoutModuleInput> | UserModuleCreateWithoutModuleInput[] | UserModuleUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: UserModuleCreateOrConnectWithoutModuleInput | UserModuleCreateOrConnectWithoutModuleInput[]
    createMany?: UserModuleCreateManyModuleInputEnvelope
    connect?: UserModuleWhereUniqueInput | UserModuleWhereUniqueInput[]
  }

  export type PackageModuleUncheckedCreateNestedManyWithoutModuleInput = {
    create?: XOR<PackageModuleCreateWithoutModuleInput, PackageModuleUncheckedCreateWithoutModuleInput> | PackageModuleCreateWithoutModuleInput[] | PackageModuleUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: PackageModuleCreateOrConnectWithoutModuleInput | PackageModuleCreateOrConnectWithoutModuleInput[]
    createMany?: PackageModuleCreateManyModuleInputEnvelope
    connect?: PackageModuleWhereUniqueInput | PackageModuleWhereUniqueInput[]
  }

  export type ModuleUsageUncheckedCreateNestedManyWithoutModuleInput = {
    create?: XOR<ModuleUsageCreateWithoutModuleInput, ModuleUsageUncheckedCreateWithoutModuleInput> | ModuleUsageCreateWithoutModuleInput[] | ModuleUsageUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: ModuleUsageCreateOrConnectWithoutModuleInput | ModuleUsageCreateOrConnectWithoutModuleInput[]
    createMany?: ModuleUsageCreateManyModuleInputEnvelope
    connect?: ModuleUsageWhereUniqueInput | ModuleUsageWhereUniqueInput[]
  }

  export type ModuleTierUpdateManyWithoutModuleNestedInput = {
    create?: XOR<ModuleTierCreateWithoutModuleInput, ModuleTierUncheckedCreateWithoutModuleInput> | ModuleTierCreateWithoutModuleInput[] | ModuleTierUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: ModuleTierCreateOrConnectWithoutModuleInput | ModuleTierCreateOrConnectWithoutModuleInput[]
    upsert?: ModuleTierUpsertWithWhereUniqueWithoutModuleInput | ModuleTierUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: ModuleTierCreateManyModuleInputEnvelope
    set?: ModuleTierWhereUniqueInput | ModuleTierWhereUniqueInput[]
    disconnect?: ModuleTierWhereUniqueInput | ModuleTierWhereUniqueInput[]
    delete?: ModuleTierWhereUniqueInput | ModuleTierWhereUniqueInput[]
    connect?: ModuleTierWhereUniqueInput | ModuleTierWhereUniqueInput[]
    update?: ModuleTierUpdateWithWhereUniqueWithoutModuleInput | ModuleTierUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: ModuleTierUpdateManyWithWhereWithoutModuleInput | ModuleTierUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: ModuleTierScalarWhereInput | ModuleTierScalarWhereInput[]
  }

  export type UserModuleUpdateManyWithoutModuleNestedInput = {
    create?: XOR<UserModuleCreateWithoutModuleInput, UserModuleUncheckedCreateWithoutModuleInput> | UserModuleCreateWithoutModuleInput[] | UserModuleUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: UserModuleCreateOrConnectWithoutModuleInput | UserModuleCreateOrConnectWithoutModuleInput[]
    upsert?: UserModuleUpsertWithWhereUniqueWithoutModuleInput | UserModuleUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: UserModuleCreateManyModuleInputEnvelope
    set?: UserModuleWhereUniqueInput | UserModuleWhereUniqueInput[]
    disconnect?: UserModuleWhereUniqueInput | UserModuleWhereUniqueInput[]
    delete?: UserModuleWhereUniqueInput | UserModuleWhereUniqueInput[]
    connect?: UserModuleWhereUniqueInput | UserModuleWhereUniqueInput[]
    update?: UserModuleUpdateWithWhereUniqueWithoutModuleInput | UserModuleUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: UserModuleUpdateManyWithWhereWithoutModuleInput | UserModuleUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: UserModuleScalarWhereInput | UserModuleScalarWhereInput[]
  }

  export type PackageModuleUpdateManyWithoutModuleNestedInput = {
    create?: XOR<PackageModuleCreateWithoutModuleInput, PackageModuleUncheckedCreateWithoutModuleInput> | PackageModuleCreateWithoutModuleInput[] | PackageModuleUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: PackageModuleCreateOrConnectWithoutModuleInput | PackageModuleCreateOrConnectWithoutModuleInput[]
    upsert?: PackageModuleUpsertWithWhereUniqueWithoutModuleInput | PackageModuleUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: PackageModuleCreateManyModuleInputEnvelope
    set?: PackageModuleWhereUniqueInput | PackageModuleWhereUniqueInput[]
    disconnect?: PackageModuleWhereUniqueInput | PackageModuleWhereUniqueInput[]
    delete?: PackageModuleWhereUniqueInput | PackageModuleWhereUniqueInput[]
    connect?: PackageModuleWhereUniqueInput | PackageModuleWhereUniqueInput[]
    update?: PackageModuleUpdateWithWhereUniqueWithoutModuleInput | PackageModuleUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: PackageModuleUpdateManyWithWhereWithoutModuleInput | PackageModuleUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: PackageModuleScalarWhereInput | PackageModuleScalarWhereInput[]
  }

  export type ModuleUsageUpdateManyWithoutModuleNestedInput = {
    create?: XOR<ModuleUsageCreateWithoutModuleInput, ModuleUsageUncheckedCreateWithoutModuleInput> | ModuleUsageCreateWithoutModuleInput[] | ModuleUsageUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: ModuleUsageCreateOrConnectWithoutModuleInput | ModuleUsageCreateOrConnectWithoutModuleInput[]
    upsert?: ModuleUsageUpsertWithWhereUniqueWithoutModuleInput | ModuleUsageUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: ModuleUsageCreateManyModuleInputEnvelope
    set?: ModuleUsageWhereUniqueInput | ModuleUsageWhereUniqueInput[]
    disconnect?: ModuleUsageWhereUniqueInput | ModuleUsageWhereUniqueInput[]
    delete?: ModuleUsageWhereUniqueInput | ModuleUsageWhereUniqueInput[]
    connect?: ModuleUsageWhereUniqueInput | ModuleUsageWhereUniqueInput[]
    update?: ModuleUsageUpdateWithWhereUniqueWithoutModuleInput | ModuleUsageUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: ModuleUsageUpdateManyWithWhereWithoutModuleInput | ModuleUsageUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: ModuleUsageScalarWhereInput | ModuleUsageScalarWhereInput[]
  }

  export type ModuleTierUncheckedUpdateManyWithoutModuleNestedInput = {
    create?: XOR<ModuleTierCreateWithoutModuleInput, ModuleTierUncheckedCreateWithoutModuleInput> | ModuleTierCreateWithoutModuleInput[] | ModuleTierUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: ModuleTierCreateOrConnectWithoutModuleInput | ModuleTierCreateOrConnectWithoutModuleInput[]
    upsert?: ModuleTierUpsertWithWhereUniqueWithoutModuleInput | ModuleTierUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: ModuleTierCreateManyModuleInputEnvelope
    set?: ModuleTierWhereUniqueInput | ModuleTierWhereUniqueInput[]
    disconnect?: ModuleTierWhereUniqueInput | ModuleTierWhereUniqueInput[]
    delete?: ModuleTierWhereUniqueInput | ModuleTierWhereUniqueInput[]
    connect?: ModuleTierWhereUniqueInput | ModuleTierWhereUniqueInput[]
    update?: ModuleTierUpdateWithWhereUniqueWithoutModuleInput | ModuleTierUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: ModuleTierUpdateManyWithWhereWithoutModuleInput | ModuleTierUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: ModuleTierScalarWhereInput | ModuleTierScalarWhereInput[]
  }

  export type UserModuleUncheckedUpdateManyWithoutModuleNestedInput = {
    create?: XOR<UserModuleCreateWithoutModuleInput, UserModuleUncheckedCreateWithoutModuleInput> | UserModuleCreateWithoutModuleInput[] | UserModuleUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: UserModuleCreateOrConnectWithoutModuleInput | UserModuleCreateOrConnectWithoutModuleInput[]
    upsert?: UserModuleUpsertWithWhereUniqueWithoutModuleInput | UserModuleUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: UserModuleCreateManyModuleInputEnvelope
    set?: UserModuleWhereUniqueInput | UserModuleWhereUniqueInput[]
    disconnect?: UserModuleWhereUniqueInput | UserModuleWhereUniqueInput[]
    delete?: UserModuleWhereUniqueInput | UserModuleWhereUniqueInput[]
    connect?: UserModuleWhereUniqueInput | UserModuleWhereUniqueInput[]
    update?: UserModuleUpdateWithWhereUniqueWithoutModuleInput | UserModuleUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: UserModuleUpdateManyWithWhereWithoutModuleInput | UserModuleUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: UserModuleScalarWhereInput | UserModuleScalarWhereInput[]
  }

  export type PackageModuleUncheckedUpdateManyWithoutModuleNestedInput = {
    create?: XOR<PackageModuleCreateWithoutModuleInput, PackageModuleUncheckedCreateWithoutModuleInput> | PackageModuleCreateWithoutModuleInput[] | PackageModuleUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: PackageModuleCreateOrConnectWithoutModuleInput | PackageModuleCreateOrConnectWithoutModuleInput[]
    upsert?: PackageModuleUpsertWithWhereUniqueWithoutModuleInput | PackageModuleUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: PackageModuleCreateManyModuleInputEnvelope
    set?: PackageModuleWhereUniqueInput | PackageModuleWhereUniqueInput[]
    disconnect?: PackageModuleWhereUniqueInput | PackageModuleWhereUniqueInput[]
    delete?: PackageModuleWhereUniqueInput | PackageModuleWhereUniqueInput[]
    connect?: PackageModuleWhereUniqueInput | PackageModuleWhereUniqueInput[]
    update?: PackageModuleUpdateWithWhereUniqueWithoutModuleInput | PackageModuleUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: PackageModuleUpdateManyWithWhereWithoutModuleInput | PackageModuleUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: PackageModuleScalarWhereInput | PackageModuleScalarWhereInput[]
  }

  export type ModuleUsageUncheckedUpdateManyWithoutModuleNestedInput = {
    create?: XOR<ModuleUsageCreateWithoutModuleInput, ModuleUsageUncheckedCreateWithoutModuleInput> | ModuleUsageCreateWithoutModuleInput[] | ModuleUsageUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: ModuleUsageCreateOrConnectWithoutModuleInput | ModuleUsageCreateOrConnectWithoutModuleInput[]
    upsert?: ModuleUsageUpsertWithWhereUniqueWithoutModuleInput | ModuleUsageUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: ModuleUsageCreateManyModuleInputEnvelope
    set?: ModuleUsageWhereUniqueInput | ModuleUsageWhereUniqueInput[]
    disconnect?: ModuleUsageWhereUniqueInput | ModuleUsageWhereUniqueInput[]
    delete?: ModuleUsageWhereUniqueInput | ModuleUsageWhereUniqueInput[]
    connect?: ModuleUsageWhereUniqueInput | ModuleUsageWhereUniqueInput[]
    update?: ModuleUsageUpdateWithWhereUniqueWithoutModuleInput | ModuleUsageUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: ModuleUsageUpdateManyWithWhereWithoutModuleInput | ModuleUsageUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: ModuleUsageScalarWhereInput | ModuleUsageScalarWhereInput[]
  }

  export type ModuleCreateNestedOneWithoutTiersInput = {
    create?: XOR<ModuleCreateWithoutTiersInput, ModuleUncheckedCreateWithoutTiersInput>
    connectOrCreate?: ModuleCreateOrConnectWithoutTiersInput
    connect?: ModuleWhereUniqueInput
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ModuleUpdateOneRequiredWithoutTiersNestedInput = {
    create?: XOR<ModuleCreateWithoutTiersInput, ModuleUncheckedCreateWithoutTiersInput>
    connectOrCreate?: ModuleCreateOrConnectWithoutTiersInput
    upsert?: ModuleUpsertWithoutTiersInput
    connect?: ModuleWhereUniqueInput
    update?: XOR<XOR<ModuleUpdateToOneWithWhereWithoutTiersInput, ModuleUpdateWithoutTiersInput>, ModuleUncheckedUpdateWithoutTiersInput>
  }

  export type PackageModuleCreateNestedManyWithoutPackageInput = {
    create?: XOR<PackageModuleCreateWithoutPackageInput, PackageModuleUncheckedCreateWithoutPackageInput> | PackageModuleCreateWithoutPackageInput[] | PackageModuleUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: PackageModuleCreateOrConnectWithoutPackageInput | PackageModuleCreateOrConnectWithoutPackageInput[]
    createMany?: PackageModuleCreateManyPackageInputEnvelope
    connect?: PackageModuleWhereUniqueInput | PackageModuleWhereUniqueInput[]
  }

  export type UserPackageCreateNestedManyWithoutPackageInput = {
    create?: XOR<UserPackageCreateWithoutPackageInput, UserPackageUncheckedCreateWithoutPackageInput> | UserPackageCreateWithoutPackageInput[] | UserPackageUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: UserPackageCreateOrConnectWithoutPackageInput | UserPackageCreateOrConnectWithoutPackageInput[]
    createMany?: UserPackageCreateManyPackageInputEnvelope
    connect?: UserPackageWhereUniqueInput | UserPackageWhereUniqueInput[]
  }

  export type PackageModuleUncheckedCreateNestedManyWithoutPackageInput = {
    create?: XOR<PackageModuleCreateWithoutPackageInput, PackageModuleUncheckedCreateWithoutPackageInput> | PackageModuleCreateWithoutPackageInput[] | PackageModuleUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: PackageModuleCreateOrConnectWithoutPackageInput | PackageModuleCreateOrConnectWithoutPackageInput[]
    createMany?: PackageModuleCreateManyPackageInputEnvelope
    connect?: PackageModuleWhereUniqueInput | PackageModuleWhereUniqueInput[]
  }

  export type UserPackageUncheckedCreateNestedManyWithoutPackageInput = {
    create?: XOR<UserPackageCreateWithoutPackageInput, UserPackageUncheckedCreateWithoutPackageInput> | UserPackageCreateWithoutPackageInput[] | UserPackageUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: UserPackageCreateOrConnectWithoutPackageInput | UserPackageCreateOrConnectWithoutPackageInput[]
    createMany?: UserPackageCreateManyPackageInputEnvelope
    connect?: UserPackageWhereUniqueInput | UserPackageWhereUniqueInput[]
  }

  export type PackageModuleUpdateManyWithoutPackageNestedInput = {
    create?: XOR<PackageModuleCreateWithoutPackageInput, PackageModuleUncheckedCreateWithoutPackageInput> | PackageModuleCreateWithoutPackageInput[] | PackageModuleUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: PackageModuleCreateOrConnectWithoutPackageInput | PackageModuleCreateOrConnectWithoutPackageInput[]
    upsert?: PackageModuleUpsertWithWhereUniqueWithoutPackageInput | PackageModuleUpsertWithWhereUniqueWithoutPackageInput[]
    createMany?: PackageModuleCreateManyPackageInputEnvelope
    set?: PackageModuleWhereUniqueInput | PackageModuleWhereUniqueInput[]
    disconnect?: PackageModuleWhereUniqueInput | PackageModuleWhereUniqueInput[]
    delete?: PackageModuleWhereUniqueInput | PackageModuleWhereUniqueInput[]
    connect?: PackageModuleWhereUniqueInput | PackageModuleWhereUniqueInput[]
    update?: PackageModuleUpdateWithWhereUniqueWithoutPackageInput | PackageModuleUpdateWithWhereUniqueWithoutPackageInput[]
    updateMany?: PackageModuleUpdateManyWithWhereWithoutPackageInput | PackageModuleUpdateManyWithWhereWithoutPackageInput[]
    deleteMany?: PackageModuleScalarWhereInput | PackageModuleScalarWhereInput[]
  }

  export type UserPackageUpdateManyWithoutPackageNestedInput = {
    create?: XOR<UserPackageCreateWithoutPackageInput, UserPackageUncheckedCreateWithoutPackageInput> | UserPackageCreateWithoutPackageInput[] | UserPackageUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: UserPackageCreateOrConnectWithoutPackageInput | UserPackageCreateOrConnectWithoutPackageInput[]
    upsert?: UserPackageUpsertWithWhereUniqueWithoutPackageInput | UserPackageUpsertWithWhereUniqueWithoutPackageInput[]
    createMany?: UserPackageCreateManyPackageInputEnvelope
    set?: UserPackageWhereUniqueInput | UserPackageWhereUniqueInput[]
    disconnect?: UserPackageWhereUniqueInput | UserPackageWhereUniqueInput[]
    delete?: UserPackageWhereUniqueInput | UserPackageWhereUniqueInput[]
    connect?: UserPackageWhereUniqueInput | UserPackageWhereUniqueInput[]
    update?: UserPackageUpdateWithWhereUniqueWithoutPackageInput | UserPackageUpdateWithWhereUniqueWithoutPackageInput[]
    updateMany?: UserPackageUpdateManyWithWhereWithoutPackageInput | UserPackageUpdateManyWithWhereWithoutPackageInput[]
    deleteMany?: UserPackageScalarWhereInput | UserPackageScalarWhereInput[]
  }

  export type PackageModuleUncheckedUpdateManyWithoutPackageNestedInput = {
    create?: XOR<PackageModuleCreateWithoutPackageInput, PackageModuleUncheckedCreateWithoutPackageInput> | PackageModuleCreateWithoutPackageInput[] | PackageModuleUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: PackageModuleCreateOrConnectWithoutPackageInput | PackageModuleCreateOrConnectWithoutPackageInput[]
    upsert?: PackageModuleUpsertWithWhereUniqueWithoutPackageInput | PackageModuleUpsertWithWhereUniqueWithoutPackageInput[]
    createMany?: PackageModuleCreateManyPackageInputEnvelope
    set?: PackageModuleWhereUniqueInput | PackageModuleWhereUniqueInput[]
    disconnect?: PackageModuleWhereUniqueInput | PackageModuleWhereUniqueInput[]
    delete?: PackageModuleWhereUniqueInput | PackageModuleWhereUniqueInput[]
    connect?: PackageModuleWhereUniqueInput | PackageModuleWhereUniqueInput[]
    update?: PackageModuleUpdateWithWhereUniqueWithoutPackageInput | PackageModuleUpdateWithWhereUniqueWithoutPackageInput[]
    updateMany?: PackageModuleUpdateManyWithWhereWithoutPackageInput | PackageModuleUpdateManyWithWhereWithoutPackageInput[]
    deleteMany?: PackageModuleScalarWhereInput | PackageModuleScalarWhereInput[]
  }

  export type UserPackageUncheckedUpdateManyWithoutPackageNestedInput = {
    create?: XOR<UserPackageCreateWithoutPackageInput, UserPackageUncheckedCreateWithoutPackageInput> | UserPackageCreateWithoutPackageInput[] | UserPackageUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: UserPackageCreateOrConnectWithoutPackageInput | UserPackageCreateOrConnectWithoutPackageInput[]
    upsert?: UserPackageUpsertWithWhereUniqueWithoutPackageInput | UserPackageUpsertWithWhereUniqueWithoutPackageInput[]
    createMany?: UserPackageCreateManyPackageInputEnvelope
    set?: UserPackageWhereUniqueInput | UserPackageWhereUniqueInput[]
    disconnect?: UserPackageWhereUniqueInput | UserPackageWhereUniqueInput[]
    delete?: UserPackageWhereUniqueInput | UserPackageWhereUniqueInput[]
    connect?: UserPackageWhereUniqueInput | UserPackageWhereUniqueInput[]
    update?: UserPackageUpdateWithWhereUniqueWithoutPackageInput | UserPackageUpdateWithWhereUniqueWithoutPackageInput[]
    updateMany?: UserPackageUpdateManyWithWhereWithoutPackageInput | UserPackageUpdateManyWithWhereWithoutPackageInput[]
    deleteMany?: UserPackageScalarWhereInput | UserPackageScalarWhereInput[]
  }

  export type PackageCreateNestedOneWithoutPackageModulesInput = {
    create?: XOR<PackageCreateWithoutPackageModulesInput, PackageUncheckedCreateWithoutPackageModulesInput>
    connectOrCreate?: PackageCreateOrConnectWithoutPackageModulesInput
    connect?: PackageWhereUniqueInput
  }

  export type ModuleCreateNestedOneWithoutPackageModulesInput = {
    create?: XOR<ModuleCreateWithoutPackageModulesInput, ModuleUncheckedCreateWithoutPackageModulesInput>
    connectOrCreate?: ModuleCreateOrConnectWithoutPackageModulesInput
    connect?: ModuleWhereUniqueInput
  }

  export type PackageUpdateOneRequiredWithoutPackageModulesNestedInput = {
    create?: XOR<PackageCreateWithoutPackageModulesInput, PackageUncheckedCreateWithoutPackageModulesInput>
    connectOrCreate?: PackageCreateOrConnectWithoutPackageModulesInput
    upsert?: PackageUpsertWithoutPackageModulesInput
    connect?: PackageWhereUniqueInput
    update?: XOR<XOR<PackageUpdateToOneWithWhereWithoutPackageModulesInput, PackageUpdateWithoutPackageModulesInput>, PackageUncheckedUpdateWithoutPackageModulesInput>
  }

  export type ModuleUpdateOneRequiredWithoutPackageModulesNestedInput = {
    create?: XOR<ModuleCreateWithoutPackageModulesInput, ModuleUncheckedCreateWithoutPackageModulesInput>
    connectOrCreate?: ModuleCreateOrConnectWithoutPackageModulesInput
    upsert?: ModuleUpsertWithoutPackageModulesInput
    connect?: ModuleWhereUniqueInput
    update?: XOR<XOR<ModuleUpdateToOneWithWhereWithoutPackageModulesInput, ModuleUpdateWithoutPackageModulesInput>, ModuleUncheckedUpdateWithoutPackageModulesInput>
  }

  export type UserCreateNestedOneWithoutUserModulesInput = {
    create?: XOR<UserCreateWithoutUserModulesInput, UserUncheckedCreateWithoutUserModulesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserModulesInput
    connect?: UserWhereUniqueInput
  }

  export type ModuleCreateNestedOneWithoutUserModulesInput = {
    create?: XOR<ModuleCreateWithoutUserModulesInput, ModuleUncheckedCreateWithoutUserModulesInput>
    connectOrCreate?: ModuleCreateOrConnectWithoutUserModulesInput
    connect?: ModuleWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserModulesNestedInput = {
    create?: XOR<UserCreateWithoutUserModulesInput, UserUncheckedCreateWithoutUserModulesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserModulesInput
    upsert?: UserUpsertWithoutUserModulesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserModulesInput, UserUpdateWithoutUserModulesInput>, UserUncheckedUpdateWithoutUserModulesInput>
  }

  export type ModuleUpdateOneRequiredWithoutUserModulesNestedInput = {
    create?: XOR<ModuleCreateWithoutUserModulesInput, ModuleUncheckedCreateWithoutUserModulesInput>
    connectOrCreate?: ModuleCreateOrConnectWithoutUserModulesInput
    upsert?: ModuleUpsertWithoutUserModulesInput
    connect?: ModuleWhereUniqueInput
    update?: XOR<XOR<ModuleUpdateToOneWithWhereWithoutUserModulesInput, ModuleUpdateWithoutUserModulesInput>, ModuleUncheckedUpdateWithoutUserModulesInput>
  }

  export type UserCreateNestedOneWithoutUserPackagesInput = {
    create?: XOR<UserCreateWithoutUserPackagesInput, UserUncheckedCreateWithoutUserPackagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserPackagesInput
    connect?: UserWhereUniqueInput
  }

  export type PackageCreateNestedOneWithoutUserPackagesInput = {
    create?: XOR<PackageCreateWithoutUserPackagesInput, PackageUncheckedCreateWithoutUserPackagesInput>
    connectOrCreate?: PackageCreateOrConnectWithoutUserPackagesInput
    connect?: PackageWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserPackagesNestedInput = {
    create?: XOR<UserCreateWithoutUserPackagesInput, UserUncheckedCreateWithoutUserPackagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserPackagesInput
    upsert?: UserUpsertWithoutUserPackagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserPackagesInput, UserUpdateWithoutUserPackagesInput>, UserUncheckedUpdateWithoutUserPackagesInput>
  }

  export type PackageUpdateOneRequiredWithoutUserPackagesNestedInput = {
    create?: XOR<PackageCreateWithoutUserPackagesInput, PackageUncheckedCreateWithoutUserPackagesInput>
    connectOrCreate?: PackageCreateOrConnectWithoutUserPackagesInput
    upsert?: PackageUpsertWithoutUserPackagesInput
    connect?: PackageWhereUniqueInput
    update?: XOR<XOR<PackageUpdateToOneWithWhereWithoutUserPackagesInput, PackageUpdateWithoutUserPackagesInput>, PackageUncheckedUpdateWithoutUserPackagesInput>
  }

  export type UserCreateNestedOneWithoutModuleUsageInput = {
    create?: XOR<UserCreateWithoutModuleUsageInput, UserUncheckedCreateWithoutModuleUsageInput>
    connectOrCreate?: UserCreateOrConnectWithoutModuleUsageInput
    connect?: UserWhereUniqueInput
  }

  export type ModuleCreateNestedOneWithoutModuleUsageInput = {
    create?: XOR<ModuleCreateWithoutModuleUsageInput, ModuleUncheckedCreateWithoutModuleUsageInput>
    connectOrCreate?: ModuleCreateOrConnectWithoutModuleUsageInput
    connect?: ModuleWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutModuleUsageNestedInput = {
    create?: XOR<UserCreateWithoutModuleUsageInput, UserUncheckedCreateWithoutModuleUsageInput>
    connectOrCreate?: UserCreateOrConnectWithoutModuleUsageInput
    upsert?: UserUpsertWithoutModuleUsageInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutModuleUsageInput, UserUpdateWithoutModuleUsageInput>, UserUncheckedUpdateWithoutModuleUsageInput>
  }

  export type ModuleUpdateOneRequiredWithoutModuleUsageNestedInput = {
    create?: XOR<ModuleCreateWithoutModuleUsageInput, ModuleUncheckedCreateWithoutModuleUsageInput>
    connectOrCreate?: ModuleCreateOrConnectWithoutModuleUsageInput
    upsert?: ModuleUpsertWithoutModuleUsageInput
    connect?: ModuleWhereUniqueInput
    update?: XOR<XOR<ModuleUpdateToOneWithWhereWithoutModuleUsageInput, ModuleUpdateWithoutModuleUsageInput>, ModuleUncheckedUpdateWithoutModuleUsageInput>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
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

  export type UserModuleCreateWithoutUserInput = {
    id?: string
    assignedAt?: Date | string
    expiresAt?: Date | string | null
    module: ModuleCreateNestedOneWithoutUserModulesInput
  }

  export type UserModuleUncheckedCreateWithoutUserInput = {
    id?: string
    moduleId: string
    assignedAt?: Date | string
    expiresAt?: Date | string | null
  }

  export type UserModuleCreateOrConnectWithoutUserInput = {
    where: UserModuleWhereUniqueInput
    create: XOR<UserModuleCreateWithoutUserInput, UserModuleUncheckedCreateWithoutUserInput>
  }

  export type UserModuleCreateManyUserInputEnvelope = {
    data: UserModuleCreateManyUserInput | UserModuleCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserPackageCreateWithoutUserInput = {
    id?: string
    assignedAt?: Date | string
    expiresAt?: Date | string | null
    package: PackageCreateNestedOneWithoutUserPackagesInput
  }

  export type UserPackageUncheckedCreateWithoutUserInput = {
    id?: string
    packageId: string
    assignedAt?: Date | string
    expiresAt?: Date | string | null
  }

  export type UserPackageCreateOrConnectWithoutUserInput = {
    where: UserPackageWhereUniqueInput
    create: XOR<UserPackageCreateWithoutUserInput, UserPackageUncheckedCreateWithoutUserInput>
  }

  export type UserPackageCreateManyUserInputEnvelope = {
    data: UserPackageCreateManyUserInput | UserPackageCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ModuleUsageCreateWithoutUserInput = {
    id?: string
    usageCount?: number
    lastUpdated?: Date | string
    module: ModuleCreateNestedOneWithoutModuleUsageInput
  }

  export type ModuleUsageUncheckedCreateWithoutUserInput = {
    id?: string
    moduleId: string
    usageCount?: number
    lastUpdated?: Date | string
  }

  export type ModuleUsageCreateOrConnectWithoutUserInput = {
    where: ModuleUsageWhereUniqueInput
    create: XOR<ModuleUsageCreateWithoutUserInput, ModuleUsageUncheckedCreateWithoutUserInput>
  }

  export type ModuleUsageCreateManyUserInputEnvelope = {
    data: ModuleUsageCreateManyUserInput | ModuleUsageCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserModuleUpsertWithWhereUniqueWithoutUserInput = {
    where: UserModuleWhereUniqueInput
    update: XOR<UserModuleUpdateWithoutUserInput, UserModuleUncheckedUpdateWithoutUserInput>
    create: XOR<UserModuleCreateWithoutUserInput, UserModuleUncheckedCreateWithoutUserInput>
  }

  export type UserModuleUpdateWithWhereUniqueWithoutUserInput = {
    where: UserModuleWhereUniqueInput
    data: XOR<UserModuleUpdateWithoutUserInput, UserModuleUncheckedUpdateWithoutUserInput>
  }

  export type UserModuleUpdateManyWithWhereWithoutUserInput = {
    where: UserModuleScalarWhereInput
    data: XOR<UserModuleUpdateManyMutationInput, UserModuleUncheckedUpdateManyWithoutUserInput>
  }

  export type UserModuleScalarWhereInput = {
    AND?: UserModuleScalarWhereInput | UserModuleScalarWhereInput[]
    OR?: UserModuleScalarWhereInput[]
    NOT?: UserModuleScalarWhereInput | UserModuleScalarWhereInput[]
    id?: StringFilter<"UserModule"> | string
    userId?: StringFilter<"UserModule"> | string
    moduleId?: StringFilter<"UserModule"> | string
    assignedAt?: DateTimeFilter<"UserModule"> | Date | string
    expiresAt?: DateTimeNullableFilter<"UserModule"> | Date | string | null
  }

  export type UserPackageUpsertWithWhereUniqueWithoutUserInput = {
    where: UserPackageWhereUniqueInput
    update: XOR<UserPackageUpdateWithoutUserInput, UserPackageUncheckedUpdateWithoutUserInput>
    create: XOR<UserPackageCreateWithoutUserInput, UserPackageUncheckedCreateWithoutUserInput>
  }

  export type UserPackageUpdateWithWhereUniqueWithoutUserInput = {
    where: UserPackageWhereUniqueInput
    data: XOR<UserPackageUpdateWithoutUserInput, UserPackageUncheckedUpdateWithoutUserInput>
  }

  export type UserPackageUpdateManyWithWhereWithoutUserInput = {
    where: UserPackageScalarWhereInput
    data: XOR<UserPackageUpdateManyMutationInput, UserPackageUncheckedUpdateManyWithoutUserInput>
  }

  export type UserPackageScalarWhereInput = {
    AND?: UserPackageScalarWhereInput | UserPackageScalarWhereInput[]
    OR?: UserPackageScalarWhereInput[]
    NOT?: UserPackageScalarWhereInput | UserPackageScalarWhereInput[]
    id?: StringFilter<"UserPackage"> | string
    userId?: StringFilter<"UserPackage"> | string
    packageId?: StringFilter<"UserPackage"> | string
    assignedAt?: DateTimeFilter<"UserPackage"> | Date | string
    expiresAt?: DateTimeNullableFilter<"UserPackage"> | Date | string | null
  }

  export type ModuleUsageUpsertWithWhereUniqueWithoutUserInput = {
    where: ModuleUsageWhereUniqueInput
    update: XOR<ModuleUsageUpdateWithoutUserInput, ModuleUsageUncheckedUpdateWithoutUserInput>
    create: XOR<ModuleUsageCreateWithoutUserInput, ModuleUsageUncheckedCreateWithoutUserInput>
  }

  export type ModuleUsageUpdateWithWhereUniqueWithoutUserInput = {
    where: ModuleUsageWhereUniqueInput
    data: XOR<ModuleUsageUpdateWithoutUserInput, ModuleUsageUncheckedUpdateWithoutUserInput>
  }

  export type ModuleUsageUpdateManyWithWhereWithoutUserInput = {
    where: ModuleUsageScalarWhereInput
    data: XOR<ModuleUsageUpdateManyMutationInput, ModuleUsageUncheckedUpdateManyWithoutUserInput>
  }

  export type ModuleUsageScalarWhereInput = {
    AND?: ModuleUsageScalarWhereInput | ModuleUsageScalarWhereInput[]
    OR?: ModuleUsageScalarWhereInput[]
    NOT?: ModuleUsageScalarWhereInput | ModuleUsageScalarWhereInput[]
    id?: StringFilter<"ModuleUsage"> | string
    userId?: StringFilter<"ModuleUsage"> | string
    moduleId?: StringFilter<"ModuleUsage"> | string
    usageCount?: IntFilter<"ModuleUsage"> | number
    lastUpdated?: DateTimeFilter<"ModuleUsage"> | Date | string
  }

  export type ModuleTierCreateWithoutModuleInput = {
    id?: string
    tier: string
    entitlementName: string
    revCatEntitlementName: string
    webviewUrl?: string | null
    zipFileUrl?: string | null
    iconUrl?: string | null
    hasTextProduction?: boolean
    hasConclusion?: boolean
    hasMap?: boolean
    price?: Decimal | DecimalJsLike | number | string | null
    usageLimit?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModuleTierUncheckedCreateWithoutModuleInput = {
    id?: string
    tier: string
    entitlementName: string
    revCatEntitlementName: string
    webviewUrl?: string | null
    zipFileUrl?: string | null
    iconUrl?: string | null
    hasTextProduction?: boolean
    hasConclusion?: boolean
    hasMap?: boolean
    price?: Decimal | DecimalJsLike | number | string | null
    usageLimit?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModuleTierCreateOrConnectWithoutModuleInput = {
    where: ModuleTierWhereUniqueInput
    create: XOR<ModuleTierCreateWithoutModuleInput, ModuleTierUncheckedCreateWithoutModuleInput>
  }

  export type ModuleTierCreateManyModuleInputEnvelope = {
    data: ModuleTierCreateManyModuleInput | ModuleTierCreateManyModuleInput[]
    skipDuplicates?: boolean
  }

  export type UserModuleCreateWithoutModuleInput = {
    id?: string
    assignedAt?: Date | string
    expiresAt?: Date | string | null
    user: UserCreateNestedOneWithoutUserModulesInput
  }

  export type UserModuleUncheckedCreateWithoutModuleInput = {
    id?: string
    userId: string
    assignedAt?: Date | string
    expiresAt?: Date | string | null
  }

  export type UserModuleCreateOrConnectWithoutModuleInput = {
    where: UserModuleWhereUniqueInput
    create: XOR<UserModuleCreateWithoutModuleInput, UserModuleUncheckedCreateWithoutModuleInput>
  }

  export type UserModuleCreateManyModuleInputEnvelope = {
    data: UserModuleCreateManyModuleInput | UserModuleCreateManyModuleInput[]
    skipDuplicates?: boolean
  }

  export type PackageModuleCreateWithoutModuleInput = {
    id?: string
    createdAt?: Date | string
    package: PackageCreateNestedOneWithoutPackageModulesInput
  }

  export type PackageModuleUncheckedCreateWithoutModuleInput = {
    id?: string
    packageId: string
    createdAt?: Date | string
  }

  export type PackageModuleCreateOrConnectWithoutModuleInput = {
    where: PackageModuleWhereUniqueInput
    create: XOR<PackageModuleCreateWithoutModuleInput, PackageModuleUncheckedCreateWithoutModuleInput>
  }

  export type PackageModuleCreateManyModuleInputEnvelope = {
    data: PackageModuleCreateManyModuleInput | PackageModuleCreateManyModuleInput[]
    skipDuplicates?: boolean
  }

  export type ModuleUsageCreateWithoutModuleInput = {
    id?: string
    usageCount?: number
    lastUpdated?: Date | string
    user: UserCreateNestedOneWithoutModuleUsageInput
  }

  export type ModuleUsageUncheckedCreateWithoutModuleInput = {
    id?: string
    userId: string
    usageCount?: number
    lastUpdated?: Date | string
  }

  export type ModuleUsageCreateOrConnectWithoutModuleInput = {
    where: ModuleUsageWhereUniqueInput
    create: XOR<ModuleUsageCreateWithoutModuleInput, ModuleUsageUncheckedCreateWithoutModuleInput>
  }

  export type ModuleUsageCreateManyModuleInputEnvelope = {
    data: ModuleUsageCreateManyModuleInput | ModuleUsageCreateManyModuleInput[]
    skipDuplicates?: boolean
  }

  export type ModuleTierUpsertWithWhereUniqueWithoutModuleInput = {
    where: ModuleTierWhereUniqueInput
    update: XOR<ModuleTierUpdateWithoutModuleInput, ModuleTierUncheckedUpdateWithoutModuleInput>
    create: XOR<ModuleTierCreateWithoutModuleInput, ModuleTierUncheckedCreateWithoutModuleInput>
  }

  export type ModuleTierUpdateWithWhereUniqueWithoutModuleInput = {
    where: ModuleTierWhereUniqueInput
    data: XOR<ModuleTierUpdateWithoutModuleInput, ModuleTierUncheckedUpdateWithoutModuleInput>
  }

  export type ModuleTierUpdateManyWithWhereWithoutModuleInput = {
    where: ModuleTierScalarWhereInput
    data: XOR<ModuleTierUpdateManyMutationInput, ModuleTierUncheckedUpdateManyWithoutModuleInput>
  }

  export type ModuleTierScalarWhereInput = {
    AND?: ModuleTierScalarWhereInput | ModuleTierScalarWhereInput[]
    OR?: ModuleTierScalarWhereInput[]
    NOT?: ModuleTierScalarWhereInput | ModuleTierScalarWhereInput[]
    id?: StringFilter<"ModuleTier"> | string
    moduleId?: StringFilter<"ModuleTier"> | string
    tier?: StringFilter<"ModuleTier"> | string
    entitlementName?: StringFilter<"ModuleTier"> | string
    revCatEntitlementName?: StringFilter<"ModuleTier"> | string
    webviewUrl?: StringNullableFilter<"ModuleTier"> | string | null
    zipFileUrl?: StringNullableFilter<"ModuleTier"> | string | null
    iconUrl?: StringNullableFilter<"ModuleTier"> | string | null
    hasTextProduction?: BoolFilter<"ModuleTier"> | boolean
    hasConclusion?: BoolFilter<"ModuleTier"> | boolean
    hasMap?: BoolFilter<"ModuleTier"> | boolean
    price?: DecimalNullableFilter<"ModuleTier"> | Decimal | DecimalJsLike | number | string | null
    usageLimit?: IntFilter<"ModuleTier"> | number
    createdAt?: DateTimeFilter<"ModuleTier"> | Date | string
    updatedAt?: DateTimeFilter<"ModuleTier"> | Date | string
  }

  export type UserModuleUpsertWithWhereUniqueWithoutModuleInput = {
    where: UserModuleWhereUniqueInput
    update: XOR<UserModuleUpdateWithoutModuleInput, UserModuleUncheckedUpdateWithoutModuleInput>
    create: XOR<UserModuleCreateWithoutModuleInput, UserModuleUncheckedCreateWithoutModuleInput>
  }

  export type UserModuleUpdateWithWhereUniqueWithoutModuleInput = {
    where: UserModuleWhereUniqueInput
    data: XOR<UserModuleUpdateWithoutModuleInput, UserModuleUncheckedUpdateWithoutModuleInput>
  }

  export type UserModuleUpdateManyWithWhereWithoutModuleInput = {
    where: UserModuleScalarWhereInput
    data: XOR<UserModuleUpdateManyMutationInput, UserModuleUncheckedUpdateManyWithoutModuleInput>
  }

  export type PackageModuleUpsertWithWhereUniqueWithoutModuleInput = {
    where: PackageModuleWhereUniqueInput
    update: XOR<PackageModuleUpdateWithoutModuleInput, PackageModuleUncheckedUpdateWithoutModuleInput>
    create: XOR<PackageModuleCreateWithoutModuleInput, PackageModuleUncheckedCreateWithoutModuleInput>
  }

  export type PackageModuleUpdateWithWhereUniqueWithoutModuleInput = {
    where: PackageModuleWhereUniqueInput
    data: XOR<PackageModuleUpdateWithoutModuleInput, PackageModuleUncheckedUpdateWithoutModuleInput>
  }

  export type PackageModuleUpdateManyWithWhereWithoutModuleInput = {
    where: PackageModuleScalarWhereInput
    data: XOR<PackageModuleUpdateManyMutationInput, PackageModuleUncheckedUpdateManyWithoutModuleInput>
  }

  export type PackageModuleScalarWhereInput = {
    AND?: PackageModuleScalarWhereInput | PackageModuleScalarWhereInput[]
    OR?: PackageModuleScalarWhereInput[]
    NOT?: PackageModuleScalarWhereInput | PackageModuleScalarWhereInput[]
    id?: StringFilter<"PackageModule"> | string
    packageId?: StringFilter<"PackageModule"> | string
    moduleId?: StringFilter<"PackageModule"> | string
    createdAt?: DateTimeFilter<"PackageModule"> | Date | string
  }

  export type ModuleUsageUpsertWithWhereUniqueWithoutModuleInput = {
    where: ModuleUsageWhereUniqueInput
    update: XOR<ModuleUsageUpdateWithoutModuleInput, ModuleUsageUncheckedUpdateWithoutModuleInput>
    create: XOR<ModuleUsageCreateWithoutModuleInput, ModuleUsageUncheckedCreateWithoutModuleInput>
  }

  export type ModuleUsageUpdateWithWhereUniqueWithoutModuleInput = {
    where: ModuleUsageWhereUniqueInput
    data: XOR<ModuleUsageUpdateWithoutModuleInput, ModuleUsageUncheckedUpdateWithoutModuleInput>
  }

  export type ModuleUsageUpdateManyWithWhereWithoutModuleInput = {
    where: ModuleUsageScalarWhereInput
    data: XOR<ModuleUsageUpdateManyMutationInput, ModuleUsageUncheckedUpdateManyWithoutModuleInput>
  }

  export type ModuleCreateWithoutTiersInput = {
    id?: string
    name: string
    description?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userModules?: UserModuleCreateNestedManyWithoutModuleInput
    packageModules?: PackageModuleCreateNestedManyWithoutModuleInput
    moduleUsage?: ModuleUsageCreateNestedManyWithoutModuleInput
  }

  export type ModuleUncheckedCreateWithoutTiersInput = {
    id?: string
    name: string
    description?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userModules?: UserModuleUncheckedCreateNestedManyWithoutModuleInput
    packageModules?: PackageModuleUncheckedCreateNestedManyWithoutModuleInput
    moduleUsage?: ModuleUsageUncheckedCreateNestedManyWithoutModuleInput
  }

  export type ModuleCreateOrConnectWithoutTiersInput = {
    where: ModuleWhereUniqueInput
    create: XOR<ModuleCreateWithoutTiersInput, ModuleUncheckedCreateWithoutTiersInput>
  }

  export type ModuleUpsertWithoutTiersInput = {
    update: XOR<ModuleUpdateWithoutTiersInput, ModuleUncheckedUpdateWithoutTiersInput>
    create: XOR<ModuleCreateWithoutTiersInput, ModuleUncheckedCreateWithoutTiersInput>
    where?: ModuleWhereInput
  }

  export type ModuleUpdateToOneWithWhereWithoutTiersInput = {
    where?: ModuleWhereInput
    data: XOR<ModuleUpdateWithoutTiersInput, ModuleUncheckedUpdateWithoutTiersInput>
  }

  export type ModuleUpdateWithoutTiersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userModules?: UserModuleUpdateManyWithoutModuleNestedInput
    packageModules?: PackageModuleUpdateManyWithoutModuleNestedInput
    moduleUsage?: ModuleUsageUpdateManyWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateWithoutTiersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userModules?: UserModuleUncheckedUpdateManyWithoutModuleNestedInput
    packageModules?: PackageModuleUncheckedUpdateManyWithoutModuleNestedInput
    moduleUsage?: ModuleUsageUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type PackageModuleCreateWithoutPackageInput = {
    id?: string
    createdAt?: Date | string
    module: ModuleCreateNestedOneWithoutPackageModulesInput
  }

  export type PackageModuleUncheckedCreateWithoutPackageInput = {
    id?: string
    moduleId: string
    createdAt?: Date | string
  }

  export type PackageModuleCreateOrConnectWithoutPackageInput = {
    where: PackageModuleWhereUniqueInput
    create: XOR<PackageModuleCreateWithoutPackageInput, PackageModuleUncheckedCreateWithoutPackageInput>
  }

  export type PackageModuleCreateManyPackageInputEnvelope = {
    data: PackageModuleCreateManyPackageInput | PackageModuleCreateManyPackageInput[]
    skipDuplicates?: boolean
  }

  export type UserPackageCreateWithoutPackageInput = {
    id?: string
    assignedAt?: Date | string
    expiresAt?: Date | string | null
    user: UserCreateNestedOneWithoutUserPackagesInput
  }

  export type UserPackageUncheckedCreateWithoutPackageInput = {
    id?: string
    userId: string
    assignedAt?: Date | string
    expiresAt?: Date | string | null
  }

  export type UserPackageCreateOrConnectWithoutPackageInput = {
    where: UserPackageWhereUniqueInput
    create: XOR<UserPackageCreateWithoutPackageInput, UserPackageUncheckedCreateWithoutPackageInput>
  }

  export type UserPackageCreateManyPackageInputEnvelope = {
    data: UserPackageCreateManyPackageInput | UserPackageCreateManyPackageInput[]
    skipDuplicates?: boolean
  }

  export type PackageModuleUpsertWithWhereUniqueWithoutPackageInput = {
    where: PackageModuleWhereUniqueInput
    update: XOR<PackageModuleUpdateWithoutPackageInput, PackageModuleUncheckedUpdateWithoutPackageInput>
    create: XOR<PackageModuleCreateWithoutPackageInput, PackageModuleUncheckedCreateWithoutPackageInput>
  }

  export type PackageModuleUpdateWithWhereUniqueWithoutPackageInput = {
    where: PackageModuleWhereUniqueInput
    data: XOR<PackageModuleUpdateWithoutPackageInput, PackageModuleUncheckedUpdateWithoutPackageInput>
  }

  export type PackageModuleUpdateManyWithWhereWithoutPackageInput = {
    where: PackageModuleScalarWhereInput
    data: XOR<PackageModuleUpdateManyMutationInput, PackageModuleUncheckedUpdateManyWithoutPackageInput>
  }

  export type UserPackageUpsertWithWhereUniqueWithoutPackageInput = {
    where: UserPackageWhereUniqueInput
    update: XOR<UserPackageUpdateWithoutPackageInput, UserPackageUncheckedUpdateWithoutPackageInput>
    create: XOR<UserPackageCreateWithoutPackageInput, UserPackageUncheckedCreateWithoutPackageInput>
  }

  export type UserPackageUpdateWithWhereUniqueWithoutPackageInput = {
    where: UserPackageWhereUniqueInput
    data: XOR<UserPackageUpdateWithoutPackageInput, UserPackageUncheckedUpdateWithoutPackageInput>
  }

  export type UserPackageUpdateManyWithWhereWithoutPackageInput = {
    where: UserPackageScalarWhereInput
    data: XOR<UserPackageUpdateManyMutationInput, UserPackageUncheckedUpdateManyWithoutPackageInput>
  }

  export type PackageCreateWithoutPackageModulesInput = {
    id?: string
    entitlementName: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userPackages?: UserPackageCreateNestedManyWithoutPackageInput
  }

  export type PackageUncheckedCreateWithoutPackageModulesInput = {
    id?: string
    entitlementName: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userPackages?: UserPackageUncheckedCreateNestedManyWithoutPackageInput
  }

  export type PackageCreateOrConnectWithoutPackageModulesInput = {
    where: PackageWhereUniqueInput
    create: XOR<PackageCreateWithoutPackageModulesInput, PackageUncheckedCreateWithoutPackageModulesInput>
  }

  export type ModuleCreateWithoutPackageModulesInput = {
    id?: string
    name: string
    description?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tiers?: ModuleTierCreateNestedManyWithoutModuleInput
    userModules?: UserModuleCreateNestedManyWithoutModuleInput
    moduleUsage?: ModuleUsageCreateNestedManyWithoutModuleInput
  }

  export type ModuleUncheckedCreateWithoutPackageModulesInput = {
    id?: string
    name: string
    description?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tiers?: ModuleTierUncheckedCreateNestedManyWithoutModuleInput
    userModules?: UserModuleUncheckedCreateNestedManyWithoutModuleInput
    moduleUsage?: ModuleUsageUncheckedCreateNestedManyWithoutModuleInput
  }

  export type ModuleCreateOrConnectWithoutPackageModulesInput = {
    where: ModuleWhereUniqueInput
    create: XOR<ModuleCreateWithoutPackageModulesInput, ModuleUncheckedCreateWithoutPackageModulesInput>
  }

  export type PackageUpsertWithoutPackageModulesInput = {
    update: XOR<PackageUpdateWithoutPackageModulesInput, PackageUncheckedUpdateWithoutPackageModulesInput>
    create: XOR<PackageCreateWithoutPackageModulesInput, PackageUncheckedCreateWithoutPackageModulesInput>
    where?: PackageWhereInput
  }

  export type PackageUpdateToOneWithWhereWithoutPackageModulesInput = {
    where?: PackageWhereInput
    data: XOR<PackageUpdateWithoutPackageModulesInput, PackageUncheckedUpdateWithoutPackageModulesInput>
  }

  export type PackageUpdateWithoutPackageModulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    entitlementName?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userPackages?: UserPackageUpdateManyWithoutPackageNestedInput
  }

  export type PackageUncheckedUpdateWithoutPackageModulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    entitlementName?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userPackages?: UserPackageUncheckedUpdateManyWithoutPackageNestedInput
  }

  export type ModuleUpsertWithoutPackageModulesInput = {
    update: XOR<ModuleUpdateWithoutPackageModulesInput, ModuleUncheckedUpdateWithoutPackageModulesInput>
    create: XOR<ModuleCreateWithoutPackageModulesInput, ModuleUncheckedCreateWithoutPackageModulesInput>
    where?: ModuleWhereInput
  }

  export type ModuleUpdateToOneWithWhereWithoutPackageModulesInput = {
    where?: ModuleWhereInput
    data: XOR<ModuleUpdateWithoutPackageModulesInput, ModuleUncheckedUpdateWithoutPackageModulesInput>
  }

  export type ModuleUpdateWithoutPackageModulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tiers?: ModuleTierUpdateManyWithoutModuleNestedInput
    userModules?: UserModuleUpdateManyWithoutModuleNestedInput
    moduleUsage?: ModuleUsageUpdateManyWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateWithoutPackageModulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tiers?: ModuleTierUncheckedUpdateManyWithoutModuleNestedInput
    userModules?: UserModuleUncheckedUpdateManyWithoutModuleNestedInput
    moduleUsage?: ModuleUsageUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type UserCreateWithoutUserModulesInput = {
    id?: string
    fullName: string
    email: string
    password: string
    profession?: string | null
    country?: string | null
    city?: string | null
    deviceId?: string | null
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    userPackages?: UserPackageCreateNestedManyWithoutUserInput
    moduleUsage?: ModuleUsageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserModulesInput = {
    id?: string
    fullName: string
    email: string
    password: string
    profession?: string | null
    country?: string | null
    city?: string | null
    deviceId?: string | null
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    userPackages?: UserPackageUncheckedCreateNestedManyWithoutUserInput
    moduleUsage?: ModuleUsageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserModulesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserModulesInput, UserUncheckedCreateWithoutUserModulesInput>
  }

  export type ModuleCreateWithoutUserModulesInput = {
    id?: string
    name: string
    description?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tiers?: ModuleTierCreateNestedManyWithoutModuleInput
    packageModules?: PackageModuleCreateNestedManyWithoutModuleInput
    moduleUsage?: ModuleUsageCreateNestedManyWithoutModuleInput
  }

  export type ModuleUncheckedCreateWithoutUserModulesInput = {
    id?: string
    name: string
    description?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tiers?: ModuleTierUncheckedCreateNestedManyWithoutModuleInput
    packageModules?: PackageModuleUncheckedCreateNestedManyWithoutModuleInput
    moduleUsage?: ModuleUsageUncheckedCreateNestedManyWithoutModuleInput
  }

  export type ModuleCreateOrConnectWithoutUserModulesInput = {
    where: ModuleWhereUniqueInput
    create: XOR<ModuleCreateWithoutUserModulesInput, ModuleUncheckedCreateWithoutUserModulesInput>
  }

  export type UserUpsertWithoutUserModulesInput = {
    update: XOR<UserUpdateWithoutUserModulesInput, UserUncheckedUpdateWithoutUserModulesInput>
    create: XOR<UserCreateWithoutUserModulesInput, UserUncheckedCreateWithoutUserModulesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserModulesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserModulesInput, UserUncheckedUpdateWithoutUserModulesInput>
  }

  export type UserUpdateWithoutUserModulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profession?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userPackages?: UserPackageUpdateManyWithoutUserNestedInput
    moduleUsage?: ModuleUsageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserModulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profession?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userPackages?: UserPackageUncheckedUpdateManyWithoutUserNestedInput
    moduleUsage?: ModuleUsageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ModuleUpsertWithoutUserModulesInput = {
    update: XOR<ModuleUpdateWithoutUserModulesInput, ModuleUncheckedUpdateWithoutUserModulesInput>
    create: XOR<ModuleCreateWithoutUserModulesInput, ModuleUncheckedCreateWithoutUserModulesInput>
    where?: ModuleWhereInput
  }

  export type ModuleUpdateToOneWithWhereWithoutUserModulesInput = {
    where?: ModuleWhereInput
    data: XOR<ModuleUpdateWithoutUserModulesInput, ModuleUncheckedUpdateWithoutUserModulesInput>
  }

  export type ModuleUpdateWithoutUserModulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tiers?: ModuleTierUpdateManyWithoutModuleNestedInput
    packageModules?: PackageModuleUpdateManyWithoutModuleNestedInput
    moduleUsage?: ModuleUsageUpdateManyWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateWithoutUserModulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tiers?: ModuleTierUncheckedUpdateManyWithoutModuleNestedInput
    packageModules?: PackageModuleUncheckedUpdateManyWithoutModuleNestedInput
    moduleUsage?: ModuleUsageUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type UserCreateWithoutUserPackagesInput = {
    id?: string
    fullName: string
    email: string
    password: string
    profession?: string | null
    country?: string | null
    city?: string | null
    deviceId?: string | null
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    userModules?: UserModuleCreateNestedManyWithoutUserInput
    moduleUsage?: ModuleUsageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserPackagesInput = {
    id?: string
    fullName: string
    email: string
    password: string
    profession?: string | null
    country?: string | null
    city?: string | null
    deviceId?: string | null
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    userModules?: UserModuleUncheckedCreateNestedManyWithoutUserInput
    moduleUsage?: ModuleUsageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserPackagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserPackagesInput, UserUncheckedCreateWithoutUserPackagesInput>
  }

  export type PackageCreateWithoutUserPackagesInput = {
    id?: string
    entitlementName: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    packageModules?: PackageModuleCreateNestedManyWithoutPackageInput
  }

  export type PackageUncheckedCreateWithoutUserPackagesInput = {
    id?: string
    entitlementName: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    packageModules?: PackageModuleUncheckedCreateNestedManyWithoutPackageInput
  }

  export type PackageCreateOrConnectWithoutUserPackagesInput = {
    where: PackageWhereUniqueInput
    create: XOR<PackageCreateWithoutUserPackagesInput, PackageUncheckedCreateWithoutUserPackagesInput>
  }

  export type UserUpsertWithoutUserPackagesInput = {
    update: XOR<UserUpdateWithoutUserPackagesInput, UserUncheckedUpdateWithoutUserPackagesInput>
    create: XOR<UserCreateWithoutUserPackagesInput, UserUncheckedCreateWithoutUserPackagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserPackagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserPackagesInput, UserUncheckedUpdateWithoutUserPackagesInput>
  }

  export type UserUpdateWithoutUserPackagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profession?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userModules?: UserModuleUpdateManyWithoutUserNestedInput
    moduleUsage?: ModuleUsageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserPackagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profession?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userModules?: UserModuleUncheckedUpdateManyWithoutUserNestedInput
    moduleUsage?: ModuleUsageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PackageUpsertWithoutUserPackagesInput = {
    update: XOR<PackageUpdateWithoutUserPackagesInput, PackageUncheckedUpdateWithoutUserPackagesInput>
    create: XOR<PackageCreateWithoutUserPackagesInput, PackageUncheckedCreateWithoutUserPackagesInput>
    where?: PackageWhereInput
  }

  export type PackageUpdateToOneWithWhereWithoutUserPackagesInput = {
    where?: PackageWhereInput
    data: XOR<PackageUpdateWithoutUserPackagesInput, PackageUncheckedUpdateWithoutUserPackagesInput>
  }

  export type PackageUpdateWithoutUserPackagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    entitlementName?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    packageModules?: PackageModuleUpdateManyWithoutPackageNestedInput
  }

  export type PackageUncheckedUpdateWithoutUserPackagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    entitlementName?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    packageModules?: PackageModuleUncheckedUpdateManyWithoutPackageNestedInput
  }

  export type UserCreateWithoutModuleUsageInput = {
    id?: string
    fullName: string
    email: string
    password: string
    profession?: string | null
    country?: string | null
    city?: string | null
    deviceId?: string | null
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    userModules?: UserModuleCreateNestedManyWithoutUserInput
    userPackages?: UserPackageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutModuleUsageInput = {
    id?: string
    fullName: string
    email: string
    password: string
    profession?: string | null
    country?: string | null
    city?: string | null
    deviceId?: string | null
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    userModules?: UserModuleUncheckedCreateNestedManyWithoutUserInput
    userPackages?: UserPackageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutModuleUsageInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutModuleUsageInput, UserUncheckedCreateWithoutModuleUsageInput>
  }

  export type ModuleCreateWithoutModuleUsageInput = {
    id?: string
    name: string
    description?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tiers?: ModuleTierCreateNestedManyWithoutModuleInput
    userModules?: UserModuleCreateNestedManyWithoutModuleInput
    packageModules?: PackageModuleCreateNestedManyWithoutModuleInput
  }

  export type ModuleUncheckedCreateWithoutModuleUsageInput = {
    id?: string
    name: string
    description?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tiers?: ModuleTierUncheckedCreateNestedManyWithoutModuleInput
    userModules?: UserModuleUncheckedCreateNestedManyWithoutModuleInput
    packageModules?: PackageModuleUncheckedCreateNestedManyWithoutModuleInput
  }

  export type ModuleCreateOrConnectWithoutModuleUsageInput = {
    where: ModuleWhereUniqueInput
    create: XOR<ModuleCreateWithoutModuleUsageInput, ModuleUncheckedCreateWithoutModuleUsageInput>
  }

  export type UserUpsertWithoutModuleUsageInput = {
    update: XOR<UserUpdateWithoutModuleUsageInput, UserUncheckedUpdateWithoutModuleUsageInput>
    create: XOR<UserCreateWithoutModuleUsageInput, UserUncheckedCreateWithoutModuleUsageInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutModuleUsageInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutModuleUsageInput, UserUncheckedUpdateWithoutModuleUsageInput>
  }

  export type UserUpdateWithoutModuleUsageInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profession?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userModules?: UserModuleUpdateManyWithoutUserNestedInput
    userPackages?: UserPackageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutModuleUsageInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profession?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userModules?: UserModuleUncheckedUpdateManyWithoutUserNestedInput
    userPackages?: UserPackageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ModuleUpsertWithoutModuleUsageInput = {
    update: XOR<ModuleUpdateWithoutModuleUsageInput, ModuleUncheckedUpdateWithoutModuleUsageInput>
    create: XOR<ModuleCreateWithoutModuleUsageInput, ModuleUncheckedCreateWithoutModuleUsageInput>
    where?: ModuleWhereInput
  }

  export type ModuleUpdateToOneWithWhereWithoutModuleUsageInput = {
    where?: ModuleWhereInput
    data: XOR<ModuleUpdateWithoutModuleUsageInput, ModuleUncheckedUpdateWithoutModuleUsageInput>
  }

  export type ModuleUpdateWithoutModuleUsageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tiers?: ModuleTierUpdateManyWithoutModuleNestedInput
    userModules?: UserModuleUpdateManyWithoutModuleNestedInput
    packageModules?: PackageModuleUpdateManyWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateWithoutModuleUsageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tiers?: ModuleTierUncheckedUpdateManyWithoutModuleNestedInput
    userModules?: UserModuleUncheckedUpdateManyWithoutModuleNestedInput
    packageModules?: PackageModuleUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type UserModuleCreateManyUserInput = {
    id?: string
    moduleId: string
    assignedAt?: Date | string
    expiresAt?: Date | string | null
  }

  export type UserPackageCreateManyUserInput = {
    id?: string
    packageId: string
    assignedAt?: Date | string
    expiresAt?: Date | string | null
  }

  export type ModuleUsageCreateManyUserInput = {
    id?: string
    moduleId: string
    usageCount?: number
    lastUpdated?: Date | string
  }

  export type UserModuleUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    module?: ModuleUpdateOneRequiredWithoutUserModulesNestedInput
  }

  export type UserModuleUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserModuleUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserPackageUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    package?: PackageUpdateOneRequiredWithoutUserPackagesNestedInput
  }

  export type UserPackageUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    packageId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserPackageUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    packageId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ModuleUsageUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    usageCount?: IntFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    module?: ModuleUpdateOneRequiredWithoutModuleUsageNestedInput
  }

  export type ModuleUsageUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    usageCount?: IntFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModuleUsageUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    usageCount?: IntFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModuleTierCreateManyModuleInput = {
    id?: string
    tier: string
    entitlementName: string
    revCatEntitlementName: string
    webviewUrl?: string | null
    zipFileUrl?: string | null
    iconUrl?: string | null
    hasTextProduction?: boolean
    hasConclusion?: boolean
    hasMap?: boolean
    price?: Decimal | DecimalJsLike | number | string | null
    usageLimit?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserModuleCreateManyModuleInput = {
    id?: string
    userId: string
    assignedAt?: Date | string
    expiresAt?: Date | string | null
  }

  export type PackageModuleCreateManyModuleInput = {
    id?: string
    packageId: string
    createdAt?: Date | string
  }

  export type ModuleUsageCreateManyModuleInput = {
    id?: string
    userId: string
    usageCount?: number
    lastUpdated?: Date | string
  }

  export type ModuleTierUpdateWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    tier?: StringFieldUpdateOperationsInput | string
    entitlementName?: StringFieldUpdateOperationsInput | string
    revCatEntitlementName?: StringFieldUpdateOperationsInput | string
    webviewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    zipFileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hasTextProduction?: BoolFieldUpdateOperationsInput | boolean
    hasConclusion?: BoolFieldUpdateOperationsInput | boolean
    hasMap?: BoolFieldUpdateOperationsInput | boolean
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    usageLimit?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModuleTierUncheckedUpdateWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    tier?: StringFieldUpdateOperationsInput | string
    entitlementName?: StringFieldUpdateOperationsInput | string
    revCatEntitlementName?: StringFieldUpdateOperationsInput | string
    webviewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    zipFileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hasTextProduction?: BoolFieldUpdateOperationsInput | boolean
    hasConclusion?: BoolFieldUpdateOperationsInput | boolean
    hasMap?: BoolFieldUpdateOperationsInput | boolean
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    usageLimit?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModuleTierUncheckedUpdateManyWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    tier?: StringFieldUpdateOperationsInput | string
    entitlementName?: StringFieldUpdateOperationsInput | string
    revCatEntitlementName?: StringFieldUpdateOperationsInput | string
    webviewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    zipFileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hasTextProduction?: BoolFieldUpdateOperationsInput | boolean
    hasConclusion?: BoolFieldUpdateOperationsInput | boolean
    hasMap?: BoolFieldUpdateOperationsInput | boolean
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    usageLimit?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserModuleUpdateWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutUserModulesNestedInput
  }

  export type UserModuleUncheckedUpdateWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserModuleUncheckedUpdateManyWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PackageModuleUpdateWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    package?: PackageUpdateOneRequiredWithoutPackageModulesNestedInput
  }

  export type PackageModuleUncheckedUpdateWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    packageId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PackageModuleUncheckedUpdateManyWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    packageId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModuleUsageUpdateWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    usageCount?: IntFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutModuleUsageNestedInput
  }

  export type ModuleUsageUncheckedUpdateWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    usageCount?: IntFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModuleUsageUncheckedUpdateManyWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    usageCount?: IntFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PackageModuleCreateManyPackageInput = {
    id?: string
    moduleId: string
    createdAt?: Date | string
  }

  export type UserPackageCreateManyPackageInput = {
    id?: string
    userId: string
    assignedAt?: Date | string
    expiresAt?: Date | string | null
  }

  export type PackageModuleUpdateWithoutPackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    module?: ModuleUpdateOneRequiredWithoutPackageModulesNestedInput
  }

  export type PackageModuleUncheckedUpdateWithoutPackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PackageModuleUncheckedUpdateManyWithoutPackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPackageUpdateWithoutPackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutUserPackagesNestedInput
  }

  export type UserPackageUncheckedUpdateWithoutPackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserPackageUncheckedUpdateManyWithoutPackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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