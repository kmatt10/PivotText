## PivotText Sisense Add-on for adding text values to pivot tables.

Setup requires modification of dashboards.6.js

Replacement should be integer values mapped to the desired text values. This key should be unique

For example, sorting your text values and then numbering with rank() to give each value a specific index
Then "1": "apples", "2": "Cake", "3": "Oranges"
Set the pivot table value to max of this rank value and then this can be used to add those corresponding text values in place of the keys

#### NOTE: Exporting by any native Sisense means **will not preserve the mapping** due to the way Sisense produces exports

---

## Setup:
	* Modification of dashboards.6.js. 
	..* Add dashboard and widget information to dashboardConfigs object
	..* Each dashboard should be used as a key in dashboardConfigs, with value an array of widget objects
	..* Each widget object should have widget_id and a dictionary object
	..* Each dictionary object should have the integer value as a key with a translation object
	..* The translation object maps the new text value to the "translation" key

For a visual representation is laid out as:


		dashboardConfigs = {
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
			...}