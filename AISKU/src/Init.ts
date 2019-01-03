// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import { Initialization as ApplicationInsights, Snippet, IApplicationInsights } from "./Initialization";
import { ApplicationInsightsContainer } from "./ApplicationInsightsContainer";

export { Initialization as ApplicationInsights, Snippet } from "./Initialization";

"use strict";
//should be global function that should load as soon as SDK loads
try {

    // E2E sku on load initializes core and pipeline using snippet as input for configuration
    var aiName;
    if (typeof window !== "undefined" && typeof JSON !== "undefined") {
        // get snippet or initialize to an empty object

        aiName = window["appInsightsSDK"] || "appInsights";

        if (window[aiName] !== undefined) {
            // this is the typical case for browser+snippet
            var snippet: Snippet = window[aiName] || <any>{ version: 2.0 };

            // overwrite snippet with full appInsights
            // for 2.0 initialize only if required
            if ((snippet.version === 2.0 && window[aiName].initialize) || snippet.version === undefined ) {
                let initialization;

                const applyAppInsights = function() {
                    // apply full appInsights to the global instance
                    // Note: This must be called before loadAppInsights is called
                    for (var field in initialization) {
                        snippet[field] = initialization[field];
                    }
                }

                initialization = ApplicationInsightsContainer.getAppInsights(snippet, snippet.version, applyAppInsights);
            }
        }
    }
} catch (e) {
    // TODO: Find better place to warn to console when SDK initialization fails
    if (console) {
        console.warn('Failed to initialize AppInsights JS SDK for instance ' + aiName + e.message);
    }
}
