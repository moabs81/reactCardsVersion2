import xHrReq from '../../workBenchContainer/jsModules/xHrReq';

const fetchData = function (cbReturn) {
    const xHrReqParams = {
        baseURI: this.baseURI,
        searchURI: this.searchURI,
        method: this.method,
        headers: this.headers,
        success: function (result) {
            cbReturn(result);
        }
    };
    xHrReq.call(xHrReqParams);
};

export default fetchData;