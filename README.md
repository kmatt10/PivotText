Create an add-on to standardize "text replacement" in widgets.

Use case is for when you have some numeric term to map to some text. eg 5:= "Apples", 3:="Pears"


Require ./dashboards folder

for each dashboard have a (dashboard_id).js

(dash_id.js)
[ { "widget_id": widget_id (string),
	"dictionary": {
		"Base term": "Replace term",
		"Base term 2": "Replace term 2"
		}
 },
 {...},
]

"textReplace: Dashboard Not Found"


Having textReplace(widget_id,dictionary)

widgetList = json.load("./dashboard/" + dash_id + ".js")
for x of widgetList:
	textReplace(x.widget_id,x.dictionary)

point out: for replacing 'values' in pivot tables only, does not affect columns/headers

Dashboard files should have spaces replaced with underscores
	ex: "my dash board" -> "my_dash_board"