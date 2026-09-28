export interface AsyncPoolOptions { concurrency?: number; signal?: AbortSignal; }
export function asyncPool<T,R>(items: readonly T[], mapper:(item:T,index:number,signal?:AbortSignal)=>R|Promise<R>, options?:AsyncPoolOptions):Promise<R[]>;
