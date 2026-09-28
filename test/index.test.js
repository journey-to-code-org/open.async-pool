import test from "node:test";
import assert from "node:assert/strict";
import { asyncPool } from "../src/index.js";
test("maps asynchronously in input order", async()=>assert.deepEqual(await asyncPool([3,1,2],async x=>x*2,{concurrency:2}),[6,2,4]));
test("limits concurrency", async()=>{let active=0,max=0;await asyncPool([1,2,3,4],async()=>{active++;max=Math.max(max,active);await new Promise(r=>setTimeout(r,5));active--;},{concurrency:2});assert.equal(max,2);});
test("rejects bad concurrency",()=>assert.rejects(()=>asyncPool([],x=>x,{concurrency:0}),RangeError));
