## PivotText Sisense Add-on for adding text values to pivot tables.

Setup requires modification of dashboards.6.js

Replacement should be integer values mapped to the desired text values. This key should be unique

For example, sorting your text values and then numbering with rank() to give each value a specific index
Then "1": "apples", "2": "Cake", "3": "Oranges"
Set the pivot table value to max of this rank value and then this can be used to add those corresponding text values in place of the keys

Could also be used for categorical data which must be calculated

#### NOTE: Exporting by any native Sisense means *will not preserve the mapping* due to the way Sisense produces exports

---

## Setup:
* Modification of dashboards.6.js. 
  * Add dashboard and widget information to dashboardConfigs object
  * Each dashboard should be used as a key in dashboardConfigs, with value an array of widget objects
  * Each widget object should have widget_id and a dictionary object
  * Each dictionary object should have the integer value as a key with a translation object
  * The translation object maps the new text value to the "translation" key

A visual representation:


		dashboardConfigs = 
		{
			dashboard_id: 
			[
				{
					widget_id: String
					dictionary: 
					{
						oldValue: {translation: newValue}
					}
				},
				...
			],
			"48656c6c6f20576f726c6421": 
			[
				{ 
					"widget_id": "476f20537075727320476f21",
					"dictionary": 
					{
						"42": {"translation": "oranges"},
						"84": {"translation": "Bananas"}
					}
				},

				{ 
					"widget_id": "123456789abcdef",
					"dictionary": 
					{
						"1": {"translation": "apples"},
						"6": {"translation": "pears"},
						"7": {"translation": "chairs"}
					}
				}
			]
		}

Example can also be found in dashboards.6.js