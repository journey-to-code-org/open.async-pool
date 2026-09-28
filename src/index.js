export async function asyncPool(items, mapper, options = {}) {
  if (!Array.isArray(items)) throw new TypeError("Expected items to be an array");
  if (typeof mapper !== "function") throw new TypeError("Expected mapper to be a function");
  const { concurrency = 4, signal } = options;
  if (!Number.isInteger(concurrency) || concurrency < 1) throw new RangeError("Expected concurrency to be a positive integer");
  const results = new Array(items.length);
  let next=0;
  async function worker(){
    while(true){
      if(signal?.aborted) throw signal.reason ?? new DOMException("Aborted","AbortError");
      const index=next++;
      if(index>=items.length)return;
      results[index]=await mapper(items[index],index,signal);
    }
  }
  await Promise.all(Array.from({length:Math.min(concurrency,items.length)},worker));
  return results;
}
