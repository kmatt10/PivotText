//Keys should be integer strings eg "1", "2", "3", etc.
//Recommended not to use "0"
//Don't use non-integer strings as keys eg "1.5","Key_1", etc.
//Feel free to erase the example templates

export const dashboardConfigs = {
    "dashboard_id": 
    [
        { 
            "widget_id": "exampleWidgetId",
            "dictionary": 
            {
                //"originalValue": {"translation": "replaced value"},
                "42": {"translation": "oranges"},
                "84": {"translation": "Bananas"}
            }
        }
    ],

    //Example
    "FRx6H4uIRoa0F5jIhVig": 
    [
        { 
            "widget_id": "1234567890",
            "dictionary": 
            {
                "42": {"translation": "oranges"},
                "84": {"translation": "Bananas"}
            }
        },

        { 
            "widget_id": "0987654321",
            "dictionary": 
            {
                "1": {"translation": "apples"},
                "6": {"translation": "pears"},
                "7": {"translation": "chairs"}
            }
        }
    ]
};