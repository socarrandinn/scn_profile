import { useEffect, useRef, useState } from 'react';
import { Grid, TextField, Button, Typography, Box } from '@mui/material';
// @ts-ignore
import { APILoader } from '@googlemaps/extended-component-library/react';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const CONFIGURATION = {
  ctaTitle: 'Checkout',
  mapOptions: {
    center: { lat: 37.4221, lng: -122.0841 },
    zoom: 11,
    mapId: process.env.REACT_APP_GOOGLE_KEY,
  },
  capabilities: {
    addressAutocompleteControl: true,
    mapDisplayControl: true,
    ctaControl: true,
  },
};

const AddressSelection = () => {
  const [formValues, setFormValues] = useState({
    location: '',
    apt: '',
    locality: '',
    administrative_area_level_1: '',
    postal_code: '',
    country: '',
  });

  const autocompleteInputRef = useRef<HTMLInputElement>(null);
  const mapRef = useRef<google.maps.Map | null>(null);
  const markerRef = useRef<google.maps.marker.AdvancedMarkerElement | null>(null);

  useEffect(() => {
    const initMap = async () => {
      if (!autocompleteInputRef.current) return;

      const { Autocomplete } = (await google.maps.importLibrary('places')) as google.maps.PlacesLibrary;

      const autocomplete = new Autocomplete(autocompleteInputRef.current, {
        fields: ['address_components', 'geometry', 'name'],
        types: ['address'],
      });

      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        if (!place.geometry) return;

        const newValues = { ...formValues };
        const addressComponents = place.address_components || [];

        addressComponents.forEach((component) => {
          const type = component.types[0];
          if (type in formValues) {
            newValues[type as keyof typeof formValues] = component.long_name;
          }
        });

        newValues.location = `${place?.name ?? ''}`;
        setFormValues(newValues);

        if (mapRef.current) {
          mapRef.current.setCenter(place?.geometry?.location as any);
          if (markerRef.current) {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            markerRef.current.position = place.geometry.location;
          } else {
            markerRef.current = new google.maps.marker.AdvancedMarkerElement({
              map: mapRef.current,
              position: place.geometry.location,
            });
          }
        }
      });
    };

    if (window.google?.maps?.places) {
      initMap();
    }
  }, [formValues]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <APILoader
      // @ts-ignore
      apiKey={process.env.REACT_APP_GMAPS_API_KEY}
      solutionChannel='GMP_QB_addressselection_v4_cABC'
    >
      <Grid container sx={{ height: '500px', width: '600px' }}>
        <Grid item xs={6} sx={{ p: 2, bgcolor: 'background.paper' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <LocationOnIcon color='primary' sx={{ mr: 1 }} />
            <Typography variant='h6'>Address Selection</Typography>
          </Box>

          <TextField
            fullWidth
            variant='standard'
            placeholder='Address'
            name='location'
            value={formValues.location}
            onChange={handleInputChange}
            inputRef={autocompleteInputRef}
            sx={{ mb: 2 }}
          />

          <TextField
            fullWidth
            variant='standard'
            placeholder='Apt, Suite, etc (optional)'
            name='apt'
            value={formValues.apt}
            onChange={handleInputChange}
            sx={{ mb: 2 }}
          />

          <TextField
            fullWidth
            variant='standard'
            placeholder='City'
            name='locality'
            value={formValues.locality}
            onChange={handleInputChange}
            sx={{ mb: 2 }}
          />

          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <TextField
              variant='standard'
              placeholder='State/Province'
              name='administrative_area_level_1'
              value={formValues.administrative_area_level_1}
              onChange={handleInputChange}
              fullWidth
            />
            <TextField
              variant='standard'
              placeholder='Zip/Postal code'
              name='postal_code'
              value={formValues.postal_code}
              onChange={handleInputChange}
              fullWidth
            />
          </Box>

          <TextField
            fullWidth
            variant='standard'
            placeholder='Country'
            name='country'
            value={formValues.country}
            onChange={handleInputChange}
            sx={{ mb: 2 }}
          />

          <Button variant='contained' fullWidth>
            Checkout
          </Button>
        </Grid>

        <Grid item xs={6}>
          <Box
            id='map'
            ref={(el) => {
              if (el && !mapRef.current) {
                // @ts-ignore
                mapRef.current = new google.maps.Map(el, CONFIGURATION.mapOptions);
              }
            }}
            sx={{ height: '100%', width: '100%' }}
          />
        </Grid>
      </Grid>
    </APILoader>
  );
};

export default AddressSelection;
