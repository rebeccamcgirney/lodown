'use strict';

// YOU KNOW WHAT TO DO //

/**
 * identity: Designed to return a value, unchanged, given as an argument.
 * 
 * @param {value} Any value given as a single argument, to determine
 * which type of data it is.
 * 
 * @return {value} The value, unchanged.
 */
function identity(value){
    return value;
}
module.exports.identity = identity;


/**
 * typeOf: Designed to return the data type of the value that was 
 * given as the argument.
 * 
 * @param {value} Any value given as a single argument,
 * 
 * @return {value} The data type of the value, returned as a string.
 */
function typeOf(value){
    if(Array.isArray(value)){
       return "array";
    }else if (value === null){
       return "null";
    }else{
       return typeof value;
    }
}
module.exports.typeOf = typeOf;


/**
 * first: Designed to return the first element or number of the collection. 
 * It returns the first element or number that passes a given condition.
 * 
 * @param {array} Any array given as an argument.
 * @param {number} Any number given as an argument.
 * 
 * @return {array} The array literal [] if array is not an array.
 * @return {number} The first number of the collection. 
 * If number not given or not a number, the first element is returned.
 */
function first(array, number){
    if(!Array.isArray(array)){
        return [];
    }else if(!number){
        return array[0];
    }else{
        return array.splice(0, number);
    }
    }
   module.exports.first = first; 
   
  
  /**
 * last: Designed to return the last element or number of the collection. 
 * It returns the last element or number that passes a given condition.
 * 
 * @param {array} Any array given as an argument.
 * @param {number} Any number given as an argument.
 * 
 * @return {array} The array literal [] if array is not an array.
 * @return {number} The last number of the collection. 
 * If number not given or not a number, the last element is returned.
 */  
function last(array, number){
  if(!Array.isArray(array)){
      return [];
  }else if(!number){
      return array[array.length - 1];
  }else if(number > array.length){
      return array;
  }else{
      return array.slice(array.length - number);
  }  
}
module.exports.last = last; 


  /**
 * indexOf: Designed to return the first occurrence of a specific value 
 * in a string. -1 is returned if the value to search for never occurs.
 * 
 * @param {array} Any array given as an argument.
 * @param {value} Any number given as an argument.
 * 
 * @return {array} The index of the first occurrence of value in the array.
 * @return {value} The value of the index of the first occurence.
 * If value is not found in the array, -1 is returned.
 */  
function indexOf(array, value){
    for(let i = 0; i < array.length; i++){
        if(value.includes(array[i])){
            return i;
        }
    }
    return -1;
}
module.exports.indexOf = indexOf; 


  /**
 * contains: Designed to return a boolean value. Returns true if 
 * the value is found in the list, and false if not found. 
 * 
 * @param {array} Any array given as an argument.
 * @param {value} Any number given as an argument.
 * 
 * @return {value} A boolean value that is based upon specific conditions 
 * that are met.
 */  
function contains(array, value){
    return array.includes(value) ? true : false;
}
module.exports.contains = contains; 


/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;


  /**
 * unique: Designed to remove duplicate values by looping over an array. 
 * To test object equality, strict equality should be used. While looping,
 * the first occurrence of each value will be kept. 
 * 
 * @param {array} The array to iterate over.
 * 
 * @return {array} A new array with all duplicates removed.
 */  
function unique(array){
 return array.filter((a,b) => array.indexOf(a) === b);    
}
module.exports.unique = unique;


 /**
 * filter: Designed to filter values in a collection based on a test. 
 * Searches each value in the list, and returns an array of all 
 * of the values that pass a truth test. 
 * 
 * @param {array} The array to loop through.
 * @param {function} The Function to be applied to each value in 
 * the array. The test Function will return a boolean based on
 * logic which tests the value given.
 * 
 * @return {array} A new array containing the filtered values. 
 * The Array will contain the values only if they passed the truth test.
 */  
function filter(array, func){
let newArr = [];
each(array, function(e, i, array){
let result = func(e, i, array);
if(result === true){
newArr.push(e);
}
});
  return newArr; 
}
module.exports.filter = filter;


/**
 * reject: Designed to filter values in a collection based on a test. 
 * Searches each value in the list, and returns an array of all 
 * of the values that pass a false test.
 * 
 * @param {array} The array to loop through.
 * @param {function} The Function to be applied to each value in 
 * the array. The test Function will return a boolean based on
 * logic which tests the value given.
 * 
 * @return {array} A new array containing the rejected values. 
 * The Array will contain the values only if they passed the false test.
 */ 
function reject(array, func){
let newArr = [];
each(array, function(e, i, array){
let result = func(e, i, array);
if(result === false){
newArr.push(e);
}
});
  return newArr; 
}
module.exports.reject = reject;


/**
 * partition: Designed to split a list into two separate arrays: 
 * one array whose elements all satisfy the condition of true and
 * one array whose elements satisfy the condition of false.
 * 
 * @param {array} The array to loop through.
 * @param {function} The Function to be applied to each value in 
 * the array.
 * 
 * @return {array} A new array that is made up of two sub arrays. 
 * One of these arrays contains all the values for which the function 
 * returned a boolean value of true, and one array which the function
 * returned a boolean value of false.
 */ 
function partition(array, func){
return [filter(array,func), reject(array,func)];
}
module.exports.partition = partition;


/**
 * map: Designed to produce a new array of values by mapping each value 
 * in the list through iterating over a collection and calling back each 
 * item in the collection.
 * 
 * @param {collection} The collection to iterate over (array or object).
 * @param {function} The function which is executed by taking each element
 * of the list and calling it back.
 * 
 * @return {array} A new array that contains the array element value or object
 * property value at the current position. 
 */ 
function map(collection, func){
let newArr = [];
each(collection, function(e, i, collection){
newArr.push(func(e, i, collection));
});
return newArr;
}
module.exports.map = map;


/**
 * pluck: Designed to extract or pull a list of specific property values.
 * 
 * @param {array} An array of objects to iterate over.
 * @param {property} The property on which to aggregate the contents.
 * 
 * @return {array} A new array containing the value of property for every 
 * element in the array. The elements will be in the same order in which 
 * they were in the list.
 */ 
function pluck(array, property){
let newArr = [];
map(array, function(e, i, array){
newArr.push(e[property]);
});
return newArr;
}
module.exports.pluck = pluck;


/**
 * every: Designed to test every element of the list to make sure they
 * pass the given test. A boolean value of true will be returned if all
 * the values in the list pass the true test. It stops and returns false
 * if at least one element doess not pass the given test. 
 * 
 * @param {collection} An array or object to iterate over.
 * @param {function} The function to be applied to each value in 
 * the collection. 
 * 
 * @return {value} A boolean value based on some logic which tests the 
 * value given to it.
 */ 
function every(collection, func){
    let result = true;
    each(collection, function(e, i, collection){
        if (typeof func === "function"){
            if(!func(e ,i, collection)){
            result = false;
            }
        }else if ( !e ){
          result = false;
        }
    });
   return result;
}
module.exports.every = every;


/**
 * some: Designed to test whether any value in the given list matches the given 
 * condition. If at least one value satisfies this condition the output will 
 * be true. If none of the values matches then the output will be false.
 * 
 * @param {collection} An array or object to iterate over.
 * @param {function} The function to be applied to each value in 
 * the collection. 
 * 
 * @return {value} A boolean value based on some logic which tests the 
 * value given to it.
 */ 
function some(collection, func){
    let result = false;
    each(collection, function(e, i, collection){
        if(typeof func !== "function"){
            if (e){
            result = true;
            }
        }
        else if(func(e, i, collection)){
            result = true;
        }
    });
    return result;
}
module.exports.some = some;


/**
 * reduce: Designed to run through a list of values and eliminate 
 * some of them, based on some condition, in order to return a single value.
 * 
 * @param {array} An array to loop through.
 * @param {function} The function to be applied to each value in 
 * the collection. 
 * @param {seed} An (optional) initial value or a way to initialize the 
 * format of our value.
 * 
 * @return {value} A single value returned after the final function call.
 */ 
function reduce(arr, func, seed){
    if(seed !== undefined){
            let result = seed;
     each(arr, function(e, i, array) {
         result = func(result, e, i);
     });
        return result;
    }else{
        let result = arr[0];
        each(arr, function(e, i, array) {
            if (i !== 0){
                result = func(result, e, i, array);
            }
        });
        return result;
    }
}
module.exports.reduce = reduce;


/**
 * extend: Designed to create a copy of all of the properties from the source 
 * object to the destination object. 
 * 
 * @param {object(s)} One or more objects.
 * 
 * @return {object} An updated object.
 */ 
 function extend(obj1, obj2){
   return Object.assign(...arguments);
}
module.exports.extend = extend;

