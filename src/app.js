'use strict';

import { buildTableComponent } from './components/workBenchContainer/jsModules/workBenchLayout'; //import the wrapper page. parallax baby #ForNoGoodReason
import React from 'react';
import ReactDOM from 'react-dom';
import fetchData from './components/locationCard/jsModules/fetchData';
import AllCardsContainer from './components/locationCard/jsModules/AllCardsContainer';

buildTableComponent(function (result) { //callback function returns the DOM target for your app   
    const targetDiv = result;
    const xHrReqParams = {
        baseURI: 'https://my-json-server.typicode.com/moabs81/fakeJSONServer',
        searchURI: '/officeCards100',
        method: 'GET'
    };
    fetchData.call(xHrReqParams, (function (result) {
        ReactDOM.render(
            <AllCardsContainer cardData={JSON.parse(result.target.responseText)} />, document.getElementById(targetDiv)
        );
    }));
});