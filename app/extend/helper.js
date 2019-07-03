'use strict';

module.exports = {
    resData (result) {
        const conObj = {
            success: true,
            data:[]
        };
    
        if (result) {
            conObj.success = true;
            conObj.data = result;
        } else {
            conObj.success = false;
            conObj.message = "未查到相关数据"
        }
    
        return conObj;
    }
}