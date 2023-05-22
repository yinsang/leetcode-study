import { JSONStringify, stringify} from ".";
// dynamic(N: any, weights: any, values: any, maxWeight: any): any
it("", () => {
  expect(JSONStringify({a:1})).toEqual('{"a":1}');
  expect(JSONStringify({a:()=>{}})).toEqual('{}');
  expect(JSONStringify({a:new Map()})).toEqual('{"a":{}}');
  expect(JSONStringify({a:Symbol('')})).toEqual('{}');
  expect(JSONStringify({a:[1,2,3]})).toEqual('{"a":[1,2,3]}');
  expect(JSONStringify(null)).toEqual("null");
  expect(JSONStringify(undefined)).toEqual(undefined);
  expect(JSONStringify(()=>{})).toEqual(undefined);
  expect(JSONStringify({a:null})).toEqual('{"a":null}');
  expect(JSONStringify(Symbol('2'))).toEqual(undefined);
});
