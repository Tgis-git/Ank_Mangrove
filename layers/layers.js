var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Img1988_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "FCC 1988",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Img1988_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8083680.000000, 2443089.877663, 8100510.000000, 2460082.239079],
                                imageSmoothing: false
                            })
                        });
var lyr_Img1998_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "FCC 1998",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Img1998_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8083680.000000, 2443089.877663, 8100510.000000, 2460082.239079],
                                imageSmoothing: false
                            })
                        });
var lyr_Img2008_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "FCC 2008",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Img2008_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8083680.000000, 2443089.877663, 8100510.000000, 2460082.239079],
                                imageSmoothing: false
                            })
                        });
var lyr_Img2018_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "FCC 2018",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Img2018_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8083680.000000, 2443089.877663, 8100510.000000, 2460082.239079],
                                imageSmoothing: false
                            })
                        });
var lyr_Img2024_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "FCC 2024",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Img2024_6.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8083680.000000, 2443089.877663, 8100510.000000, 2460082.239079],
                                imageSmoothing: false
                            })
                        });
var format_MangroveSitecopy_7 = new ol.format.GeoJSON();
var features_MangroveSitecopy_7 = format_MangroveSitecopy_7.readFeatures(json_MangroveSitecopy_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MangroveSitecopy_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MangroveSitecopy_7.addFeatures(features_MangroveSitecopy_7);
var lyr_MangroveSitecopy_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MangroveSitecopy_7, 
                style: style_MangroveSitecopy_7,
                popuplayertitle: "MangroveSite copy",
                interactive: false,
                title: '<img src="styles/legend/MangroveSitecopy_7.png" /> Mangrove Site'
            });
var lyr_NDVI1988_8 = new ol.layer.Image({
                            opacity: 1,
                            title: 'NDVI 1988 </br> <img style="max-width: 100px; max-height: 100px;" src="styles/legend/MangroveClass.png"/>',
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDVI1988_8.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8083680.000000, 2443089.877663, 8100510.000000, 2460082.239079],
                                imageSmoothing: false
                            })
                        });
var lyr_NDVI1998_9 = new ol.layer.Image({
                            opacity: 1,
                            title: 'NDVI 1998 </br> <img style="max-width: 100px; max-height: 100px;" src="styles/legend/MangroveClass.png"/>',
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDVI1998_9.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8083680.000000, 2443089.877663, 8100510.000000, 2460082.239079],
                                imageSmoothing: false
                            })
                        });
var lyr_NDVI2008_10 = new ol.layer.Image({
                            opacity: 1,
                            title: 'NDVI 2008 </br> <img style="max-width: 100px; max-height: 100px;" src="styles/legend/MangroveClass.png"/> ',
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDVI2008_10.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8083680.000000, 2443089.877663, 8100510.000000, 2460082.239079],
                                imageSmoothing: false
                            })
                        });
var lyr_NDVI2018_11 = new ol.layer.Image({
                            opacity: 1,
                            title: 'NDVI 2018 </br> <img style="max-width: 100px; max-height: 100px;" src="styles/legend/MangroveClass.png"/>',
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDVI2018_11.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8083680.000000, 2443089.877663, 8100510.000000, 2460082.239079],
                                imageSmoothing: false
                            })
                        });
var lyr_NDVI2024_12 = new ol.layer.Image({
                            opacity: 1,
                            title: 'NDVI 2024 </br> <img style="max-width: 100px; max-height: 100px;" src="styles/legend/MangroveClass.png"/>',
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDVI2024_12.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8083680.000000, 2443089.877663, 8100510.000000, 2460082.239079],
                                imageSmoothing: false
                            })
                        });
var lyr_SiteSuitablity_13 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Mangrove Site Suitablity </br> <img style="max-width: 150px; max-height: 150px;" src="styles/legend/MangroveSuitabity.png"/>',
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/SiteSuitablity_13.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8083422.262395, 2442848.728392, 8100743.980822, 2460332.880376],
                                imageSmoothing: false
                            })
                        });
var lyr_INTZone_14 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Intertidal Zone </br> <img style="max-width: 100px; max-height: 100px;" src="styles/legend/IntZone.png"/>',
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/INTZone_14.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8075160.000000, 2436387.770402, 8112480.000000, 2462114.696153],
                                imageSmoothing: false
                            })
                        });
var format_LowTideLine_15 = new ol.format.GeoJSON();
var features_LowTideLine_15 = format_LowTideLine_15.readFeatures(json_LowTideLine_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LowTideLine_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LowTideLine_15.addFeatures(features_LowTideLine_15);
var lyr_LowTideLine_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LowTideLine_15, 
                style: style_LowTideLine_15,
                popuplayertitle: "LowTideLine",
                interactive: false,
                title: '<img src="styles/legend/LowTideLine_15.png" /> Low Tide Line'
            });
var format_HighTideLine_16 = new ol.format.GeoJSON();
var features_HighTideLine_16 = format_HighTideLine_16.readFeatures(json_HighTideLine_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HighTideLine_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HighTideLine_16.addFeatures(features_HighTideLine_16);
var lyr_HighTideLine_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HighTideLine_16, 
                style: style_HighTideLine_16,
                popuplayertitle: "HighTideLine",
                interactive: false,
                title: '<img src="styles/legend/HighTideLine_16.png" /> High Tide Line'
            });
var format_Possible_Mangrove_Plantation_17 = new ol.format.GeoJSON();
var features_Possible_Mangrove_Plantation_17 = format_Possible_Mangrove_Plantation_17.readFeatures(json_Possible_Mangrove_Plantation_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Possible_Mangrove_Plantation_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Possible_Mangrove_Plantation_17.addFeatures(features_Possible_Mangrove_Plantation_17);
var lyr_Possible_Mangrove_Plantation_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Possible_Mangrove_Plantation_17, 
                style: style_Possible_Mangrove_Plantation_17,
                popuplayertitle: "Possible_Mangrove_Plantation",
                interactive: false,
                title: '<img src="styles/legend/Possible_Mangrove_Plantation_17.png" /> Possible Mangrove Plantation Sites'
            });
var format_MangroveSite_18 = new ol.format.GeoJSON();
var features_MangroveSite_18 = format_MangroveSite_18.readFeatures(json_MangroveSite_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MangroveSite_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MangroveSite_18.addFeatures(features_MangroveSite_18);
var lyr_MangroveSite_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MangroveSite_18, 
                style: style_MangroveSite_18,
                popuplayertitle: "MangroveSite",
                interactive: false,
                title: '<img src="styles/legend/MangroveSite_18.png" /> Mangrove Site'
            });
var group_SiteSuitablity = new ol.layer.Group({
                                layers: [lyr_SiteSuitablity_13,lyr_INTZone_14,lyr_LowTideLine_15,lyr_HighTideLine_16,lyr_Possible_Mangrove_Plantation_17,],
                                fold: "open",
                                title: "Site Suitablity"});
var group_MangroveClassification = new ol.layer.Group({
                                layers: [lyr_Img1988_2,lyr_Img1998_3,lyr_Img2008_4,lyr_Img2018_5,lyr_Img2024_6,lyr_MangroveSitecopy_7,lyr_NDVI1988_8,lyr_NDVI1998_9,lyr_NDVI2008_10,lyr_NDVI2018_11,lyr_NDVI2024_12,],
                                fold: "open",
                                title: "Mangrove Classification"});

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_Img1988_2.setVisible(true);lyr_Img1998_3.setVisible(true);lyr_Img2008_4.setVisible(true);lyr_Img2018_5.setVisible(true);lyr_Img2024_6.setVisible(true);lyr_MangroveSitecopy_7.setVisible(true);lyr_NDVI1988_8.setVisible(true);lyr_NDVI1998_9.setVisible(true);lyr_NDVI2008_10.setVisible(true);lyr_NDVI2018_11.setVisible(true);lyr_NDVI2024_12.setVisible(true);lyr_SiteSuitablity_13.setVisible(true);lyr_INTZone_14.setVisible(true);lyr_LowTideLine_15.setVisible(true);lyr_HighTideLine_16.setVisible(true);lyr_Possible_Mangrove_Plantation_17.setVisible(true);lyr_MangroveSite_18.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,group_MangroveClassification,group_SiteSuitablity,lyr_MangroveSite_18];
lyr_MangroveSitecopy_7.set('fieldAliases', {'District': 'District', 'Taluka': 'Taluka', 'Village': 'Village', 'Dist_Id': 'Dist_Id', 'Taluka_Id': 'Taluka_Id', 'Village_Id': 'Village_Id', 'S_Name': 'S_Name', 'Remark': 'Remark', 'GUJ_NAM': 'GUJ_NAM', 'GUJ_NAM2': 'GUJ_NAM2', 'GUJ_NAM_1': 'GUJ_NAM_1', 'Popu_2001': 'Popu_2001', 'Status': 'Status', 'BEAT': 'BEAT', 'ROUND': 'ROUND', 'RANGE': 'RANGE', 'DIVISION': 'DIVISION', 'CIRCLE': 'CIRCLE', 'VILL_TYPE': 'VILL_TYPE', 'FOREST_AR': 'FOREST_AR', });
lyr_LowTideLine_15.set('fieldAliases', {'id': 'id', });
lyr_HighTideLine_16.set('fieldAliases', {'id': 'id', 'id_2': 'id_2', });
lyr_Possible_Mangrove_Plantation_17.set('fieldAliases', {'id': 'id', 'area': 'area', 'Area_1': 'Area_1', });
lyr_MangroveSite_18.set('fieldAliases', {'District': 'District', 'Taluka': 'Taluka', 'Village': 'Village', 'Dist_Id': 'Dist_Id', 'Taluka_Id': 'Taluka_Id', 'Village_Id': 'Village_Id', 'S_Name': 'S_Name', 'Remark': 'Remark', 'GUJ_NAM': 'GUJ_NAM', 'GUJ_NAM2': 'GUJ_NAM2', 'GUJ_NAM_1': 'GUJ_NAM_1', 'Popu_2001': 'Popu_2001', 'Status': 'Status', 'BEAT': 'BEAT', 'ROUND': 'ROUND', 'RANGE': 'RANGE', 'DIVISION': 'DIVISION', 'CIRCLE': 'CIRCLE', 'VILL_TYPE': 'VILL_TYPE', 'FOREST_AR': 'FOREST_AR', });
lyr_MangroveSitecopy_7.set('fieldImages', {'District': 'TextEdit', 'Taluka': 'TextEdit', 'Village': 'TextEdit', 'Dist_Id': 'TextEdit', 'Taluka_Id': 'TextEdit', 'Village_Id': 'TextEdit', 'S_Name': 'TextEdit', 'Remark': 'TextEdit', 'GUJ_NAM': 'TextEdit', 'GUJ_NAM2': 'TextEdit', 'GUJ_NAM_1': 'TextEdit', 'Popu_2001': 'TextEdit', 'Status': 'TextEdit', 'BEAT': 'TextEdit', 'ROUND': 'TextEdit', 'RANGE': 'TextEdit', 'DIVISION': 'TextEdit', 'CIRCLE': 'TextEdit', 'VILL_TYPE': 'TextEdit', 'FOREST_AR': 'TextEdit', });
lyr_LowTideLine_15.set('fieldImages', {'id': 'TextEdit', });
lyr_HighTideLine_16.set('fieldImages', {'id': 'TextEdit', 'id_2': 'TextEdit', });
lyr_Possible_Mangrove_Plantation_17.set('fieldImages', {'id': 'TextEdit', 'area': 'TextEdit', 'Area_1': '', });
lyr_MangroveSite_18.set('fieldImages', {'District': 'TextEdit', 'Taluka': 'TextEdit', 'Village': 'TextEdit', 'Dist_Id': 'TextEdit', 'Taluka_Id': 'TextEdit', 'Village_Id': 'TextEdit', 'S_Name': 'TextEdit', 'Remark': 'TextEdit', 'GUJ_NAM': 'TextEdit', 'GUJ_NAM2': 'TextEdit', 'GUJ_NAM_1': 'TextEdit', 'Popu_2001': 'TextEdit', 'Status': 'TextEdit', 'BEAT': 'TextEdit', 'ROUND': 'TextEdit', 'RANGE': 'TextEdit', 'DIVISION': 'TextEdit', 'CIRCLE': 'TextEdit', 'VILL_TYPE': 'TextEdit', 'FOREST_AR': 'TextEdit', });
lyr_MangroveSitecopy_7.set('fieldLabels', {'District': 'no label', 'Taluka': 'no label', 'Village': 'no label', 'Dist_Id': 'no label', 'Taluka_Id': 'no label', 'Village_Id': 'no label', 'S_Name': 'no label', 'Remark': 'no label', 'GUJ_NAM': 'no label', 'GUJ_NAM2': 'no label', 'GUJ_NAM_1': 'no label', 'Popu_2001': 'no label', 'Status': 'no label', 'BEAT': 'no label', 'ROUND': 'no label', 'RANGE': 'no label', 'DIVISION': 'no label', 'CIRCLE': 'no label', 'VILL_TYPE': 'no label', 'FOREST_AR': 'no label', });
lyr_LowTideLine_15.set('fieldLabels', {'id': 'no label', });
lyr_HighTideLine_16.set('fieldLabels', {'id': 'no label', 'id_2': 'no label', });
lyr_Possible_Mangrove_Plantation_17.set('fieldLabels', {'id': 'no label', 'area': 'no label', 'Area_1': 'no label', });
lyr_MangroveSite_18.set('fieldLabels', {'District': 'no label', 'Taluka': 'no label', 'Village': 'no label', 'Dist_Id': 'no label', 'Taluka_Id': 'no label', 'Village_Id': 'no label', 'S_Name': 'no label', 'Remark': 'no label', 'GUJ_NAM': 'no label', 'GUJ_NAM2': 'no label', 'GUJ_NAM_1': 'no label', 'Popu_2001': 'no label', 'Status': 'no label', 'BEAT': 'no label', 'ROUND': 'no label', 'RANGE': 'no label', 'DIVISION': 'no label', 'CIRCLE': 'no label', 'VILL_TYPE': 'no label', 'FOREST_AR': 'no label', });
lyr_MangroveSite_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
