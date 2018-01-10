'use strict';

import { buildTableComponent } from './components/workBenchContainer/jsModules/workBenchLayout'; //import the wrapper page. parallax baby #ForNoGoodReason
import React from 'react';
import ReactDOM from 'react-dom';
import fetchData from './components/locationCard/jsModules/fetchData';
import AllCardsContainer from './components/locationCard/jsModules/AllCardsContainer';

buildTableComponent(function (result) { //callback function returns the DOM target for your app   
    const targetDiv = result;
    fetchData(function (result) {
        ReactDOM.render(
            //<AllCardsContainer cardData='hi' />, document.getElementById(targetDiv)
            <AllCardsContainer cardData={JSON.parse(result.target.responseText)} />, document.getElementById(targetDiv)
        );
    });
});