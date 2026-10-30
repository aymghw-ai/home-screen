// Nature photos from Wikimedia Commons (featured pictures), checked to contain no people.
var PHOTOS = {
 "dawn": [
  {
   "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/35/Amanecer_en_el_lago_Titicaca%2C_Puno%2C_Per%C3%BA%2C_2015-08-01%2C_DD_01.JPG/1920px-Amanecer_en_el_lago_Titicaca%2C_Puno%2C_Per%C3%BA%2C_2015-08-01%2C_DD_01.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "by": "Diego Delso",
   "lic": "CC BY-SA 4.0"
  },
  {
   "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cd/Karst_mountains_colorful_clouds_and_mist_at_sunrise_from_the_top_of_Mount_Nam_Xay_Vang_Vieng_Laos.jpg/1920px-Karst_mountains_colorful_clouds_and_mist_at_sunrise_from_the_top_of_Mount_Nam_Xay_Vang_Vieng_Laos.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "by": "Basile Morin",
   "lic": "CC BY-SA 4.0"
  },
  {
   "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d6/Karst_peaks_mist_and_colorful_clouds_at_sunrise_seen_from_Mount_Nam_Xay_in_Vang_Vieng_Laos.jpg/1920px-Karst_peaks_mist_and_colorful_clouds_at_sunrise_seen_from_Mount_Nam_Xay_in_Vang_Vieng_Laos.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "by": "Basile Morin",
   "lic": "CC BY-SA 4.0"
  },
  {
   "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b5/Karst_peaks_with_sea_of_clouds_at_sunrise%2C_South_view_from_the_top_of_Mount_Nam_Xay%2C_Vang_Vieng%2C_Laos.jpg/1920px-Karst_peaks_with_sea_of_clouds_at_sunrise%2C_South_view_from_the_top_of_Mount_Nam_Xay%2C_Vang_Vieng%2C_Laos.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "by": "Basile Morin",
   "lic": "CC BY-SA 4.0"
  },
  {
   "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/74/Flatirons_Sunrise.jpg/1920px-Flatirons_Sunrise.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "by": "Tyler Cipriani",
   "lic": "CC BY-SA 4.0"
  },
  {
   "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/52/Hommikune_Inahamne_j%C3%A4rv_%28ver_2%29.JPG/1920px-Hommikune_Inahamne_j%C3%A4rv_%28ver_2%29.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "by": "Ivo Kruusamägi",
   "lic": "CC BY-SA 4.0"
  },
  {
   "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/70/Hommikune_udu_Kakerdaja_rabas.jpg/1920px-Hommikune_udu_Kakerdaja_rabas.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "by": "Abrget47j",
   "lic": "CC BY-SA 3.0"
  },
  {
   "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/25/Blassenstein_Erlauftal_mit_Nebel_02_Panorama.JPG/1920px-Blassenstein_Erlauftal_mit_Nebel_02_Panorama.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "by": "Uoaei1",
   "lic": "CC BY-SA 3.0"
  },
  {
   "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d7/Green_karst_peaks_seen_from_the_top_of_Mount_Nam_Xay_a_sunny_morning_with_fog_Vang_Vieng_Laos.jpg/1920px-Green_karst_peaks_seen_from_the_top_of_Mount_Nam_Xay_a_sunny_morning_with_fog_Vang_Vieng_Laos.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "by": "Basile Morin",
   "lic": "CC BY-SA 4.0"
  }
 ],
 "day": [
  {
   "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e9/Foggy_Reflections_-_Loch_Tummel.jpg/1920px-Foggy_Reflections_-_Loch_Tummel.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "by": "Eric Kilby",
   "lic": "CC BY-SA 4.0"
  },
  {
   "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3b/2019_-_Parc_national_des_Pyrenees_-_Vall%C3%A9e_de_Gavarnie.jpg/1920px-2019_-_Parc_national_des_Pyrenees_-_Vall%C3%A9e_de_Gavarnie.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "by": "Moahim",
   "lic": "CC BY-SA 4.0"
  },
  {
   "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7a/Cirque_de_Gavarnie%2C_Haute-Pyr%C3%A9n%C3%A9es%2C_France.jpg/1920px-Cirque_de_Gavarnie%2C_Haute-Pyr%C3%A9n%C3%A9es%2C_France.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "by": "Benh LIEU SONG",
   "lic": "CC BY-SA 2.0"
  },
  {
   "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6c/1_lake_louise_pano_2019.jpg/1920px-1_lake_louise_pano_2019.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "by": "Chensiyuan",
   "lic": "CC BY-SA 4.0"
  },
  {
   "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/63/Blue_Lake_in_Mount_Cook_National_Park.jpg/1920px-Blue_Lake_in_Mount_Cook_National_Park.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "by": "Krzysztof Golik",
   "lic": "CC BY-SA 4.0"
  },
  {
   "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ea/Kirkjufell%2C_Iceland%2C_20240714_1631_0713.jpg/1920px-Kirkjufell%2C_Iceland%2C_20240714_1631_0713.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "by": "Jakub Hałun",
   "lic": "CC BY 4.0"
  },
  {
   "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/82/Mount_Shasta%2C_Lake_Siskiyou%2C_SW_view.jpg/1920px-Mount_Shasta%2C_Lake_Siskiyou%2C_SW_view.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "by": "Radomianin",
   "lic": "CC BY-SA 4.0"
  },
  {
   "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e2/Lake_Tekapo_01.jpg/1920px-Lake_Tekapo_01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "by": "Krzysztof Golik",
   "lic": "CC BY-SA 4.0"
  },
  {
   "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/db/2015_Spullersee_im_Lechquellengebirge.jpg/1920px-2015_Spullersee_im_Lechquellengebirge.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "by": "Feel free to use my photos, but please mention me as the aut",
   "lic": "CC BY-SA 3.0 at"
  },
  {
   "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/84/Lac_de_Montriond_06.jpg/1920px-Lac_de_Montriond_06.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "by": "Krzysztof Golik",
   "lic": "CC BY-SA 4.0"
  },
  {
   "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/66/Fjalls%C3%A1rl%C3%B3n_glacier_lake%2C_Iceland%2C_20240719_1720_2774.jpg/1920px-Fjalls%C3%A1rl%C3%B3n_glacier_lake%2C_Iceland%2C_20240719_1720_2774.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "by": "Jakub Hałun",
   "lic": "CC BY 4.0"
  },
  {
   "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f1/Dead_Vlei%2C_Sossusvlei%2C_Namibia%2C_2018-08-06%2C_DD_086.jpg/1920px-Dead_Vlei%2C_Sossusvlei%2C_Namibia%2C_2018-08-06%2C_DD_086.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "by": "Diego Delso",
   "lic": "CC BY-SA 4.0"
  },
  {
   "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6e/Duna_Mayor%2C_Valle_de_la_Luna%2C_San_Pedro_de_Atacama%2C_Chile%2C_2016-02-01%2C_DD_173-175_HDR.JPG/1920px-Duna_Mayor%2C_Valle_de_la_Luna%2C_San_Pedro_de_Atacama%2C_Chile%2C_2016-02-01%2C_DD_173-175_HDR.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "by": "Diego Delso",
   "lic": "CC BY-SA 4.0"
  },
  {
   "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1f/Anfiteatro%2C_Valle_de_la_Luna%2C_San_Pedro_de_Atacama%2C_Chile%2C_2016-02-01%2C_DD_149.JPG/1920px-Anfiteatro%2C_Valle_de_la_Luna%2C_San_Pedro_de_Atacama%2C_Chile%2C_2016-02-01%2C_DD_149.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "by": "Diego Delso",
   "lic": "CC BY-SA 4.0"
  },
  {
   "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d3/Catedrales_de_Tara%2C_Chile%2C_2016-02-07%2C_DD_62.JPG/1920px-Catedrales_de_Tara%2C_Chile%2C_2016-02-07%2C_DD_62.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "by": "Diego Delso",
   "lic": "CC BY-SA 4.0"
  },
  {
   "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6c/Kilimanjaro_from_Amboseli.jpg/1920px-Kilimanjaro_from_Amboseli.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "by": "Sergey Pesterev",
   "lic": "CC BY-SA 4.0"
  },
  {
   "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/44/Breathtaking_beauty_of_Dzukou_Valley_in_Manipur-Nagaland_border_%28edit%29.jpg/1920px-Breathtaking_beauty_of_Dzukou_Valley_in_Manipur-Nagaland_border_%28edit%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "by": "Original: Samudra Bikash Hazarika Derivative work: Unpeti",
   "lic": "CC BY-SA 4.0"
  },
  {
   "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/13/2015_Swaledale_from_Kisdon_Hill.jpg/1920px-2015_Swaledale_from_Kisdon_Hill.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "by": "Kreuzschnabel",
   "lic": "CC BY-SA 3.0"
  },
  {
   "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9a/Blond_and_green_rice_fields.jpg/1920px-Blond_and_green_rice_fields.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "by": "Basile Morin",
   "lic": "CC BY-SA 4.0"
  },
  {
   "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/42/Green_karst_peaks_seen_from_the_top_of_Mount_Nam_Xay_a_sunny_morning_during_the_monsoon_Vang_Vieng_Laos.jpg/1920px-Green_karst_peaks_seen_from_the_top_of_Mount_Nam_Xay_a_sunny_morning_during_the_monsoon_Vang_Vieng_Laos.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "by": "Basile Morin",
   "lic": "CC BY-SA 4.0"
  },
  {
   "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fd/Mountain_view_in_Robson_valley.jpg/1920px-Mountain_view_in_Robson_valley.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "by": "Jakub Fryš (talk · contribs)",
   "lic": "CC BY-SA 4.0"
  }
 ],
 "sunset": [
  {
   "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/92/Crepuscular_rays_at_Sunset_near_Waterberg_Plateau.jpg/1920px-Crepuscular_rays_at_Sunset_near_Waterberg_Plateau.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "by": "Alchemist-hp (www.pse-mendelejew.de)",
   "lic": "FAL"
  },
  {
   "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cc/Colorful_sky_with_orange_and_pink_clouds_reflecting_in_the_water_of_a_paddy_field_at_dusk_in_Don_Det_Laos.jpg/1920px-Colorful_sky_with_orange_and_pink_clouds_reflecting_in_the_water_of_a_paddy_field_at_dusk_in_Don_Det_Laos.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "by": "Basile Morin",
   "lic": "CC BY-SA 4.0"
  },
  {
   "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8f/Colorful_sky_with_orange_clouds_reflecting_in_the_water_of_a_paddy_field%2C_at_sunset%2C_Vang_Vieng%2C_Laos.jpg/1920px-Colorful_sky_with_orange_clouds_reflecting_in_the_water_of_a_paddy_field%2C_at_sunset%2C_Vang_Vieng%2C_Laos.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "by": "Basile Morin",
   "lic": "CC BY-SA 4.0"
  },
  {
   "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b6/Colorful_sky_with_pink_clouds_reflecting_in_the_water_of_a_paddy_field_and_mountains_at_dusk_Vang_Vieng_Laos.jpg/1920px-Colorful_sky_with_pink_clouds_reflecting_in_the_water_of_a_paddy_field_and_mountains_at_dusk_Vang_Vieng_Laos.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "by": "Basile Morin",
   "lic": "CC BY-SA 4.0"
  },
  {
   "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a7/Cumulonimbus_sunset_panorama%2C_Albury_NSW_Australia.jpg/1920px-Cumulonimbus_sunset_panorama%2C_Albury_NSW_Australia.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "by": "Thennicke",
   "lic": "CC BY-SA 4.0"
  },
  {
   "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a9/Foggy_sunset_view_from_Moos_mountain%2C_Baden-W%C3%BCrttemberg%2C_Germany.jpg/1920px-Foggy_sunset_view_from_Moos_mountain%2C_Baden-W%C3%BCrttemberg%2C_Germany.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "by": "Thomas Heins from Friesenheim, Deutschland",
   "lic": "CC BY 4.0"
  },
  {
   "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ce/Sunset_in_Saxon_Switzerland.jpg/1920px-Sunset_in_Saxon_Switzerland.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "by": "Michael Gäbler",
   "lic": "CC BY 3.0"
  },
  {
   "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8e/Sunset_over_the_ice_of_Brofjorden_1.jpg/1920px-Sunset_over_the_ice_of_Brofjorden_1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "by": "W.carter",
   "lic": "CC BY-SA 4.0"
  },
  {
   "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/78/Cypress_tree_alley_at_sunset_in_Asciano%2C_Tuscany.jpg/1920px-Cypress_tree_alley_at_sunset_in_Asciano%2C_Tuscany.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "by": "Eric Kilby",
   "lic": "CC BY-SA 2.0"
  },
  {
   "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/81/Li_Phi_falls_at_dusk_with_yellow_sky_in_Don_Khon_Si_Phan_Don_Laos.jpg/1920px-Li_Phi_falls_at_dusk_with_yellow_sky_in_Don_Khon_Si_Phan_Don_Laos.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "by": "Basile Morin",
   "lic": "CC BY-SA 4.0"
  },
  {
   "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a5/Jokulsarlon_lake%2C_Iceland.jpg/1920px-Jokulsarlon_lake%2C_Iceland.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "by": "Kenny Muir",
   "lic": "CC BY 2.0"
  }
 ],
 "night": [
  {
   "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bf/Li_Phi_falls_at_dusk_with_colorful_sky_and_clouds_in_Don_Khon_Laos.jpg/1920px-Li_Phi_falls_at_dusk_with_colorful_sky_and_clouds_in_Don_Khon_Laos.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "by": "Basile Morin",
   "lic": "CC BY-SA 4.0"
  },
  {
   "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c3/Li_Phi_falls_at_dusk_with_colorful_sky_in_Don_Khon_Laos.jpg/1920px-Li_Phi_falls_at_dusk_with_colorful_sky_in_Don_Khon_Laos.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "by": "Basile Morin",
   "lic": "CC BY-SA 4.0"
  },
  {
   "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/20/Lake_Tahoe_at_morning_-_7-2023.jpg/1920px-Lake_Tahoe_at_morning_-_7-2023.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "by": "John D.",
   "lic": "CC BY 2.0"
  },
  {
   "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5b/Evening_on_Kathleen_Lake.jpg/1920px-Evening_on_Kathleen_Lake.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "by": "Jakub Fryš",
   "lic": "CC BY-SA 4.0"
  }
 ]
};
