// expect(JSONStringify({a:1})).toEqual('{"a":1}');
// expect(JSONStringify({a:()=>{}})).toEqual('{}');
// expect(JSONStringify({a:new Map()})).toEqual('{"a":{}}');
// expect(JSONStringify({a:Symbol('')})).toEqual('{}');
// expect(JSONStringify({a:[1,2,3]})).toEqual('{"a":[1,2,3]}');
// expect(JSONStringify(null)).toEqual('null');
// expect(JSONStringify(undefined)).toEqual(undefined);
// expect(JSONStringify(()=>{})).toEqual(undefined);
// expect(JSONStringify({a:null})).toEqual('"a":null');
// expect(JSONStringify(Symbol('2'))).toEqual(undefined);
export  const JSONStringify = (origin)=>{
  const stringifyValue = (value)=>{
    if(typeof value === 'function' || typeof value === 'undefined' || typeof value === 'symbol'){
      return undefined;
    }else if(typeof value === 'number' || typeof value === 'boolean' ||  value === null){
      return ''+value;
    }else if(Object.prototype.toString.call(value) === '[object Object]'){
       const valueString = Object.keys(value).map(key=>{
        if(stringifyValue(value[key]) === undefined){
          return ''
        }
        return `"${key}":${stringifyValue(value[key])}`
      }).join(',')
      return '{'+ valueString +'}'
    }else if(Object.prototype.toString.call(value) === '[object Array]'){
      const valueString = value.map(value=>{
        return stringifyValue(value)
      }).join(',')
      return '['+ valueString +']'
    }else{
      return '{}'
    }
  }
  if(origin===null){
    return "null"
  }else {
    return stringifyValue(origin)
  }
}


export function stringify(value) {
  if (typeof value === 'undefined') {
    return undefined;
  }

  if (typeof value === 'function' || typeof value === 'symbol' || value === null || value instanceof RegExp || value instanceof Error) {
    return undefined;
  }

  if (typeof value === 'boolean' || typeof value === 'number') {
    return '' + value;
  }

  if (typeof value === 'string') {
    return '"' + value + '"';
  }

  if (Array.isArray(value)) {
    const result = [];
    for (let i = 0; i < value.length; i++) {
      const str = stringify(value[i]);
      if (str === undefined) {
        result.push('null');
      } else {
        result.push(str);
      }
    }
    return '[' + result.join(',') + ']';
  }

  if (typeof value === 'object') {
    const result = [];
    for (let key in value) {
      const str = stringify(value[key]);
      if (str !== undefined) {
        result.push('"' + key + '":' + str);
      }
    }
    return '{' + result.join(',') + '}';
  }
}