/*
Author: Kevin Matthews
email: kevin@friartuck.net
Configured for Sisense version 8.2.4.10095
*/

export function makeSwapData(widget_ID,lookupLibrary){
  var widget_id = widget_ID;
  var widget_dictionary = {...lookupLibrary};

  function swapData(){
      $(`#${widget_id} td[class*=p-value]:not(.p-total-row-val,.p-total-col-val) div`).map(
        function (i, cell) {
          let innerVal = parseInt(cell.innerHTML);
          if (!isNaN(innerVal) & (innerVal in widget_dictionary)){
            cell.innerHTML = widget_dictionary[innerVal].translation;
          } else{
            //console.error("TextReplace: Lookup error ", innerVal)
          }
        }
      );
    }

  return swapData
};