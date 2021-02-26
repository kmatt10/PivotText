import { makeSwapData } from './textReplace.6'
import { dashboardConfigs } from './dashboards.6'

const replaceText = () => {
    var supportedChartTypes = ["pivot"];

    var activeDashboard = prism.activeDashboard.oid;
    var widgetConfig = dashboardConfigs[activeDashboard];

    function widgetNotSupported(type){
        if (supportedChartTypes.indexOf(type)>=0){
            return false;
        } else{
            return true;
        }
    }

    function processWidgets(widgetList){
        var widget;
        for(widget of widgetList){
            let curWidgetEle = prism.activeDashboard.widgets.get(widget.widget_id);
            if(curWidgetEle === undefined){
                console.error("TextReplace: Cannot find widget: ", widget.widget_id);
            }
            else if(widgetNotSupported(curWidgetEle.type)){
                console.error("TextReplace: Widget type not supported for: ", curWidgetEle.type);
            }
            else{
                curWidgetEle.on('ready',makeSwapData(widget.widget_id,widget.dictionary))
            }
        }
    }

    if (widgetConfig === undefined){
        //console.error("TextReplace: Dashboard configuration not found")
    } else {
        processWidgets(widgetConfig);
    }
}

prism.on('dashboardloaded',(event, args) =>{
    prism.activeDashboard.on('widgetrender',replaceText)
});