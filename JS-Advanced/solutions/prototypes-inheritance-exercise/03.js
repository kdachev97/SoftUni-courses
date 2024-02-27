function extensibleObject() {
  // create prototype object
  let proto = {};
  // create extensibleObject with prototype proto
  let extObj = Object.create(proto);
  // add extend function to extensibleObject
  extObj.extend = function (template) {
    //iterate keys of template object
    for (const key in template) {
      // if template object property is function add to prototype
      if (typeof template[key] === 'function') {
        let proto = Object.getPrototypeOf(this);
        proto[key] = template[key];
        // if template object is not a function add to extensible object
      } else {
        this[key] = template[key];
      }
    }
  }

  return extObj;
}

const myObj = extensibleObject();

const template = {
  extensionMethod: function () { },
  extensionProperty: 'someString'
}
myObj.extend(template);
console.log(myObj);