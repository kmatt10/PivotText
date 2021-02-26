//Keys should be integer strings eg "1", "2", "3", etc.
//Recommended not to use "0"
//Don't use non-integer strings as keys eg "1.5","Key_1", etc.

export const dashboardConfigs = {
    "dashboard_id": [
        { "widget_id": "exampleWidgetId",
            "dictionary": {
                //string(int) key: {"translation": String newValue}
                "42": {"translation": "oranges"},
                "84": {"translation": "Bananas"}
            }
        }
    ],
    "5ff7d5a41404be3f1cf3b236": [ //kev-ph-leave
        { "widget_id": "exampleWidgetId",
            "dictionary": {
                //"originalValue": {"translation": "replaced value"},
                "42": {"translation": "oranges"},
                "84": {"translation": "Bananas"}
            }
        },
        { "widget_id": "603700e7b9f3ca4b9c9fb097",
            "dictionary": {
                "1": {"translation": "apples"},
                "6": {"translation": "pears"}
            }
        }
    ]
};