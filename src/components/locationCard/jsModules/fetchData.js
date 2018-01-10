import xHrReq from '../../workBenchContainer/jsModules/xHrReq';

const fetchData = (cbReturn) => {
    const xHrReqParams = {
        //baseURI: 'http://localhost:3000',
        baseURI: 'https://my-json-server.typicode.com/moabs81/fakeJSONServer',
        searchURI: '/officeCards100',
        method: 'GET',
        success: function (result) {
            cbReturn(result);
        }
    };
    xHrReq.call(xHrReqParams);
};

export default fetchData;