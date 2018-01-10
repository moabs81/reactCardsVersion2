import xHrReq from '../../workBenchContainer/jsModules/xHrReq';

const fetchData = (cbReturn) => {
    const xHrReqParams = {
        baseURI: 'http://localhost:3000',
        searchURI: '/officeCards',
        method: 'GET',
        success: function (result) {
            cbReturn(result);
        }
    };
    xHrReq.call(xHrReqParams);
};

export default fetchData;