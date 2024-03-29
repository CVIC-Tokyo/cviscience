import { Loader } from "@googlemaps/js-api-loader";
import React, { useEffect } from "react";
import { getLocaleData } from "@/utils/helpers";
import { useGlobalContext } from "@/context/store";

const GoogleMap = () => {
  const mapRef = React.useRef<HTMLDivElement>(null);
  const { locale } = useGlobalContext();
  const localeData = getLocaleData(locale);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBIC_MAPS_API_KEY as string,
        version: "weekly",
      });

      const { Map } = (await loader.importLibrary(
        "maps",
      )) as google.maps.MapsLibrary;
      const { Marker } = (await loader.importLibrary(
        "marker",
      )) as google.maps.MarkerLibrary;

      const position = {
        lat: 35.704801605564704,
        lng: 139.74367284652044,
      };

      // map options
      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 18,
        mapId: process.env.NEXT_GOOGLE_MAP_ID,
      };

      //setup the map
      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

      // put up a marker
      const marker = new Marker({
        map: map,
        position: position,
        title: `${localeData.CVIC_INFO.CLINIC_NAME}`,
      });
    };

    initMap();
  }, []);

  return <div ref={mapRef} className="w-[95%] h-[95%]" />;
};

export default GoogleMap;
