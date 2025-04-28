var wms_layers = [];


        var lyr_googlesatelite_0 = new ol.layer.Tile({
            'title': 'google satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_02_Playanorteysur_1 = new ol.format.GeoJSON();
var features_02_Playanorteysur_1 = format_02_Playanorteysur_1.readFeatures(json_02_Playanorteysur_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_02_Playanorteysur_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_02_Playanorteysur_1.addFeatures(features_02_Playanorteysur_1);
var lyr_02_Playanorteysur_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_02_Playanorteysur_1, 
                style: style_02_Playanorteysur_1,
                popuplayertitle: '02_Playa norte y sur',
                interactive: true,
                title: '<img src="styles/legend/02_Playanorteysur_1.png" /> 02_Playa norte y sur'
            });
var format_01_Muelleytorrevigia_2 = new ol.format.GeoJSON();
var features_01_Muelleytorrevigia_2 = format_01_Muelleytorrevigia_2.readFeatures(json_01_Muelleytorrevigia_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_01_Muelleytorrevigia_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_01_Muelleytorrevigia_2.addFeatures(features_01_Muelleytorrevigia_2);
var lyr_01_Muelleytorrevigia_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_01_Muelleytorrevigia_2, 
                style: style_01_Muelleytorrevigia_2,
                popuplayertitle: '01_Muelle y torre vigia',
                interactive: true,
                title: '<img src="styles/legend/01_Muelleytorrevigia_2.png" /> 01_Muelle y torre vigia'
            });

lyr_googlesatelite_0.setVisible(true);lyr_02_Playanorteysur_1.setVisible(true);lyr_01_Muelleytorrevigia_2.setVisible(true);
var layersList = [lyr_googlesatelite_0,lyr_02_Playanorteysur_1,lyr_01_Muelleytorrevigia_2];
lyr_02_Playanorteysur_1.set('fieldAliases', {'Name': 'Name', 'Ubi_antig': 'Ubi_antig', 'Ubi_actual': 'Ubi_actual', 'IMAGEN ANT': 'IMAGEN ANT', });
lyr_01_Muelleytorrevigia_2.set('fieldAliases', {'Name': 'Name', 'Ubi_antig': 'Ubi_antig', 'Ubi_actual': 'Ubi_actual', 'IMAGEN ANT': 'IMAGEN ANT', });
lyr_02_Playanorteysur_1.set('fieldImages', {'Name': 'TextEdit', 'Ubi_antig': 'TextEdit', 'Ubi_actual': 'TextEdit', 'IMAGEN ANT': 'ExternalResource', });
lyr_01_Muelleytorrevigia_2.set('fieldImages', {'Name': 'TextEdit', 'Ubi_antig': 'TextEdit', 'Ubi_actual': 'TextEdit', 'IMAGEN ANT': 'ExternalResource', });
lyr_02_Playanorteysur_1.set('fieldLabels', {'Name': 'inline label - always visible', 'Ubi_antig': 'inline label - always visible', 'Ubi_actual': 'inline label - always visible', 'IMAGEN ANT': 'inline label - always visible', });
lyr_01_Muelleytorrevigia_2.set('fieldLabels', {'Name': 'inline label - always visible', 'Ubi_antig': 'inline label - always visible', 'Ubi_actual': 'inline label - always visible', 'IMAGEN ANT': 'inline label - always visible', });
lyr_01_Muelleytorrevigia_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});