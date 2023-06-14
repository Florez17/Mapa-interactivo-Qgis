var size = 0;
var placement = 'point';

var style_Municipios_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("MPIO_CNMBR") !== null) {
        labelText = String(feature.get("MPIO_CNMBR"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(165,35,251,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 4}),fill: new ol.style.Fill({color: 'rgba(243,166,178,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
