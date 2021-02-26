TextReplace Sisense Add-on for adding text values to pivot tables.

Setup requires modification of dashboards.6.js

Replacement should be integer values mapped to the desired text values. This key should be unique and constant

For example, sorting your text values and then numbering with rank() to give each value a specific index

Then "1": "apples", "2": "Cake", "3": "Oranges"
Set the pivot table up to take max of this rank value per entry