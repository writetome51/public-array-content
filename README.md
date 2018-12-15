# PublicArrayContent

A Typescript/Javascript class with properties and methods that give info about  
what is in the array.

To include in your project:

    // if using TypeScript:
    import { PublicArrayContent } from '@writetome51/public-array-content';
    // if using ES5 JavaScript:
    var PublicArrayContent = require('@writetome51/public-array-content').PublicArrayContent;


To instantiate, pass the actual array it will contain to its constructor:

    let content = new PublicArrayContent( [item1, item2, item3,...] );

You can reset the array by accessing the class `.data` property:

    content.data = [1,2,3,4,...];
    

## Properties

	data : any[] (read-writable) // the actual array
	
	length : number (read-writable) // length of this.data

	isEmpty : boolean (read-only)

	notEmpty : boolean (read-only)

	copy : this (read-only)
        // a copy of the instance, containing an independent copy of this.data that can be 
        // manipulated separately.


## Methods

NOTICE:  For all the methods below, any parameter called 'value' cannot be an object,   
and any parameter called 'values' cannot contain an object.   
This does not include arrays. Arrays are OK, as long as they don't contain objects.

	asString(glue = ', '): string
        // Does same thing as Array.join()

	has(value): boolean
	    // returns true if this.data contains value.
	
	hasAll(values: any[]): boolean
	    // returns true if this.data contains every value in values.
	
	hasAny(values: any[]): boolean
	    // returns true if this.data contains at least 1 value in values.

	hasAdjacent(values: any[]): boolean
        // returns true if this.data contains exact sequence of values.
        // Example: if this.data is [10,1,2,3,11], then this.hasAdjacent([1,2,3]) returns true.

	startsWith(values: any[]): boolean
        // returns true if this.data starts with exact sequence of values.
        // always returns false if values contains object.

	endsWith(values: any[]): boolean
        // returns true if this.data ends with exact sequence of values.
        // always returns false if values contains object.

	matches(array): boolean
	    // returns true if this.data matches passed array exactly.
	    // always returns false if array contains object.
	    
    firstIndexOf(value): number
        // index of first instance of value found in this.data
    
    lastIndexOf(value): number
        // index of last instance of value found in this.data
    
    indexesOf(value): number[]
        // indexes of every instance of value found in this.data


	// For the next 3 methods:
	// testFunction is a callback with same signature as callback passed to
	// Array.filter() :
	// testFunction(item, index?, theArray?):  checks if item passes test. If yes, it returns true.
	// It's OK if item is an object.


	allPass(testFunction): boolean
	    // returns true if all items pass test.

	anyPass(testFunction): boolean
        // returns true if at least 1 item passes.

	indexesThatPass(testFunction): number[]
        // returns all indexes of items that pass test.


