// https://leetcode.com/problems/check-if-object-instance-of-class

/**
 * @param {Object} object
 * @param {Function} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
    while(obj!=null)
    {
        if(obj.constructor === classFunction)
        {
            return true;
        }

        obj = Object.getPrototypeOf(obj);

    }

    return false;
};

