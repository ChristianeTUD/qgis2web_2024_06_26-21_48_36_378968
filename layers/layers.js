var wms_layers = [];


        var lyr_OpenTopoMap_0 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">Kartendaten: © OpenStreetMap-Mitwirkende, SRTM | Kartendarstellung: © OpenTopoMap (CC-BY-SA)</a>',
                url: 'https://a.tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });
var format_Biotopes_1 = new ol.format.GeoJSON();
var features_Biotopes_1 = format_Biotopes_1.readFeatures(json_Biotopes_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Biotopes_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Biotopes_1.addFeatures(features_Biotopes_1);
var lyr_Biotopes_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Biotopes_1, 
                style: style_Biotopes_1,
                popuplayertitle: "Biotopes",
                interactive: true,
    title: 'Biotopes<br />\
    <img src="styles/legend/Biotopes_1_0.png" /> <br />\
    <img src="styles/legend/Biotopes_1_1.png" /> Maple ash forest of rocky slopes & canyons<br />\
    <img src="styles/legend/Biotopes_1_2.png" /> Maple linden rock debris forest<br />\
    <img src="styles/legend/Biotopes_1_3.png" /> Dead stream branch<br />\
    <img src="styles/legend/Biotopes_1_4.png" /> Channeled river with natural elements<br />\
    <img src="styles/legend/Biotopes_1_5.png" /> Mountain heathland<br />\
    <img src="styles/legend/Biotopes_1_6.png" /> Juncacea-Scirpus-Equisetum mire<br />\
    <img src="styles/legend/Biotopes_1_7.png" /> Soil acidic beech forest of lowland and hill country<br />\
    <img src="styles/legend/Biotopes_1_8.png" /> Soil acidic oak mixed forest of the hills and mountains<br />\
    <img src="styles/legend/Biotopes_1_9.png" /> Soil acidic fir-spruce-beech forest of the mountain region<br />\
    <img src="styles/legend/Biotopes_1_10.png" /> Nardow meadow of wet sites<br />\
    <img src="styles/legend/Biotopes_1_11.png" /> Nardow meadow of mesic to dry sites<br />\
    <img src="styles/legend/Biotopes_1_12.png" /> Botanically valuable area<br />\
    <img src="styles/legend/Biotopes_1_13.png" /> Oak forest of dry-warm sites<br />\
    <img src="styles/legend/Biotopes_1_14.png" /> Elder-Ash-Riparian forest of the hills and mountains<br />\
    <img src="styles/legend/Biotopes_1_15.png" /> Elder Ash wetland spring forest<br />\
    <img src="styles/legend/Biotopes_1_16.png" /> Open field woods<br />\
    <img src="styles/legend/Biotopes_1_17.png" /> Rock heathland<br />\
    <img src="styles/legend/Biotopes_1_18.png" /> Large sedge reed of nutrient-poor sites<br />\
    <img src="styles/legend/Biotopes_1_19.png" /> Large sedge reed of nutrient-rich sites<br />\
    <img src="styles/legend/Biotopes_1_20.png" /> Semi-dry grassland of soil-acidic sites<br />\
    <img src="styles/legend/Biotopes_1_21.png" /> Tall herb fringe communities of swampy sites<br />\
    <img src="styles/legend/Biotopes_1_22.png" /> Cave<br />\
    <img src="styles/legend/Biotopes_1_23.png" /> Cave-rich area rich in deadwood<br />\
    <img src="styles/legend/Biotopes_1_24.png" /> Hohlweg<br />\
    <img src="styles/legend/Biotopes_1_25.png" /> Carbonate-poor seepage spring<br />\
    <img src="styles/legend/Biotopes_1_26.png" /> Carbonate-rich spring<br />\
    <img src="styles/legend/Biotopes_1_27.png" /> Pine forest of dry-warm rock and sand sites<br />\
    <img src="styles/legend/Biotopes_1_28.png" /> Small sedge reed of base-poor sites<br />\
    <img src="styles/legend/Biotopes_1_29.png" /> Nutrient-poor grasland of mesic sites<br />\
    <img src="styles/legend/Biotopes_1_30.png" /> Mesophilic beech forest of the mountains<br />\
    <img src="styles/legend/Biotopes_1_31.png" /> Mesophilic beech forest of the lowlands and hills<br />\
    <img src="styles/legend/Biotopes_1_32.png" /> Peat stage with dominance of pipe grass<br />\
    <img src="styles/legend/Biotopes_1_33.png" /> Wet meadow<br />\
    <img src="styles/legend/Biotopes_1_34.png" /> Natural block and gravel pit of low-base silicate rock<br />\
    <img src="styles/legend/Biotopes_1_35.png" /> Natural block and gravel pit of base-rich silicate rock<br />\
    <img src="styles/legend/Biotopes_1_36.png" /> Natural low-base silicate rock<br />\
    <img src="styles/legend/Biotopes_1_37.png" /> Natural base-rich silicate rock<br />\
    <img src="styles/legend/Biotopes_1_38.png" /> Natural eutrophic pond<br />\
    <img src="styles/legend/Biotopes_1_39.png" /> Near-natural spruce rock debris forest<br />\
    <img src="styles/legend/Biotopes_1_40.png" /> Near-natural spruce forest of the mountains<br />\
    <img src="styles/legend/Biotopes_1_41.png" /> Near-natural spruce forest of the lowland<br />\
    <img src="styles/legend/Biotopes_1_42.png" /> Near-natural mesotrophic pond<br />\
    <img src="styles/legend/Biotopes_1_43.png" /> Near-natural summer-cold stream (mountains)<br />\
    <img src="styles/legend/Biotopes_1_44.png" /> Near-natural summer-warm stream (lowland)<br />\
    <img src="styles/legend/Biotopes_1_45.png" /> Near-natural summer-warm river<br />\
    <img src="styles/legend/Biotopes_1_46.png" /> Near-natural, perennial, nutrient-poor pond<br />\
    <img src="styles/legend/Biotopes_1_47.png" /> Near-natural, perennial, nutrient-rich pond<br />\
    <img src="styles/legend/Biotopes_1_48.png" /> Near-natural temporary pond<br />\
    <img src="styles/legend/Biotopes_1_49.png" /> Open natural and near-natural rock<br />\
    <img src="styles/legend/Biotopes_1_50.png" /> Reed of mesotrophic waters<br />\
    <img src="styles/legend/Biotopes_1_51.png" /> Sedge and Juncacea-rich wet pastures and floodplains <br />\
    <img src="styles/legend/Biotopes_1_52.png" /> Extensively used pasture of mesic sites<br />\
    <img src="styles/legend/Biotopes_1_53.png" /> Extensively used mesic meadow<br />\
    <img src="styles/legend/Biotopes_1_54.png" /> Soil acidic oak mixed forest of the lowlands<br />\
    <img src="styles/legend/Biotopes_1_55.png" /> Moor forest<br />\
    <img src="styles/legend/Biotopes_1_56.png" /> Near-natural pine forest<br />\
    <img src="styles/legend/Biotopes_1_57.png" /> Species-rich wet meadow<br />\
    <img src="styles/legend/Biotopes_1_58.png" /> Extensively used mesic greenland<br />\
    <img src="styles/legend/Biotopes_1_59.png" /> Herb fringe at nutrient-rich mesic sites<br />\
    <img src="styles/legend/Biotopes_1_60.png" /> Common oak-hornbeam forest in moist locations<br />\
    <img src="styles/legend/Biotopes_1_61.png" /> Structurally rich forest stock<br />\
    <img src="styles/legend/Biotopes_1_62.png" /> Submontane Trisetum mesic meadow<br />\
    <img src="styles/legend/Biotopes_1_63.png" /> Swampy forest<br />\
    <img src="styles/legend/Biotopes_1_64.png" /> Dive and float leaf vegetation of eutrophic standing waters<br />\
    <img src="styles/legend/Biotopes_1_65.png" /> Durmast oak-hornbeam forest of dry sites<br />\
    <img src="styles/legend/Biotopes_1_66.png" /> Water`s edge herb fringe<br />\
    <img src="styles/legend/Biotopes_1_67.png" /> Willow floodplain forest<br />\
    <img src="styles/legend/Biotopes_1_68.png" /> Willow bog and swamp shrubs<br />\
    <img src="styles/legend/Biotopes_1_69.png" /> Lowland mire<br />\
    <img src="styles/legend/Biotopes_1_70.png" /> Soil acidic oak mixed forest of hill sites and mountains<br />\
    <img src="styles/legend/Biotopes_1_71.png" /> Dry grasland of soil acidic sites<br />\
    <img src="styles/legend/Biotopes_1_72.png" /> Natural block and gravel pit of low-base silicate rock<br />\
    <img src="styles/legend/Biotopes_1_73.png" /> Natural low-base silicate rock<br />\
    <img src="styles/legend/Biotopes_1_74.png" /> Near-natural spruce rock debris forest<br />\
    <img src="styles/legend/Biotopes_1_75.png" /> Soil acidic oak mixed forest of the lowlands<br />\
    <img src="styles/legend/Biotopes_1_76.png" /> Common oak-hornbeam forest in moist locations<br />'
        });
var group_Biotopdata = new ol.layer.Group({
                                layers: [lyr_Biotopes_1,],
                                fold: "open",
                                title: "Biotop data"});
var group_Basiskarte = new ol.layer.Group({
                                layers: [lyr_OpenTopoMap_0,],
                                fold: "open",
                                title: "Basiskarte"});

lyr_OpenTopoMap_0.setVisible(true);lyr_Biotopes_1.setVisible(true);
var layersList = [group_Basiskarte,group_Biotopdata];
lyr_Biotopes_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'HC_BEZ': 'HC_BEZ', 'REPORT': 'REPORT', 'Hab_types': 'Hab_types', });
lyr_Biotopes_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'HC_BEZ': 'TextEdit', 'REPORT': 'TextEdit', 'Hab_types': '', });
lyr_Biotopes_1.set('fieldLabels', {'OBJECTID': 'hidden field', 'HC_BEZ': 'hidden field', 'REPORT': 'header label - visible with data', 'Hab_types': 'header label - always visible', });
lyr_Biotopes_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});