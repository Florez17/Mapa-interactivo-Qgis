var wms_layers = [];


        var lyr_WazeWorld_0 = new ol.layer.Tile({
            'title': 'Waze (World)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://worldtiles3.waze.com/tiles/{z}/{x}/{y}.png'
            })
        });
var format_Municipios_1 = new ol.format.GeoJSON();
var features_Municipios_1 = format_Municipios_1.readFeatures(json_Municipios_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipios_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipios_1.addFeatures(features_Municipios_1);
var lyr_Municipios_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Municipios_1, 
                style: style_Municipios_1,
                interactive: true,
                title: '<img src="styles/legend/Municipios_1.png" /> Municipios'
            });
var format_PlanPortero_2 = new ol.format.GeoJSON();
var features_PlanPortero_2 = format_PlanPortero_2.readFeatures(json_PlanPortero_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlanPortero_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlanPortero_2.addFeatures(features_PlanPortero_2);
var lyr_PlanPortero_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PlanPortero_2, 
                style: style_PlanPortero_2,
                interactive: true,
                title: '<img src="styles/legend/PlanPortero_2.png" /> Plan Portero'
            });
var format_ZONADOMICILIOSH68VIVALACEJA_3 = new ol.format.GeoJSON();
var features_ZONADOMICILIOSH68VIVALACEJA_3 = format_ZONADOMICILIOSH68VIVALACEJA_3.readFeatures(json_ZONADOMICILIOSH68VIVALACEJA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONADOMICILIOSH68VIVALACEJA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONADOMICILIOSH68VIVALACEJA_3.addFeatures(features_ZONADOMICILIOSH68VIVALACEJA_3);
var lyr_ZONADOMICILIOSH68VIVALACEJA_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZONADOMICILIOSH68VIVALACEJA_3, 
                style: style_ZONADOMICILIOSH68VIVALACEJA_3,
                interactive: false,
                title: '<img src="styles/legend/ZONADOMICILIOSH68VIVALACEJA_3.png" /> ZONA DOMICILIOS H68 VIVA LA CEJA'
            });

lyr_WazeWorld_0.setVisible(true);lyr_Municipios_1.setVisible(true);lyr_PlanPortero_2.setVisible(true);lyr_ZONADOMICILIOSH68VIVALACEJA_3.setVisible(true);
var layersList = [lyr_WazeWorld_0,lyr_Municipios_1,lyr_PlanPortero_2,lyr_ZONADOMICILIOSH68VIVALACEJA_3];
lyr_Municipios_1.set('fieldAliases', {'DPTO_CCDGO': 'DPTO_CCDGO', 'MPIO_CCDGO': 'MPIO_CCDGO', 'MPIO_CNMBR': 'MPIO_CNMBR', 'MPIO_CRSLC': 'MPIO_CRSLC', 'MPIO_NAREA': 'MPIO_NAREA', 'MPIO_NANO': 'MPIO_NANO', 'DPTO_CNMBR': 'DPTO_CNMBR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_PlanPortero_2.set('fieldAliases', {'fid': 'fid', 'Nombre': 'Nombre', 'Ubicación': 'Ubicación', 'Fecha de visita': 'Fecha de visita', });
lyr_ZONADOMICILIOSH68VIVALACEJA_3.set('fieldAliases', {'name': 'name', 'descriptio': 'descriptio', });
lyr_Municipios_1.set('fieldImages', {'DPTO_CCDGO': 'TextEdit', 'MPIO_CCDGO': 'TextEdit', 'MPIO_CNMBR': 'TextEdit', 'MPIO_CRSLC': 'TextEdit', 'MPIO_NAREA': 'TextEdit', 'MPIO_NANO': 'Range', 'DPTO_CNMBR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_PlanPortero_2.set('fieldImages', {'fid': 'TextEdit', 'Nombre': 'TextEdit', 'Ubicación': 'TextEdit', 'Fecha de visita': 'TextEdit', });
lyr_ZONADOMICILIOSH68VIVALACEJA_3.set('fieldImages', {'name': 'TextEdit', 'descriptio': 'TextEdit', });
lyr_Municipios_1.set('fieldLabels', {'DPTO_CCDGO': 'no label', 'MPIO_CCDGO': 'no label', 'MPIO_CNMBR': 'no label', 'MPIO_CRSLC': 'no label', 'MPIO_NAREA': 'no label', 'MPIO_NANO': 'no label', 'DPTO_CNMBR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_PlanPortero_2.set('fieldLabels', {'fid': 'no label', 'Nombre': 'no label', 'Ubicación': 'no label', 'Fecha de visita': 'no label', });
lyr_ZONADOMICILIOSH68VIVALACEJA_3.set('fieldLabels', {'name': 'no label', 'descriptio': 'no label', });
lyr_ZONADOMICILIOSH68VIVALACEJA_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});